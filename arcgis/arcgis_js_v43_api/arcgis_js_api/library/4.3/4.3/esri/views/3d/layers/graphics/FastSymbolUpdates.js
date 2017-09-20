// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../renderers/support/utils","../../lib/glMatrix","../../support/mathUtils"],function(D,n,w,x,z){function l(a){return null!==a&&void 0!==a}function m(a){return"number"===typeof a}function f(a,b){a&&a.push(b)}function g(a,b,c,d,e){var h=a.minSize,g=a.maxSize;if(a.expression)return f(e,"Could not convert size info: expression not supported"),!1;if(a.useSymbolValue)return a=d.symbolSize[c],b.minSize[c]=a,b.maxSize[c]=a,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=
1,!0;if(l(a.field)){if(l(a.stops)){if(2===a.stops.length&&m(a.stops[0].size)&&m(a.stops[1].size))return y(a.stops[0].size,a.stops[1].size,a.stops[0].value,a.stops[1].value,b,c),b.type[c]=1,!0;f(e,"Could not convert size info: stops only supported with 2 elements");return!1}if(m(h)&&m(g)&&l(a.minDataValue)&&l(a.maxDataValue))return y(h,g,a.minDataValue,a.maxDataValue,b,c),b.type[c]=1,!0;if(null!=w.meterIn[a.valueUnit])return b.minSize[c]=-Infinity,b.maxSize[c]=Infinity,b.offset[c]=0,b.factor[c]=1/
w.meterIn[a.valueUnit],b.type[c]=1,!0;"unknown"===a.valueUnit?f(e,"Could not convert size info: proportional size not supported"):f(e,"Could not convert size info: scale-dependent size not supported");return!1}if(!l(a.field)){if(a.stops&&a.stops[0]&&m(a.stops[0].size))return b.minSize[c]=a.stops[0].size,b.maxSize[c]=a.stops[0].size,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=1,!0;if(m(h))return b.minSize[c]=h,b.maxSize[c]=h,b.offset[c]=h,b.factor[c]=0,b.type[c]=1,!0}f(e,"Could not convert size info: unsupported variant of sizeInfo");
return!1}function y(a,b,c,d,e,h){d=0<Math.abs(d-c)?(b-a)/(d-c):0;e.minSize[h]=0<d?a:b;e.maxSize[h]=0<d?b:a;e.offset[h]=a-c*d;e.factor[h]=d}function A(a,b,c,d){if(a.normalizationField||a.valueRepresentation)return f(d,"Could not convert size info: unsupported property"),null;var e=a.field;if(null!=e&&"string"!==typeof e)return f(d,"Could not convert size info: field is not a string"),null;if(!b.size)b.size={field:a.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};else if(a.field)if(!b.size.field)b.size.field=
a.field;else if(a.field!==b.size.field)return f(d,"Could not convert size info: multiple fields in use"),null;switch(a.axis){case "width":return(e=g(a,b.size,0,c,d))?b:null;case "height":return(e=g(a,b.size,2,c,d))?b:null;case "depth":return(e=g(a,b.size,1,c,d))?b:null;case "width-and-depth":return(e=g(a,b.size,0,c,d))&&g(a,b.size,1,c,d),e?b:null;case null:case void 0:case "all":return(e=(e=(e=g(a,b.size,0,c,d))&&g(a,b.size,1,c,d))&&g(a,b.size,2,c,d))?b:null;default:return f(d,'Could not convert size info: unknown axis "'+
a.axis+'""'),null}}function B(a,b,c){for(var d=0;3>d;++d){var e=b.unitInMeters;1===a.type[d]&&(e*=b.modelSize[d],a.type[d]=2);a.minSize[d]/=e;a.maxSize[d]/=e;a.offset[d]/=e;a.factor[d]/=e}if(0!==a.type[0])b=0;else if(0!==a.type[1])b=1;else if(0!==a.type[2])b=2;else return f(c,"No size axis contains a valid size or scale"),!1;for(d=0;3>d;++d)0===a.type[d]&&(a.minSize[d]=a.minSize[b],a.maxSize[d]=a.maxSize[b],a.offset[d]=a.offset[b],a.factor[d]=a.factor[b],a.type[d]=a.type[b]);return!0}function p(a,
b,c){a[4*b+0]=c.r/255;a[4*b+1]=c.g/255;a[4*b+2]=c.b/255;a[4*b+3]=c.a}function C(a,b,c){if(a.normalizationField)return f(c,"Could not convert color info: unsupported property"),null;if("string"===typeof a.field)if(a.stops){if(8<a.stops.length)return f(c,"Could not convert color info: too many color stops"),null;b.color={field:a.field,values:[],colors:[]};a=a.stops;for(c=0;8>c;++c){var d=a[Math.min(c,a.length-1)];b.color.values[c]=d.value;p(b.color.colors,c,d.color)}}else if(a.colors){if(!l(a.minDataValue)||
!l(a.maxDataValue))return f(c,"Could not convert color info: missing data values"),null;if(2!==a.colors.length)return f(c,"Could not convert color info: invalid colors array"),null;b.color={field:a.field,values:[],colors:[]};b.color.values[0]=a.minDataValue;p(b.color.colors,0,a.colors[0]);b.color.values[1]=a.maxDataValue;p(b.color.colors,1,a.colors[1]);for(c=2;8>c;++c)b.color.values[c]=a.maxDataValue,p(b.color.colors,c,a.colors[1])}else return f(c,"Could not convert color info: missing stops or colors"),
null;else if(a.stops&&0<=a.stops.length||a.colors&&0<=a.colors.length)for(a=a.stops&&0<=a.stops.length?a.stops[0].color:a.colors[0],b.color={field:null,values:Array(8),colors:Array(32)},c=0;8>c;c++)b.color.values[c]=Infinity,p(b.color.colors,c,a);else return f(c,"Could not convert color info: no field and no colors/stops"),null;return b}function q(a,b,c){return a?(a=a.reduce(function(a,e){if(!a)return a;if(e.valueExpression)return f(c,"Could not convert visual variables: arcade expressions not supported"),
null;switch(e.type){case "size":return A(e,a,b,c);case "color":return C(e,a,c);case "rotation":return"string"===typeof e.field?a.rotation={field:e.field,rotationType:e.rotationType}:(f(c,"Could not convert rotation info: field is not a string"),a=null),a;default:return f(c,"Could not convert visual variables: unsupported type "+e.type),null}},{size:null,color:null,rotation:null}))&&a.size&&!B(a.size,b,c)?null:a:null}function r(a){return a&&(null!=a.size||null!=a.rotation)}function t(a,b,c){return!!a!==
!!b||a&&a.field!==b.field?!1:!0}function u(a,b){var c={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvAnchorValue:null,vvRotationEnabled:!1,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null},d=r(a);a&&a.size?(c.vvSizeEnabled=!0,c.vvSizeMinSize=a.size.minSize,c.vvSizeMaxSize=a.size.maxSize,c.vvSizeOffset=a.size.offset,c.vvSizeFactor=a.size.factor):a&&d&&(c.vvSizeValue=b.transformation.scale);a&&a.rotation&&(c.vvRotationEnabled=!0);
a&&d&&(c.vvRotationValue=b.transformation.rotation,c.vvAnchorValue=b.transformation.anchor);a&&a.color&&(c.vvColorEnabled=!0,c.vvColorValues=a.color.values,c.vvColorColors=a.color.colors);return c}n.convertVisualVariables=q;n.initFastSymbolUpdatesState=function(a,b,c){return b&&a&&!a.disableFastUpdates?(a=q(a.visualVariables,c))?{enabled:!0,visualVariables:a,materialParameters:u(a,c),customTransformation:r(a)}:{enabled:!1}:{enabled:!1}};n.updateFastSymbolUpdatesState=function(a,b,c){if(!b||!a.enabled)return!1;
var d=a.visualVariables;b=q(b.visualVariables,c);if(!(b&&t(d.size,b.size,"size")&&t(d.color,b.color,"color")&&t(d.rotation,b.rotation,"rotation")))return!1;a.visualVariables=b;a.materialParameters=u(b,c);a.customTransformation=r(b);return!0};n.getMaterialParams=u;var v;(function(a){var b=x.mat4d,c=x.vec3,d=b.create(),e=c.create();a.evaluateModelTransform=function(a,c,f){if(!a.vvSizeEnabled&&!a.vvRotationEnabled)return f;b.identity(d);var k=0;a.vvRotationEnabled&&(k+=c[2]);null!=a.vvRotationValue&&
(k+=z.deg2rad(a.vvRotationValue));0!==k&&b.rotateZ(d,-k,d);if(a.vvSizeEnabled){for(k=0;3>k;++k){var g=a.vvSizeOffset[k]+c[0]*a.vvSizeFactor[k],h=k;var l=a.vvSizeMinSize[k],m=a.vvSizeMaxSize[k],g=g<l?l:g>m?m:g;e[h]=g}b.scale(d,e,d)}else b.scale(d,a.vvSizeValue,d);b.translate(d,a.vvAnchorValue,d);b.multiply(f,d,d);return d}})(v||(v={}));n.evaluateModelTransform=v.evaluateModelTransform});