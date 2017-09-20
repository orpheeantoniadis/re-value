// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../input/InputHandler ./support ../../navigation/NavigationConstants".split(" "),function(b,h,k,l,m,g){b=function(b){function f(n,d,a,e){var c=b.call(this,"esri.views.3d.input.handlers.DragRotate",!0)||this;c.view=n;c.pointerType=d;c.pivotPoint=a;c.registerIncoming("drag",e,function(a){return c._handleDrag(a)});switch(a){case "center":c._navigationPivot=g.Rotate.PivotPoint.POI;break;case "eye":c._navigationPivot=g.Rotate.PivotPoint.EYE}return c}
k(f,b);f.prototype._handleDrag=function(b){var d=b.data;if(!(1<d.pointers.length)){var a=d.pointers[0];if(m.eventMatchesPointerType(a.startEvent.native,this.pointerType)){var a=[a.currentEvent.x,this.view.height-a.currentEvent.y],e=this.view.navigation.rotate;switch(d.action){case "start":e.begin(a,this._navigationPivot);break;case "update":e.update(a,this._navigationPivot);break;case "end":e.end(a)}b.stopPropagation()}}};return f}(l.InputHandler);h.DragRotate=b});