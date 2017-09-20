// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../layers/GraphicsView ./graphics/Graphics3DCore ./graphics/Graphics3DSpatialIndex ./graphics/Graphics3DElevationAlignment ../support/PromiseLightweight ../../../core/promiseUtils".split(" "),function(c,p,g,e,d,h,k,l,m,n,f){c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.graphicsCore=null;a.spatialIndex=null;a.elevation=
null;a.supportsDraping=!0;a._overlayUpdating=!1;a._eventHandles=[];return a}g(b,c);Object.defineProperty(b.prototype,"graphics",{set:function(a){a!==this.loadedGraphics&&(this.loadedGraphics=a);this._set("graphics",a)},enumerable:!0,configurable:!0});b.prototype.initialize=function(){var a=this;this.mockLayerId="__sceneView.graphics-"+Date.now().toString(16);this.spatialIndex=new l;this.spatialIndex.whenLoaded().then(function(){return a.deferredInitialize()})};b.prototype.deferredInitialize=function(){var a=
this;if(!this.destroyed){this.loadedGraphics=this.graphics;this.graphicsCore=new k;this.elevation=new m;var b={id:this.mockLayerId};this.spatialIndex.initialize(this,b,this.view.spatialReference,this.graphicsCore);this.elevation.initialize(this,function(b,c,d){a.spatialIndex.intersects(b,c,d)},this.graphicsCore,this.view.basemapTerrain);this.graphicsCore.initialize(this,b,this.elevation,null,this.spatialIndex,null,null,null,this.view.basemapTerrain);this._eventHandles.push(this.view.watch("clippingArea",
function(){return a.updateClippingExtent()}));this.updateClippingExtent();this.view.resourceController.registerIdleFrameWorker(this,{needsUpdate:this._needsIdleUpdate,idleFrame:this._idleUpdate})}};b.prototype.destroy=function(){this._eventHandles.forEach(function(a){return a.remove()});this._eventHandles=null;this.view.resourceController.deregisterIdleFrameWorker(this);this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null);this.elevation&&(this.elevation.destroy(),this.elevation=
null);this.graphicsCore&&(this.graphicsCore.destroy(),this.graphicsCore=null);this.loadedGraphics=null};b.prototype.getGraphicsFromStageObject=function(a,b){var c=a.getMetadata().graphicId,d=null;this.loadedGraphics&&this.loadedGraphics.some(function(a){return a.uid===c?(d=a,!0):!1});a=new n.Promise;null!==d?a.done(d):a.reject();return a};b.prototype.whenGraphicBounds=function(a){var b=this;return this.spatialIndex?this.spatialIndex.whenLoaded().then(function(){return b.graphicsCore?b.graphicsCore.whenGraphicBounds(a):
f.reject()}):f.reject()};b.prototype._needsIdleUpdate=function(){return this.elevation.needsIdleUpdate()};b.prototype._idleUpdate=function(a){this.elevation.idleUpdate(a)};b.prototype._notifySuspendedChange=function(){};b.prototype._notifyDrapedDataChange=function(){this.view.basemapTerrain&&this.view.basemapTerrain.overlayManager.setOverlayDirty()};b.prototype._evaluateUpdatingState=function(){if(this.elevation){var a;a=0+this.elevation.numNodesUpdating();a+=this.graphicsCore.numNodesUpdating();
this.updating=a=(a=(a=0<a||this._overlayUpdating)||this.spatialIndex.isUpdating())||this.graphicsCore.needsIdleUpdate()}else this.updating=!1};b.prototype.updateClippingExtent=function(){this.graphicsCore.setClippingExtent(this.view.clippingArea,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()};return b}(d.declared(h));e([d.property()],c.prototype,"graphics",null);e([d.property()],c.prototype,"loadedGraphics",void 0);e([d.property({value:!0})],c.prototype,"updating",void 0);e([d.property({value:!1})],
c.prototype,"suspended",void 0);return c=e([d.subclass("esri.views.3d.layers.GraphicsView3D")],c)});