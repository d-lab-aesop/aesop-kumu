"use strict";(self.webpackChunkaesop_manual=self.webpackChunkaesop_manual||[]).push([[137],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3,screenshot_dimensions:"1200x600"},i="Setting up your study",s={unversionedId:"managing/setup",id:"managing/setup",title:"Setting up your study",description:"Contextualize your sources",source:"@site/docs/managing/setup.md",sourceDirName:"managing",slug:"/managing/setup",permalink:"/aesop-kumu/managing/setup",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,screenshot_dimensions:"1200x600"},sidebar:"tutorialSidebar",previous:{title:"Starting your database",permalink:"/aesop-kumu/managing/orientation"},next:{title:"Introduction",permalink:"/aesop-kumu/extracting/intro"}},l={},u=[{value:"Contextualize your sources",id:"contextualize-your-sources",level:2},{value:"Describe your subjects",id:"describe-your-subjects",level:2},{value:"Enter your stories",id:"enter-your-stories",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-your-study"},"Setting up your study"),(0,r.kt)("h2",{id:"contextualize-your-sources"},"Contextualize your sources"),(0,r.kt)("p",null,"Enter information about your data sources in the ",(0,r.kt)("strong",{parentName:"p"},"Sources")," table. Create a separate record for each original recording/transcript you have stories for."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New Source",src:a(9563).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,"Depending on your research protocol and data management plan, you may wish to store your source files directly on Airtable as attachments in the ",(0,r.kt)("strong",{parentName:"p"},"recording")," and ",(0,r.kt)("strong",{parentName:"p"},"transcript")," fields. "),(0,r.kt)("p",null,"Alternatively, you might ",(0,r.kt)("a",{parentName:"p",href:"https://support.airtable.com/docs/field-type-overview"},"convert these into text fields")," to hold the file names/file paths they are saved under. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Attachments",src:a(6257).Z,width:"1200",height:"600"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Avoid making major changes to the structure of your database\u2014AESOP relies on certain features of the template database to function. "),(0,r.kt)("p",{parentName:"admonition"},"Adding new fields and changing the type of existing ones is fine, but renaming or deleting existing fields may interfere with other programs in the workflow, and will also make it much more difficult to compare your data with others."),(0,r.kt)("p",{parentName:"admonition"},"If you\u2019re not using a field and want it out of the way, simply ",(0,r.kt)("a",{parentName:"p",href:"https://support.airtable.com/docs/airtable-field-actions#hiding-and-unhiding-fields"},(0,r.kt)("strong",{parentName:"a"},"hide"))," it from your views.")),(0,r.kt)("p",null,"Put any metadata that might help contextualize your data sources in the ",(0,r.kt)("strong",{parentName:"p"},"details")," field. For instance, you might want to write a brief note summarizing the conditions and motivation behind the study, significant recent events, high-level research questions, and any domain-specific background knowledge that someone else looking at your data might not have."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Source Details",src:a(3).Z,width:"1200",height:"600"})),(0,r.kt)("h2",{id:"describe-your-subjects"},"Describe your subjects"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Subjects")," table, create a separate record for each individual person that appears in your stories. "),(0,r.kt)("p",null,"Depending on the nature of your data, you may also want to add records representing other entities: groups of people, organizations, animals, even computer programs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New Subject",src:a(690).Z,width:"1200",height:"600"})),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A good rule of thumb for deciding whether to consider something a ",(0,r.kt)("strong",{parentName:"p"},"subject")," is to ask yourself whether it has ",(0,r.kt)("strong",{parentName:"p"},"agency:")," is it capable of acting in response to events or changes in its environment?"),(0,r.kt)("p",{parentName:"admonition"},"Don\u2019t worry about getting this right on the first try\u2014you will likely find yourself returning to this table to add more records as your analysis progresses and you re-read your stories.")),(0,r.kt)("p",null,"Similar to what you did in the ",(0,r.kt)("strong",{parentName:"p"},"Sources")," table, use the ",(0,r.kt)("strong",{parentName:"p"},"details")," field to help orient someone else to your data by providing contextual metadata. "),(0,r.kt)("p",null,"The structure of this table has been left deliberately loose in the template, as the sort of metadata available on subjects is likely to vary greatly from study to study."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Subject Details",src:a(3407).Z,width:"1200",height:"600"})),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Depending on your study\u2019s needs, you may want to group or subset your insights (e.g. by participant group, age range, geography, etc.) later on. If you anticipate needing to do this, prepare your Subjects table by doing the following:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://support.airtable.com/docs/airtable-field-actions#adding-and-deleting-fields"},(0,r.kt)("strong",{parentName:"a"},"Create separate fields"))," to hold the different data attributes you want to segment by. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your dataset contains more than one subject type (i.e. not just individual people), it\u2019s completely fine if not every metadata field applies to every single subject. "))),(0,r.kt)("li",{parentName:"ol"},"Place any miscellaneous/unstructured context that would otherwise go under ",(0,r.kt)("strong",{parentName:"li"},"details")," in a new text field and name it something like \u201cmisc_details\u201d"),(0,r.kt)("li",{parentName:"ol"},"Convert ",(0,r.kt)("strong",{parentName:"li"},"details")," into a ",(0,r.kt)("a",{parentName:"li",href:"https://support.airtable.com/docs/en/field-type-overview#field-configuration-menu"},(0,r.kt)("strong",{parentName:"a"},"formula field"))," that ",(0,r.kt)("a",{parentName:"li",href:"https://support.airtable.com/docs/en/joining-field-values#alternative-to-concatenate"},(0,r.kt)("strong",{parentName:"a"},"joins"))," the metadata in your broken-out fields together into an easy-to-read block of text. We suggest following a format such as: ",(0,r.kt)("inlineCode",{parentName:"li"},'"Location: "&{location}&"\\n"&"Profession: "{profession}...'),", using ",(0,r.kt)("inlineCode",{parentName:"li"},'"\\n"')," for line breaks."))),(0,r.kt)("h2",{id:"enter-your-stories"},"Enter your stories"),(0,r.kt)("p",null,"You are now ready to start adding your edited stories to the Stories table."),(0,r.kt)("admonition",{title:"TIP ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Records in the Stories table are identified by a string of characters beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"rec"),". These automatically-generated record IDs are what Airtable uses to refer to all records behind the scenes. While the Sources and Subjects tables use names for simplicity, the Stories tables uses record IDs as the primary identifier to save the trouble of having to individually name stories.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Story UID",src:a(4933).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Link Source",src:a(1477).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Choose Source",src:a(3863).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Source Context",src:a(8639).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Source Linked",src:a(1711).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Subject Context",src:a(868).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,"Paste your edited stories/scenes as separate records in the ",(0,r.kt)("strong",{parentName:"p"},"Stories")," table."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Paste Story Text",src:a(5725).Z,width:"1200",height:"600"})),(0,r.kt)("p",null,"Clicking on a cell in the ",(0,r.kt)("strong",{parentName:"p"},"source")," or ",(0,r.kt)("strong",{parentName:"p"},"subject")," fields of this table brings up a menu containing all the records of that type you previously entered. ",(0,r.kt)("strong",{parentName:"p"},"Link")," each story to the source in which it appears by selecting the appropriate record. As soon as you've linked at least one source record, the metadata in that source's ",(0,r.kt)("strong",{parentName:"p"},"details")," field will appear in the story record's ",(0,r.kt)("strong",{parentName:"p"},"source_context")," field. These records are now linked\u2014any updates to the source will be instantly reflected in the story. You can make changes either by going back to the ",(0,r.kt)("strong",{parentName:"p"},"Sources")," table, or directly from the ",(0,r.kt)("strong",{parentName:"p"},"Stories")," table by clicking on a linked source record."),(0,r.kt)("p",null,"Follow the same procedure to link each ",(0,r.kt)("strong",{parentName:"p"},"story")," to the ",(0,r.kt)("strong",{parentName:"p"},"subjects"),' that appear in it (you can select more than one). The "subject_context" field will be automatically populated with the corresponding subjects\' metadata.'),(0,r.kt)("p",null,"Congratulations, you're now ready to start finding patterns in your stories!"),(0,r.kt)("admonition",{title:"Takeaway",type:"tip"}))}d.isMDXComponent=!0},6257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/attachments-928ab5d26d8bdf987b3e6e7e647abffa.png"},3863:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choosesource-cd744654c36ef54515aa8c8e8029ff4b.png"},1477:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linksource-c1f244306b311217db3b217010cc6df2.png"},9563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/newsource-f454b255806687cad026fc0cf0cf21de.png"},690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/newsubject-bd9404eda8a4738ff907e5c0a461e338.png"},5725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pastetext-591f3c444524fe5c4b15d99370b9789c.png"},8639:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sourcecontext-92e3148d683ceb26dd10235407c6fbf1.png"},3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sourcedetails-5dab58a3deed35c5e315b55f45f739dd.png"},1711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sourcelinked-e1988af37e0d9aedae51ae3ac8686de3.png"},4933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storyuid-ba7676b9302fb4a8921e4672c89987c2.png"},868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subjectcontext-ee66744519655d9f3360b1eefb53a1b5.png"},3407:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subjectdetails-54a48e30e553978321aa2b5039407d9a.png"}}]);