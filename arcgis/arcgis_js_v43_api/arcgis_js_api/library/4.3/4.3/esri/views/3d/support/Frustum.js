// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../core/declare","../lib/glMatrix","../support/earthUtils","../webgl-engine/lib/Util"],function(g,f,h,k){var c=f.vec3d,l=f.vec4d;return g([],{constructor:function(){this.planes=Array(6);this.points=Array(8);this.lines=Array(12);this.origin=c.create();this.direction=c.create();this.dirty=!1;this._altitude=null;for(var a=0;6>a;a++)this.planes[a]=l.create();for(a=0;8>a;a++)this.points[a]=c.create();for(a=0;12>a;a++)this.lines[a]={origin:null,direction:c.create(),endpoint:null}},_makeLine:function(a,
b,d){a.origin=b;a.endpoint=d;c.direction(d,b,a.direction)},update:function(a){if(this.dirty){k.matrix2frustumPlanes(a.viewMatrix,a.projectionMatrix,this.points,this.planes);for(var b=0;4>b;b++){var d=b,e=b+4;this._makeLine(this.lines[b],this.points[d],this.points[e]);this._makeLine(this.lines[b+4],this.points[d],3===b?this.points[0]:this.points[d+1]);this._makeLine(this.lines[b+8],this.points[e],3===b?this.points[4]:this.points[e+1])}c.set(a.eye,this.origin);c.set(a.viewForward,this.direction);this._altitude=
null;this.dirty=!1}},altitude:function(){return null!=this._altitude?this._altitude:this._altitude=c.length(this.origin)-h.earthRadius}})});