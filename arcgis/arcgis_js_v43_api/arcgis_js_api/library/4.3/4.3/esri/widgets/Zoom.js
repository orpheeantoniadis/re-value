// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./support/widget ./Widget ./Zoom/IconButton ./Zoom/ZoomViewModel dojo/i18n!./Zoom/nls/Zoom".split(" "),function(b,l,h,c,a,d,k,e,f,g){b=function(b){function a(a){a=b.call(this)||this;a.layout="vertical";a.view=null;a.viewModel=new f;return a}h(a,b);a.prototype.postInitialize=function(){this._zoomInButton=new e({action:this.zoomIn.bind(this),iconClass:"esri-icon-plus",title:g.zoomIn});
this._zoomOutButton=new e({action:this.zoomOut.bind(this),iconClass:"esri-icon-minus",title:g.zoomOut})};a.prototype.render=function(){var a=this.viewModel,b=(c={},c["esri-zoom--horizontal"]="horizontal"===this.layout,c);this._zoomInButton.enabled="ready"===a.state&&a.canZoomIn;this._zoomOutButton.enabled="ready"===a.state&&a.canZoomOut;return d.jsxFactory.createElement("div",{class:"esri-zoom esri-widget",classes:b},this._zoomInButton.render(),this._zoomOutButton.render());var c};a.prototype.zoomIn=
function(){};a.prototype.zoomOut=function(){};return a}(a.declared(k));c([a.property(),d.renderable()],b.prototype,"layout",void 0);c([a.aliasOf("viewModel.view"),d.renderable()],b.prototype,"view",void 0);c([a.property({type:f}),d.renderable(["viewModel.canZoomIn","viewModel.canZoomOut","viewModel.state"])],b.prototype,"viewModel",void 0);c([a.aliasOf("viewModel.zoomIn")],b.prototype,"zoomIn",null);c([a.aliasOf("viewModel.zoomOut")],b.prototype,"zoomOut",null);return b=c([a.subclass("esri.widgets.Zoom")],
b)});