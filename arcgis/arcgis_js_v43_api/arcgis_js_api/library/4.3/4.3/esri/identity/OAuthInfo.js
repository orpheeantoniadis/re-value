// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../core/lang","../core/declare","dojo/_base/lang"],function(b,c,d){var a=c(null,{declaredClass:"esri.identity.OAuthInfo",constructor:function(a){d.mixin(this,{expiration:20160,minTimeUntilExpiration:30,portalUrl:"https://www.arcgis.com",authNamespace:"/",forceLogin:!1,showSocialLogins:!1,popup:!1,popupCallbackUrl:"oauth-callback.html",popupWindowFeatures:"height\x3d480,width\x3d800,location,resizable,scrollbars,status"},a)},_oAuthCred:null,toJSON:function(){return b.fixJson({appId:this.appId,
expiration:this.expiration,locale:this.locale,minTimeUntilExpiration:this.minTimeUntilExpiration,portalUrl:this.portalUrl,authNamespace:this.authNamespace,forceLogin:this.forceLogin,showSocialLogins:this.showSocialLogins,popup:this.popup,popupCallbackUrl:this.popupCallbackUrl,popupWindowFeatures:this.popupWindowFeatures})},clone:function(){return new a(this.toJSON())}});return a});