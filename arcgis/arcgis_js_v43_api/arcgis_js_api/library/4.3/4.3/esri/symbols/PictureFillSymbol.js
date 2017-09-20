// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/lang ../core/lang ../core/screenUtils ../core/urlUtils ./FillSymbol".split(" "),function(l,m,g,c,h,n){var k={xscale:1,yscale:1,xoffset:0,yoffset:0,width:12,height:12},d=l(n,{declaredClass:"esri.symbols.PictureFillSymbol",properties:{type:"picture-fill-symbol",url:{dependsOn:["source"],json:{read:!1},get:function(){return this.source?this.source.url:void 0},set:function(a){var b;a&&0===a.indexOf("data:")?(b=a.substring(5,a.indexOf(";")),this.source={url:a,contentType:b,
imageData:a.substring(13+b.length)}):this.source={url:a}}},xscale:{value:1,json:{write:!0}},yscale:{value:1,json:{write:!0}},width:{value:12,cast:c.toPt,json:{write:!0}},height:{value:12,cast:c.toPt,json:{write:!0}},xoffset:{value:0,cast:c.toPt,json:{write:!0}},yoffset:{value:0,cast:c.toPt,json:{write:!0}},source:{json:{read:{source:["imageData","url"],reader:function(a,b,c){a=h.read(b.url,c);return b.imageData?{url:a,contentType:b.contentType,imageData:b.imageData}:{url:a}}},write:function(a,b,c,
f){a.imageData&&(b.imageData=a.imageData);a.contentType&&(b.contentType=a.contentType);a.url&&(b.url=h.write(a.url,f))}}}},getDefaults:function(){return m.mixin(this.inherited(arguments),k)},normalizeCtorArgs:function(a,b,d,f){if(a&&"string"!==typeof a&&null==a.imageData)return a;var e={};a&&(e.url=a);b&&(e.outline=b);null!=d&&(e.width=c.toPt(d));null!=f&&(e.height=c.toPt(f));return e},clone:function(){return new d({color:g.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),
source:g.clone(this.source),width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale})}});d.defaultProps=k;return d});