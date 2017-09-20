// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports dojo/i18n!../../nls/smartMapping dojo/_base/lang ../../../core/lang ../statistics/summaryStatistics ../symbology/color ../../../core/numberUtils ../../support/utils ../../ClassBreaksRenderer ../../../core/promiseUtils ../../../views/SceneView ./support/utils ../support/utils".split(" "),function(H,q,z,m,A,B,p,C,r,D,e,v,c,g){function E(b){if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))return e.reject(c.createError("color-visual-variable:missing-parameters",
"'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var a=m.mixin({},b);a.basemap=c.getBasemapId(a.basemap);a.layer=g.createLayerAdapter(a.layer);return a.layer?!a.worldScale||a.view instanceof v?a.layer.load().then(function(){var d=a.layer.geometryType;if(a.worldScale&&"point"!==d&&"multipoint"!==d)return e.reject(c.createError("color-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers"));d=g.getFieldsList({field:a.field,
normalizationField:a.normalizationField,valueExpression:a.valueExpression});return(d=c.verifyBasicFieldValidity(a.layer,d,"color-visual-variable:invalid-parameters"))?e.reject(d):a}):e.reject(c.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true")):e.reject(c.createError("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+w))}function F(b){if(!(b&&b.layer&&(b.field||b.valueExpression||
b.sqlExpression)))return e.reject(c.createError("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var a=m.mixin({},b);a.basemap=c.getBasemapId(a.basemap);a.symbolType=a.symbolType||"2d";a.layer=g.createLayerAdapter(a.layer);return a.layer?"3d-volumetric"!==a.symbolType||a.view instanceof v?a.layer.load().then(function(){var d=a.layer.geometryType;if(-1<a.symbolType.indexOf("3d")&&"point"!==d&&"multipoint"!==d)return e.reject(c.createError("color-continuous-renderer:not-supported",
"3d symbols are not supported for polyline and polygon layers"));d=g.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});return(d=c.verifyBasicFieldValidity(a.layer,d,"color-continuous-renderer:invalid-parameters"))?e.reject(d):a}):e.reject(c.createError("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric'")):e.reject(c.createError("color-continuous-renderer:invalid-parameters",
"'layer' must be one of these types: "+w))}function G(b){b=m.mixin({},b);var a="3d-volumetric"===b.symbolType;delete b.symbolType;delete b.defaultSymbolEnabled;b.worldScale=a;return b}function x(b){return E(b).then(function(a){var d=a.normalizationField,b=d?"field":void 0;return(a.statistics?e.resolve(a.statistics):B({layer:a.layer,field:a.field,valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:b,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue})).then(function(b){var h=
a.layer,n=a.field,k=n&&"function"!==typeof n?h.getField(n):null,k=k&&"date"===k.type,h=h.geometryType,f=a.colorScheme;f=f?p.cloneScheme(f):(h=p.getSchemes({theme:a.theme||"high-to-low",basemap:a.basemap,geometryType:h,worldScale:a.worldScale,view:a.view}))&&h.primaryScheme;if(h=f){var g=c.createColors(h.colors,5);if(5>g.length)b=e.reject(c.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors"));else{var f=c.getDefaultDataRange(b,k,!0),l=-1<h.id.indexOf("seq-");
if(f){for(var l=f[0],m=f[1],q=(m-l)/4,t=[l],u=1;3>=u;u++)t.push(l+u*q);t.push(m);l=C.round(t,{strictBounds:!0})}else l=c.createStopValues(b,l);g=c.createColors(g,5);n={type:"color",field:n,valueExpression:a.valueExpression,normalizationField:d,stops:r.createColorStops({values:l,isDate:k,dateFormatOptions:k?r.timelineDateFormatOptions:null,colors:g,labelIndexes:[0,2,4]}),legendOptions:a.legendOptions};b=e.resolve({basemapId:a.basemap,visualVariable:n,statistics:b,defaultValuesUsed:!!f,colorScheme:p.cloneScheme(h),
authoringInfo:{visualVariables:[{type:"color",minSliderValue:b.min,maxSliderValue:b.max,theme:h.theme}]}})}}else b=e.reject(c.createError("color-visual-variable:insufficient-info","Unable to find color scheme"));return b})})}var y=Math.pow(2,53)-1,w=g.supportedLayerTypes.join(", ");q.createVisualVariable=x;q.createContinuousRenderer=function(b){return F(b).then(function(a){return x(G(a)).then(function(b){var d=a.normalizationField,e=d?"field":void 0,h=a.field,g=a.layer.geometryType,k=null==a.defaultSymbolEnabled?
!0:a.defaultSymbolEnabled,f=p.cloneScheme(b.colorScheme);return{renderer:new D({classBreakInfos:[{minValue:-y,maxValue:y,symbol:c.createSymbol(f,f.noDataColor,g,a.symbolType)}],defaultLabel:k?z.other:null,defaultSymbol:k?c.createSymbol(f,f.noDataColor,g,a.symbolType):null,field:h,normalizationType:e,normalizationField:d,valueExpression:a.valueExpression,visualVariables:[r.cloneColorVariable(b.visualVariable)],authoringInfo:A.clone(b.authoringInfo)}),visualVariable:r.cloneColorVariable(b.visualVariable),
statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,colorScheme:p.cloneScheme(b.colorScheme),basemapId:b.basemapId}})})}});