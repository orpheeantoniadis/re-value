// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("../core/declare ../core/lang ../core/kebabDictionary ../core/Error dojo/_base/array dojo/_base/lang ../symbols/support/jsonUtils ./Renderer ./support/arcadeUtils".split(" "),function(q,e,k,h,r,l,f,t,g){var m=k({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),n=k({esriClassifyNaturalBreaks:"natural-breaks",esriClassifyEqualInterval:"equal-interval",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyGeometricalInterval:"geometrical-interval"}),
p=q(t,{declaredClass:"esri.renderers.ClassBreaksRenderer",properties:{backgroundFillSymbol:{value:null,json:{read:f.read,write:function(a,c,d,b){if(a=f.write(a,{},b))c.backgroundFillSymbol=a}}},classBreakInfos:{set:function(a){this._symbols={};a&&a.forEach(this._processCBInfo,this);this._set("classBreakInfos",a)},json:{read:{source:["classBreakInfos","minValue"],reader:function(a,c,d){var b=c.minValue;if(a&&Array.isArray(a)){var u=a[0]&&null!=a[0].classMaxValue;return a.map(function(a){a=e.clone(a);
if(u){var g=a.classMaxValue;a.minValue=b;b=a.maxValue=g}a.symbol=f.read(a.symbol,c,d);return a})}return a}},write:function(a,c,d,b){a=this.classBreakInfos||[];d=a[0]&&a[0].minValue;c.minValue=-Infinity===d?-Number.MAX_VALUE:d;c.classBreakInfos=r.map(a,function(a){a=e.clone(a);a.symbol&&(a.symbol=f.write(a.symbol,{},b));a.classMaxValue=Infinity===a.maxValue?Number.MAX_VALUE:a.maxValue;delete a.minValue;delete a.maxValue;return e.fixJson(a)})}}},classificationMethod:{value:null,json:{read:n.fromJSON,
write:function(a,c){if(a=n.toJSON(a))c.classificationMethod=a}}},defaultLabel:{value:null,json:{write:!0}},defaultSymbol:{value:null,json:{read:f.read,write:function(a,c,d,b){if(a=f.write(a,{},b))c.defaultSymbol=a}}},valueExpression:{value:null,json:{write:function(a,c,d,b){b&&"web-scene"===b.origin?a&&b.messages&&b.messages.push(new h("property:unsupported",this.declaredClass+".valueExpression is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:"valueExpression",
context:b})):c.valueExpression=a}}},valueExpressionTitle:{value:null,json:{write:function(a,c,d,b){b&&"web-scene"===b.origin?a&&b.messages&&b.messages.push(new h("property:unsupported",this.declaredClass+".valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:"valueExpressionTitle",context:b})):c.valueExpressionTitle=a}}},compiledFunc:{dependsOn:["valueExpression"],get:function(){return g.createFunction(this.valueExpression)}},
legendOptions:{value:null,json:{read:function(a){return e.clone(a)},write:function(a,c,d,b){b&&"web-scene"===b.origin?a&&b.messages&&b.messages.push(new h("property:unsupported",this.declaredClass+".legendOptions is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:"legendOptions",context:b})):c.legendOptions=e.clone(a)}}},field:{value:null,json:{write:!0}},isMaxInclusive:!0,normalizationField:{value:null,json:{write:!0}},normalizationTotal:{value:null,
json:{write:!0}},normalizationType:{value:null,dependsOn:["normalizationField","normalizationTotal"],get:function(){var a=this._get("normalizationType"),c=!!this.normalizationField,d=null!=this.normalizationTotal;if(c||d)a=c&&"field"||d&&"percent-of-total",c&&d&&console.warn("warning: both normalizationField and normalizationTotal are set!");else if("field"===a||"percent-of-total"===a)a=null;return a},json:{read:m.fromJSON,write:function(a,c){if(a=m.toJSON(a))c.normalizationType=a}}},requiredFields:{dependsOn:["field",
"normalizationField"]},type:"classBreaks"},constructor:function(){this._symbols={};this.classBreakInfos=[]},addClassBreakInfo:function(a,c,d){a=l.isObject(a)?a:{minValue:a,maxValue:c,symbol:d};this.classBreakInfos.push(a);this._processCBInfo(a)},removeClassBreakInfo:function(a,c){var d,b,e=this.classBreakInfos.length,f=this._symbols;for(b=0;b<e;b++)if(d=[this.classBreakInfos[b].minValue,this.classBreakInfos[b].maxValue],d[0]==a&&d[1]==c){delete f[a+"-"+c];this.classBreakInfos.splice(b,1);break}},
getBreakIndex:function(a,c){var d=this.field,b=a.attributes,e=this.classBreakInfos.length,f=this.isMaxInclusive;if(this.valueExpression)a=g.executeFunction(this.compiledFunc,g.createExecContext(a,g.getView(c)));else if(l.isFunction(d))a=d(a);else if(a=parseFloat(b[d]),c=this.normalizationType)if(d=parseFloat(this.normalizationTotal),b=parseFloat(b[this.normalizationField]),"log"===c)a=Math.log(a)*Math.LOG10E;else if("percent-of-total"===c&&!isNaN(d))a=a/d*100;else if("field"===c&&!isNaN(b)){if(isNaN(a)||
isNaN(b))return-1;a/=b}if(null!=a&&!isNaN(a)&&"number"===typeof a)for(b=0;b<e;b++)if(c=[this.classBreakInfos[b].minValue,this.classBreakInfos[b].maxValue],c[0]<=a&&(f?a<=c[1]:a<c[1]))return b;return-1},getClassBreakInfo:function(a,c){a=this.getBreakIndex(a,c);return-1!==a?this.classBreakInfos[a]:null},getSymbol:function(a,c){a=this.getBreakIndex(a,c);return(a=-1<a&&[this.classBreakInfos[a].minValue,this.classBreakInfos[a].maxValue])?this._symbols[a[0]+"-"+a[1]]:this.defaultSymbol},clone:function(){return new p({field:this.field,
backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),classificationMethod:this.classificationMethod,defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:e.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,
visualVariables:e.clone(this.visualVariables),legendOptions:e.clone(this.legendOptions),authoringInfo:e.clone(this.authoringInfo)})},collectRequiredFields:function(a){this.inherited(arguments);[this.field,this.normalizationField].forEach(function(c){c&&(a[c]=!0)})},_processCBInfo:function(a){var c=a.minValue,d=a.maxValue,b=a.symbol;b&&!b.declaredClass&&(a.symbol=f.fromJSON(b));this._symbols[c+"-"+d]=a.symbol}});return p});