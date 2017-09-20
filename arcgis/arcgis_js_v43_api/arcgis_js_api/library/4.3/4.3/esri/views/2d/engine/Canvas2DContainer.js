// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./Container"],function(k,l,g,h){return function(d){function c(){return null!==d&&d.apply(this,arguments)||this}g(c,d);c.prototype.createElement=function(){var a=document.createElement("canvas");a.setAttribute("class","esri-display-object");return a};c.prototype.setElement=function(a){this.element=a};c.prototype.render=function(a){var b=this.element.style;this.visible?(b.display="block",b.opacity=""+this.opacity,this.element.width=
a.state.width,this.element.height=a.state.height,d.prototype.render.call(this,a)):b.display="none"};c.prototype.prepareChildrenRenderParameters=function(a){a.context=this.element.getContext("2d");return a};c.prototype.beforeRenderChildren=function(a,b){a=b.context;var c=b.state;a.save();if(c.spatialReference.isWrappable){var e=c.width,f=c.height;b=c.rotation*Math.PI/180;var d=Math.round(e*Math.abs(Math.cos(b))+f*Math.abs(Math.sin(b))),c=Math.round(c.worldScreenWidth);c<d&&(e*=.5,f*=.5,b&&(a.translate(e,
f),a.rotate(b),a.translate(-e,-f)),a.beginPath(),a.rect(e-.5*c,f-.5*d,c,d),a.closePath(),b&&(a.translate(e,f),a.rotate(-b),a.translate(-e,-f)),a.clip("evenodd"))}};c.prototype.afterRenderChildren=function(a,b){b.context.restore()};c.prototype.attachChild=function(a,b){return a.attach(b)};c.prototype.detachChild=function(a,b){a.detach(b)};c.prototype.renderChild=function(a,b){b.context.save();a.render(b);b.context.restore()};return c}(h)});