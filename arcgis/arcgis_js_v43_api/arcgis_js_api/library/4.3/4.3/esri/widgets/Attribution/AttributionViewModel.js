// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../geometry/support/webMercatorUtils ../../core/HandleRegistry ../../core/Accessor ../../core/lang ../../core/watchUtils ../../geometry/Extent".split(" "),function(f,u,n,k,h,p,q,r,m,l,t){f=function(f){function d(a){a=f.call(this,a)||this;a._handles=new q;a._pendingAttributionItemsByLayerId={};a._attributionDataByLayerId={};a.itemDelimiter=" | ";a.items=[];
a.view=null;a._updateAttributionItems=a._updateAttributionItems.bind(a);return a}n(d,f);d.prototype.initialize=function(){this._handles.add(l.init(this,"view",this._viewWatcher))};d.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(d.prototype,"attributionText",{get:function(){return this.items.join(this.itemDelimiter)},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"state",{get:function(){return this.get("view.ready")?"ready":
"disabled"},enumerable:!0,configurable:!0});d.prototype._viewWatcher=function(a){var b=this,e=this._handles;e&&e.remove();a&&(e.add([a.allLayerViews.on("change",function(a){b._addLayerViews(a.added);0<a.removed.length&&(a.removed.forEach(function(a){e.remove(a.uid)}),b._updateAttributionItems())}),l.init(a,"stationary",this._updateAttributionItems)]),this._addLayerViews(a.allLayerViews))};d.prototype._addLayerViews=function(a){var b=this;a.forEach(function(a){b._handles.has(a.uid)||b._handles.add(l.init(a,
"suspended",b._updateAttributionItems),a.uid)})};d.prototype._updateAttributionItems=function(){var a=this,b=[];this._getActiveLayerViews().forEach(function(e){var c=e.layer;if(!c.hasAttributionData)e=c.get("copyright"),a._isUnique(b,e)&&b.push(e);else if(c&&c.tileInfo){var d=a._attributionDataByLayerId;if(d[c.uid])e=a._getDynamicAttribution(d[c.uid],a.view,c),a._isUnique(b,e)&&b.push(e);else{var f=a._pendingAttributionItemsByLayerId;a._inProgress(f[c.uid])||(f[c.uid]=c.fetchAttributionData().then(function(b){b=
a._createContributionIndex(b,a._isBingLayer(c));delete f[c.uid];d[c.uid]=b;a._updateAttributionItems()}))}}});this._itemsChanged(this.items,b)&&this._set("items",b)};d.prototype._itemsChanged=function(a,b){return a.length!==b.length||a.some(function(a,c){return a!==b[c]})};d.prototype._inProgress=function(a){return a&&!a.isFulfilled()};d.prototype._getActiveLayerViews=function(){return this.get("view.allLayerViews").filter(function(a){return!a.suspended&&a.get("layer.attributionVisible")})};d.prototype._isUnique=
function(a,b){return b&&-1===a.indexOf(b)};d.prototype._isBingLayer=function(a){return-1!==a.declaredClass.toLowerCase().indexOf("vetiledlayer")};d.prototype._createContributionIndex=function(a,b){a=a.contributors;var e={};if(!a)return e;a.forEach(function(a,d){var c=a.coverageAreas;c&&c.forEach(function(g){var c=g.bbox,f=g.zoomMin-(b&&g.zoomMin?1:0),h=g.zoomMax-(b&&g.zoomMax?1:0);a={extent:p.geographicToWebMercator(new t({xmin:c[1],ymin:c[0],xmax:c[3],ymax:c[2]})),attribution:a.attribution||"",score:m.isDefined(g.score)?
g.score:100,id:d};for(g=f;g<=h;g++)e[g]=e[g]||[],e[g].push(a)})});e.maxKey=Math.max.apply(null,Object.keys(e));return e};d.prototype._getDynamicAttribution=function(a,b,d){var c=b.extent;b=d.tileInfo.scaleToZoom(b.scale);b=Math.min(a.maxKey,Math.round(b));if(!c||!m.isDefined(b)||-1>=b)return"";a=a[b];var e=c.center.clone().normalize(),f={};return a.filter(function(a){var b=!f[a.id]&&a.extent.contains(e);b&&(f[a.id]=!0);return b}).sort(function(a,b){return b.score-a.score||a.objectId-b.objectId}).map(function(a){return a.attribution}).join(", ")};
return d}(h.declared(r));k([h.property({dependsOn:["items","itemDelimiter"],readOnly:!0})],f.prototype,"attributionText",null);k([h.property()],f.prototype,"itemDelimiter",void 0);k([h.property({readOnly:!0})],f.prototype,"items",void 0);k([h.property({dependsOn:["view.ready"],readOnly:!0})],f.prototype,"state",null);k([h.property()],f.prototype,"view",void 0);return f=k([h.subclass("esri.widgets.Attribution.AttributionViewModel")],f)});