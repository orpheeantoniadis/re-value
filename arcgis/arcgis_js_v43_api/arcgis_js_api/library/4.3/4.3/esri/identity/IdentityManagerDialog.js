// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("dojo/_base/kernel ../core/declare dojo/_base/config dojo/Deferred dojo/_base/lang dojo/dom-attr dojo/keys dijit/registry dijit/Dialog ../kernel ../core/lang ../core/domUtils ./Credential ./IdentityManagerBase dojo/i18n!./nls/identity dojo/query dijit/form/Button dijit/form/Form dijit/form/ValidationTextBox".split(" "),function(f,t,g,u,v,l,w,h,p,r,q,n,x,y,z){return t([y],{declaredClass:"esri.identity.IdentityManager",constructor:function(d){v.mixin(this,d)},_dialogContent:"\x3cdiv data-dojo-type\x3d'dijit.form.Form' data-dojo-props\x3d'\"class\":\"esriIdForm\"'\x3e\x3cdiv class\x3d'dijitDialogPaneContentArea'\x3e\x3cdiv style\x3d'padding-bottom: 5px; word-wrap: break-word;'\x3e{info}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriErrorMsg' style\x3d'display: none; color: white; background-color: #D46464; text-align: center; padding-top: 3px; padding-bottom: 3px;'\x3e{invalidUser}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3ctable style\x3d'width: 100%;'\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel\x3e{lblUser}\x3c/label\x3e\x3cbr/\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' data-dojo-props\x3d'type:\"text\", \"class\":\"esriIdUser\", required:true, trim:true, style:\"width: 100%;\", autocapitalize:\"none\", autocorrect:\"off\", spellcheck:false' /\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel\x3e{lblPwd}\x3c/label\x3e\x3cbr/\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' data-dojo-props\x3d'type:\"password\", \"class\":\"esriIdPwd\", required:true, style:\"width: 100%;\"' /\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv class\x3d'dijitDialogPaneActionBar'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdSubmit\"'\x3e{lblOk}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdCancel\"'\x3e{lblCancel}\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e",
signIn:function(d,b,a){this._nls||(this._nls=z);this._loginDialog||(this._loginDialog=this.dialog=this._createLoginDialog(),this.emit("dialog-create"));var e=this._loginDialog,m=a&&a.error,f=a&&a.token,c=new u(function(){e.onCancel()});if(e.open)return d=Error("BUSY"),d.code="IdentityManager.1",d.log=g.isDebug,c.reject(d),c.promise;n.hide(e.errMsg_);m&&403==m.code&&f&&(l.set(e.errMsg_,"innerHTML",this._nls.forbidden),n.show(e.errMsg_));e.dfd_=c;e.serverInfo_=b;e.resUrl_=d;e.admin_=a&&a.isAdmin;l.set(e.resLink_,
{title:d,innerHTML:"("+(this.getResourceName(d)||this._nls.lblItem)+")"});l.set(e.serverLink_,{title:b.server,innerHTML:(-1!==b.server.toLowerCase().indexOf("arcgis.com")?"ArcGIS Online":b.server)+" "});e.txtPwd_.set("value","");e.show();return c.promise},_createLoginDialog:function(){var d=this._nls,b=q.substitute(d,this._dialogContent),b=q.substitute({resource:"\x3cspan class\x3d'resLink' style\x3d'word-wrap: break-word;'\x3e\x3c/span\x3e",server:"\x3cspan class\x3d'serverLink' style\x3d'word-wrap: break-word;'\x3e\x3c/span\x3e"},
b),a=new p({title:d.title,content:b,"class":" esri-widget esriSignInDialog esriIdentityDialog",style:"width: 18em;",esriIdMgr_:this,onShow:function(){this.domNode.classList.add("esriIdentityDialog--visible")},onHide:function(){this.domNode.classList.remove("esriIdentityDialog--visible")},keypressed_:function(a){a.charOrCode===w.ENTER&&this.execute_()},execute_:function(){var a=this.txtUser_.get("value"),b=this.txtPwd_.get("value"),f=this.dfd_,c=this;if(this.form_.validate()&&a&&b){this.btnSubmit_.set("label",
d.lblSigning);var h=r.id.findCredential(c.resUrl_,a),g=function(b){c.btnSubmit_.set("label",d.lblOk);c.btnSubmit_.set("disabled",!1);n.hide(c.errMsg_);c.hide();p._DialogLevelManager.hide(c);var e=c.serverInfo_;c.dfd_=c.serverInfo_=c.generateDfd_=c.resUrl_=null;var m,g,k=h,l;b&&(m=b.token,g=q.isDefined(b.expires)?Number(b.expires):null,l=!!b.ssl,k?(k.userId=a,k.token=m,k.expires=g,k.validity=b.validity,k.ssl=l,k.creationTime=(new Date).getTime()):k=new x({userId:a,server:e.server,token:m,expires:g,
ssl:l,isAdmin:c.admin_,validity:b.validity}));f.resolve(k)};h&&!h._enqueued?g():(c.btnSubmit_.set("disabled",!0),c.generateDfd_=r.id.generateToken(this.serverInfo_,{username:a,password:b},{isAdmin:this.admin_}).then(g).then(null,function(a){c.btnSubmit_.set("disabled",!1);c.generateDfd_=null;c.btnSubmit_.set("label",d.lblOk);l.set(c.errMsg_,"innerHTML",a&&a.code?d.invalidUser:d.noAuthService);n.show(c.errMsg_)}))}},cancel_:function(){a.generateDfd_&&a.generateDfd_.cancel();var b=a.dfd_,d=a.resUrl_,
f=a.serverInfo_;a.btnSubmit_.set("disabled",!1);a.dfd_=a.serverInfo_=a.generateDfd_=a.resUrl_=null;n.hide(a.errMsg_);p._DialogLevelManager.hide(a);a.esriIdMgr_.emit("dialog-cancel",{resourceUrl:d,serverInfo:f});d=Error("ABORTED");d.code="IdentityManager.2";d.log=g.isDebug;b.reject(d)}}),b=a.domNode;a.form_=h.byNode(f.query(".esriIdForm",b)[0]);a.txtUser_=h.byNode(f.query(".esriIdUser",b)[0]);a.txtPwd_=h.byNode(f.query(".esriIdPwd",b)[0]);a.btnSubmit_=h.byNode(f.query(".esriIdSubmit",b)[0]);a.btnCancel_=
h.byNode(f.query(".esriIdCancel",b)[0]);a.resLink_=f.query(".resLink",b)[0];a.serverLink_=f.query(".serverLink",b)[0];a.errMsg_=f.query(".esriErrorMsg",b)[0];a.connect(a.txtUser_,"onKeyPress",a.keypressed_);a.connect(a.txtPwd_,"onKeyPress",a.keypressed_);a.connect(a.btnSubmit_,"onClick",a.execute_);a.connect(a.btnCancel_,"onClick",a.onCancel);a.connect(a,"onCancel",a.cancel_);return a}})});