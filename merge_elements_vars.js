const dj = require("danfojs-node")
const run = async () => {
    let dfW = await dj.readCSV("/Users/l/Development/dlab-kumu/dlab-kumu/elementsWHP.csv",{header:false})
    dfW = dfW.addColumn('xRow', dfW.index.map(x=>x+1)).drop({ index: [0,1]}).rename({'0':'old_name'}).iloc({columns:[0,6]})
    dfW = dfW.addColumn('old_name_lower', dfW['old_name'].str.toLowerCase())
    dfW['old_name_lower'] =  dfW['old_name_lower'].str.trim()
    dfW['old_name'] =  dfW['old_name'].str.trim()


    // dfW.head().print()

    let dfL = await dj.readCSV("/Users/l/Development/dlab-kumu/dlab-kumu/Elements-Active.csv")
    // dfL.head().print()
    dfL.columns[0] = 'name'
    dfL = dfL.addColumn('old_name_lower', dfL['old_name'].str.toLowerCase())
    dfL['old_name_lower'] =  dfL['old_name_lower'].str.trim()
    dfL['old_name'] = dfL['old_name'].str.trim()


    let dfM = await dj.readExcel("/Users/l/Development/dlab-kumu/dlab-kumu/TBC_CC_Master Transcript Data_V2 - MP_feb28.xlsx")
    let var1 = dfM['VARIABLE 1'].values
    let var2 = dfM['VARIABLE 2'].values
    let newVars = [...new Set([...var1, ...var2])]
    console.log(newVars);
    console.log(dfM.shape);


    // dfW = dfW.addColumn('xRow', dfW.index.map(x=>x+1)).drop({ index: [0,1]}).rename({'0':'old_name'}).iloc({columns:[0,6]})
    // dfW = dfW.addColumn('old_name_lower', dfW['old_name'].str.toLowerCase())
    // dfW['old_name_lower'] =  dfW['old_name_lower'].str.trim()
    // dfW['old_name'] =  dfW['old_name'].str.trim()


    // merge_df = dj.merge({ "left": dfW, "right": dfL, "on": ["old_name_lower"], how: "outer"}).fillNa('')
    // console.log(merge_df.shape)
    // // const blankOlds = merge_df.iloc({rows:merge_df['old_name'].eq('')}).index
    // // merge_df.iloc({rows:blankOlds})['old_name'] = merge_df.iloc({rows:blankOlds})['old_name_1']
    // // console.log(merge_df.columns)
    // dj.toExcel(merge_df, { filePath: "merged_elements.xlsx"});
    // // merge_df.iloc({rows:blankOlds})['old_name'].
    // merge_df.print()

    
    // dfL.query(dfL['name'].eq('capacity to be hosted virtually | event'))['old_name_lower'].print()
    // dfW.query(dfW['old_name'].eq(''))

 }
run()