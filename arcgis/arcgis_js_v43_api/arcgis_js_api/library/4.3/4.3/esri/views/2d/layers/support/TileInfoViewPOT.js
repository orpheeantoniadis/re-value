// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ./TileKey ./TileInfoView".split(" "),function(k,l,g,m,c,h){return function(f){function e(){return null!==f&&f.apply(this,arguments)||this}g(e,f);e.prototype.getTileParentId=function(a){a=c.pool.acquire(a);var b=0===a.level?null:c.getId(a.level-1,a.row>>1,a.col>>1,a.world);c.pool.release(a);return b};e.prototype.getTileIdAtParent=function(a,b){b=c.pool.acquire(b);var d=this._infoByLevel[b.level];
if(a.resolution<d.resolution)throw c.pool.release(b),Error("Cannot calculate parent tile. destination LOD's resolution "+a.resolution+" is not a parent resolution of "+d.resolution);if(a.resolution===d.resolution)return a=b.id,c.pool.release(b),a;d=b.level-a.level;if(0>d)throw c.pool.release(b),Error("Wrong way...!");a=c.getId(a.level,b.row>>d,b.col>>d,b.world);c.pool.release(b);return a};return e}(h)});