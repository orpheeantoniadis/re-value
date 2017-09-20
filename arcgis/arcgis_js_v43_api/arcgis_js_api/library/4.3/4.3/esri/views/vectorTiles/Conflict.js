// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./Geometry","./GeometryUtils"],function(l,n,p,q){l=function(){function c(a,b,f,d){this.left=a;this.top=b;this.right=f;this.bottom=d}c.prototype.clone=function(){return new c(this.left,this.top,this.right,this.bottom)};c.prototype.move=function(a,b){this.left+=a;this.top+=b;this.right+=a;this.bottom+=b};c.prototype.rotate=function(a,b){var f=this.left,d=this.right,e=this.top,g=this.bottom,h=f*a-e*b,c=f*b+e*a,k=d*a-e*b,e=d*b+e*a,m=f*a-g*b,f=f*b+g*a,l=d*a-g*b;a=d*b+g*a;this.left=
Math.min(h,k,m,l);this.top=Math.min(c,e,f,a);this.right=Math.max(h,k,m,l);this.bottom=Math.max(c,e,f,a)};c.overlaps=function(a,b){return a.right>b.left&&a.left<b.right&&a.bottom>b.top&&a.top<b.bottom};return c}();n.Box=l;var t=function(){function c(a,b,f,d){this.anchor=a;this.corners=b;this.minzoom=f;this.maxzoom=d}c.prototype.left=function(){return this.corners[0].x};c.prototype.right=function(){return this.corners[2].x};c.prototype.top=function(){return this.corners[1].y};c.prototype.bottom=function(){return this.corners[3].y};
return c}();n.Obstacle=t;l=function(){function c(a,b,f){this.obstacles=[];this.mapAngle=a;this.padding=b;this.isScreenAligned=f;this.minzoom=u}c.prototype.addBox=function(a,b,f,d,e,g){var h=b.left*f-this.padding,c=b.top*f-this.padding,k=b.right*f+this.padding;b=b.bottom*f+this.padding;h=[new p.Point(h,c),new p.Point(k,c),new p.Point(k,b),new p.Point(h,b)];0!==this.mapAngle&&(c=Math.cos(this.mapAngle),k=Math.sin(this.mapAngle),a=a.clone(),a.rotate(c,k));this.isScreenAligned||(d+=this.mapAngle);if(0!==
d){c=Math.cos(d);k=Math.sin(d);h[0].rotate(c,k);h[1].rotate(c,k);h[2].rotate(c,k);h[3].rotate(c,k);d=0;for(c=1;4>c;c++)h[c].x<h[d].x?d=c:h[c].x===h[d].x&&h[c].y<h[d].y&&(d=c);if(d){k=[];for(c=0;4>c;c++)k.push(h[(c+d)%4]);h=k}}this.obstacles.push(new t(a,h,e,g))};return c}();n.Footprint=l;var u=.5;l=function(){function c(a){this._grid=[];this._angle=a;this._c=Math.cos(a);this._s=Math.sin(a)}c.prototype.add=function(a){var b=this._grid,f=0;for(a=a.obstacles;f<a.length;f++)for(var d=a[f],e=d.anchor,
g=c._gridClamp(Math.min(d.left()+e.x,e.x)),h=c._gridClamp(Math.max(d.right()+e.x,e.x)),l=c._gridClamp(Math.min(d.top()+e.y,e.y)),e=c._gridClamp(Math.max(d.bottom()+e.y,e.y));l<=e;l++)for(var k=g;k<=h;k++){var m=b[16*l+k];m||(m=b[16*l+k]=[]);m.push(d)}};c.prototype.getMinZoom=function(a,b,f,d){if(0===a.obstacles.length)return q.C_INFINITY;f=this._grid;d=0;for(a=a.obstacles;d<a.length;d++)for(var e=a[d],g=e.anchor,h=c._gridClamp(Math.min(e.left()+g.x,g.x)),l=c._gridClamp(Math.max(e.right()+g.x,g.x)),
k=c._gridClamp(Math.min(e.top()+g.y,g.y)),g=c._gridClamp(Math.max(e.bottom()+g.y,g.y));k<=g;k++)for(var m=h;m<=l;m++){var n=f[16*k+m];if(n)for(var p=0;p<n.length;p++){var r=n[p];if(!(e.minzoom>=r.maxzoom||r.minzoom>=e.maxzoom)&&(b=c._calcPlacementZoom(e,r,b),2<=b))return q.C_INFINITY}}return 2>b?b:q.C_INFINITY};c._gridClamp=function(a){return q.clamp(a>>9,-7,8)};c._calcPlacementZoom=function(a,b,f){var d=b.anchor.x-a.anchor.x;if(0===d&&(a.right()<b.left()||b.right()<a.left()))return f;var e=b.anchor.y-
a.anchor.y;if(0===e&&(a.bottom()<b.top()||b.bottom()<a.top()))return f;var g=q.C_INFINITY;if(0!==d){var h=(0<d?a.right()-b.left():a.left()-b.right())/d;h<g&&(g=h);d=0<d?c._calcExtZoomX(a,b,h):c._calcExtZoomX(b,a,h);d<g&&(g=d)}0!==e&&(d=(0<e?a.bottom()-b.top():a.top()-b.bottom())/e,d<g&&(g=d),e=0<e?c._calcExtZoomY(a,b,d):c._calcExtZoomY(b,a,d),e<g&&(g=e));if(g<a.minzoom||g<b.minzoom)return f;g=Math.min(g,a.maxzoom,b.maxzoom);g<f&&(g=f);return g};c._calcExtZoomX=function(a,b,f){var d,e,g;if(a.anchor.y+
a.corners[2].y/f<b.anchor.y+b.corners[0].y/f){d=a.corners[2].x-a.corners[3].x;g=a.corners[2].y-a.corners[3].y;var c=b.corners[1].x-b.corners[0].x;e=b.corners[1].y-b.corners[0].y;0<=d*e-g*c?a.anchor.y+a.corners[3].y/f<b.anchor.y+b.corners[0].y/f?(f=a.corners[3],d=b.corners[0],e=b.corners[1],g=1):(f=b.corners[0],d=a.corners[3],e=a.corners[2],g=-1):a.anchor.y+a.corners[2].y/f>b.anchor.y+b.corners[1].y/f?(f=a.corners[2],d=b.corners[0],e=b.corners[1],g=1):(f=b.corners[1],d=a.corners[3],e=a.corners[2],
g=-1)}else d=a.corners[2].x-a.corners[1].x,g=a.corners[2].y-a.corners[1].y,c=b.corners[3].x-b.corners[0].x,e=b.corners[3].y-b.corners[0].y,0>d*e-g*c?a.anchor.y+a.corners[1].y/f>b.anchor.y+b.corners[0].y/f?(f=a.corners[1],d=b.corners[0],e=b.corners[3],g=1):(f=b.corners[0],d=a.corners[1],e=a.corners[2],g=-1):a.anchor.y+a.corners[2].y/f<b.anchor.y+b.corners[3].y/f?(f=a.corners[2],d=b.corners[0],e=b.corners[3],g=1):(f=b.corners[3],d=a.corners[1],e=a.corners[2],g=-1);c=e.x-d.x;e=e.y-d.y;return g*((f.y-
d.y)*c-(f.x-d.x)*e)/((a.anchor.x-b.anchor.x)*e-(a.anchor.y-b.anchor.y)*c)};c._calcExtZoomY=function(a,b,f){var d,e,c;if(a.anchor.x+a.corners[3].x/f<b.anchor.x+b.corners[1].x/f){d=a.corners[3].x-a.corners[2].x;c=a.corners[3].y-a.corners[2].y;var h=b.corners[0].x-b.corners[1].x;e=b.corners[0].y-b.corners[1].y;0>d*e-c*h?a.anchor.x+a.corners[2].x/f<b.anchor.x+b.corners[1].x/f?(f=a.corners[2],d=b.corners[1],e=b.corners[0],c=1):(f=b.corners[1],d=a.corners[2],e=a.corners[3],c=-1):a.anchor.x+a.corners[3].x/
f>b.anchor.x+b.corners[0].x/f?(f=a.corners[3],d=b.corners[1],e=b.corners[0],c=1):(f=b.corners[0],d=a.corners[2],e=a.corners[3],c=-1)}else d=a.corners[3].x-a.corners[0].x,c=a.corners[3].y-a.corners[0].y,h=b.corners[2].x-b.corners[1].x,e=b.corners[2].y-b.corners[1].y,0<d*e-c*h?a.anchor.x+a.corners[0].x/f>b.anchor.x+b.corners[1].x/f?(f=a.corners[0],d=b.corners[1],e=b.corners[2],c=1):(f=b.corners[1],d=a.corners[0],e=a.corners[3],c=-1):a.anchor.x+a.corners[3].x/f<b.anchor.x+b.corners[2].x/f?(f=a.corners[3],
d=b.corners[1],e=b.corners[2],c=1):(f=b.corners[2],d=a.corners[0],e=a.corners[3],c=-1);h=e.x-d.x;e=e.y-d.y;return c*((f.y-d.y)*h-(f.x-d.x)*e)/((a.anchor.x-b.anchor.x)*e-(a.anchor.y-b.anchor.y)*h)};return c}();n.ConflictEngine=l});