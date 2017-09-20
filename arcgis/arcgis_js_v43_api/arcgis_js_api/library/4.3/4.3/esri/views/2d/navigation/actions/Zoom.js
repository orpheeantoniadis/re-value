// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/accessorSupport/decorators ../../../../core/Accessor ../../viewpointUtils ../../math/vec2".split(" "),function(d,q,n,m,f,p,l,h){d=function(d){function c(a){a=d.call(this)||this;a._canZoom=!0;a.viewpoint=l.create();return a}n(c,d);c.prototype.pinchRotateZoom=function(a,b,d,g){a.state.viewpoint=this._scaleAndRotateViewpoint(a,b.x,b.y,d,g)};c.prototype.scroll=function(a,
b){var d=this;this.navigation.begin();var g=b.data.x,c=b.data.y,e=b.data.deltaY;if(0===e||-0===e)this.navigation.end();else{var k=this._canZoomIn(a),f=this._canZoomOut(a);b=Math.pow(.6,1/60*e);1<b&&!k||1>=b&&!f?this.navigation.end():a.constraints.snapToZoom?this._canZoom&&(this._canZoom=!1,a.goTo(this._scaleAndRotateViewpoint(a,g,c,0>e?2:.5),{}).then(function(){d._canZoom=!0})):(e=h.create(),h.set(e,g,c),a.state.viewpoint=this._scaleAndRotateViewpoint(a,g,c,b))}};c.prototype.stepScreen=function(a,
b,d){this.navigation.begin();b=b.data;a.goTo(this._scaleAndRotateViewpoint(a,b.x,b.y,d),{});this.navigation.end()};c.prototype._canZoomIn=function(a){var b=a.scale;a=a.constraints.effectiveMaxScale;return 0===a||b>a};c.prototype._canZoomOut=function(a){var b=a.scale;a=a.constraints.effectiveMinScale;return 0===a||b<a};c.prototype._scaleAndRotateViewpoint=function(a,b,d,c,f){var e=this._canZoomIn(a),k=this._canZoomOut(a),g=a.animation?a.animation.target:a.viewpoint;if(1<c&&!e||1>=c&&!k)return g;e=
h.create();k=h.create();h.set(e,b,d);l.getPaddingScreenTranslation(k,a.size,a.padding);h.add(e,e,k);return f?l.scaleAndRotateBy(this.viewpoint,a.viewpoint,c,f,e,a.size):l.scaleBy(this.viewpoint,g,c,e,a.size)};return c}(f.declared(p));m([f.property()],d.prototype,"viewpoint",void 0);m([f.property()],d.prototype,"navigation",void 0);return d=m([f.subclass("esri.views.2d.navigation.actions.Zoom")],d)});