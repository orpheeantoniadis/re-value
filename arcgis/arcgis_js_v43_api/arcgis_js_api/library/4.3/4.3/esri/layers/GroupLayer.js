// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./Layer ../core/MultiOriginJSONSupport ./mixins/PortalLayer ./mixins/OperationalLayer ../support/LayersMixin ../core/accessorSupport/utils ../core/accessorSupport/decorators".split(" "),function(b,q,g,e,h,k,l,m,n,p,d){b=function(b){function c(a){a=b.call(this)||this;a._visibilityHandles={};a.fullExtent=void 0;a.operationalLayerType="GroupLayer";a.spatialReference=void 0;a.type="group";a._visibilityWatcher=
a._visibilityWatcher.bind(a);return a}g(c,b);c.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible);this.watch("visible",this._visibleWatcher.bind(this),!0)};c.prototype._writeLayers=function(a,b,c,d){var f=[];if(!a)return f;a.forEach(function(a){a.write&&(a=a.write(null,d))&&a.layerType&&f.push(a)});b.layers=f};Object.defineProperty(c.prototype,"visibilityMode",{set:function(a){var b=this._get("visibilityMode")!==a;this._set("visibilityMode",a);b&&this._enforceVisibility(a,
this.visible)},enumerable:!0,configurable:!0});c.prototype.load=function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]}));return this};c.prototype.layerAdded=function(a,b){a.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(a):"inherited"===this.visibilityMode&&(a.visible=this.visible);this._visibilityHandles[a.uid]=a.watch("visible",this._visibilityWatcher,!0)};c.prototype.layerRemoved=function(a,b){if(b=
this._visibilityHandles[a.uid])b.remove(),delete this._visibilityHandles[a.uid];this._enforceVisibility(this.visibilityMode,this.visible)};c.prototype._turnOffOtherLayers=function(a){this.layers.forEach(function(b){b!==a&&(b.visible=!1)})};c.prototype._enforceVisibility=function(a,b){if(p.getProperties(this).initialized){var d=this.layers,c=d.find(function(a){return a.visible});switch(a){case "exclusive":d.length&&!c&&(c=d.getItemAt(0),c.visible=!0);this._turnOffOtherLayers(c);break;case "inherited":d.forEach(function(a){a.visible=
b})}}};c.prototype._visibleWatcher=function(a){"inherited"===this.visibilityMode&&this.layers.forEach(function(b){b.visible=a})};c.prototype._visibilityWatcher=function(a,b,d,c){switch(this.visibilityMode){case "exclusive":a?this._turnOffOtherLayers(c):this._isAnyLayerVisible()||(c.visible=!0);break;case "inherited":c.visible=this.visible}};c.prototype._isAnyLayerVisible=function(){return this.layers.some(function(a){return a.visible})};return c}(d.declared(h,n,k,m,l));e([d.shared({"2d":"../views/layers/GroupLayerView",
"3d":"../views/layers/GroupLayerView"})],b.prototype,"viewModulePaths",void 0);e([d.property()],b.prototype,"fullExtent",void 0);e([d.property({json:{read:!1,write:{ignoreOrigin:!0}}})],b.prototype,"layers",void 0);e([d.writer("layers")],b.prototype,"_writeLayers",null);e([d.property()],b.prototype,"operationalLayerType",void 0);e([d.property({json:{write:!1}})],b.prototype,"portalItem",void 0);e([d.property()],b.prototype,"spatialReference",void 0);e([d.property({json:{read:!1}})],b.prototype,"type",
void 0);e([d.property({json:{read:!1,write:!1}})],b.prototype,"url",void 0);e([d.property({value:"independent",json:{write:!0}})],b.prototype,"visibilityMode",null);return b=e([d.subclass("esri.layers.GroupLayer")],b)});