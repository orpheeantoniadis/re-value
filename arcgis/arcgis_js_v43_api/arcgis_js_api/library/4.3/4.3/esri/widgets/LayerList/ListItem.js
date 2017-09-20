// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../support/Action ../../core/Identifiable ../../core/HandleRegistry ../../core/watchUtils ./support/layerListUtils ../../core/accessorSupport/decorators".split(" "),function(t,u,m,d,n,h,p,q,r,e,g,b){var k=h.ofType(h.ofType(p)),l=h.ofType(c),c=f=function(c){function b(a){a=c.call(this)||this;a._handles=new r;a.actionsSections=new k;a.actionsOpen=!1;a.children=
new l;a.error=null;a.open=!1;a.title="";a.updating=!1;a.visible=!0;a.visibleAtCurrentScale=!0;return a}m(b,c);b.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(b.prototype,"layer",{set:function(a){this._set("layer",a);this._watchProperties(a,this.view)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",{set:function(a){this._set("view",a);this._watchProperties(this.layer,a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"visibilityMode",{get:function(){return this._get("visibilityMode")||"independent"},enumerable:!0,configurable:!0});b.prototype.clone=function(){return new f({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,children:this.children.clone(),layer:this.layer,open:this.open,title:this.title,view:this.view,visible:this.visible})};b.prototype._addChildren=function(a){var b=this,c=[];a&&a.forEach(function(a){g.canDisplayLayer(a)&&(a=new f({layer:a,view:b.view}),c.unshift(a))});this.children.removeAll();
this.children.addMany(c)};b.prototype._watchProperties=function(a,b){this._watchLayerProperties(a);this._watchItemProperties(a);this._watchViewProperties(a,b)};b.prototype._watchItemProperties=function(a){this._handles.remove("item");a&&this._handles.add([e.init(this,"visible",function(b){a.visible=b}),e.init(this,"title",function(b){a.title=b})],"item")};b.prototype._watchLayerProperties=function(a){var b=this;this._handles.remove("layer");if(a){var c=this._findLayerView(a),d=g.getNormalizedChildLayerProperty(a);
if(d){var f=a[d];this._handles.add(e.init(a,d,function(){b._addChildren(f)}),"layer");f&&this._handles.add(f.on("change",function(){b._addChildren(f)}),"layer")}g.findLayerVisibilityMode(a)&&this._handles.add(e.init(a,"visibilityMode",function(a){b._set("visibilityMode",a)}),"layer");this._handles.add([e.init(a,"loadError",function(a){b._set("error",a||null)}),e.init(a,"title",function(a){b.title=a||""}),e.init(a,"visible",function(a){b.visible=a})],"layer");c?this._handles.add(e.init(c,"updating",
function(a){b._set("updating",a)}),"layer"):this._handles.add(e.init(a,"loadStatus",function(a){b._set("updating",b._isLayerUpdating(a))}),"layer")}};b.prototype._watchViewProperties=function(a,b){var c=this;this._handles.remove("view");b&&a&&this._handles.add(e.init(this,"view.stationary",function(){c._set("visibleAtCurrentScale",!g.isLayerOutsideScaleRange(a,c.get("view.scale")))}),"view")};b.prototype._findLayerView=function(a){var b=null,c=this.get("view.allLayerViews");c&&(b=c.find(function(b){return b.layer===
a}));return b};b.prototype._isLayerUpdating=function(a){return"loading"===a};return b}(b.declared(n,q));d([b.property({type:k})],c.prototype,"actionsSections",void 0);d([b.property()],c.prototype,"actionsOpen",void 0);d([b.property({type:l})],c.prototype,"children",void 0);d([b.property({readOnly:!0})],c.prototype,"error",void 0);d([b.property({value:null})],c.prototype,"layer",null);d([b.property()],c.prototype,"open",void 0);d([b.property()],c.prototype,"title",void 0);d([b.property({readOnly:!0})],
c.prototype,"updating",void 0);d([b.property({value:null})],c.prototype,"view",null);d([b.property()],c.prototype,"visible",void 0);d([b.property({readOnly:!0})],c.prototype,"visibleAtCurrentScale",void 0);d([b.property({readOnly:!0})],c.prototype,"visibilityMode",null);var c=f=d([b.subclass("esri.widgets.LayerList.ListItem")],c),f;return c});