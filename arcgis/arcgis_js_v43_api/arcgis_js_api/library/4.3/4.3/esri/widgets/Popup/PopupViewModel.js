// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("../../core/Accessor ../../core/Collection ../../core/Error ../../core/Evented ../../core/HandleRegistry ../../core/promiseUtils ../../core/watchUtils ../../geometry/support/webMercatorUtils ../../geometry/Point ../../support/Action dojo/fx/easing dojo/_base/lang".split(" "),function(l,m,g,n,p,h,q,r,t,u,e,v){var k={id:"zoom-to"};return l.createSubclass([n],{declaredClass:"esri.widgets.Popup.PopupViewModel",properties:{actions:{type:m.ofType(u)},animationOptions:{},content:{},featureCount:{readOnly:!0},
features:{},location:{type:t},pendingPromisesCount:{readOnly:!0},promises:{},selectedFeature:{readOnly:!0},selectedFeatureIndex:{},state:{dependsOn:["view.ready"],readOnly:!0},title:{},updateLocationEnabled:{},view:{},waitingForResult:{dependsOn:["pendingPromisesCount","featureCount"],readOnly:!0},zoomFactor:{},zoomScale:{readOnly:!0}},_handles:null,constructor:function(){this._handles=new p},getDefaults:function(a){return v.mixin(this.inherited(arguments),{actions:[k],animationOptions:{duration:300,
easing:e.quadInOut},promises:[]})},initialize:function(){this._handles.add(q.init(this,"view.scale",this._scaleWatcher))},destroy:function(){this._handles.destroy();this.view=this._handles=null},actions:[k],animationOptions:{duration:300,easing:e.quadInOut},content:null,featureCount:0,features:null,_featuresSetter:function(a){this._set("features",a);this._updateFeatureCount(a);this.pendingPromisesCount||(this.selectedFeatureIndex=-1,a.length&&(this.selectedFeatureIndex=0))},location:null,_locationSetter:function(a){var b=
this.get("view.spatialReference.isWebMercator");a&&a.get("spatialReference.isWGS84")&&b&&(a=r.geographicToWebMercator(a));this._set("location",a)},pendingPromisesCount:0,waitingForResult:!1,_waitingForResultGetter:function(){return 0<this.pendingPromisesCount&&0===this.featureCount},promises:[],_promisesSetter:function(a){var b=this._get("promises");b&&b.forEach(function(a){a.cancel()});this.features=[];this._set("pendingPromisesCount",0);this._set("promises",a);a&&a.length&&(this._set("pendingPromisesCount",
a.length),a=a.slice(0),a.forEach(function(a){a.always(function(b){a.isCanceled()||(this._set("pendingPromisesCount",this.pendingPromisesCount-1),this._updateFeatures(a,b))}.bind(this))},this))},selectedFeature:null,selectedFeatureIndex:-1,_selectedFeatureIndexSetter:function(a){if(isNaN(a)||-1>a)a=-1;var b=null,c=this.features;c&&c.length&&(a=(a+c.length)%c.length,b=c[a]);this._set("selectedFeature",b);this._set("selectedFeatureIndex",a);this._selectedFeatureChange(b,this.updateLocationEnabled)},
state:"disabled",_stateGetter:function(){return this.get("view.ready")?"ready":"disabled"},title:null,updateLocationEnabled:!1,_updateLocationEnabledSetter:function(a){this._selectedFeatureChange(this.selectedFeature,a);this._set("updateLocationEnabled",a)},view:null,zoomFactor:4,_zoomFactorSetter:function(a){var b=this.view;b&&null!=b.scale&&this._setZoomScale(b.scale,a);this._set("zoomFactor",a)},zoomScale:0,centerAtLocation:function(){return this.location&&this.view?this.view.goTo({target:this.location,
scale:this.view.scale},this.animationOptions):h.reject(new g(this.declaredClass+"::Cannot center at location without a location and view."))},clear:function(){this.set({promises:[],features:[],content:null,title:null,location:null})},triggerAction:function(a){(a=this.actions.getItemAt(a))&&this.emit("trigger-action",{action:a})},next:function(){this.selectedFeatureIndex+=1;return this},previous:function(){--this.selectedFeatureIndex;return this},zoomToLocation:function(){var a=this.view,b=this.location,
c=this.zoomScale;if(!b||!a)return h.reject(new g(this.declaredClass+"::Cannot zoom to location without a location and view."));var d=this.selectedFeature,f=d&&d.geometry,e=d&&"3d"===a.type;f||e?(b={target:d},f&&"point"===f.type&&this._isScreenSize(d)&&(b.scale=c,this.location=f)):b={target:b,scale:c};return a.goTo(b,this.animationOptions)},_isScreenSize:function(a){if("3d"!==this.view.type||"esri.Graphic"!==a.declaredClass)return!0;var b=!0,c=this.view.getViewForGraphic(a);c&&c.whenGraphicBounds&&
c.whenGraphicBounds(a).then(function(a){b=!a||a[0]===a[3]&&a[1]===a[4]&&a[2]===a[5]});return b},_getSelectedFeatureActions:function(){this._originalActions&&(this.actions=this._originalActions,this._originalActions=null);var a=this.actions.filter(function(a){return!a.temporary},this),b=a,c=this.selectedFeature.getEffectivePopupTemplate();if(c&&c.actions){for(var b=c.actions,d=0;d<b.length;d++)b.getItemAt(d).temporary=!0;c.overwriteActions?this._originalActions=a:b=a.concat(b)}this.actions=b},_scaleWatcher:function(a){null!=
a&&this._setZoomScale(a,this.zoomFactor)},_getPointFromGeometry:function(a){switch(a&&a.type){case "point":return a;case "extent":return a.center;case "polygon":return a.centroid;case "multipoint":case "polyline":return a.extent.center;default:return null}},_selectedFeatureChange:function(a,b){a&&(b&&(this.location=this._getPointFromGeometry(this.selectedFeature.geometry)),this._getSelectedFeatureActions())},_updateFeatureCount:function(a){var b=0;a&&a.length&&(b=a.length);this._set("featureCount",
b)},_setZoomScale:function(a,b){this._set("zoomScale",a/b)},_updateFeatures:function(a,b){a&&this.promises&&!(!this._validatePromise(a)||b instanceof g||b instanceof Error)&&b&&b.length&&(a={},this.features&&this.features.length?(b=b.filter(function(a){return-1===this.features.indexOf(a)},this),a.features=this.features.concat(b)):(a.features=b,a.selectedFeatureIndex=0),this.set(a))},_validatePromise:function(a){return-1<this.promises.indexOf(a)}})});