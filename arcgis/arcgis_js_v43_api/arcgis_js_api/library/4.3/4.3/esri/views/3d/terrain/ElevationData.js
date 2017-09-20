// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../layers/support/rasterFormats/LercCodec","./TerrainConst","../support/mathUtils"],function(w,x,u,v,t){return function(){function n(a,c,b,f){this.samplerData=null;this.level=a;this.i=c;this.j=b;this.extent=f}n.prototype.computeMinMaxValue=function(a,c,b,f){var h=Infinity,k=-Infinity;a-=this.level;var d=Math.pow(2,a);if(Math.floor(c/d)===this.i&&Math.floor(b/d)===this.j&&0<a){var m=this.samplerData.width,p=this.samplerData.pixelData,n=.5*v.ELEVATION_NODATA_VALUE;
a=(m-1)/d;b=(b-this.j*d)*a;c=(c-this.i*d)*a;if(1>a){var d=Math.floor(b),g=Math.floor(c),e=d+g*m,l=p[e],q=p[e+1],r=p[e+m],e=p[e+m+1];if(l+q+r+e<n)return h=t.bilerp(l,q,r,e,b-d,c-g),k=t.bilerp(l,q,r,e,b-d+a,c-g),m=t.bilerp(l,q,r,e,b-d,c-g+a),a=t.bilerp(l,q,r,e,b-d+a,c-g+a),f[0]=Math.min(h,k,m,a),f[1]=Math.max(h,k,m,a),f;b=d;c=g;a=1}else b=Math.floor(b),c=Math.floor(c),a=Math.ceil(a);for(d=b;d<=b+a;d++)for(g=c;g<=c+a;g++)e=d+g*m,l=p[e],l<n?(h=Math.min(h,l),k=Math.max(k,l)):(h=0<h?0:h,k=0>k?0:k)}f[0]=
h;f[1]=k;return f};n.createFromLERC=function(a,c,b,f){b=u.decode(b,f);a=new n(a[0],a[1],a[2],c);a.samplerData={pixelData:b.pixelData,width:b.width,height:b.height,minValue:b.minValue,maxValue:b.maxValue,noDataValue:b.noDataValue,safeWidth:.99999999*(b.width-1),dx:(b.width-1)/(a.extent[2]-a.extent[0]),dy:(b.width-1)/(a.extent[3]-a.extent[1]),x0:a.extent[0],y1:a.extent[3]};a.bounds=[a.samplerData.minValue,-3E38<a.samplerData.maxValue?a.samplerData.maxValue:0];return a};return n}()});