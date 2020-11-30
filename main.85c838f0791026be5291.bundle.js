(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1155:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(60),_clientLogger=__webpack_require__(38),_configFilename=__webpack_require__(1156);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1156:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1157:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(384).configure)([__webpack_require__(1158),__webpack_require__(1159)],module,!1)}).call(this,__webpack_require__(107)(module))},1158:function(module,exports,__webpack_require__){var map={"./Overview.stories.mdx":498};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1158},1159:function(module,exports,__webpack_require__){var map={"./Overview.stories.mdx":498,"./Table.stories.mdx":2444};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1159},2438:function(module,exports,__webpack_require__){},2439:function(module,exports,__webpack_require__){},2444:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"rows",(function(){return Table_stories_rows})),__webpack_require__.d(__webpack_exports__,"smallExample",(function(){return smallExample})),__webpack_require__.d(__webpack_exports__,"rowIcon",(function(){return rowIcon})),__webpack_require__.d(__webpack_exports__,"formattingFunction",(function(){return formattingFunction})),__webpack_require__.d(__webpack_exports__,"search",(function(){return search}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(2),blocks=__webpack_require__(55),classCallCheck=__webpack_require__(508),createClass=__webpack_require__(509),inherits=__webpack_require__(510),createSuper=__webpack_require__(511),jsx_runtime=__webpack_require__(16),Column_Column=function Column(_props){return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{})},components_Column=Column_Column;try{Column_Column.displayName="Column",Column_Column.__docgenInfo={description:"",displayName:"Column",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},sortable:{defaultValue:null,description:"",name:"sortable",required:!1,type:{name:"boolean"}},sortingFunction:{defaultValue:null,description:"",name:"sortingFunction",required:!1,type:{name:"((rows: any[]) => any[])"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},formattingFunction:{defaultValue:null,description:"",name:"formattingFunction",required:!1,type:{name:"((value: any, row: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Column.tsx#Column"]={docgenInfo:Column_Column.__docgenInfo,name:"Column",path:"src/components/Column.tsx#Column"})}catch(__react_docgen_typescript_loader_error){}var Table_Table=function(_Component){Object(inherits.a)(Table,_Component);var _super=Object(createSuper.a)(Table);function Table(){var _this;Object(classCallCheck.a)(this,Table);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).minWidth=0,_this.table=react_default.a.createRef(),_this.state={columns:[],selectedRows:[],sorting:void 0,ratios:[],isMobile:!1},_this.getColumns=function(){var columns=[];react_default.a.Children.forEach(_this.props.children,(function(child){if(child&&child.type===components_Column){var columnItem={};for(var propName in child.props)columnItem[propName]=child.props[propName];columns.push(columnItem)}})),_this.setState({columns:columns},_this.calculateColumnSizes)},_this.checkTableWidth=function(){var _this$table$current$o,_this$table$current,_this$props$minWidth;if(!_this.props.disableMobile){var isMobile=(null!==(_this$table$current$o=null===(_this$table$current=_this.table.current)||void 0===_this$table$current?void 0:_this$table$current.offsetWidth)&&void 0!==_this$table$current$o?_this$table$current$o:0)<(null!==(_this$props$minWidth=_this.props.minWidth)&&void 0!==_this$props$minWidth?_this$props$minWidth:_this.minWidth);_this.state.isMobile!==isMobile&&_this.setState({isMobile:isMobile})}},_this.calculateColumnSizes=function(){if(_this.props.rows){var columns=_this.state.columns,rows=_this.props.rows.slice(0,30),sizes=new Array(columns.length).fill(0);rows.forEach((function(row){columns.forEach((function(column,i){sizes[i]+=String(row[column.name]).length}))})),columns.forEach((function(column,i){var _column$label$length,_column$label;sizes[i]+=15*(null!==(_column$label$length=null===(_column$label=column.label)||void 0===_column$label?void 0:_column$label.length)&&void 0!==_column$label$length?_column$label$length:30)}));var total=sizes.reduce((function(a,b){return a+b}),0);_this.props.minWidth||(_this.minWidth=total/(rows.length+15)*15+18*columns.length,_this.checkTableWidth());var ratios=[];sizes.forEach((function(size,i){ratios[i]=Number((size/total*100).toFixed(2))})),_this.setState({ratios:ratios})}},_this.getDesktopGridColumns=function(){var templateString="";return _this.state.ratios.forEach((function(ratio,i){_this.state.columns[i].width?templateString+="".concat(_this.state.columns[i].width," "):templateString+="".concat(ratio,"fr ")})),"single"===_this.props.select&&(templateString="50px "+templateString),"multi"===_this.props.select&&(templateString="50px "+templateString),_this.props.rightIcon&&(templateString+=" 50px"),templateString},_this.getMobileGridColumns=function(){var templateString="1fr ";return"single"===_this.props.select&&(templateString="50px "+templateString),"multi"===_this.props.select&&(templateString="50px "+templateString),_this.props.rightIcon&&(templateString+=" 50px"),templateString},_this.onSelectRow=function(rowNum){var _this$props$onRowClic,_this$props,_this$props$rows;if(_this.props.select&&"none"!==_this.props.select){if("click"===_this.props.select)return null===(_this$props$onRowClic=(_this$props=_this.props).onRowClick)||void 0===_this$props$onRowClic?void 0:_this$props$onRowClic.call(_this$props,rowNum,null===(_this$props$rows=_this.props.rows)||void 0===_this$props$rows?void 0:_this$props$rows[rowNum]);var selectedRows=_this.state.selectedRows,index=selectedRows.indexOf(rowNum);-1===index?selectedRows.push(rowNum):selectedRows.splice(index,1),_this.setState({selectedRows:selectedRows})}},_this.onRowClick=function(e,rowNum){e.target.classList.contains("inner")||_this.onSelectRow(rowNum)},_this.onSelectToggle=function(e){if(_this.props.rows){var selectedRows=[];if(e.target.checked)for(var i=0;i<_this.props.rows.length;i++)selectedRows.push(i);_this.setState({selectedRows:selectedRows})}},_this.rowClassList=function(i,origIndex){var className="row";return className+=i%2==0?" even":" odd","click"===_this.props.select&&(className+=" clickable"),_this.state.selectedRows.includes(origIndex)&&(className+=" selected"),className},_this.sortRows=function(column,direction){var _this$state$sorting;(null===(_this$state$sorting=_this.state.sorting)||void 0===_this$state$sorting?void 0:_this$state$sorting.column)===column&&_this.state.sorting.direction===direction?_this.setState({sorting:void 0}):_this.setState({sorting:{column:column,direction:direction}})},_this.tableClass=function(){var className="onedash-table";return _this.state.isMobile&&(className+=" is-mobile"),className},_this}return Object(createClass.a)(Table,[{key:"componentDidMount",value:function componentDidMount(){window.addEventListener("resize",this.checkTableWidth),this.getColumns(),this.setState({selectedRows:this.props.selectedRows})}},{key:"componentDidUpdate",value:function componentDidUpdate(latestProps){latestProps.children!==this.props.children&&this.getColumns(),latestProps.selectedRows!==this.props.selectedRows&&this.setState({selectedRows:this.props.selectedRows}),latestProps.rows!==this.props.rows&&this.calculateColumnSizes()}},{key:"render",value:function render(){var _this$props$textNoIte,_this$props$textNoIte2,_this$props3,_this$props$textNoRow,_this$props$textNoIte3,_this$props$textNoIte4,_this$props4,_this$props$textNoRow2,_this2=this,_this$state=this.state,columns=_this$state.columns,selectedRows=_this$state.selectedRows,sorting=_this$state.sorting,isMobile=_this$state.isMobile,_this$props2=this.props,resizeable=_this$props2.resizeable,rows=_this$props2.rows,select=_this$props2.select,rightIcon=_this$props2.rightIcon,searchString=_this$props2.searchString,sortedRows=JSON.parse(JSON.stringify(rows)),gridTemplateColumns=isMobile?this.getMobileGridColumns():this.getDesktopGridColumns();return sortedRows.forEach((function(row,i){return row._index=i})),sorting&&(sortedRows=sorting.column.sortingFunction?sorting.column.sortingFunction(sortedRows):sortedRows.sort((function(a,b){var aVal=a[sorting.column.name],bVal=b[sorting.column.name];return"string"==typeof aVal&&"string"==typeof bVal?"up"===sorting.direction?aVal.localeCompare(bVal):bVal.localeCompare(aVal):"number"==typeof aVal&&"number"==typeof bVal?"up"===sorting.direction?aVal-bVal:bVal-aVal:(console.error("You cannot sort this type of data. Allowed is only sorting of strings and numbers"),0)}))),searchString&&searchString.length>0&&(sortedRows=sortedRows.filter((function(x){return Object.keys(x).find((function(propName){var val=x[propName];if("object"!=typeof val||"function"!=typeof val)return-1!==String(val).toLowerCase().indexOf(searchString.toLowerCase())}))}))),Object(jsx_runtime.jsxs)("div",{ref:this.table,className:this.tableClass(),children:[!isMobile&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("div",{className:"table-head",style:{display:"grid",gridTemplateColumns:gridTemplateColumns},children:["multi"===select&&Object(jsx_runtime.jsxs)("label",{className:"multi-select select-container select-toggle-container",children:[Object(jsx_runtime.jsx)("input",{type:"checkbox",onChange:this.onSelectToggle,className:"row-select-toggle"}),Object(jsx_runtime.jsx)("span",{className:"checkmark"})]}),columns.map((function(column){return Object(jsx_runtime.jsxs)("div",{className:"column column-head","data-name":column.name,children:[column.label,column.sortable&&Object(jsx_runtime.jsxs)("div",{className:"sorting-icons",children:[Object(jsx_runtime.jsx)("div",{onClick:function onClick(){return _this2.sortRows(column,"up")},className:(null==sorting?void 0:sorting.column)===column&&"up"===sorting.direction?"selected sort-up":"sort-up",children:Object(jsx_runtime.jsx)("span",{})}),Object(jsx_runtime.jsx)("div",{onClick:function onClick(){return _this2.sortRows(column,"down")},className:(null==sorting?void 0:sorting.column)===column&&"down"===sorting.direction?"selected sort-down":"sort-down",children:Object(jsx_runtime.jsx)("span",{})})]}),resizeable&&Object(jsx_runtime.jsx)("span",{className:"resize-handle"})]},column.name)}))]}),Object(jsx_runtime.jsxs)("div",{className:"table-body",children:[sortedRows.map((function(row,i){return Object(jsx_runtime.jsx)("div",{onClick:function onClick(e){return _this2.onRowClick(e,row._index)},className:_this2.rowClassList(i,row._index),children:Object(jsx_runtime.jsxs)("div",{className:"inner",style:{display:"grid",gridTemplateColumns:gridTemplateColumns},children:["multi"===select&&Object(jsx_runtime.jsxs)("label",{className:"multi-select select-container",children:[Object(jsx_runtime.jsx)("input",{type:"checkbox",onChange:function onChange(){return _this2.onSelectRow(i)},checked:selectedRows.includes(row._index),className:"row-select"}),Object(jsx_runtime.jsx)("span",{className:"checkmark"})]}),columns.map((function(column,ii){return Object(jsx_runtime.jsx)("div",{className:"cell",children:column.formattingFunction?column.formattingFunction(row[column.name],row):row[column.name]},ii)})),Object(jsx_runtime.jsx)("div",{className:"right-icon",children:rightIcon})]})},i)})),0===sortedRows.length&&rows&&rows.length>0&&Object(jsx_runtime.jsx)("div",{className:"no-entry-found info-message",children:null!==(_this$props$textNoIte=null===(_this$props$textNoIte2=(_this$props3=this.props).textNoItemFound)||void 0===_this$props$textNoIte2?void 0:_this$props$textNoIte2.call(_this$props3,null!=searchString?searchString:""))&&void 0!==_this$props$textNoIte?_this$props$textNoIte:'No entry with the value "'.concat(searchString,'" can be found')}),(!rows||0===rows.length)&&Object(jsx_runtime.jsx)("div",{className:"no-rows info-message",children:null!==(_this$props$textNoRow=this.props.textNoRows)&&void 0!==_this$props$textNoRow?_this$props$textNoRow:"Missing data"})]})]}),isMobile&&Object(jsx_runtime.jsxs)("div",{className:"table-body",children:[sortedRows.map((function(row,i){return Object(jsx_runtime.jsx)("div",{onClick:function onClick(e){return _this2.onRowClick(e,row._index)},className:_this2.rowClassList(i,row._index),children:Object(jsx_runtime.jsxs)("div",{className:"inner",style:{display:"grid",gridTemplateColumns:gridTemplateColumns},children:["multi"===select&&Object(jsx_runtime.jsxs)("label",{className:"multi-select select-container",children:[Object(jsx_runtime.jsx)("input",{type:"checkbox",onChange:function onChange(){return _this2.onSelectRow(i)},checked:selectedRows.includes(row._index),className:"row-select"}),Object(jsx_runtime.jsx)("span",{className:"checkmark"})]}),Object(jsx_runtime.jsx)("div",{className:"columns",children:columns.map((function(column,ii){return Object(jsx_runtime.jsxs)("div",{className:"column",children:[Object(jsx_runtime.jsx)("div",{className:"label",children:column.label}),Object(jsx_runtime.jsx)("div",{className:"value",children:column.formattingFunction?column.formattingFunction(row[column.name],row):row[column.name]})]},ii)}))}),Object(jsx_runtime.jsx)("div",{className:"right-icon",children:rightIcon})]})},i)})),rows&&0===sortedRows.length&&rows.length>0&&Object(jsx_runtime.jsx)("div",{className:"no-entry-found info-message",children:null!==(_this$props$textNoIte3=null===(_this$props$textNoIte4=(_this$props4=this.props).textNoItemFound)||void 0===_this$props$textNoIte4?void 0:_this$props$textNoIte4.call(_this$props4,null!=searchString?searchString:""))&&void 0!==_this$props$textNoIte3?_this$props$textNoIte3:'No entry with the value "'.concat(searchString,'" can be found')}),(!rows||0===rows.length)&&Object(jsx_runtime.jsx)("div",{className:"no-rows info-message",children:null!==(_this$props$textNoRow2=this.props.textNoRows)&&void 0!==_this$props$textNoRow2?_this$props$textNoRow2:"Missing data"})]})]})}}]),Table}(react.Component),components_Table=Table_Table;try{Table_Table.displayName="Table",Table_Table.__docgenInfo={description:"",displayName:"Table",props:{rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"{}[]"}},selectedRows:{defaultValue:null,description:"",name:"selectedRows",required:!1,type:{name:"number[]"}},select:{defaultValue:null,description:"",name:"select",required:!1,type:{name:'"single" | "click" | "multi" | "none"'}},resizeable:{defaultValue:null,description:"",name:"resizeable",required:!1,type:{name:"boolean"}},searchable:{defaultValue:null,description:"",name:"searchable",required:!1,type:{name:"boolean"}},onRowSelect:{defaultValue:null,description:"",name:"onRowSelect",required:!1,type:{name:"((selectedRows?: number[], addedRows?: number[] | undefined) => void) | undefined"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"((index?: number, row?: any) => void) | undefined"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"Element"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},disableMobile:{defaultValue:null,description:"",name:"disableMobile",required:!1,type:{name:"boolean"}},searchString:{defaultValue:null,description:"",name:"searchString",required:!1,type:{name:"string"}},textNoItemFound:{defaultValue:null,description:"",name:"textNoItemFound",required:!1,type:{name:"((searchString: string) => string)"}},textNoRows:{defaultValue:null,description:"",name:"textNoRows",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table.tsx#Table"]={docgenInfo:Table_Table.__docgenInfo,name:"Table",path:"src/components/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var faker=__webpack_require__(132),faker_default=__webpack_require__.n(faker);__webpack_require__(2438),__webpack_require__(2439);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const Table_stories_rows=function generateFakeData(numberOfEntries){for(var fakeData=[],i=0;i<numberOfEntries;i++){var entry={firstName:faker_default.a.name.firstName(),lastName:faker_default.a.name.lastName(),address:faker_default.a.address.streetAddress(),age:Math.round(100*Math.random())};fakeData.push(entry)}return fakeData}(20),layoutProps={rows:Table_stories_rows};function MDXContent({components:components,...props}){return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Components/Table",component:components_Table,mdxType:"Meta"}),Object(esm.mdx)("h1",{id:"table"},"Table"),Object(esm.mdx)("h2",{id:"small-example"},"Small Example"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-jsx"}),'<Table select="click" rows={[]} selectedRows={[1, 2]}>\n    <Column name="firstName" label="Vorname" sortable />\n    <Column name="lastName" label="Nachname" />\n    <Column name="age" label="Alter" sortable />\n    <Column name="address" label="Adresse" />\n</Table>\n')),Object(esm.mdx)(blocks.Canvas,{mdxType:"Canvas"},Object(esm.mdx)(blocks.Story,{name:"Small Example",args:{select:"click",rows:Table_stories_rows,selectedRows:[1,2]},mdxType:"Story"},args=>Object(esm.mdx)(components_Table,_extends({},args,{mdxType:"Table"}),Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname",mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"age",label:"Alter",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse",mdxType:"Column"})))),Object(esm.mdx)("h2",{id:"row-icon"},"Row icon"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-jsx"}),'<Table select="click" rows={[]} selectedRows={[1, 2]} rightIcon={<span className="right-chevron"></span>}>\n    <Column name="firstName" label="Vorname" sortable />\n    <Column name="lastName" label="Nachname" />\n    <Column name="age" label="Alter" sortable />\n    <Column name="address" label="Adresse" />\n</Table>\n')),Object(esm.mdx)(blocks.Canvas,{mdxType:"Canvas"},Object(esm.mdx)(blocks.Story,{name:"Row Icon",args:{select:"click",rows:Table_stories_rows,selectedRows:[1,2],rightIcon:Object(esm.mdx)("span",{className:"right-chevron"})},mdxType:"Story"},args=>Object(esm.mdx)(components_Table,_extends({},args,{mdxType:"Table"}),Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname",mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"age",label:"Alter",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse",mdxType:"Column"})))),Object(esm.mdx)("h2",{id:"formatting-function"},"Formatting Function"),Object(esm.mdx)("p",null,"This example multiplies the age of a person by 10."),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-jsx"}),'<Table select="click" rows={[]} selectedRows={[1, 2]} rightIcon={<span className="right-chevron"></span>}>\n    <Column name="firstName" label="Vorname" sortable />\n    <Column name="lastName" label="Nachname" />\n    <Column name="age" formattingFunction={(value) => value * 10} label="Alter" sortable />\n    <Column name="address" label="Adresse" />\n</Table>\n')),Object(esm.mdx)(blocks.Canvas,{mdxType:"Canvas"},Object(esm.mdx)(blocks.Story,{name:"Formatting Function",args:{select:"click",rows:Table_stories_rows,selectedRows:[1,2]},mdxType:"Story"},args=>Object(esm.mdx)(components_Table,_extends({},args,{mdxType:"Table"}),Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname",mdxType:"Column"}),Object(esm.mdx)(components_Column,{formattingFunction:value=>10*value,name:"age",label:"Alter",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse",mdxType:"Column"})))),Object(esm.mdx)("h2",{id:"searchbar"},"Searchbar"),Object(esm.mdx)("pre",null,Object(esm.mdx)("code",_extends({parentName:"pre"},{className:"language-jsx"}),'<Table select="click" rows={[]} selectedRows={[1, 2]} rightIcon={<span className="right-chevron"></span>}>\n    <Column name="firstName" label="Vorname" sortable />\n    <Column name="lastName" label="Nachname" />\n    <Column name="age" label="Alter" sortable />\n    <Column name="address" label="Adresse" />\n</Table>\n')),Object(esm.mdx)(blocks.Canvas,{mdxType:"Canvas"},Object(esm.mdx)(blocks.Story,{name:"Search",args:{select:"click",rows:Table_stories_rows,searchString:"Hello",selectedRows:[1,2]},mdxType:"Story"},args=>Object(esm.mdx)(components_Table,_extends({},args,{mdxType:"Table"}),Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname",mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"age",label:"Alter",sortable:!0,mdxType:"Column"}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse",mdxType:"Column"})))))}MDXContent.isMDXComponent=!0;const smallExample=args=>Object(esm.mdx)(components_Table,args,Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname"}),Object(esm.mdx)(components_Column,{name:"age",label:"Alter",sortable:!0}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse"}));smallExample.storyName="Small Example",smallExample.args={select:"click",rows:Table_stories_rows,selectedRows:[1,2]},smallExample.parameters={storySource:{source:'args => <Table {...args}>\n\t\t\t\t<Column name="firstName" label="Vorname" sortable />\n\t\t\t\t<Column name="lastName" label="Nachname" />\n\t\t\t\t<Column name="age" label="Alter" sortable />\n\t\t\t\t<Column name="address" label="Adresse" />\n\t\t\t</Table>'}};const rowIcon=args=>Object(esm.mdx)(components_Table,args,Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname"}),Object(esm.mdx)(components_Column,{name:"age",label:"Alter",sortable:!0}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse"}));rowIcon.storyName="Row Icon",rowIcon.args={select:"click",rows:Table_stories_rows,selectedRows:[1,2],rightIcon:Object(esm.mdx)("span",{className:"right-chevron"})},rowIcon.parameters={storySource:{source:'args => <Table {...args}>\n\t\t\t\t<Column name="firstName" label="Vorname" sortable />\n\t\t\t\t<Column name="lastName" label="Nachname" />\n\t\t\t\t<Column name="age" label="Alter" sortable />\n\t\t\t\t<Column name="address" label="Adresse" />\n\t\t\t</Table>'}};const formattingFunction=args=>Object(esm.mdx)(components_Table,args,Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname"}),Object(esm.mdx)(components_Column,{formattingFunction:value=>10*value,name:"age",label:"Alter",sortable:!0}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse"}));formattingFunction.storyName="Formatting Function",formattingFunction.args={select:"click",rows:Table_stories_rows,selectedRows:[1,2]},formattingFunction.parameters={storySource:{source:'args => <Table {...args}>\n\t\t\t\t<Column name="firstName" label="Vorname" sortable />\n\t\t\t\t<Column name="lastName" label="Nachname" />\n\t\t\t\t<Column formattingFunction={value => value * 10} name="age" label="Alter" sortable />\n\t\t\t\t<Column name="address" label="Adresse" />\n\t\t\t</Table>'}};const search=args=>Object(esm.mdx)(components_Table,args,Object(esm.mdx)(components_Column,{name:"firstName",label:"Vorname",sortable:!0}),Object(esm.mdx)(components_Column,{name:"lastName",label:"Nachname"}),Object(esm.mdx)(components_Column,{name:"age",label:"Alter",sortable:!0}),Object(esm.mdx)(components_Column,{name:"address",label:"Adresse"}));search.storyName="Search",search.args={select:"click",rows:Table_stories_rows,searchString:"Hello",selectedRows:[1,2]},search.parameters={storySource:{source:'args => <Table {...args}>\n\t\t\t\t<Column name="firstName" label="Vorname" sortable />\n\t\t\t\t<Column name="lastName" label="Nachname" />\n\t\t\t\t<Column name="age" label="Alter" sortable />\n\t\t\t\t<Column name="address" label="Adresse" />\n\t\t\t</Table>'}};const componentMeta={title:"Components/Table",component:components_Table,includeStories:["smallExample","rowIcon","formattingFunction","search"]},mdxStoryNameToKey={"Small Example":"smallExample","Row Icon":"rowIcon","Formatting Function":"formattingFunction",Search:"search"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))};__webpack_exports__.default=componentMeta},498:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Overview/Getting Started",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",_extends({parentName:"p"},{href:"https://www.codacy.com/gh/OneDash-DE/onedash-react-table/dashboard?utm_source=github.com&utm_medium=referral&utm_content=OneDash-DE/onedash-react-table&utm_campaign=Badge_Grade",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",_extends({parentName:"a"},{src:"https://app.codacy.com/project/badge/Grade/8248b4ff9cc84153a6fda1dfbbf10e17",alt:"Codacy Badge"}))),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",_extends({parentName:"p"},{src:"https://img.shields.io/npm/dw/onedash-react-table",alt:"npm"}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"reactjs-table-component"},"React.js table component"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"This guide will help you render table components with React.js.\nIf you're not familiar with setting up a new React web project, please refer to the React documentation."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"install"},"Install"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"In order to install the components run the following:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code",_extends({parentName:"pre"},{className:"language-bash"}),"npm install onedash-react-table\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"usage"},"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,'All the described components can be imported from "onedash-react-table".'),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em",{parentName:"p"},"Example:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code",_extends({parentName:"pre"},{className:"language-javascript"}),'import React, Component from "react";\nimport {Table, Column} from "onedash-react-table";\n\nclass ComponentWithForm extends Component {\n    render() {\n        return (\n            <Table {...args}>\n                <Column name="firstName" label="Vorname" sortable />\n                <Column name="lastName" label="Nachname" />\n                <Column name="age" label="Alter" sortable />\n                <Column name="address" label="Adresse" />\n            </Table>\n        )\n    }\n}\n')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"styling"},"Styling"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Most components come without any style. You can adjust it yourself by CSS. If you like the style in this documentation, you can use our stylesheet from ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",_extends({parentName:"p"},{href:"https://github.com/OneDash-DE/onedash-react-table/blob/master/src/components/stories/table.sass",target:"_blank",rel:"nofollow noopener noreferrer"}),"here"),"."))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Overview/Getting Started",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))},__webpack_exports__.default=componentMeta},514:function(module,exports,__webpack_require__){__webpack_require__(515),__webpack_require__(713),__webpack_require__(714),__webpack_require__(876),__webpack_require__(1094),__webpack_require__(1126),__webpack_require__(1134),__webpack_require__(1146),__webpack_require__(1148),__webpack_require__(1153),__webpack_require__(1155),module.exports=__webpack_require__(1157)},600:function(module,exports){},714:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(384)}},[[514,1,2]]]);
//# sourceMappingURL=main.85c838f0791026be5291.bundle.js.map