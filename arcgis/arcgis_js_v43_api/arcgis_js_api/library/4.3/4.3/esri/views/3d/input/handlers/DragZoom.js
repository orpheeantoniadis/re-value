// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","./support"],function(c,f,g,h,k){c=function(c){function e(l,d,a){var b=c.call(this,"esri.views.3d.input.handlers.DragZoom"+d,!0)||this;b.view=l;b.pointerType=d;b.registerIncoming("drag",a,function(a){return b._handleDrag(a)});return b}g(e,c);e.prototype._handleDrag=function(c){var d=c.data;if(!(1<d.pointers.length)){var a=d.pointers[0];if(k.eventMatchesPointerType(a.startEvent.native,this.pointerType)){var a=
[a.currentEvent.x,this.view.height-a.currentEvent.y],b=this.view.navigation.zoom;switch(d.action){case "start":b.begin(a);break;case "update":b.update(a);break;case "end":b.end(a)}c.stopPropagation()}}};return e}(h.InputHandler);f.DragZoom=c});