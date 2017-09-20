// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../request ../../core/lang ../../core/Error".split(" "),function(h,d,n,p,q,e){function l(b){var a=b.service.tileServers,a=(a&&a.length?a[b.row%a.length]:b.service.url)+"/tilemap/"+b.level+"/"+b.row+"/"+b.col+"/"+b.width+"/"+b.height;(b=b.service.query)&&(a=a+"?"+b);return a}h=function(){function b(){this.location={left:0,top:0,width:0,height:0};this.byteSize=40}b.prototype.getAvailability=function(a,b){if(this._isAllAvailable)return"available";if(this._isAllUnvailable)return"unavailable";
a=(a-this.location.top)*this.location.width+(b-this.location.left);b=a>>3;var c=this._tileAvailabilityBitSet;return 0>b||b>c.length?"unknown":c[b]&1<<a%8?"available":"unavailable"};b.prototype._updateFromData=function(a){for(var b=!0,e=!0,f=new Uint8Array(Math.ceil(this.location.width*this.location.height/8)),k=0,g=0;g<a.length;g++){var d=g%8;a[g]?(e=!1,f[k]|=1<<d):b=!1;7===d&&++k}this._isAllUnvailable=e;this._isAllAvailable=b;this._isAllAvailable||this._isAllUnvailable||(this._tileAvailabilityBitSet=
f,this.byteSize+=f.length)};b.fromDefinition=function(a,c){var d=a.service.request||p,f=a.row,k=a.col,g=a.width,h=a.height,m={failOk:!0,callbackParamName:"callback"};c=c?n.mixin(m,c):m;return d(l(a),c).then(function(a){var c=a.data;if(c.location&&(c.location.top!==f||c.location.left!==k||c.location.width!==g||c.location.height!==h))throw new e("tilemap:location-mismatch","Tilemap response for different location than requested",{response:c,definition:{top:f,left:k,width:g,height:h}});return b.fromJSON(a.data)})};
b.fromJSON=function(a){b.validateJSON(a);var c=new b;c.location=Object.freeze(q.clone(a.location));c._updateFromData(a.data);return Object.freeze(c)};b.validateJSON=function(a){if(!a||!a.location)throw new e("tilemap:missing-location","Location missing from tilemap response");if(!a.valid)throw new e("tilemap:invalid","Tilemap response was marked as invalid");if(!a.data)throw new e("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(a.data))throw new e("tilemap:data-mismatch",
"Data must be an array of numbers");if(a.data.length!==a.location.width*a.location.height)throw new e("tilemap:data-mismatch","Number of data items does not match width/height of tilemap");};return b}();d.Tilemap=h;d.tilemapDefinitionId=function(b){return b.level+"/"+b.row+"/"+b.col+"/"+b.width+"/"+b.height};d.tilemapDefinitionUrl=l;Object.defineProperty(d,"__esModule",{value:!0});d.default=h});