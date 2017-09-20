/*! ArcGIS API for JavaScript 4.3 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["esri/widgets/ColorPicker","esri/widgets/ColorPicker/colorUtils","esri-playground-js/utils/DataProvider","dojo/Stateful","dojo/_base/declare","dojo/dom"],function(e,t,n,a,r,o){var i={},l=r([a],{}),s=function(n){var a=new l,r=n.className||n.name;a.set("className",r);var i=n.properties;return i.forEach(function(n){var r=n.name,l=n.type,u=n.value,d=n.attributes,c=n.default,v=n.visibility,f=o.byId(n.domId+"-ID");if(a.set(r,null),"Number"===l||"String"===l){if("Number"===l&&d&&d.min&&d.max){var h=o.byId(n.domId+"-RangeID"),m=0;m?h.addEventListener("change",function(){a.set(r,h.value)}):h.addEventListener("input",function(){a.set(r,h.value)})}if(a.watch(r,function(e,t,n){if(c&&null===n?f.value=c:f.value=n,d&&d.min&&d.max&&(h.value=f.value),"url"===r){var o=new Image;o.addEventListener("load",function(){a.set("width",this.naturalWidth),a.set("height",this.naturalHeight)}),o.src=f.value}}),f.addEventListener("change",function(){if("Number"===l&&d&&f.value<d.min){var e=o.byId("msg");e.innerHTML=r+" cannot be less than "+d.min+"!";var t=new Event("errMsg");e.dispatchEvent(t),a.set(r,null)}else f.value==c?a.set(r,null):a.set(r,f.value);if(d&&d.min&&d.max){var i=o.byId(n.domId+"-RangeID");i.value=f.value}if("url"===r){var s=new Image;s.addEventListener("load",function(){a.set("width",this.naturalWidth),a.set("height",this.naturalHeight)}),s.src=f.value}},!1),v){var y;i.forEach(function(e){e.name===v.name&&(y=e)});var g=o.byId(y.domId+"-ID"),p=f.parentNode.parentNode;g.value!==v.value&&(p.style.display="none"),g.addEventListener("change",function(){g.value===v.value?(p.style.display="-webkit-box",p.style.display="-moz-box",p.style.display="-ms-flexbox",p.style.display="-webkit-flex",p.style.display="flex",void 0!==c&&a.set(r,c)):(p.style.display="none",a.set(r,null))})}u&&a.set(r,u)}else if("Boolean"===l)a.watch(r,function(e,t,n){f.checked=n}),f.addEventListener("change",function(){f.checked?a.set(r,!0):a.set(r,!1)},!1);else if("Color"===l){var b=o.byId(n.domId+"-TextID");if(b){var I=new e({title:"color-picker",showRecentColors:!1,showTransparencySlider:!0,showSuggestedColors:!1,required:!0},f);I.startup();var w=c||[0,0,0,1];I.set("color",w),b.innerHTML="["+w+"]",b.style.background=I.get("color"),I.on("color-change",function(){var e=I.get("color"),n=t.getContrastingColor(e),o=e.toRgba();o[3]=Math.round(100*o[3])/100;var i=w.every(function(e,t){return e===o[t]});i?a.set(r,null):a.set(r,o),o.constructor===Array&&(o="["+o+"]"),b.innerHTML=o,b.style.background=e,b.style.color=n}),a.watch(r,function(e,t,n){null===n&&(n=w),I.set("color",n)})}}else if("Class"===l||"Object"===l){var E=n.config||n;if(E&&E.properties){a.set(r,s(E));var L=o.byId(n.domId+"-TextID"),b=[],x=a[r];E.properties.forEach(function(e){var t=e.default;null!=t?("number"==typeof t&&(t=Math.round(100*t)/100),t.constructor===Array&&(t="["+t+"]"),b.push(t)):b.push(e.name)}),L.innerHTML=b.join(", "),x.watch(function(){b=[],E.properties.forEach(function(e){var t=x[e.name]||e.default||e.name;"number"==typeof t&&(t=Math.round(100*t)/100),t.constructor===Array&&(t="["+t+"]"),b.push(t)}),L.innerHTML=b.join(", ")})}}}),a};return i.getStatefullObject=s,i.StatefulClass=l,i});