/*! ArcGIS API for JavaScript 4.3 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojox/lang/functional/object","dojo/topic"],function(o,i,s,n,t){return o("Quoin.Base",null,{_subscriptions:[],subscribe:function(o,s){var n=t.subscribe(o,i.hitch(this,s));return n},publish:function(){var o=Array.prototype.slice.call(arguments);t.publish.apply(this,o)},destroy:function(){s.forEach(this._subscriptions,i.hitch(this,function(o,i){o.remove()}))}})});