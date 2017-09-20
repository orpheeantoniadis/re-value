// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators dojo/_base/lang ../../core/Accessor ../../core/watchUtils ../../core/HandleRegistry".split(" "),function(d,q,k,g,f,l,m,n,p){d=h=function(d){function b(a){a=d.call(this)||this;a.isDone=!1;a.spatialReference=null;a.extent=null;a.mapCollectionPaths=h.DefaultMapCollectionPaths.slice();a._handles=new p;a._waitTask=null;a._isStarted=!1;return a}k(b,d);b.prototype.normalizeCtorArgs=
function(a){a=l.mixin({},a);this._set("view",a.view);delete a.view;return a};b.prototype.initialize=function(){var a=this;this.watch("mapCollectionPaths",function(){a._isStarted&&(a.reset(),a.start())})};b.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._isStarted=!1);this._cancelLoading()};b.prototype.reset=function(){this._handles.removeAll();this._isStarted=!1;this._set("spatialReference",null);this._set("extent",null);this._set("isDone",!1)};b.prototype.start=
function(){this._handles.removeAll();this._isStarted=!0;for(var a=this._updateLayerChange.bind(this),e=0;e<this.mapCollectionPaths.length;e++)this._handles.add(n.on(this.view,"map."+this.mapCollectionPaths[e],"change",a,a,a))};b.prototype.supportedSpatialReferenceForLayer=function(a){if(a.spatialReference&&this.view.isSpatialReferenceSupported(a.spatialReference,a))return a.spatialReference};b.prototype._ownerNameFromCollectionName=function(a){var e=a.lastIndexOf(".");return-1===e?"view":"view."+
a.slice(0,e)};b.prototype._ensureLoadedOwnersFromCollectionName=function(a){a=this._ownerNameFromCollectionName(a).split(".");for(var e,c=0;c<a.length;c++){e=this.get(a.slice(0,c+1).join("."));if(!e)break;if(e.load&&!e.isFulfilled())return{owner:null,loading:e.load()}}return{owner:e}};b.prototype._cancelLoading=function(){this._waitTask=null};b.prototype._updateWhen=function(a){var e=this,c=!0,b=!1,d=a.always(function(){c?b=!0:d===e._waitTask&&e._update()}),c=!1;b||(this._waitTask=d);return b};b.prototype._updateLayerChange=
function(){this.spatialReference||this.isDone&&this._set("isDone",!1);this._update()};b.prototype._update=function(){this._cancelLoading();if(!this.isDone){for(var a=!1,e=0;e<this.mapCollectionPaths.length;e++){var c="map."+this.mapCollectionPaths[e],b=this._ensureLoadedOwnersFromCollectionName(c);if(b.loading&&!this._updateWhen(b.loading)){a=!0;break}b=b.owner;if(!(!b||b.isRejected&&b.isRejected())&&(c=this.view.get(c))&&this._processSpatialReferenceSources(c)){a=!0;break}}a||this._set("isDone",
!0);this.isDone&&!this.spatialReference&&this.defaultSpatialReference&&this._set("spatialReference",this.defaultSpatialReference)}};b.prototype._processSpatialReferenceSources=function(a){for(var b=0;b<a.length;b++){var c=a.getItemAt(b);if(c.load&&!c.isFulfilled()&&!this._updateWhen(c.load()))return!0;if(!c.load||c.isResolved()){var d=c.fullExtent,f=this.supportedSpatialReferenceForLayer(c);!f&&this.extent||!d||this._set("extent",d);if(f)return this._set("spatialReference",f),this._set("isDone",!0),
!0;if(c.layers&&this._processSpatialReferenceSources(c.layers))return!0}}return!1};return b}(f.declared(m));d.DefaultMapCollectionPaths=["basemap.baseLayers","layers","ground.layers","basemap.referenceLayers"];g([f.property({readOnly:!0})],d.prototype,"isDone",void 0);g([f.property({readOnly:!0})],d.prototype,"view",void 0);g([f.property({readOnly:!0})],d.prototype,"spatialReference",void 0);g([f.property({readOnly:!0})],d.prototype,"extent",void 0);g([f.property()],d.prototype,"mapCollectionPaths",
void 0);g([f.property()],d.prototype,"defaultSpatialReference",void 0);d=h=g([f.subclass("esri.views.support.DefaultsFromMap")],d);var h;return d});