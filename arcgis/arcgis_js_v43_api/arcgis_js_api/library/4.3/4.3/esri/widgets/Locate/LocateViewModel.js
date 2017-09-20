// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/promiseUtils ../../core/Error dojo/Deferred ../support/GeolocationPositioning".split(" "),function(b,n,k,g,e,f,h,l,m){b=function(b){function d(a){a=b.call(this,a)||this;a.locate=a.locate.bind(a);return a}k(d,b);d.prototype.destroy=function(){this._locating&&(this._locating.cancel(),this._locating=null)};Object.defineProperty(d.prototype,"state",{get:function(){return this._geolocationUsable?
this.get("view.ready")?this._locating?"locating":"ready":"disabled":"feature-unsupported"},enumerable:!0,configurable:!0});d.prototype.locate=function(){var a=this;if("disabled"===this.state)return f.reject(new h("locate:disabled-state","Cannot locate when disabled."));if("feature-unsupported"===this.state)return f.reject(new h("locate:feature-unsupported-state","Cannot locate in unsecure domain."));this._locating&&(this._locating.cancel(),this._locating=null);var b=this._getCurrentPosition(this.geolocationOptions).then(function(c){return a._setPosition(c)}).then(function(c){a.view.graphics.remove(a.graphic);
a.graphic&&(a.graphic=a.graphic.clone(),a.view.graphics.push(a.graphic));a.emit("locate",{position:c});return c}).otherwise(function(c){a.emit("locate-error",{error:c});throw c;});this._locating=b;this.notifyChange("state");return f.timeout(b,15E3,void 0).then(function(c){a._locating=null;a.notifyChange("state");return c}).otherwise(function(c){a._locating.cancel();a._locating=null;a.notifyChange("state");throw c;})};d.prototype._getCurrentPosition=function(a){var b=new l;navigator.geolocation.getCurrentPosition(b.resolve,
b.reject,a);return b.promise};return d}(e.declared(m));g([e.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);return b=g([e.subclass("esri.widgets.Locate.LocateViewModel")],b)});