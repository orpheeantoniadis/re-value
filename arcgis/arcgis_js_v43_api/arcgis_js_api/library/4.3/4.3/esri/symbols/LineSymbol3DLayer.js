// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/screenUtils ./Symbol3DLayer ../core/accessorSupport/decorators".split(" "),function(b,h,e,c,f,g,a){b=d=function(b){function a(a){a=b.call(this)||this;a.material=null;a.type="Line";a.size=1;return a}e(a,b);a.prototype.clone=function(){return new d({enabled:this.enabled,material:this.material&&this.material.clone(),size:this.size})};return a}(a.declared(g));c([a.property()],b.prototype,"material",
void 0);c([a.property()],b.prototype,"type",void 0);c([a.property({json:{write:!0}}),a.cast(f.toPt)],b.prototype,"size",void 0);b=d=c([a.subclass("esri.symbols.LineSymbol3DLayer")],b);var d;return b});