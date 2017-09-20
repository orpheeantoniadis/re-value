// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/accessorSupport/decorators ../core/Error ../config ../identity/IdentityManager ../request ../geometry/Extent ../core/JSONSupport ../core/Loadable ./PortalQueryParams ./PortalQueryResult ./PortalUser ../core/promiseUtils ../core/requireUtils dojo/promise/all dojo/_base/kernel dojo/_base/lang".split(" "),function(h,c,t,d,u,b,v,w,g,x,y,z,A,k,B,C,p,l,q,D,m){var n;c=e=function(c){function b(a){a=
c.call(this)||this;a.access=null;a.allSSL=!1;a.authMode=e.AUTH_MODE_AUTO;a.authorizedCrossOriginDomains=null;a.bingKey=null;a.canListApps=!1;a.canListData=!1;a.canListPreProvisionedItems=!1;a.canProvisionDirectPurchase=!1;a.canSearchPublic=!1;a.canShareBingPublic=!1;a.canSharePublic=!1;a.canSignInArcGIS=!1;a.canSignInIDP=!1;a.colorSetsGroupQuery=null;a.commentsEnabled=!1;a.created=null;a.culture=null;a.customBaseUrl=null;a.defaultBasemap=null;a.defaultExtent=null;a.description=null;a.featuredGroups=
null;a.featuredItemsGroupQuery=null;a.galleryTemplatesGroupQuery=null;a.livingAtlasGroupQuery=null;a.homePageFeaturedContent=null;a.homePageFeaturedContentCount=null;a.httpPort=null;a.httpsPort=null;a.id=null;a.ipCntryCode=null;a.isPortal=!1;a.layerTemplatesGroupQuery=null;a.maxTokenExpirationMinutes=null;a.modified=null;a.name=null;a.portalHostname=null;a.portalMode=null;a.portalProperties=null;a.region=null;a.rotatorPanels=null;a.showHomePageDescription=!1;a.supportsHostedServices=!1;a.symbolSetsGroupQuery=
null;a.templatesGroupQuery=null;a.units=null;a.url=w.portalUrl;a.urlKey=null;a.user=null;a.useStandardizedQuery=!1;return a}t(b,c);b.prototype.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a};b.prototype.initialize=function(){var a=this;this._esriId_credentialCreateHandle=g.on("credential-create",function(){a.loaded&&!a.credential&&a.authMode===e.AUTH_MODE_AUTO&&(a.credential=g.findCredential(a.restUrl),a.credential&&a._fetchSelf().then(function(b){a.read(b)}))})};b.prototype.destroy=
function(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null)};b.prototype.readDefaultBasemap=function(a){return a?(a=n.fromJSON(a),a.portalItem={portal:this},a):null};Object.defineProperty(b.prototype,"extraQuery",{get:function(){return this.id&&!this.canSearchPublic?" AND orgid:"+this.id:null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isOrganization",{get:function(){return!!this.access},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"restUrl",{get:function(){var a=this.url;if(a)var b=a.indexOf("/sharing"),a=0<b?a.substring(0,b):this.url.replace(/\/+$/,""),a=a+"/sharing/rest";return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"thumbnailUrl",{get:function(){var a=this.restUrl,b=this.thumbnail;return a&&b?this._normalizeSSL(a+"/portals/self/resources/"+b):null},enumerable:!0,configurable:!0});b.prototype.readUser=function(a){var b=null;a&&(b=C.fromJSON(a),
b.portal=this);return b};b.prototype.load=function(){var a=this,b=p.resolve().then(function(){return a.authMode===e.AUTH_MODE_IMMEDIATE?g.getCredential(a.restUrl):a.authMode===e.AUTH_MODE_AUTO?g.checkSignInStatus(a.restUrl).otherwise(function(){return null}):null}).then(function(b){a.credential=b;return l.when(h,"../Basemap")}).then(function(a){n=a}).then(function(){return a._fetchSelf()}).then(function(b){a.read(b)});this.addResolvingPromise(b);return this};b.prototype.fetchBasemaps=function(){var a=
new k;a.query=this.basemapGalleryGroupQuery;a.disableExtraQuery=!0;return this.queryGroups(a).then(function(b){a.num=100;a.query='type:"Web Map" -type:"Web Application"';return b.total?(b=b.results[0],a.sortField=b.sortField||"name",a.sortOrder=b.sortOrder||"desc",b.queryItems(a)):null}).then(function(a){return a&&a.total?a.results.filter(function(a){return"Web Map"===a.type}).map(function(a){return new n({portalItem:a})}):[]})};b.prototype.fetchFeaturedGroups=function(){var a=this.featuredGroups,
b=new k;b.num=100;b.sortField="title";if(a&&a.length){for(var c=[],d=0;d<a.length;d++){var e=a[d];c.push('(title:"'+e.title+'" AND owner:'+e.owner+")")}b.query=c.join(" OR ");return this.queryGroups(b).then(function(a){return a.results})}return p.resolve([])};b.getDefault=function(){e._default||(e._default=new e);return e._default};b.prototype.queryGroups=function(a){return this._queryPortal("/community/groups",a,"PortalGroup")};b.prototype.queryItems=function(a){return this._queryPortal("/search",
a,"PortalItem")};b.prototype.queryUsers=function(a){a.sortField||(a.sortField="username");return this._queryPortal("/community/users",a,"PortalUser")};b.prototype.toJSON=function(){throw new v("internal:not-yet-implemented","Portal.toJSON is not yet implemented");};b.prototype._fetchSelf=function(){return this._request(this.restUrl+"/portals/self",{query:{culture:D.locale}})};b.prototype._queryPortal=function(a,b,c){var d=this,f=function(c){return d._request(d.restUrl+a,b.toRequestOptions(d)).then(function(a){var f=
b.clone();f.start=a.nextStart;return new B({nextQueryParams:f,queryParams:b,total:a.total,results:e._resultsToTypedArray(c,{portal:d},a)})}).then(function(a){return q(a.results).always(function(){return a})})};return c?l.when(h,"./"+c).then(function(a){return f(a)}):f()};b.prototype._normalizeSSL=function(a){var b=this.allSSL||window&&"https:"===window.location.protocol;if(this.isPortal){var c=e._getLocation(a);if(-1<this.portalHostname.toLowerCase().indexOf(c.hostname.toLowerCase())&&c.port&&"80"!==
c.port&&"443"!==c.port)return a=c.pathname,0!==a.indexOf("/")&&(a="/"+a),b?"https://"+c.hostname+(this.httpsPort&&443!==this.httpsPort?":"+this.httpsPort:"")+a+c.search:"http://"+c.hostname+(this.httpPort&&80!==this.httpPort?":"+this.httpPort:"")+a+c.search}return b?a.replace("http:","https:"):a};b.prototype._normalizeUrl=function(a){var b=this.credential&&this.credential.token;return this._normalizeSSL(b?a+(-1<a.indexOf("?")?"\x26":"?")+"token\x3d"+b:a)};b.prototype._requestToTypedArray=function(a,
b,c){var d=this,f=function(c){return d._request(a,b).then(function(a){var b=e._resultsToTypedArray(c,{portal:d},a);return q(b).always(function(){return b})})};return c?l.when(h,"./"+c).then(function(a){return f(a)}):f()};b.prototype._request=function(a,b){var c={f:"json"},d={disableIdentityLookup:this.authMode===e.AUTH_MODE_ANONYMOUS},r;b&&(m.mixin(c,b.query),r=b.responseType,d.method=b.method);return x(this._normalizeSSL(a),m.mixin({callbackParamName:"callback",query:c,responseType:r,timeout:0},
d)).then(function(a){return a.data})};b._getLocation=function(a){var b=document.createElement("a");b.href=a;return{protocol:b.protocol,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,host:b.host}};b._resultsToTypedArray=function(a,b,c){if(c){if(c=c.listings||c.notifications||c.userInvitations||c.tags||c.items||c.groups||c.comments||c.provisions||c.results||c.relatedItems||c,a||b)c=c.map(function(c){c=m.mixin(a?a.fromJSON(c):c,b);"function"===typeof c.load&&c.load();
return c})}else c=[];return c};return b}(b.declared(z,A));c.AUTH_MODE_ANONYMOUS="anonymous";c.AUTH_MODE_AUTO="auto";c.AUTH_MODE_IMMEDIATE="immediate";d([b.property()],c.prototype,"access",void 0);d([b.property()],c.prototype,"allSSL",void 0);d([b.property()],c.prototype,"authMode",void 0);d([b.property()],c.prototype,"authorizedCrossOriginDomains",void 0);d([b.property()],c.prototype,"basemapGalleryGroupQuery",void 0);d([b.property()],c.prototype,"bingKey",void 0);d([b.property()],c.prototype,"canListApps",
void 0);d([b.property()],c.prototype,"canListData",void 0);d([b.property()],c.prototype,"canListPreProvisionedItems",void 0);d([b.property()],c.prototype,"canProvisionDirectPurchase",void 0);d([b.property()],c.prototype,"canSearchPublic",void 0);d([b.property()],c.prototype,"canShareBingPublic",void 0);d([b.property()],c.prototype,"canSharePublic",void 0);d([b.property()],c.prototype,"canSignInArcGIS",void 0);d([b.property()],c.prototype,"canSignInIDP",void 0);d([b.property()],c.prototype,"colorSetsGroupQuery",
void 0);d([b.property()],c.prototype,"commentsEnabled",void 0);d([b.property({type:Date})],c.prototype,"created",void 0);d([b.property()],c.prototype,"credential",void 0);d([b.property()],c.prototype,"culture",void 0);d([b.property()],c.prototype,"customBaseUrl",void 0);d([b.property()],c.prototype,"defaultBasemap",void 0);d([b.reader("defaultBasemap")],c.prototype,"readDefaultBasemap",null);d([b.property({type:y})],c.prototype,"defaultExtent",void 0);d([b.property()],c.prototype,"description",void 0);
d([b.property({dependsOn:["id","canSearchPublic"],readOnly:!0})],c.prototype,"extraQuery",null);d([b.property()],c.prototype,"featuredGroups",void 0);d([b.property()],c.prototype,"featuredItemsGroupQuery",void 0);d([b.property()],c.prototype,"galleryTemplatesGroupQuery",void 0);d([b.property()],c.prototype,"livingAtlasGroupQuery",void 0);d([b.property()],c.prototype,"helpBase",void 0);d([b.property()],c.prototype,"helperServices",void 0);d([b.property()],c.prototype,"helpMap",void 0);d([b.property()],
c.prototype,"homePageFeaturedContent",void 0);d([b.property()],c.prototype,"homePageFeaturedContentCount",void 0);d([b.property()],c.prototype,"httpPort",void 0);d([b.property()],c.prototype,"httpsPort",void 0);d([b.property()],c.prototype,"id",void 0);d([b.property()],c.prototype,"ipCntryCode",void 0);d([b.property({dependsOn:["access"],readOnly:!0})],c.prototype,"isOrganization",null);d([b.property()],c.prototype,"isPortal",void 0);d([b.property()],c.prototype,"layerTemplatesGroupQuery",void 0);
d([b.property()],c.prototype,"maxTokenExpirationMinutes",void 0);d([b.property({type:Date})],c.prototype,"modified",void 0);d([b.property()],c.prototype,"name",void 0);d([b.property()],c.prototype,"portalHostname",void 0);d([b.property()],c.prototype,"portalMode",void 0);d([b.property()],c.prototype,"portalProperties",void 0);d([b.property()],c.prototype,"region",void 0);d([b.property({dependsOn:["url"],readOnly:!0})],c.prototype,"restUrl",null);d([b.property()],c.prototype,"rotatorPanels",void 0);
d([b.property()],c.prototype,"showHomePageDescription",void 0);d([b.property()],c.prototype,"staticImagesUrl",void 0);d([b.property()],c.prototype,"stylesGroupQuery",void 0);d([b.property()],c.prototype,"supportsHostedServices",void 0);d([b.property()],c.prototype,"symbolSetsGroupQuery",void 0);d([b.property()],c.prototype,"templatesGroupQuery",void 0);d([b.property()],c.prototype,"thumbnail",void 0);d([b.property({dependsOn:["restUrl","thumbnail"],readOnly:!0})],c.prototype,"thumbnailUrl",null);
d([b.property()],c.prototype,"units",void 0);d([b.property()],c.prototype,"url",void 0);d([b.property()],c.prototype,"urlKey",void 0);d([b.property()],c.prototype,"user",void 0);d([b.reader("user")],c.prototype,"readUser",null);d([b.property()],c.prototype,"useStandardizedQuery",void 0);d([u(1,b.cast(k))],c.prototype,"_queryPortal",null);c=e=d([b.subclass("esri.portal.Portal")],c);var e;return c});