// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/Warning","../SimpleRenderer","../UniqueValueRenderer","../ClassBreaksRenderer"],function(d,g,h,k){var e={simple:g,uniqueValue:h,classBreaks:k},f={fromJson:function(a){try{throw Error("fromJson is deprecated, use fromJSON instead");}catch(b){console.warn(b.stack)}return f.fromJSON(a)},read:function(a,b,c){if(a&&(a.styleName||a.styleUrl)&&"uniqueValue"!==a.type)return c&&c.messages&&c.messages.push(new d("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+
a.type+"'",{definition:a,context:c})),null;if(b=a?e[a.type]||null:null)return b=new b,b.read(a,c),b;c&&c.messages&&a&&c.messages.push(new d("renderer:unsupported","Renderers of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:c}));return null},fromJSON:function(a){var b=a?e[a.type]||null:null;return b?b.fromJSON(a):null}};return f});