require('dotenv').config()
const DataFrame = require('dataframe-js').DataFrame;
const Excel = require("exceljs");
const Cryptr = require('cryptr');
const fs = require("fs");

const jsonDir = './kumu'
const varDir = '/reconciliation'

const names = {
  direction: 'Type', 
  pos: 'Same', 
  neg:'Opposite',
  from: 'From', 
  to: 'To',
  label: 'Label'
}


const show = (data, numRows=20, maxWidth=20, padding=1, title='DataFrame') => {
  const toShow = []
  const dict = data.toDict()
  const isDf = Object.values(dict).every(v => typeof v == 'object')
  const headerArr = Object.keys(dict)
  const bodyArrs = isDf ? data.toCollection().slice(0, numRows).map(x=>Object.values(x)): [Object.values(dict)]
  const colWidths = Object.entries(dict).map((k)=>typeof(k[1]) == 'object' ? Math.max(...k[1].map(x=>String(x).length)) : Math.max(String(k[0]).length, String(k[1]).length))
  const allowedWidths = colWidths.map(x=> x < maxWidth ? x : maxWidth)
  const pad = Array(padding+1).join(' ')
  const makeRow = (arr) => {
    const rowString = '|'+pad+arr.map( (col,i) => {
    return String(col).length > maxWidth ? String(col).substring(0, maxWidth) + "..." : String(col) + Array(allowedWidths[i]-String(col).length+pad.length*4).join(" ")}).join(pad+'|'+pad)+pad+'|'
    return rowString
  }
  const header = makeRow(headerArr)
  const separator = Array(header.length+1).join("-")
  const body = bodyArrs.map(x=>makeRow(x))
  for (const line of [title, header, separator, ...body,'\n']){
    console.log(line);
  }
}
// importFromAESOPTemplate("/Users/l/Desktop/TBC-2-21-inclMP.xlsx")
// variable reconciliation
const dfHK = DataFrame.fromJSON(`${process.env.WD}/${varDir}/dfHK.json` ).then(df => df);
const dfTBC = DataFrame.fromJSON(`${process.env.WD}/${varDir}/dfTBC.json` ).then(df => df);
const dfLitRels = DataFrame.fromJSON(`${process.env.WD}/${varDir}/dfLitRels.json` ).then(df => df);
const dfLitVars = DataFrame.fromJSON(`${process.env.WD}/${varDir}/dfLitVars.json` ).then(df => df);
const dfLitUniques = DataFrame.fromJSON(`${process.env.WD}/${varDir}/dfLitUniques.json` ).then(df => df);
Promise.all([dfHK,dfTBC,dfLitRels,dfLitVars,dfLitUniques]).then(([dfHK,dfTBC,dfLitRels,dfLitVars,dfLitUniques])=>{
  // const uniqueVars = dfLitVars.distinct('Label')
  // const news = dfLitUniques.select('Label')
  // show(uniqueVars.diff(news, 'Label'))

  // 1. merge hk vars into TBC
  // show(dfHK)
  // show(dfTBC)
  show(dfHK.find({'name': 'Ability to help others study remotely'}))
  show(dfHK)
}
)



const cleanObject = (obj, regexStr, replacement) => {
  const regex = new RegExp(regexStr, "gi")
  const result = JSON.parse(JSON.stringify(obj).replace(regex,replacement));
  return result
}
const encrypt = (connectionsArr, colName, envSecret) => {
  const cryptr = new Cryptr(envSecret, {saltLength: 16});
  const uniqueVals = [...new Set(connectionsArr.map(el=>el[colName]))]
  const hashes = uniqueVals.map(x=>cryptr.encrypt(x))
  const hashMap = Object.fromEntries(uniqueVals.map((k, i) => [k, hashes[i]]))
  const result = connectionsArr.map(row => {
      return cleanObject(row, row[colName], hashMap[row[colName]])
  })
  return result
}
const parseRow = (rowVals) => {
  const parsed = rowVals.map((el) =>
    el.richText ? el.richText[0].text : el.result ? el.result : el
  );
  const clean = parsed.map((el) => cleanText(el));
  return clean;
};
const cleanText = (data) => {
  return typeof data == "string" ? data.replace(/\\n$/, "").trim() : data;
};
const readXLSX = async (path) => {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(path);
  const result = {};
  workbook.eachSheet(function (worksheet, sheetId) {
    let arr = [];
    const sheetName = worksheet.name;
    const rowCount = worksheet.rowCount;
    const colCount = worksheet.columnCount;
    const rowRange = Array.from({ length: rowCount }, (_, n) => n + 1);
    let indexCol = worksheet.getColumn(colCount + 1);
    indexCol.values = rowRange;
    worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
      arr.push(parseRow(row.values));
    });
    result[sheetName] = arr;
  });
  return result;
};
const getFrequency = (connectionsArr) => {
  result = structuredClone(connectionsArr)
  result.forEach(row => {
    const linkStr = row[names.direction] == names.pos ? ' ++ ' : row[names.direction] == names.neg ? ' -- ' : ' ?? '
    row['connection'] = row[names.from]+linkStr+row[names.to]
  })
  const uniqueConnections = [...new Set(result.map(el=>el.connection))]
  const frequencies = uniqueConnections.map(x=>result.filter(y=>y['connection']==x).length)
  const frequencyMap = Object.fromEntries(uniqueConnections.map((k, i) => [k, frequencies[i]]))
  result.forEach(row => {
    row['frequency'] = frequencyMap[row['connection']]
  })
  console.log(`${uniqueConnections.length} of ${result.length} connections are unique; highest frequency is ${Math.max(...frequencies)}`);
  return result
}
const lowerCaseProps = (objArr) => {
  return objArr.map(obj => Object.keys(obj).reduce((acc, k) => ({ ...acc, [k.toLowerCase()]: obj[k] }), {}))
}
const makeRow = (arr, header, subheader) => {
  const kv = arr.map((v,i)=>header[i]=='Tags'?[subheader[i],v]:[header[i],v])
  const tagsArr = arr.filter((v, i)=>header[i]=='Tags')
  const tagsPipe = tagsArr.reduce((acc,curr)=>acc ? acc+'|'+curr : curr,'')
  kv.push(['tagsArr',tagsArr])
  kv.push(['tags',tagsPipe])
  return Object.fromEntries(kv.filter((e)=>e));
}
const convert = (data, mergeConnections=true, encryptSubjects=true) => {
  const result = {}
  const analysisRaw = data.Analysis;
  const elementsRaw = data.Elements;
  const analysisSubheader = analysisRaw.shift();
  const analysisHeader = analysisRaw
    .shift()
    .map((e) => (typeof e == "string" ? e.replace(/Tag$/, "Tags") : e))
    .map((e) => (typeof e == "string" ? e.replace(/Types$/, "Type") : e))
  const elementsSubheader = elementsRaw.shift()
  const elementsHeader = elementsRaw.shift()
  for (const header of [analysisHeader,analysisSubheader,elementsHeader,elementsSubheader]){
    header.splice(-1, 1, "index")
  }
  const elements = elementsRaw.map(el=>makeRow(el, elementsHeader,elementsSubheader)).filter(el=>el[names.label]).map(({ tagsArr, ...item }) => item)
  let connections = analysisRaw.map(el=>makeRow(el, analysisHeader,analysisSubheader)).filter(el=>el[names.from]&&el[names.to]&&el[names.direction]).map(({ tagsArr, ...item }) => item)
  if (mergeConnections) {
    connections = getFrequency(connections)
  }
  if (encryptSubjects) {
    connections = encrypt(connections, 'Subject Code', process.env.SUBJECT_SECRET)
  }
  result['elements'] = lowerCaseProps(elements)
  result['connections'] = lowerCaseProps(connections)
  return result
};
const importFromAESOPTemplate = async (path) => {
  const sourceName = path.split('/').slice(-1)[0].split('.')[0].replace(' ','_')
  const timeStamp = new Date().toISOString().split(':').slice(0,-1).join(':')
  const dest = `${jsonDir}/${sourceName}_${timeStamp}.json`
  const data = convert(await readXLSX(path, dest));
  fs.writeFileSync(dest, JSON.stringify(data), 'utf8');
  fs.copyFileSync(dest, `${jsonDir}/latest.json`)
};
// const reconcile = async () => {
//     const dataHK = await readXLSX(`${varDir}/AESOP_RNHK_12art_merge_4oct22.xlsx`)
//     const dataHKcropped =   dataHK.variables.slice(0,689)
//     const dataHKheader = dataHKcropped.shift()
//     const dfHK = new DataFrame(dataHKcropped, dataHKheader)
//     dfHK.toJSON(true,`${varDir}/dfHK.json` )
//     const dataLit = await readXLSX(`${varDir}/Copy of AESOP_12_articles.xlsx`)
//     const dataLitVars =   dataLit.variables.slice(0,404)
//     const dataLitRels =   dataLit.relationships.slice(0,506)
//     const dataLitUniques =   dataLit['Unique variables'].slice(0,280)
//     const dataLitheaderVars = dataLitVars.shift()
//     const dataLitheaderRels = dataLitRels.shift()
//     const dataLitheaderUniques = dataLitUniques.shift()
//     const dfLitVars = new DataFrame(dataLitVars, dataLitheaderVars)
//     const dfLitRels = new DataFrame(dataLitRels, dataLitheaderRels)
//     const dfLitUniques = new DataFrame(dataLitUniques, dataLitheaderUniques)
//     dfLitVars.toJSON(true,`${varDir}/dfLitVars.json` )
//     dfLitRels.toJSON(true,`${varDir}/dfLitRels.json` )
//     dfLitUniques.toJSON(true,`${varDir}/dfLitUniques.json` )
//     const dataTBC = [];
//          fs.createReadStream(`${varDir}/Variables-Export for India 10_10 (1).csv`).pipe(csvParser()).on("data", (data) => {
//          dataTBC.push(data)}).on("end", () => {
//             dfTBC = new DataFrame(dataTBC, Object.keys(dataTBC[0]))
//             dfTBC.toJSON(true,`${varDir}/dfTBC.json` )
//         });
// }


