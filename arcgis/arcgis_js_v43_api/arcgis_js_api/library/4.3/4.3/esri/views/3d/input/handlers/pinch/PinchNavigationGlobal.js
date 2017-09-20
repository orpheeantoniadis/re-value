// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../lib/glMatrix ../../util ./PinchNavigationBase ./MomentumNavigationGlobal".split(" "),function(q,n,t,a,r,u,v){var m;(function(a){a[a.Horizontal=0]="Horizontal";a[a.Vertical=1]="Vertical"})(m=n.PanMode||(n.PanMode={}));var p=a.vec3d.create(),w=16/180*Math.PI;q=function(n){function l(c,g){var b=n.call(this,c,g)||this;b.view=c;b._rotation={axis:a.vec3d.create(),valueSmooth:new r.ExponentialFalloff(.05)};b._panning={axis:a.vec3d.create(),
plane:{distance:0,normal:a.vec3d.create()},planarCenterScene:a.vec3d.create()};b._scaling={valueSmooth:new r.ExponentialFalloff(.05),centerScreen:a.vec2.create()};b._beginScenePoints={points:[],center:a.vec3d.create()};b._panMode=m.Horizontal;b._navigationSphereRadius=0;b._tmpN=a.vec3d.create();b._tmp2d=a.vec2.create();b._tmpPickPointScreen=a.vec2.create();b._tmpPickPointScene=a.vec3d.create();b._tmpCurrentPoints=[];b._tmpCurrentCenter=a.vec3d.create();b._tmpD=a.vec3d.create();b._momentumNavigation=
new v.MomentumNavigationGlobal(b,g);return b}t(l,n);Object.defineProperty(l.prototype,"momentum",{get:function(){return this._momentumNavigation},enumerable:!0,configurable:!0});l.prototype.onNavigationBegin=function(c){var g=this._tmpPickPointScreen,b=this._tmpPickPointScene,d=this._helper;this._rotation.valueSmooth.reset();this._scaling.valueSmooth.reset();a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,g);d.picker.pickPointInScreen(g,b)?this._navigationSphereRadius=
a.vec3d.length(b):this._navigationSphereRadius=Math.max(a.vec3d.length(this.beginCamera.center),.9*d.earthUtils.earthRadius);this._panMode=m.Horizontal;3E4>this.view.renderCoordsHelper.getAltitude(this.beginCamera.eye)&&(this._navigationSphereRadius>a.vec3d.length(this.beginCamera.eye)?this._panMode=m.Vertical:(a.vec3d.normalize(a.vec3d.subtract(this.beginCamera.eye,b,this._tmpN)),Math.abs(.5*Math.PI-Math.acos(a.vec3d.dot(b,this._tmpN)/a.vec3d.length(b)))<w&&(this._panMode=m.Vertical)));this._computeSpherePoints(c,
"startEvent",this._navigationSphereRadius,this.beginCamera,this._beginScenePoints.points);d.spherical.computePointCenter(this._beginScenePoints.points,this._navigationSphereRadius,this._beginScenePoints.center);this._panMode===m.Vertical&&(a.vec3d.normalize(a.vec3d.subtract(this.beginCamera.eye,this.beginCamera.center,this._panning.plane.normal)),this._panning.plane.distance=a.vec3d.dot(b,this._panning.plane.normal),a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,
this._tmp2d),this._helper.planar.intersectPlaneFromScreenPoint(this._panning.plane,this.beginCamera,this._tmp2d,this._panning.planarCenterScene))};l.prototype.onNavigationUpdate=function(c,g){var b=this._helper,d=c.data.pointers.length,k=1<d;if(this._panMode===m.Horizontal){var h=this._navigationSphereRadius;if(k){var e=c.data.startState.radius/c.data.currentState.radius,f=.001875*Math.min(Math.max(c.data.currentState.radius,40),120);this._scaling.valueSmooth.gain=f;this._scaling.valueSmooth.update(e);
b.spherical.applyZoom(h,this.view,g,this._scaling.valueSmooth.value);a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,this._scaling.centerScreen);this.momentum.addScaleValue(this._scaling.valueSmooth.value)}e=this._tmpCurrentPoints;f=this._tmpCurrentCenter;this._computeSpherePoints(c,"currentEvent",h,g,e);b.spherical.computePointCenter(e,h,f);var e=this._panning.axis,l=b.spherical.rotationFromPoints(h,this._beginScenePoints.center,f,e);b.applyRotation(g,p,e,l);
l=this._tmp2d;a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,l);this.momentum.addPanValue(l,f,e);if(k){k=this._rotation.axis;e=this._tmpCurrentPoints;a.vec3d.normalize(this._beginScenePoints.center,k);this._computeSpherePoints(c,"currentEvent",h,g,e);h=0;if(2===d)h=b.rotationFromPointsAroundAxis(e[0],this._beginScenePoints.points[0],k);else{for(f=0;f<d;f++)h+=b.rotationFromPointsAroundAxis(e[f],this._beginScenePoints.points[f],k);h/=d}d=this._rotation.valueSmooth.value;
h=b.normalizeRotationDelta(h-d);f=.00125*Math.min(Math.max(c.data.currentState.radius,40),120);this._rotation.valueSmooth.gain=f;this._rotation.valueSmooth.update(d+h);c=this._rotation.valueSmooth.value;this.momentum.addRotationValue(c);b.applyRotation(g,p,k,c)}}else d=this._panning.plane,k&&(e=c.data.startState.radius/c.data.currentState.radius,f=.001875*Math.min(Math.max(c.data.currentState.radius,40),120),this._scaling.valueSmooth.gain=f,this._scaling.valueSmooth.update(e),this.momentum.addScaleValue(this._scaling.valueSmooth.value),
this.momentum.setVerticalParameters(d,this._panning.planarCenterScene),b.planar.applyZoom(d,this.view,g,this._panning.planarCenterScene,this._scaling.valueSmooth.value)),e=this._tmpCurrentPoints,f=this._tmpCurrentCenter,this.computePlanePoints(c,"currentEvent",d,g,e),b.planar.computePointCenter(e,f),d=this._tmpD,a.vec3d.subtract(f,this._panning.planarCenterScene,d),a.vec3d.subtract(g.eye,d),a.vec3d.subtract(g.center,d),g.markViewDirty(),l=this._tmp2d,a.vec2.set2(c.data.currentState.center.x,this.view.height-
c.data.currentState.center.y,l),this.momentum.addPanValue(l,f,d),k&&(k=this._rotation.axis,a.vec3d.set(this._beginScenePoints.center,k),h=c.data.currentState.angle,d=this._rotation.valueSmooth.value,h=b.normalizeRotationDelta(h-d),f=.00125*Math.min(Math.max(c.data.currentState.radius,40),120),this._rotation.valueSmooth.gain=f,this._rotation.valueSmooth.update(d+h),c=this._rotation.valueSmooth.value,this.momentum.addRotationValue(c),b.applyRotation(g,p,k,c));g.markViewDirty()};l.prototype.onNavigationEnd=
function(a){this.momentum.setParameters(this._navigationSphereRadius,this._scaling.centerScreen,this._beginScenePoints.center,this._panMode)};l.prototype._computeSpherePoints=function(c,g,b,d,k){k.length=c.data.pointers.length;for(var h=this._tmp2d,e=0;e<k.length;e++){var f=c.data.pointers[e];h[0]=f[g].x;h[1]=this.view.height-f[g].y;void 0===k[e]&&(k[e]=a.vec3d.create());this._helper.spherical.makeRenderCoordSpherePoint(b,d,h,k[e])}return k};return l}(u.PinchNavigationBase);n.PinchNavigationGlobal=
q});