// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../SpatialReference"],function(v,g,n){function p(a,b,c,d,f){if("point"===a.type)b=b(a.x,a.y,d,q),f.x=b[0],f.y=b[1];else if("extent"===a.type)e=b(a.xmin,a.ymin,d,q),f.xmin=e[0],f.ymin=e[1],b=b(a.xmax,a.ymax,d,q),f.xmax=b[0],f.ymax=b[1];else if("polyline"===a.type||"polygon"===a.type){var k=(e="polyline"===a.type)?a.paths:a.rings,g=[],m=void 0;for(a=0;a<k.length;a++){var l=k[a],m=[];g.push(m);for(var h=0;h<l.length;h++)m.push(b(l[h][0],l[h][1],d)),2<l[h].length&&m[h].push(l[h][2]),
3<l[h].length&&m[h].push(l[h][3])}e?f.paths=g:f.rings=g}else if("multipoint"===a.type){e=a.points;k=[];for(a=0;a<e.length;a++)k[a]=b(e[a][0],e[a][1],d),2<e[a].length&&k[a].push(e[a][2]),3<e[a].length&&k[a].push(e[a][3]);f.points=k}f.spatialReference=c;return f;var e}function u(a,b){a=a&&(null!=a.wkid?a:a.spatialReference);b=b&&(null!=b.wkid?b:b.spatialReference);return a&&b?b.equals(a)?!0:b.isWebMercator&&4326===a.wkid||a.isWebMercator&&4326===b.wkid:!1}function r(a,b,c,d){void 0===d&&(d=[0,0]);89.99999<
b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=.017453292519943;d[0]=111319.49079327169*a;d[1]=3189068.5*Math.log((1+Math.sin(b))/(1-Math.sin(b)));return d}function t(a,b,c,d){void 0===c&&(c=!1);void 0===d&&(d=[0,0]);a=a/6378137*57.29577951308232;d[0]=c?a:a-360*Math.floor((a+180)/360);d[1]=57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)));return d}var q=[0,0];g.canProject=u;g.project=function(a,b){var c=a&&a.spatialReference;b=b&&(null!=b.wkid?b:b.spatialReference);return u(c,
b)?c.equals(b)?a.clone():b.isWebMercator?p(a,r,n.WebMercator,!1,a.clone()):4326===b.wkid?p(a,t,n.WGS84,!1,a.clone()):null:null};g.lngLatToXY=r;g.xyToLngLat=t;g.geographicToWebMercator=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=a.clone());return p(a,r,n.WebMercator,b,c)};g.webMercatorToGeographic=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=a.clone());return p(a,t,n.WGS84,b,c)}});