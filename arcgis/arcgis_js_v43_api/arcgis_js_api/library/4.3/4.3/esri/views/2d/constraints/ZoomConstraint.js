// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../layers/support/LOD".split(" "),function(d,v,r,g,a,t,u){d=k=function(d){function a(){var b=null!==d&&d.apply(this,arguments)||this;b._lodByScale={};b._scales=[];b.effectiveLODs=null;b.effectiveMinZoom=-1;b.effectiveMaxZoom=-1;b.effectiveMinScale=0;b.effectiveMaxScale=0;b.enabled=!0;b.lods=null;b.minZoom=-1;b.maxZoom=-1;
b.minScale=0;b.maxScale=0;b.snapToZoom=!0;return b}r(a,d);a.prototype.initialize=function(){var b=this,c=this.lods,h=this.minScale,a=this.maxScale,e=this.minZoom,f=this.maxZoom,d=-1,g=-1,k=!1,p=!1;0!==h&&0!==a&&h<a&&(a=[a,h],h=a[0],a=a[1]);if(c&&c.length){c=c.map(function(b){return b.clone()});c.sort(function(b,c){return c.scale-b.scale});c.forEach(function(b,c){return b.level=c});for(var m,n=0,q=c;n<q.length;n++){var l=q[n];!k&&0<h&&h>=l.scale&&(d=l.level,k=!0);!p&&0<a&&a>=l.scale&&(g=m?m.level:
-1,p=!0);m=l}-1===e&&(e=0===h?0:d);-1===f&&(f=0===a?c.length-1:g);e=Math.max(e,0);e=Math.min(e,c.length-1);f=Math.max(f,0);f=Math.min(f,c.length-1);e>f&&(h=[f,e],e=h[0],f=h[1]);h=c[e].scale;a=c[f].scale;c.splice(0,e);c.splice(f-e+1,c.length);c.forEach(function(c,a){b._lodByScale[c.scale]=c;b._scales[a]=c.scale});this._set("effectiveLODs",c);this._set("effectiveMinZoom",e);this._set("effectiveMaxZoom",f)}this._set("effectiveMinScale",h);this._set("effectiveMaxScale",a)};a.prototype.constrain=function(b,
c){if(!this.enabled||c&&b.scale===c.scale)return b;var a=this.effectiveMinScale,d=this.effectiveMaxScale,e=b.targetGeometry,f=c&&c.targetGeometry,g=0!==a&&b.scale>a;if(0!==d&&b.scale<d||g)a=g?a:d,f&&(c=(a-c.scale)/(b.scale-c.scale),e.x=f.x+(e.x-f.x)*c,e.y=f.y+(e.y-f.y)*c),b.scale=a;this.snapToZoom&&this.effectiveLODs&&(b.scale=this._getClosestScale(b.scale));return b};a.prototype.zoomToScale=function(b){if(!this.effectiveLODs)return 0;b-=this.effectiveMinZoom;b=Math.max(0,b);var c=this._scales;if(0>=
b)return c[0];if(b>=c.length)return c[c.length-1];var a=Math.round(b);return c[a]+(a-b)*(c[Math.round(b-.5)]-c[a])};a.prototype.scaleToZoom=function(b){if(!this.effectiveLODs)return-1;var c=this._scales,a=0,d=c.length-1,e,f;for(a;a<d;a++){e=c[a];f=c[a+1];if(e<=b)return a+this.effectiveMinZoom;if(f===b)return a+1+this.effectiveMinZoom;if(e>b&&f<b)return a+1-(b-f)/(e-f)+this.effectiveMinZoom}return a};a.prototype.snapScale=function(b,a){void 0===a&&(a=.95);if(!this.effectiveLODs)return b;b=this.scaleToZoom(b);
return(b+1)%Math.floor(b+1)>=a?this.zoomToScale(Math.ceil(b)):this.zoomToScale(Math.floor(b))};a.prototype.clone=function(){return new k({enabled:this.enabled,lods:this.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale})};a.prototype._getClosestScale=function(b){if(this._lodByScale[b])return this._lodByScale[b].scale;b=this._scales.reduce(function(a,d,g,e){return Math.abs(d-b)<=Math.abs(a-b)?d:a},this._scales[0]);return this._lodByScale[b].scale};return a}(a.declared(t));
g([a.property({readOnly:!0})],d.prototype,"effectiveLODs",void 0);g([a.property({readOnly:!0})],d.prototype,"effectiveMinZoom",void 0);g([a.property({readOnly:!0})],d.prototype,"effectiveMaxZoom",void 0);g([a.property({readOnly:!0})],d.prototype,"effectiveMinScale",void 0);g([a.property({readOnly:!0})],d.prototype,"effectiveMaxScale",void 0);g([a.property()],d.prototype,"enabled",void 0);g([a.property({type:[u]})],d.prototype,"lods",void 0);g([a.property()],d.prototype,"minZoom",void 0);g([a.property()],
d.prototype,"maxZoom",void 0);g([a.property()],d.prototype,"minScale",void 0);g([a.property()],d.prototype,"maxScale",void 0);g([a.property()],d.prototype,"snapToZoom",void 0);d=k=g([a.subclass("esri.views.2d.constraints.ZoomConstraint")],d);var k;return d});