// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/tsSupport/extendsHelper","./ImmutableArray","./ImmutablePointArray"],function(g,h,c,d,e){return function(f){function b(a,b,c,d,e){a=f.call(this,a)||this;a._lazyPath=[];a._hasZ=!1;a._hasM=!1;a._hasZ=c;a._hasM=d;a._spRef=b;a._cacheId=e;return a}c(b,f);b.prototype.get=function(a){if(void 0===this._lazyPath[a]){var b=this._elements[a];if(void 0===b)return;this._lazyPath[a]=new e(b,this._spRef,this._hasZ,this._hasM,this._cacheId,a)}return this._lazyPath[a]};b.prototype.equalityTest=
function(a){return a===this?!0:null===a||!1===a instanceof b?!1:a.getUniqueHash()===this.getUniqueHash()};b.prototype.getUniqueHash=function(){return this._cacheId.toString()};return b}(d)});