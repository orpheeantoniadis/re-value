// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports dojo/has ../wire ../utils ../get ../set".split(" "),function(p,g,q,k,l,h,m){function n(b,a,d){var e=l.getProperties(b);return k.wire(b,d.aliasOf,function(){e.propertyInvalidated(a)})}g.AliasedPropertyExtension={processClassPropertyMetadata:function(b,a,d,e){var c=a.aliasOf;if(c&&(b=c.split(".")[0],null!=d[b]&&!a.set&&!a.get)){var f;a.get=function(){var a=h.default(this,c);if("function"===typeof a){f||(f=c.split(".").slice(0,-1).join("."));var b=h.default(this,f);b&&(a=a.bind(b))}return a};
a.readOnly||(a.set=function(a){return m.default(this,c,a)})}},instanceCreated:function(b,a,d){for(var e=0;e<d.length;e++){var c=d[e],f=a[c];f.aliasOf&&n(b,c,f)}}};Object.defineProperty(g,"__esModule",{value:!0});g.default=g.AliasedPropertyExtension});