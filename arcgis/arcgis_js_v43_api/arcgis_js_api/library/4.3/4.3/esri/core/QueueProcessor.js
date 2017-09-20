// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred","./Queue"],function(k,l,g,h){var e={};return function(){function b(a){this._apiPromises=new Map;this._resolvingPromises=new Map;this._isPaused=!1;this.concurrency=1;a.concurrency&&(this.concurrency=a.concurrency);this._queue=new h(a.peeker?{peeker:a.peeker}:void 0);this.process=a.process}b.prototype.clear=function(){this._queue.clear();var a=[];this._resolvingPromises.forEach(function(c){return a.push(c)});this._resolvingPromises.clear();a.forEach(function(a){return a.cancel()});
a.length=0;this._apiPromises.forEach(function(c){return a.push(c)});this._apiPromises.clear();a.forEach(function(a){return a.cancel()});this._isPaused=!1};b.prototype.find=function(a,c){var b=this,d=void 0;this._apiPromises.forEach(function(f,e){a.call(c,e)&&(d=b._apiPromises.get(e).promise)});return d};b.prototype.has=function(a){return this._apiPromises.has(a)};b.prototype.pause=function(){this._isPaused=!0};b.prototype.push=function(a){var c=this,b=new g(function(b){c._resolvingPromises.has(a)?
c._resolvingPromises.get(a).cancel(b):(c._remove(a),c._scheduleNext())});this._add(a,b);this._scheduleNext();return b.promise};b.prototype.reset=function(){var a=[];this._resolvingPromises.forEach(function(c){return a.push(c)});this._resolvingPromises.clear();a.forEach(function(a){return a.cancel(e)})};b.prototype.resume=function(){this._isPaused=!1;this._scheduleNext()};b.prototype._scheduleNext=function(){this._isPaused||this._next()};b.prototype._next=function(){this._resolvingPromises.size!==
this.concurrency&&this._process(this._queue.pop())};b.prototype._process=function(a){var b=this;if(null!=a){var f=this._apiPromises.get(a),d=this.process(a);d&&"function"===typeof d.then?(this._resolvingPromises.set(a,d),d.then(function(c){f.resolve(c);b._remove(a);b._scheduleNext()},function(c){c===e?b._process(a):(f.reject(c),b._remove(a),b._scheduleNext())})):(f.resolve(d),this._remove(a),this._scheduleNext())}};b.prototype._add=function(a,b){this._apiPromises.set(a,b);this._queue.push(a)};b.prototype._remove=
function(a){this._queue.remove(a);this._apiPromises.delete(a);this._resolvingPromises.delete(a)};return b}()});