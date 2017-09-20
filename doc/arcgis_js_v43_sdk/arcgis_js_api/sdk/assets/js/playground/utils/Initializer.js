/*! ArcGIS API for JavaScript 4.3 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["require","esri/Map","esri/Color","esri/Graphic","esri/core/requireUtils","esri/core/HandleRegistry","esri/views/MapView","esri/views/SceneView","esri/layers/GraphicsLayer","esri/symbols/SimpleMarkerSymbol","esri-playground-js/utils/CurrentState","esri-playground-js/utils/CodeGenerator","esri-playground-js/utils/geometryUtils","esri-playground-js/utils/DOMBuilder","esri-playground-js/utils/ObjectProvider","esri-playground-js/utils/symbols/WebStyleSymbol","dojo/dom","dojo/on","dojo/dom-construct","dijit/registry"],function(require,Map,Color,Graphic,requireUtils,HandleRegistry,MapView,SceneView,GraphicsLayer,SimpleMarkerSymbol,CurrentState,CodeGenerator,geometryUtils,DOMBuilder,ObjectProvider,WebStyleSymbolUtils,dom,on,domConstruct,registry){var initializer={},_views={view2d:null,view3d:null},_maps={map2d:null,map3d:null},_selectionGraphicsLayer=new GraphicsLayer,_playGraphicsLayer=new GraphicsLayer,initViewHandlers=function(e){var t=dom.byId("2d"),a=dom.byId("3d"),r=e.view,i=r&&r.map,n=on(t,"click",function(t){e.set("view",getView()),_drawOnMap(e),t.stopPropagation()});e.handles.add(n,"2d-view");var o=on(a,"click",function(t){e.set("view",getView(!0)),_drawOnMap(e),t.stopPropagation()});e.handles.add(o,"3d-view");var l=dom.byId("basemapSelector"),s=on(l,"change",function(){i.basemap=l.value});e.handles.add(s,"basemap-selector")},_getMap=function(e){var t=null;if(e){if(_maps.map3d)return _maps.map3d;t=[new GraphicsLayer]}else{if(_maps.map2d)return _maps.map2d;t=[_playGraphicsLayer,_selectionGraphicsLayer]}return new Map({basemap:"topo",layers:t})},getView=function(e){var t=dom.byId("2d"),a=dom.byId("3d"),r=dom.byId("view2d"),i=dom.byId("view3d");return e?(r.style.display="none",i.style.display="block",t.className="",a.className="active",_views.view3d?_views.view3d:_views.view3d=new SceneView({container:"view3d",map:_getMap(!0),camera:{position:[-118.5,22,1032626],tilt:50,zoom:8}})):(r.style.display="block",i.style.display="none",a.className="",t.className="active",_views.view2d?_views.view2d:_views.view2d=new MapView({container:"view2d",center:[-118,34.5],zoom:8,map:_getMap()}))},_initCopy=function(e,t,a){ZeroClipboard.config({swfPath:require.toUrl("zeroclipboard")+"/ZeroClipboard.swf"});var r=new ZeroClipboard(e);r.on("ready",function(){r.on("copy",function(e){e.clipboardData.setData("text/plain",a?t.getValue():t.value)}),r.on("aftercopy",function(){var e=dom.byId("msg");e.innerHTML="Copied to clipboard!";var t=new Event("notification");e.dispatchEvent(t)})}),r.on("error",function(){ZeroClipboard.destroy()})},initEditor=function(e){var t=dom.byId("code-area"),a=CodeMirror.fromTextArea(t,{theme:"monokai",lineNumbers:!0,readOnly:!0,gutters:["CodeMirror-linenumbers"]});_initCopy(dom.byId("copyButton"),a.getDoc(),!0),a.on("change",function(t){var a=t.getDoc().getValue();_isJsonRegex(a)||a.indexOf("require([")!==-1||(_drawOnMap(e),_changeMenu(dom.byId("codeOption")))}),e.set("editor",a)},_isJsonRegex=function(e){return""!=e&&(e=e.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""),/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(e))},_drawOnMap=function(currentState){var map=currentState.view.map,paths=currentState.required.paths,names=currentState.required.reqVariables,configData=currentState.config,code=CodeGenerator.generateCode(currentState.ast),graphicsLayer=map.layers.getItemAt(0);graphicsLayer.removeAll(),requireUtils.when(require,paths).then(function(){for(var i=0;i<arguments[0].length;i++)this[names[i]]=arguments[0][i];var variableHolder=eval(code+configData.variable),className=configData.className;if(className.indexOf("Symbol")>-1){var geometry=geometryUtils.getGeometry(className);if(code.indexOf("offset")>-1){var geoLocSym=new SimpleMarkerSymbol({style:SimpleMarkerSymbol.STYLE_CIRCLE,color:"black",size:5}),geoLocGraphic=new Graphic({geometry:geometry,symbol:geoLocSym});graphicsLayer.add(geoLocGraphic)}var graphic=new Graphic({geometry:geometry,symbol:variableHolder});graphicsLayer.add(graphic),className.indexOf("WebStyleSymbol")>-1?currentState.view.goTo({center:[-117.9998834,34.50012405],zoom:20,heading:30,tilt:75}):className.toLowerCase().indexOf("3d")>-1&&currentState.view.goTo({position:[-118.5,22,1032626],tilt:50,zoom:8,heading:0})}})},_changeMenu=function(e){for(var t=dom.byId("codeBlockMenu"),a=t.childNodes,r=0;r<a.length;r++)if(a[r].className){a[r].className="";break}"copyButton"!==e.id&&(e.className="active")},initCodeBlockHandlers=function(currentState){var menu=dom.byId("codeBlockMenu"),handle=on(menu,"click",function(event){var node=event.target;node.id||(node=event.target.parentNode),_changeMenu(node);var code=CodeGenerator.generateCode(currentState.ast),configData=currentState.config,editor=currentState.editor;if("codeOption"===node.id)editor.getDoc().setValue(currentState.required.commentReqModules.join("\n")+"\n\n"+js_beautify(code));else if("usageOption"===node.id)editor.getDoc().setValue("// usage: \n\n require([\n"+currentState.required.reqModules.join(",\n")+" \n], function("+currentState.required.reqVariables.join(", ")+"){\n\n"+js_beautify("\t"+code)+"\n\n});");else if("jsonOption"===node.id){var variableHolder=eval(code+configData.variable);variableHolder&&"web-style-symbol"===variableHolder.type?variableHolder.fetchSymbol().then(function(e){editor.getDoc().setValue(JSON.stringify(e.toJSON(),null,4))}):editor.getDoc().setValue(JSON.stringify(variableHolder.toJSON(),null,4))}});currentState.handles.add(handle,"code-block-menu")},_resetObj=function(e){for(var t in e)e.hasOwnProperty(t)&&"_watchCallbacks"!==t&&"className"!==t&&(e[t]instanceof Object&&!(e[t]instanceof Array)?_resetObj(e[t]):e[t]&&e.set(t,null))},initResetBtnHandlers=function(e){var t=e.config,a=e.editor,r=on(dom.byId("reset"),"click",function(){_resetObj(e.statefulObject),e.set("ast",CodeGenerator.getAST(t.className,t.variable));var r=CodeGenerator.generateCode(e.ast);a.getDoc().setValue(e.required.commentReqModules.join("\n")+"\n\n"+js_beautify(r))});e.handles.add(r,"reset");var i=on(dom.byId("share"),"click",function(){dom.byId("modalBlock").style.display="block",dom.byId("shareInput").value=window.location.href+"?state="+JSON.stringify(e.statefulObject)});e.handles.add(i,"share");var n=on(dom.byId("shareClose"),"click",function(){dom.byId("modalBlock").style.display="none"});e.handles.add(n,"shareClose"),_initCopy(dom.byId("copyShare"),dom.byId("shareInput"))},initMsgCenterHandlers=function(){var e=dom.byId("msg"),t=e.parentNode;on(e,"errMsg",function(){t.style.display="block",setTimeout(function(){t.style.display="none"},4e3)}),on(e,"notification",function(){t.style.display="block",setTimeout(function(){t.style.display="none"},4e3)})},initSelectionHandlers=function(e,t){var a=dom.byId("searchBtn"),r=dom.byId("pageSubTitle"),i=dom.byId("searchContainer"),n=dom.byId("searchBox"),o=dom.byId("selectionList"),l=dom.byId("symbolsList"),s=t[0].list,d=_selectionGraphicsLayer;s.forEach(function(e){var t=document.createElement("a");t.setAttribute("href",window.location.pathname+"#/config="+e.location),t.innerHTML=e.name,o.appendChild(t),l.appendChild(t.cloneNode(!0));var a=new Graphic({geometry:geometryUtils.getGeometry(e.name),symbol:geometryUtils.getSymbol(e.name)});on(t,"mouseenter, mouseleave",function(t){t.preventDefault(),d.removeAll(),"mouseenter"===t.type&&"2d"===e.type&&d.add(a),t.stopPropagation()})}),on(a,"click",function(){pageTitle.style.display="none",r.style.display="none",i.style.display="inline",n.focus(),event.stopPropagation()}),on(document,"click",function(){pageTitle.style.display="inline",r.style.display="inline",i.style.display="none"}),on(n,"keyup",function(){for(var e=n.value.toLowerCase(),t=l.getElementsByTagName("a"),a=0;a<t.length;a++)t[a].href.toLowerCase().indexOf(e)>-1?t[a].style.display="":t[a].style.display="none"})},clearGraphicsLayer2D=function(){_playGraphicsLayer.removeAll()},init=function(){var e=CurrentState.getInstance();initViewHandlers(e),initEditor(e);var t=e.config,a=DOMBuilder.getMainfragment(t);dom.byId("playArea").appendChild(a),e.view.then(function(){e.set("ast",CodeGenerator.getAST(t.className,t.variable)),e.statefulObject||e.set("statefulObject",ObjectProvider.getStatefullObject(t));var a=t.className;"PictureMarkerSymbol"===a&&null==e.statefulObject.url?e.statefulObject.set("url","https://goo.gl/58GeAx"):"TextSymbol"===a&&null==e.statefulObject.text?e.statefulObject.set("text","Sample Text"):"PictureFillSymbol"===a&&null==e.statefulObject.url?e.statefulObject.set("url","https://goo.gl/58GeAx"):"WebStyleSymbol"===a&&WebStyleSymbolUtils.init(),initCodeBlockHandlers(e),initResetBtnHandlers(e)})},reset=function(){var e=CurrentState.getInstance();domConstruct.empty("playArea"),e.editor&&domConstruct.destroy(e.editor.getWrapperElement()),registry.toArray().forEach(function(e){"color-picker"===e.title&&e.destroy(!0)}),CurrentState.destroy()};return initializer.getView=getView,initializer.clearGraphicsLayer2D=clearGraphicsLayer2D,initializer.init=init,initializer.reset=reset,initializer.initMsgCenterHandlers=initMsgCenterHandlers,initializer.initSelectionHandlers=initSelectionHandlers,initializer});