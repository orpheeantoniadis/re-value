// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./treeAnalysis","./lib/esprima"],function(p,c,e,k){c.parseScript=function(a){a=k.parse("function _() { "+a+"\n}");if(null===a.body||void 0===a.body)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if("BlockStatement"!==a.body[0].body.type)throw Error("Invalid formula content.");var b=e.validateLanguage(a);if(""!==b)throw Error(b);return a};c.scriptCheck=function(a,b,c,
n){var f=[];try{var l=k.parse("function _() { "+a+"\n}",{tolerant:!0,loc:!0}),g=l.errors;if(0<g.length)for(var h=0;h<g.length;h++)f.push({line:g[h].lineNumber,character:g[h].column,reason:g[h].description});var m=e.checkScript(l,b,c,n);for(b=0;b<m.length;b++)f.push(m[b])}catch(d){try{"Unexpected token }"===d.description&&(d.index=("function _() { "+a+"\n}").length-1)?f.push({line:d.lineNumber,character:d.column,reason:"Unexpected end of script"}):f.push({line:d.lineNumber,character:d.column,reason:d.description})}catch(q){}}return f};
c.extractFieldLiterals=function(a,b){void 0===b&&(b=!1);return e.findFieldLiterals(a,b)};c.validateScript=function(a,b,c){void 0===c&&(c="full");return e.validateScript(a,b,c)};c.referencesMember=function(a,b){return e.referencesMember(a,b)};c.referencesFunction=function(a,b){return e.referencesFunction(a,b)}});