// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/Evented","../../layers/support/LOD","./constraints/ZoomConstraint","./constraints/RotationConstraint"],function(e,f,g,c,d){return e.createSubclass([f],{declaredClass:"esri.views.2d.MapViewConstraints",destroy:function(){this.view=null},initialize:function(){this.watch("_zoom, _rotation",this.emit.bind(this,"update"),!0)},properties:{effectiveLODs:{readOnly:!0,aliasOf:"_zoom.effectiveLODs"},effectiveMinScale:{readOnly:!0,aliasOf:"_zoom.effectiveMinScale"},
effectiveMaxScale:{readOnly:!0,aliasOf:"_zoom.effectiveMaxScale"},effectiveMinZoom:{readOnly:!0,aliasOf:"_zoom.effectiveMinZoom"},effectiveMaxZoom:{readOnly:!0,aliasOf:"_zoom.effectiveMaxZoom"},enabled:!0,lods:{value:null,type:[g]},minScale:0,maxScale:0,minZoom:-1,maxZoom:-1,rotationEnabled:!0,snapToZoom:!0,view:{value:null},_zoom:{type:c,dependsOn:"lods minZoom maxZoom minScale maxScale snapToZoom view.tileInfo".split(" "),get:function(){return new c({lods:this.lods||this.view&&this.view.tileInfo&&
this.view.tileInfo.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale,snapToZoom:this.snapToZoom})}},_rotation:{type:d,dependsOn:["rotationEnabled"],get:function(){return new d({rotationEnabled:this.rotationEnabled})}}},constrain:function(a,b){if(!this.enabled)return a;this._zoom.constrain(a,b);this._rotation.constrain(a,b);return a},zoomToScale:function(a){return this._zoom.zoomToScale(a)},scaleToZoom:function(a){return this._zoom.scaleToZoom(a)},snapScale:function(a,
b){return this._zoom.snapScale(a,b)}})});