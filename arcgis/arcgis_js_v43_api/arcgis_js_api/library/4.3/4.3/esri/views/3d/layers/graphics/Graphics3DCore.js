// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/watchUtils ../../../../core/arrayUtils ../../../../core/Error ../../../../core/Logger ../../../../core/promiseUtils ../../support/projectionUtils ../../../../renderers/UniqueValueRenderer ../../../../renderers/support/rendererConversion ../../../../renderers/support/diffUtils ../../../../geometry/Point ../../../../geometry/Extent ../../webgl-engine/Stage ../../webgl-engine/lib/Util ../../webgl-engine/lib/Layer ../../webgl-engine/lib/FloatingBoxLocalOriginFactory ../../../../symbols/WebStyleSymbol ../../../../symbols/support/symbolConversion ../../lib/glMatrix ./Graphics3DGraphic ./Graphics3DSymbol ./Graphics3DWebStyleSymbol ./graphicUtils ./Graphics3DOwner ./ElevationQuery ../../support/aaBoundingBox ../../support/mathUtils dojo/Deferred".split(" "),
function(w,W,C,D,t,E,x,r,F,p,y,G,H,I,J,u,K,z,L,M,A,B,N,O,P,Q,R,S,T,n,U){w=B.vec3d;var q=new I,v=w.create(),V=r.getLogger("esri.views.3d.LayerView3D");r=function(){function c(){this.graphics={};this.graphicsDrapedIds={};this.graphicsBySymbol={};this.graphicsKeys=[];this.symbols={};this.graphicsWithoutSymbol={};this.computedExtent=null;this.symbolCreationContext=new R.Graphics3DSymbolCreationContext;this.hasDraped=!1;this.updatingGraphicIds=new Set;this.graphicTransformFunc=this.onComputedExtentChange=
this.stage=this.labelStageLayer=this.stageLayer=this.tilingSchemeHandle=this.lastFastUpdate=null;this.eventHandles=[];this.elevationQueryService=this.labeling=this.spatialIndex=this.scaleVisibility=this.elevation=this.layer=this.layerView=this.viewSR=null;this.whenGraphics3DGraphicRequests={}}c.prototype.initialize=function(a,b,d,h,e,k,g,f,m){var l=this;this.layerView=a;this.layer=b;this.viewSR=a.view.spatialReference;this.elevation=d;this.scaleVisibility=h;this.spatialIndex=e;this.labeling=k;this.onComputedExtentChange=
g;this.graphicTransformFunc=f;this.elevationQueryService=new S.ElevationQuery(this.viewSR,function(){return l.layerView.view.map.ground},{maximumAutoTileRequests:4});this.initializeStage(this.layerView.view,this.layer.id);this.symbolCreationContext.sharedResources=this.layerView.view.sharedSymbolResources;this.symbolCreationContext.renderer=this.layer.renderer;this.symbolCreationContext.stage=this.stage;this.symbolCreationContext.streamDataSupplier=this.layerView.view.sharedSymbolResources.streamDataSupplier;
this.symbolCreationContext.renderSpatialReference=this.layerView.view.renderSpatialReference;this.symbolCreationContext.renderCoordsHelper=this.layerView.view.renderCoordsHelper;this.symbolCreationContext.layer=this.layer;this.symbolCreationContext.layerView=this.layerView;this.symbolCreationContext.layerOrder=0;this.symbolCreationContext.localOriginFactory=c.createLocalOriginFactory();this.symbolCreationContext.elevationProvider=m;this.tilingSchemeHandle=t.when(m,"tilingScheme",function(a){a.spatialReference.equals(l.symbolCreationContext.overlaySR)||
(l.symbolCreationContext.overlaySR=m.spatialReference,l.recreateAllGraphics())});this.eventHandles.push(this.layerView.watch("suspended",function(){return l.suspendedChange()}));this.eventHandles.push(t.on(a,"loadedGraphics","change",function(a){return l.graphicsCollectionChanged(a)},function(){l.clearSymbolsAndGraphics();l.graphicsCollectionChanged({added:l.layerView.loadedGraphics.toArray(),removed:[]})}));this.validateRenderer(this.layer.renderer)};c.prototype.destroy=function(){var a=this;this.clear();
if(this.stage){var b=[this.stageLayer.getId()];this.labelStageLayer&&b.push(this.labelStageLayer.getId());this.stage.removeFromViewContent(b);b.forEach(function(b){return a.stage.remove(u.ModelContentType.LAYER,b)});this.stage=this.labelStageLayer=this.stageLayer=null}this.tilingSchemeHandle&&(this.tilingSchemeHandle.remove(),this.tilingSchemeHandle=null);this.eventHandles.forEach(function(a){return a.remove()});this.layerView=this.labeling=this.scaleVisibility=this.viewSR=this.onComputedExtentChange=
this.eventHandles=null;for(var d in this.whenGraphics3DGraphicRequests)this.whenGraphics3DGraphicRequests[d].reject(new x("graphic:layer-destroyed","Layer has been destroyed"));this.whenGraphics3DGraphicRequests=null};c.prototype.clear=function(){var a=!1,b;for(b in this.graphics){var d=this.graphics[b],a=a||d.isDraped();d.destroy()}this.graphics={};this.graphicsKeys=null;for(var h in this.symbols)(b=this.symbols[h])&&b.destroy();this.symbols={};this.graphicsBySymbol={};this.graphicsWithoutSymbol=
{};this.hasDraped=!1;a&&this.layerView._notifyDrapedDataChange()};c.prototype.initializeStage=function(a,b){this.stage=a._stage;this.stageLayer=new z(b,{state:this.layerView.suspended?"HIDDEN":"VISIBLE"},b);this.stage.add(u.ModelContentType.LAYER,this.stageLayer);a=[this.stageLayer.getId()];this.labeling&&(this.labelStageLayer=new z(b,{state:this.layerView.suspended?"HIDDEN":"IGNORED"},b+"_labels"),this.stage.add(u.ModelContentType.LAYER,this.labelStageLayer),a.push(this.labelStageLayer.getId()));
this.stage.addToViewContent(a)};c.prototype.setDrawingOrder=function(a){this.symbolCreationContext.layerOrder=a;var b={},d={},h;for(h in this.graphics)this.graphics[h].setDrawOrder(a,b,d);for(var e in d)(d=this.symbols[e])&&d.setDrawOrder(a,b);K.objectEmpty(b)||(this.stage.getTextureGraphicsRenderer().updateRenderOrder(b),this.layerView._notifyDrapedDataChange())};c.prototype.suspendedChange=function(){!0===this.layerView.suspended?(this.stageLayer.setState("HIDDEN"),this.labelStageLayer&&this.labelStageLayer.setState("HIDDEN"),
this.hideAllGraphics()):!1===this.layerView.suspended&&(this.stageLayer.setState("VISIBLE"),this.labelStageLayer&&this.labelStageLayer.setState("IGNORED"),this.updateAllGraphicsVisibility())};c.prototype.getGraphics3DGraphics=function(){return this.graphics};c.prototype.getGraphics3DGraphicById=function(a){return this.graphics[a]};c.prototype.getGraphics3DGraphicsKeys=function(){null===this.graphicsKeys&&(this.graphicsKeys=Object.keys(this.graphics));return this.graphicsKeys};c.prototype.getSymbolUpdateType=
function(){var a=0,b=0,d=0,h;for(h in this.symbols){var e=this.symbols[h];e&&(e=e.getFastUpdateStatus(),a+=e.loading,d+=e.fast,b+=e.slow)}return 0<a?"unknown":0<=d&&0===b?"fast":0<=b&&0===d?"slow":"mixed"};c.prototype.numNodesUpdating=function(){return this.updatingGraphicIds.size};c.prototype.needsIdleUpdate=function(){return!!this.lastFastUpdate&&500<performance.now()-this.lastFastUpdate};c.prototype.idleUpdate=function(a){a.done()||(this.lastFastUpdate&&(this.labeling&&this.labeling.updateLabelingInfo(),
this.lastFastUpdate=null),this.layerView._evaluateUpdatingState())};c.prototype.whenGraphics3DGraphic=function(a){var b=this.graphics[a.uid];if(b)return F.resolve(b);b=this.whenGraphics3DGraphicRequests[a.uid];b||(b=new U,this.whenGraphics3DGraphicRequests[a.uid]=b);return b.promise};c.prototype.boundsForGraphics3DGraphic=function(a){return D(this,void 0,void 0,function(){var b,d,h,e,k,c,f,m,l;return C(this,function(g){switch(g.label){case 0:return b=this.layerView.view.spatialReference,d=this.layerView.view.renderSpatialReference,
h=this.layerView.view.basemapTerrain.spatialReference,e=function(a,e,h){return p.bufferToBuffer(a,d,e,a,b,e,h)},k=function(a,d,e){return p.bufferToBuffer(a,h,d,a,b,d,e)},[4,a.getProjectedBoundingBox(e,k,this.elevationQueryService)];case 1:c=g.sent();if(!c)return[2,null];f=c.boundingBox;c.requiresDrapedElevation&&(m=this.symbolCreationContext.elevationProvider)&&(T.center(f,v),q.x=v[0],q.y=v[1],q.z=void 0,q.spatialReference=b,l=m.getElevation(q)||0,f[2]=Math.min(f[2],l),f[5]=Math.max(f[5],l));return[2,
f]}})})};c.prototype.whenGraphicBounds=function(a){var b=this;return t.whenOnce(this.layerView,"loadedGraphics").then(function(){if(b.layerView.loadedGraphics.some(function(b){return b===a}))return b.whenGraphics3DGraphic(a);throw new x("internal:graphic-not-part-of-view","Graphic is not part of this view");}).then(function(a){return b.boundsForGraphics3DGraphic(a)})};c.prototype.graphicsCollectionChanged=function(a){var b=this.graphicTransformFunc?this.graphicTransformFunc(a.added):a.added;this.add(b);
this.remove(a.removed)};c.prototype.graphicUpdateHandler=function(a){var b=this.graphics[a.graphic.uid];if(b)switch(a.property){case "visible":b.setVisibilityFlag("VISIBILITY_GRAPHIC",a.newValue)&&(b.isDraped()&&this.layerView._notifyDrapedDataChange(),this.labeling&&this.layerView.view.labelManager.setDirty())}};c.prototype.beginGraphicUpdate=function(a){this.updatingGraphicIds.add(a.uid);this.layerView.get("symbolsUpdating")||this.layerView.set("symbolsUpdating",!0);this.layerView._evaluateUpdatingState()};
c.prototype.endGraphicUpdate=function(a){a&&this.updatingGraphicIds.delete(a.uid);this.layerView.get("symbolsUpdating")&&0===this.updatingGraphicIds.size&&(this.layerView.view.flushDisplayModifications(),this.layerView.set("symbolsUpdating",!1));this.layerView._evaluateUpdatingState()};c.prototype.expandComputedExtent=function(a){var b,d,h,e,k,g;if("point"===a.type)b=d=a.x,h=e=a.y,a.z&&(k=g=a.z);else if("polygon"===a.type||"polyline"===a.type||"multipoint"===a.type){g=a.extent;if(!g)return;b=g.xmin;
d=g.xmax;h=g.ymin;e=g.ymax;k=g.zmin;g=g.zmax}var f=this.viewSR,m=c.tmpVec;!a.spatialReference.equals(f)&&p.xyzToVector(b,h,0,a.spatialReference,m,f)&&(b=m[0],h=m[1],p.xyzToVector(d,e,0,a.spatialReference,m,f),d=m[0],e=m[1]);n.isFinite(b)&&n.isFinite(d)&&n.isFinite(h)&&n.isFinite(e)&&((f=this.computedExtent)?(f.xmin=Math.min(b,f.xmin),f.xmax=Math.max(d,f.xmax),f.ymin=Math.min(h,f.ymin),f.ymax=Math.max(e,f.ymax)):this.computedExtent=f=new J(b,h,d,e,a.spatialReference),n.isFinite(k)&&!n.isFinite(g)&&
(f.zmin=null!=f.zmin?Math.min(k,f.zmin):k,f.zmax=null!=f.zmax?Math.max(g,f.zmax):g),this.onComputedExtentChange&&this.onComputedExtentChange())};c.prototype.updateHasDraped=function(){this.hasDraped=!1;for(var a in this.graphicsDrapedIds)if(this.graphicsDrapedIds.hasOwnProperty(a)){this.hasDraped=!0;break}};c.prototype.elevationInfoChange=function(){this.labeling&&this.labeling.elevationInfoChange();for(var a in this.graphicsBySymbol){var b=this.symbols[a],d=this.graphicsBySymbol[a];if(b&&b.layerPropertyChanged("elevationInfo",
d))for(var h in d)for(var e=d[h],b=e.graphic,e=e._labelGraphics,c=0;c<e.length;c++){var g=e[c];g.graphics3DSymbolLayer.updateGraphicElevationInfo(b,g)}else this.recreateSymbol(a)}};c.prototype.clearSymbolsAndGraphics=function(){this.clear();this.elevation&&this.elevation.clear();this.labeling&&this.labeling.clear()};c.prototype.recreateAllGraphics=function(){this.clearSymbolsAndGraphics();this.computedExtent=null;this.onComputedExtentChange&&this.onComputedExtentChange();this.layerView.loadedGraphics&&
this.layerView.view.basemapTerrain.tilingScheme&&this.add(this.layerView.loadedGraphics.toArray())};c.prototype.recreateSymbol=function(a){var b=this.graphicsBySymbol[a],d=[],h=!1,e;for(e in b){var c=b[e];c.isDraped()&&(delete this.graphicsDrapedIds[e],h=!0);d.push(c.graphic);c.destroy();delete this.graphics[e]}this.graphicsBySymbol[a]={};(b=this.symbols[a])&&b.destroy();delete this.symbols[a];this.updateHasDraped();h&&this.layerView._notifyDrapedDataChange();this.add(d)};c.prototype.add=function(a){if(this.layerView.view.basemapTerrain&&
this.layerView.view.basemapTerrain.tilingScheme){for(var b=a.length,d=Array(b),h=Array(b),e=Array(b),c=0;c<b;c++){var g=a[c],f=g.geometry;f&&(this.expandComputedExtent(f),(f=this.layerView.getRenderingInfo?this.layerView.getRenderingInfo(g):{symbol:g.symbol})&&f.symbol?(h[c]=f.symbol,e[c]=f,(f=this.getOrCreateGraphics3DSymbol(h[c],f.renderer))?(d[c]=f,this.beginGraphicUpdate(g)):this.graphicsWithoutSymbol[g.uid]=g):this.graphicsWithoutSymbol[g.uid]=g)}for(c=0;c<b;c++)this.waitForSymbol(d[c],h[c],
a[c],e[c])}};c.prototype.waitForSymbol=function(a,b,d,c){var e=this;a&&a.then(function(){e.graphicsBySymbol[b.id]||(e.graphicsBySymbol[b.id]={});e.createGraphics3DGraphic(a,d,c);e.endGraphicUpdate(d);e.labeling&&e.layerView.view.labelManager.setDirty()},function(){e.endGraphicUpdate(d)})};c.prototype.remove=function(a){for(var b=!1,d=a.length,c=0;c<d;c++){var e=a[c].uid,k=this.graphics[e];if(k){k.isDraped()&&(delete this.graphicsDrapedIds[e],b=!0);var g=k.graphics3DSymbol.symbol.id;k.destroy();delete this.graphics[e];
delete this.graphicsBySymbol[g][e];delete this.graphicsWithoutSymbol[e];this.graphicsKeys=null}}this.updateHasDraped();b&&this.layerView._notifyDrapedDataChange();this.labeling&&this.layerView.view.labelManager.setDirty()};c.prototype.createGraphics3DSymbol=function(a,b){a=A.to3D(a,!0,!1);if(a.symbol){var d=void 0;b&&b.backgroundFillSymbol&&(b=A.to3D(b.backgroundFillSymbol,!1,!0),b.symbol&&(d=b.symbol.symbolLayers));return new O(a.symbol,this.symbolCreationContext,d)}return null};c.prototype.getOrCreateGraphics3DSymbol=
function(a,b){var d=this,c=this.symbols[a.id];void 0===c&&(c=a instanceof M?new P(a,function(a){return d.createGraphics3DSymbol(a,b)}):this.createGraphics3DSymbol(a,b),this.symbols[a.id]=c);return c};c.prototype.createGraphics3DGraphic=function(a,b,d){!this.graphics[b.uid]&&(d=a.createGraphics3DGraphic(b,d),this.graphics[b.uid]=d,this.graphicsKeys=null,this.graphicsBySymbol[a.symbol.id][b.uid]=d,d.initialize(this.stageLayer,this.stage),d.isDraped()&&(this.hasDraped=this.graphicsDrapedIds[b.uid]=!0,
this.layerView._notifyDrapedDataChange()),d.centroid=null,"point"!==b.geometry.type&&d instanceof N&&(d.centroid=Q.computeCentroid(b.geometry,this.viewSR)),a=this.scaleVisibility&&this.scaleVisibility.scaleRangeActive(),this.spatialIndex&&this.spatialIndex.shouldAddToSpatialIndex(b,d,a)&&this.spatialIndex.addGraphicToSpatialIndex(b,d),this.labeling&&this.labeling.layerLabelsEnabled()&&this.labeling.createLabelsForGraphic(b,d),a&&this.scaleVisibility.updateGraphicScaleVisibility(b,d),d.setVisibilityFlag("VISIBILITY_GRAPHIC",
b.visible&&!this.layerView.suspended),a=this.whenGraphics3DGraphicRequests[b.uid])&&(delete this.whenGraphics3DGraphicRequests[b.uid],a.resolve(d))};c.prototype.rendererChange=function(a){var b=this.symbolCreationContext.renderer;this.validateRenderer(a);this.symbolCreationContext.renderer=a;var d=H.diff(b,a);d&&("complete"===d.type?this.recreateAllGraphics():"partial"===d.type&&(this.applyRendererDiff(d,a,b)?this.volatileGraphicsUpdated():this.recreateAllGraphics()))};c.prototype.diffHasSymbolChange=
function(a){for(var b in a.diff)switch(b){case "visualVariables":break;case "defaultSymbol":break;case "uniqueValueInfos":break;default:return!0}return!1};c.prototype.applySymbolSetDiff=function(a,b,d,c){var e=!1;a=a||[];b=b||[];for(var h=[],g=0;g<b.length;g++){var f=b[g],m=this.graphicsBySymbol[f.id],l;for(l in m){var n=m[l],p=n.graphic;if(f!==c.defaultSymbol||d.getSymbol(p)!==c.defaultSymbol)n.isDraped&&(delete this.graphicsDrapedIds[l],e=!0),a.length||d.defaultSymbol?h.push(p):this.graphicsWithoutSymbol[l]=
p,n.destroy(),delete m[l],delete this.graphics[l],this.graphicsKeys=null}f.destroy();delete this.graphicsBySymbol[f.id];delete this.symbols[f.id]}if(a.length||h.length){for(l in this.graphicsWithoutSymbol)h.push(this.graphicsWithoutSymbol[l]);this.graphicsWithoutSymbol={};this.add(h)}this.updateHasDraped();e&&this.layerView._notifyDrapedDataChange();this.labeling&&this.layerView.view.labelManager.setDirty()};c.prototype.applyUniqueValueRendererDiff=function(a,b,d){var c=a.diff.defaultSymbol,e=a.diff.uniqueValueInfos;
if(c||e){var k=e?e.added.map(function(a){return a.symbol}):[],g=e?e.removed.map(function(a){return a.symbol}):[];if(e)for(var f=0;f<e.changed.length;f++)k.push(e.changed[f].newValue.symbol),g.push(e.changed[f].oldValue.symbol);c?(d.defaultSymbol&&g.push(d.defaultSymbol),b.defaultSymbol&&k.push(b.defaultSymbol)):d.defaultSymbol&&k.length&&g.push(d.defaultSymbol);this.applySymbolSetDiff(k,g,b,d);delete a.diff.defaultSymbol;delete a.diff.uniqueValueInfos;return!0}return!1};c.prototype.applyRendererDiff=
function(a,b,d){var c=!1;if(this.diffHasSymbolChange(a))return!1;if(b instanceof y&&d instanceof y&&this.applyUniqueValueRendererDiff(a,b,d)&&0===Object.keys(a.diff).length)return!0;for(var e in this.graphicsBySymbol)if(d=this.symbols[e]){var k=this.graphicsBySymbol[e];if(!d.applyRendererDiff(a,b,k))return!1;if(!c)for(var g in k)if(k[g].isDraped()){this.layerView._notifyDrapedDataChange();c=!0;break}}return!0};c.prototype.opacityChange=function(){var a=!1,b;for(b in this.graphicsBySymbol){var d=this.symbols[b];
if(d){var c=this.graphicsBySymbol[b];d.layerPropertyChanged("opacity");if(!a)for(var e in c)if(c[e].isDraped()){this.layerView._notifyDrapedDataChange();a=!0;break}}}};c.prototype.setClippingExtent=function(a,b){var d=this.symbolCreationContext.clippingExtent,c=[];p.extentToBoundingRect(a,c,b)?this.symbolCreationContext.clippingExtent=[c[0],c[1],-Infinity,c[2],c[3],Infinity]:this.symbolCreationContext.clippingExtent=null;return!E.equals(this.symbolCreationContext.clippingExtent,d)};c.prototype.updateAllGraphicsVisibility=
function(){var a=this;if(this.layerView.loadedGraphics){var b=!1;this.layerView.loadedGraphics.forEach(function(c){var d=a.getGraphics3DGraphicById(c.uid);if(d){var e=d.setVisibilityFlag("VISIBILITY_GRAPHIC",c.visible);a.scaleVisibility&&(c=a.scaleVisibility.updateGraphicScaleVisibility(c,d),e=e||c);e&&d.isDraped()&&(b=!0)}});b&&this.layerView._notifyDrapedDataChange();this.layerView.view.labelManager.setDirty()}};c.prototype.hideAllGraphics=function(){var a=this;if(this.layerView.loadedGraphics){var b=
!1;this.layerView.loadedGraphics.forEach(function(c){(c=a.getGraphics3DGraphicById(c.uid))&&c.setVisibilityFlag("VISIBILITY_GRAPHIC",!1)&&c.isDraped()&&(b=!0)});b&&this.layerView._notifyDrapedDataChange();this.layerView.view.labelManager.setDirty()}};c.prototype.validateRenderer=function(a){(a=G.validateTo3D(a))&&V.warn("Renderer for layer '"+(this.layer.title?this.layer.title+", ":"")+", id:"+this.layer.id+"' is not supported in a SceneView",a.message)};c.prototype.volatileGraphicsUpdated=function(){this.labeling&&
(this.lastFastUpdate=performance.now());this.stageLayer.invalidateSpatialQueryAccelerator();this.layerView._evaluateUpdatingState()};c.createLocalOriginFactory=function(){return new L(5E6,16)};return c}();r.tmpVec=B.vec3d.create();return r});