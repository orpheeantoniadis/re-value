// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,l){return function(){function d(a,e){this.objectIdField=a;this.graphics=e;this._counts=new Map}d.prototype.add=function(a){var e=[],b=this._counts;a=a.features;for(var d=this.objectIdField,f=0;f<a.length;f++){var g=a[f],c=g.attributes[d];b.has(c)?b.set(c,b.get(c)+1):(e.push(g),b.set(c,1))}this.graphics.addMany(e)};d.prototype.remove=function(a){var e=[],b=this._counts;a=a.features;for(var d=this.objectIdField,f=0;f<a.length;f++){var g=a[f],c=g.attributes[d];
if(b.has(c)){var h=b.get(c)-1;0===h?(b.delete(c),e.push(g)):b.set(c,h)}}this.graphics.removeMany(e)};d.prototype.removeAll=function(){this._counts.clear()};return d}()});