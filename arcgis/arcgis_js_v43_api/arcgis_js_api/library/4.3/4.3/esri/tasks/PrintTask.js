// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("../core/kebabDictionary ../core/urlUtils ../geometry/Polygon ../geometry/support/scaleUtils dojo/_base/lang dojo/dom-construct dojox/gfx/canvas ./Geoprocessor ./support/PrintTemplate ./support/printTaskUtils ./Task".split(" "),function(t,x,y,z,l,A,u,B,C,n,D){function p(a){return!(!a||!a.path)}var v={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},w=t({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),E=t({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape",
"A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"});return D.createSubclass({declaredClass:"esri.tasks.PrintTask",constructor:function(){this._handleExecuteResponse=this._handleExecuteResponse.bind(this)},_legendLayers:[],_legendLayerNameMap:{},properties:{_geoprocessor:{dependsOn:["url",
"updateDelay"],get:function(){return new B(this.url,{updateDelay:this.updateDelay})}},mode:{value:"sync"},url:{value:null,type:String},updateDelay:{value:1E3,type:Number}},execute:function(a,b){a=this._setPrintParams(a);return this._geoprocessor["async"===this.mode?"submitJob":"execute"](a,b).then(this._handleExecuteResponse)},_createOperationalLayers:function(a,b){b=[];var d,c,g,e,m=a.map.allLayers.items,h=/^https?:\/\/basemaps(dev)?\.arcgis\.com(\/b2)?\/arcgis\/rest\/services\/World_Basemap\/VectorTileServer/i;
for(d=0;d<m.length;d++)if(c=m[d],c.loaded&&c.visible)switch(e={id:c.id,title:this._legendLayerNameMap[c.id]||c.title,opacity:c.opacity,minScale:c.minScale||0,maxScale:c.maxScale||0,url:c.url&&x.normalize(c.url),token:c.token},g=c.declaredClass,g){case "esri.layers.ImageryLayer":g={bandIds:c.bandIds,compressionQuality:c.compressionQuality,format:c.format,interpolation:c.interpolation};c.mosaicRule&&(g.mosaicRule=c.mosaicRule.toJSON());c.renderingRule&&(g.renderingRule=c.renderingRule.toJSON());b.push(l.mixin(e,
g));this._legendLayers&&this._legendLayers.push({id:c.id});break;case "esri.layers.OpenStreetMapLayer":l.mixin(e,{type:"OpenStreetMap"});b.push(e);break;case "esri.layers.GraphicsLayer":l.mixin(e,this._createFeatureCollectionJSON(c));b.push(e);this._legendLayers&&this._legendLayers.push({id:c.id});break;case "esri.layers.VectorTileLayer":case "esri.layers.mixins.ScaleRangeLayer":h.test(c.serviceUrl)&&(e.url="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",b.push(e));
break;case "esri.layers.MapImageLayer":var f={id:c.id,subLayerIds:[]},q=[],k=a.scale,n=function(a){var b=0===k,c=0===a.minScale||k<=a.minScale,d=0===a.maxScale||k>=a.maxScale;a.visible&&(b||c&&d)&&(a.sublayers?a.sublayers.forEach(n):(q.unshift(a.toJSON({})),f.subLayerIds.push(a.id)))};c.sublayers&&c.sublayers.forEach(n);l.mixin(e,{layers:q});b.push(e);this._legendLayers.push(f);break;case "esri.layers.WebTileLayer":g=c.urlTemplate.replace(/\$\{/g,"{");l.mixin(e,{type:"WebTiledLayer",urlTemplate:g,
credits:c.copyright});c.subDomains&&0<c.subDomains.length&&(e.subDomains=c.subDomains);b.push(e);break;case "esri.layers.FeatureLayer":case "esri.layers.CSVLayer":case "esri.layers.StreamLayer":var r;a.whenLayerView(c).then(function(a){return a.queryGraphics&&a.queryGraphics()||a.featuresView.graphics}).then(function(a){r=a.map(function(a){a.geometry.hasZ=!1;return a})});l.mixin(e,this._createFeatureCollectionJSON(c,r));b.push(e);this._legendLayers&&this._legendLayers.push({id:c.id});break;default:b.push(e)}return b},
_createFeatureCollectionJSON:function(a,b){var d=n.createPolygonLayer(),c=n.createPolylineLayer(),g=n.createPointLayer(),e=n.createMultipointLayer(),m=n.createPointLayer();m.layerDefinition.name="textLayer";delete m.layerDefinition.drawingInfo;"esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass?d.layerDefinition.name=c.layerDefinition.name=g.layerDefinition.name=e.layerDefinition.name=this._legendLayerNameMap[a.id]||a.get("arcgisProps.title")||a.title:"esri.layers.GraphicsLayer"===
a.declaredClass&&(b=a.graphics.items);if(a.renderer&&!l.isFunction(a.get("renderer.attributeField"))){var h=a.renderer.toJSON();d.layerDefinition.drawingInfo.renderer=h;c.layerDefinition.drawingInfo.renderer=h;g.layerDefinition.drawingInfo.renderer=h;e.layerDefinition.drawingInfo.renderer=h}else delete d.layerDefinition.drawingInfo,delete c.layerDefinition.drawingInfo,delete g.layerDefinition.drawingInfo,delete e.layerDefinition.drawingInfo;h=a.fields;!a.renderer||h||l.isFunction(a.get("renderer.attributeField"))||
("classBreaks"===a.renderer.type?(h=[{name:a.renderer.attributeField,type:"esriFieldTypeDouble"}],a.renderer.normalizationField&&h.push({name:a.renderer.normalizationField,type:"esriFieldTypeDouble"})):"uniqueValue"===a.renderer.type&&(h=[{name:a.renderer.attributeField,type:"esriFieldTypeString"}],a.renderer.attributeField2&&h.push({name:a.renderer.attributeField2,type:"esriFieldTypeString"}),a.renderer.attributeField3&&h.push({name:a.renderer.attributeField3,type:"esriFieldTypeString"})));h&&(d.layerDefinition.fields=
h,c.layerDefinition.fields=h,g.layerDefinition.fields=h,e.layerDefinition.fields=h);for(var h=b&&b.length,f,q=0;q<h;q++){var k=b[q]||b.getItemAt(q);if(!1!==k.visible&&k.geometry&&(f=k.toJSON(),f.geometry&&f.geometry.z&&delete f.geometry.z,!f.symbol||!f.symbol.outline||"esriCLS"!==f.symbol.outline.type)){f.symbol&&f.symbol.outline&&f.symbol.outline.color&&f.symbol.outline.color[3]&&(f.symbol.outline.color[3]=255);if(a.renderer&&!f.symbol&&(l.isFunction(a.renderer.attributeField)||a.renderer.hasVisualVariables())){var p=
a.renderer,r=p.getSymbol(k);if(!r)continue;f.symbol=r.toJSON();p.hasVisualVariables()&&n.applyVisualVariables(f.symbol,{renderer:p,graphic:k,symbol:r})}f.symbol&&(f.symbol.path?f.symbol=this._convertSvgToPictureMarkerSymbolJson(f.symbol):f.symbol.text&&delete f.attributes);"polygon"===k.geometry.type?d.featureSet.features.push(f):"polyline"===k.geometry.type?c.featureSet.features.push(f):"point"===k.geometry.type?f.symbol&&f.symbol.text?m.featureSet.features.push(f):g.featureSet.features.push(f):
"multipoint"===k.geometry.type?e.featureSet.features.push(f):"extent"===k.geometry.type&&(f.geometry=y.fromExtent(k.geometry).toJSON(),d.featureSet.features.push(f))}}b=[d,c,e,g,m].filter(function(a){return 0<a.featureSet.features.length});b.forEach(function(a){a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&this._convertSvgRenderer(a.layerDefinition.drawingInfo.renderer)},this);return{id:a.id,opacity:a.opacity,minScale:a.minScale||0,maxScale:a.maxScale||0,featureCollection:{layers:b}}},
_convertSvgToPictureMarkerSymbolJson:function(a){this._canvasParent||(this._canvasParent=A.create("div"),this._canvasSurface=u.createSurface(this._canvasParent,200,200));var b=this._canvasSurface.createObject(u.Path,a.path).setFill(a.color).setStroke(a.outline);"pendingRender"in this._canvasSurface&&this._canvasSurface._render(!0);var d=this._canvasSurface.rawNode.getContext("2d"),b=b.getBoundingBox(),c=Math.ceil(b.width+b.x),g=Math.ceil(b.height+b.y),e=d.getImageData(b.x,b.y,c,g);d.canvas.width=
c;d.canvas.height=g;d.putImageData(e,0,0);return{type:"esriPMS",imageData:d.canvas.toDataURL("image/png").substr(22),angle:-a.angle,contentType:"image/png",height:a.size?a.size:g-b.y,width:a.size?a.size:c-b.x,xoffset:a.xoffset,yoffset:a.yoffset}},_convertSvgRenderer:function(a){var b=a.type;if("simple"===b&&p(a.symbol))a.symbol=this._convertSvgToPictureMarkerSymbolJson(a.symbol);else if("uniqueValue"===b||"classBreaks"===b)b=a["uniqueValue"===b?"uniqueValueInfos":"classBreakInfos"],p(a.defaultSymbol)&&
(a.defaultSymbol=this._convertSvgToPictureMarkerSymbolJson(a.defaultSymbol)),b&&b.forEach(function(a){p(a)&&(a.symbol=this._convertSvgToPictureMarkerSymbolJson(a.symbol))},this)},_getPrintDefinition:function(a,b){var d=a.view,c=a.extent||d.extent;a=d.map;var g=d.spatialReference;g&&g.isWrappable&&(c=c.clone()._normalize(!0),g=c.spatialReference);d={mapOptions:{showAttribution:b.attributionVisible,extent:c&&c.toJSON(),spatialReference:g&&g.toJSON()},operationalLayers:this._createOperationalLayers(d,
b)};b.preserveScale&&(d.mapOptions.scale=b.outScale||z.getScale(a));a.timeExtent&&(d.mapOptions.time=[a.timeExtent.startTime.getTime(),a.timeExtent.endTime.getTime()]);return d},_handleExecuteResponse:function(a){return"sync"===this.mode?a.results&&a.results[0]&&a.results[0].value:this._geoprocessor.getResultData(a.jobId,"Output_File").then(function(a){return a.value})},_setPrintParams:function(a){var b=a.template||new C;null==b.showLabels&&(b.showLabels=!0);var d=b.exportOptions,c;d&&(c={outputSize:[d.width,
d.height],dpi:d.dpi});var d=b.layoutOptions,g;if(d){var e,m;if("Miles"===d.scalebarUnit||"Kilometers"===d.scalebarUnit)e="Kilometers",m="Miles";else if("Meters"===d.scalebarUnit||"Feet"===d.scalebarUnit)e="Meters",m="Feet";g={titleText:d.titleText,authorText:d.authorText,copyrightText:d.copyrightText,customTextElements:d.customTextElements,scaleBarOptions:{metricUnit:w.toJSON(e),metricLabel:v[e],nonMetricUnit:w.toJSON(m),nonMetricLabel:v[m]}}}e=null;d&&d.legendLayers&&(e=d.legendLayers.map(function(a){this._legendLayerNameMap[a.layerId]=
a.title;var b={id:a.layerId};a.subLayerIds&&(b.subLayerIds=a.subLayerIds);return b},this));d=this._getPrintDefinition(a,b);a.outSpatialReference&&(d.mapOptions.spatialReference=a.outSpatialReference.toJSON());l.mixin(d,{exportOptions:c,layoutOptions:g});l.mixin(d.layoutOptions,{legendOptions:{operationalLayers:null!=e?e:this._legendLayers}});b={Web_Map_as_JSON:JSON.stringify(d),Format:b.format,Layout_Template:E.toJSON(b.layout)};a.extraParameters&&l.mixin(b,a.extraParameters);return b}})});