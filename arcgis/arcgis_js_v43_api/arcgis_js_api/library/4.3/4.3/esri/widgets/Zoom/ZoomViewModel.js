// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor".split(" "),function(a,h,f,e,d,g){a=function(a){function c(b){b=a.call(this,b)||this;b.view=null;b.zoomIn=b.zoomIn.bind(b);b.zoomOut=b.zoomOut.bind(b);return b}f(c,a);c.prototype.destroy=function(){this.view=null};Object.defineProperty(c.prototype,"canZoomIn",{get:function(){if("2d"!==this.get("view.type"))return!0;var b=this.get("view.scale"),
a=this.get("view.constraints.effectiveMaxScale");return 0===a||b>a},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"canZoomOut",{get:function(){if("2d"!==this.get("view.type"))return!0;var b=this.get("view.scale"),a=this.get("view.constraints.effectiveMinScale");return 0===a||b<a},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});c.prototype.zoomIn=function(){this.canZoomIn&&
this._zoomToFactor(.5)};c.prototype.zoomOut=function(){this.canZoomOut&&this._zoomToFactor(2)};c.prototype._zoomToFactor=function(a){"ready"===this.state&&this.view.goTo({scale:this.get("view.scale")*a})};return c}(d.declared(g));e([d.property({dependsOn:["view.ready","view.scale"],readOnly:!0})],a.prototype,"canZoomIn",null);e([d.property({dependsOn:["view.ready","view.scale"],readOnly:!0})],a.prototype,"canZoomOut",null);e([d.property({dependsOn:["view.ready"],readOnly:!0})],a.prototype,"state",
null);e([d.property()],a.prototype,"view",void 0);return a=e([d.subclass("esri.widgets.Zoom.ZoomViewModel")],a)});