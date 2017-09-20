// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./Accessor ./accessorSupport/decorators".split(" "),function(c,k,g,f,h,e){c=function(c){function b(){var a=c.call(this)||this;a._groups=null;a._groups={};return a}g(b,c);b.prototype.destroy=function(){this.removeAll();this._groups=null};Object.defineProperty(b.prototype,"size",{get:function(){var a=0,d=this._groups,b;for(b in d)a+=d[b].length;return a},enumerable:!0,configurable:!0});b.prototype.add=function(a,
b){if(!this._isHandle(a)&&!Array.isArray(a))return this;b=this._getOrCreateGroup(b);if(Array.isArray(a))for(var d=0;d<a.length;d++)b.push(a[d]);else b.push(a);this.notifyChange("size");return this};b.prototype.has=function(a){a=this._groups[a];return!!a&&0<a.length};b.prototype.remove=function(a){if(Array.isArray(a))a.forEach(this.remove.bind(this));else{a=this._getGroup(a);if(!a)return this;for(var b=0;b<a.length;b++)a[b].remove();a.length=0;this.notifyChange("size")}return this};b.prototype.removeAll=
function(){var a=this._groups,b;for(b in a)this.remove(b),delete a[b];return this};b.prototype._isHandle=function(a){return a&&!!a.remove};b.prototype._getOrCreateGroup=function(a){return this._getGroup(a)||(this._groups[this._ensureGroupName(a)]=[])};b.prototype._getGroup=function(a){return this._groups[this._ensureGroupName(a)]};b.prototype._ensureGroupName=function(a){return a||"_default_"};return b}(e.declared(h));f([e.property({readOnly:!0})],c.prototype,"size",null);return c=f([e.subclass()],
c)});