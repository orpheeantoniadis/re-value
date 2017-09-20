// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./support/widget ../core/accessorSupport/decorators ../core/watchUtils ./BasemapGallery/BasemapGalleryViewModel ./Widget ../core/HandleRegistry dojo/i18n!./BasemapGallery/nls/BasemapGallery".split(" "),function(c,t,h,b,d,e,l,m,n,p,q){var r=c.toUrl("../themes/base/images/basemap-toggle-64.svg");c=function(c){function b(a){a=c.call(this)||this;a._handleRegistry=new p;a.activeBasemap=null;a.source=null;a.view=
null;a.viewModel=new m;return a}h(b,c);b.prototype.postInitialize=function(){var a=this;this.own([l.on(this,"viewModel.items","change",function(b){a._handleRegistry.remove("basemap-gallery-item-changes");a._handleRegistry.add(b.added.map(function(b){return b.watch("state",function(){return a.scheduleRender()})}),"basemap-gallery-item-changes")}),this._handleRegistry])};b.prototype.render=function(){var a="loading"===this.get("source.state"),b="disabled"===this.get("viewModel.state"),c=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,
this),b=(f={},f["esri-basemap-gallery--source-loading"]=a,f["esri-disabled"]=b,f),f=a?d.jsxFactory.createElement("div",{class:"esri-basemap-gallery_loading-indicator",key:"esri-basemap-gallery_loading-indicator"}):null,a=a?null:0<c.length?d.jsxFactory.createElement("ul",{class:"esri-basemap-gallery__item-container",key:"esri-basemap-gallery__item-container",role:"menu"},c):d.jsxFactory.createElement("div",{class:"esri-basemap-gallery__empty-message",key:"esri-basemap-gallery__empty-message"},q.noBasemaps);
return d.jsxFactory.createElement("div",{class:"esri-basemap-gallery esri-widget",classes:b},f,a);var f};b.prototype._handleClick=function(a){a=a.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)};b.prototype._renderBasemapGalleryItem=function(a){var b=a.get("basemap.thumbnailUrl")||r,c=a.get("basemap.title"),f=a.get("error.message")||c,e="ready"===a.state?0:-1,k=this.viewModel.basemapEquals(a.basemap,this.activeBasemap),h=(g={},g["esri-basemap-gallery__item--selected"]=
k,g["esri-basemap-gallery__item--loading"]="loading"===a.state,g["esri-basemap-gallery__item--error"]="error"===a.state,g),g="loading"===a.state?d.jsxFactory.createElement("div",{class:"esri-basemap-gallery_loading-indicator",key:"esri-basemap-gallery_loading-indicator"}):null;return d.jsxFactory.createElement("li",{"aria-selected":k,bind:this,class:"esri-basemap-gallery__item",classes:h,"data-item":a,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:e,title:f},g,d.jsxFactory.createElement("img",
{alt:"",class:"esri-basemap-gallery__item-thumbnail",src:b}),d.jsxFactory.createElement("div",{class:"esri-basemap-gallery__item-title"},c));var g};return b}(e.declared(n));b([e.aliasOf("viewModel.activeBasemap"),d.renderable()],c.prototype,"activeBasemap",void 0);b([e.aliasOf("viewModel.source"),d.renderable("source.state")],c.prototype,"source",void 0);b([e.aliasOf("viewModel.view"),d.renderable()],c.prototype,"view",void 0);b([e.property(),d.renderable(["viewModel.state"])],c.prototype,"viewModel",
void 0);b([d.accessibleHandler()],c.prototype,"_handleClick",null);return c=b([e.subclass("esri.widgets.BasemapGallery")],c)});