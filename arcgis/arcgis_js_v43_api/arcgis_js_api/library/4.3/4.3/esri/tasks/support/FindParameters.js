// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["dojo/_base/array","../../core/Accessor","../../layers/support/layerUtils"],function(e,h,k){return h.createSubclass({declaredClass:"esri.tasks.support.FindParameters",properties:{contains:!0,dynamicLayerInfos:null,layerDefinitions:null,layerIds:null,geometryPrecision:null,maxAllowableOffset:null,outSpatialReference:null,returnGeometry:!1,searchFields:null,searchText:null},toJSON:function(){var a={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,
geometryPrecision:this.geometryPrecision},b=this.layerIds,f=this.searchFields,c=this.outSpatialReference;b&&(a.layers=b.join(","));f&&(a.searchFields=f.join(","));c&&(a.sr=c.wkid||JSON.stringify(c.toJSON()));a.layerDefs=k._serializeLayerDefinitions(this.layerDefinitions);if(this.dynamicLayerInfos&&0<this.dynamicLayerInfos.length){var g=[];e.forEach(this.dynamicLayerInfos,function(a){if(!a.subLayerIds){var b=a.id;if(this.layerIds&&-1!==e.indexOf(this.layerIds,b)){var c={id:b};c.source=a.source&&a.source.toJSON();
var d;this.layerDefinitions&&this.layerDefinitions[b]&&(d=this.layerDefinitions[b]);d&&(c.definitionExpression=d);g.push(c)}}},this);b=JSON.stringify(g);"[]"===b&&(b="[{}]");a.dynamicLayers=b}return a}})});