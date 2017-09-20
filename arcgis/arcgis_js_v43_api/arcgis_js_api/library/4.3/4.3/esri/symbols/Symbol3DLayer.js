// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/JSONSupport ./support/Symbol3DMaterial ../core/accessorSupport/decorators".split(" "),function(b,h,e,c,d,f,g,a){b=function(b){function a(a){a=b.call(this)||this;a.enabled=!0;a.material=null;a.type=null;return a}e(a,b);a.prototype.writeEnabled=function(a,b){a||(b.enabled=a)};a.prototype.readElevationInfo=function(a){return d.clone(a)};a.prototype.writeElevationInfo=function(a,b){b.elevationInfo=
d.clone(a)};return a}(a.declared(f));c([a.property()],b.prototype,"enabled",void 0);c([a.writer("enabled")],b.prototype,"writeEnabled",null);c([a.property()],b.prototype,"elevationInfo",void 0);c([a.reader("elevationInfo")],b.prototype,"readElevationInfo",null);c([a.writer("elevationInfo")],b.prototype,"writeElevationInfo",null);c([a.property({type:g.default,json:{write:!0}})],b.prototype,"material",void 0);c([a.property({type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],b.prototype,
"type",void 0);return b=c([a.subclass("esri.symbols.Symbol3DLayer")],b)});