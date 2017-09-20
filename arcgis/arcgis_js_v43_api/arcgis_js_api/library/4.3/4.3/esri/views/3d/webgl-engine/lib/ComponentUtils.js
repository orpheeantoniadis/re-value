// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/arrayUtils"],function(m,f,w){function n(a){void 0===a&&(a=!0);return{isVisibleBit:!a,data:new Uint32Array(0)}}function r(a,b){return t(a,b,!0)}function u(a,b){return t(a,b,!1)}function t(a,b,c){var d=!1;a=a||x;var e=a.data;b=b.length-1;var f=8*e.BYTES_PER_ELEMENT,d=e.length*f;a=c===a.isVisibleBit;if(0===e.length||0===b)d=!a;else if(d<b&&!a)d=!0;else{var k=p[f];c=p[0];for(var h=0;h<e.length-1;h++)if(d=!a&&e[h]!==k||a&&e[h]!==c)return d;d=e.length-1;b=p[(b-
1)%f+1];d=!a&&(e[d]&b)!==b||a&&(e[d]&b)!==c}return d}function v(a){return 0<a.length}function q(a,b,c,d){var e=c/d|0;return 0!==(b[e]&1<<c-e*d)===a}f.updateVisibility=function(a,b,c,d){if(c<b.length-1){null==a&&(a=n());var e=a.data,f=8*e.BYTES_PER_ELEMENT,k=c/f|0,h=c-f*k;b=(b.length-1-1)/f|0;var g=e;d=d===a.isVisibleBit;c<g.length*f||!d||(c=Math.max(k+1,Math.ceil(1.5*g.length)),c=Math.min(c,b+1),e=new Uint32Array(c),e.set(g));k<e.length&&(e[k]=e[k]&~(1<<h)|(d?1:0)<<h);a.data=e}return a};f.getVisibility=
function(a,b){if(null!=a){var c=a.isVisibleBit,d=a.data,e=8*d.BYTES_PER_ELEMENT;return b<d.length*e?q(c,d,b,e):!a.isVisibleBit}return!0};f.createVisibilityCache=function(a){void 0===a&&(a=0);return{startComponentIdx:a}};f.lookupOffsetVisibility=function(a,b,c,d){if(null==a)return!0;var e=!a.isVisibleBit;if(0<b.length&&c<b[b.length-1]){var f=a.isVisibleBit;a=a.data;var k=8*a.BYTES_PER_ELEMENT,h=a.length*k,g=d?d.startComponentIdx:null;if(!(g&&b[g]<=c&&b[g+1]>c)){var l;if(l=g)l=g+1,l=b[l]<=c&&b[l+1]>
c;g=l?g+1:w.binaryIndexOf(b,c,!0)}g<h&&(e=q(f,a,g,k));d&&(d.startComponentIdx=g)}return e};f.hideAllComponents=function(a){if(null==a)a=n(!1);else{a.isVisibleBit=!0;for(var b=0;b<a.data.length;b++)a.data[b]=0}return a};f.unhideAllComponents=function(a){var b;if(null!=a)for(b=a,b.isVisibleBit=!1,a=0;a<b.data.length;a++)b.data[a]=0;return b};f.generateVisibleIndexRanges=function(a,b){var c;if(a)if(v(b))if(0===a.data.length)c=[],b=[[b[0],b[b.length-1]-1]],c=a.isVisibleBit?c:b;else{c=[];var d=a.isVisibleBit;
a=a.data;for(var e=8*a.BYTES_PER_ELEMENT,f=a.length*e,k=b.length-1,h=null,g=0;g<f&&g<k;g++){var l=q(d,a,g,e);if(l!==h){var h=b[g],m=c[c.length-1];l?c.push([h,-1]):m&&(m[1]=h-1);h=l}}(d=c[c.length-1])&&-1===d[1]&&(d[1]=b[b.length-1]-1)}else c=[],c=a.isVisibleBit?c:null;else c=null;return c};f.defaultVisibilities=n;f.isAllVisible=function(a,b){return!u(a,b)};f.isAllHidden=function(a,b){return!r(a,b)};f.hasVisible=r;f.hasHidden=u;var x=n();f.createOffsets=function(a){return Array.isArray(a)?new Uint32Array(a):
a};f.hasComponent=function(a,b){return b<a.length-1};f.hasComponents=v;var p=[];for(m=0;65>m;m++)p.push(Math.pow(2,m)-1)});