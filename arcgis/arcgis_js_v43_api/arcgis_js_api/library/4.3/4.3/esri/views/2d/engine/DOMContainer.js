// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./Container"],function(m,n,g,l){return function(c){function a(){return null!==c&&c.apply(this,arguments)||this}g(a,c);a.prototype.createElement=function(){var b=document.createElement("div");b.setAttribute("class","esri-display-object");return b};a.prototype.setElement=function(b){this.element=b};a.prototype.render=function(b){var d=this.element.style;this.visible?(d.display="block",d.opacity=""+this.opacity,c.prototype.render.call(this,
b)):d.display="none"};a.prototype.prepareChildrenRenderParameters=function(b){return b};a.prototype.attachChild=function(b,d){var a=b.element;a||(a=b.createElement(),b.setElement(a));return b.attach(d)};a.prototype.detachChild=function(b,a){b.detach(a);this.element.removeChild(b.element);b.setElement(null)};a.prototype.renderChildren=function(b){for(var a=this.children,h=this.element.childNodes,e=0,g=a.length,f=0;f<g;f++)if(a[f].attached){var k=a[f].element;h[e]!==k&&(null!=h[e+1]?this.element.insertBefore(k,
h[e]):this.element.appendChild(k));e+=1}c.prototype.renderChildren.call(this,b)};a.prototype.renderChild=function(b,a){return b.render(a)};return a}(l)});