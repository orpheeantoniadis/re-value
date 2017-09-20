// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/RendererSlider/templates/RendererSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\r\n  \x3cdiv class\x3d"${_css.topLabelNode} ${_css.topLabelNodeHover}" data-dojo-attach-point\x3d"_topNode"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_topNodeSpan"\x3e\x3c/span\x3e \r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${_css.slidernode}" data-dojo-attach-point\x3d"_sliderNode"\x3e\r\n    \x3cdiv class\x3d"${_css.sliderarea}" data-dojo-attach-point\x3d"_sliderArea"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"${_css.sliderarearight}" data-dojo-attach-point\x3d"_sliderAreaRight"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${_css.bottomLabelNode} ${_css.bottomLabelNodeHover}" data-dojo-attach-point\x3d"_botNode"\x3e\r\n    \x3cspan  data-dojo-attach-point\x3d"_bottomNodeSpan"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widgette ./DateTimeTextBox ./RendererSlider/sliderUtils ../core/numberUtils ../renderers/support/utils dijit/_TemplatedMixin dijit/form/NumberTextBox dojo/_base/array dojo/_base/lang dojo/dnd/move dojo/dom-construct dojo/dom-style dojo/dom-class dojo/on dojo/text!./RendererSlider/templates/RendererSlider.html".split(" "),function(E,w,v,x,C,F,B,t,f,G,u,p,D,q,H){return E.createSubclass([F],{declaredClass:"esri.widgets.RendererSlider",templateString:H,_visibleLabels:["data","handle"],_roundedDataLabels:[],
_roundedHandleLabels:[],_ratioLabels:[],_minRatioLabel:"",_maxRatioLabel:"",_sliderHeight:null,_isZoomed:!1,_minZoomLabel:"",_maxZoomLabel:"",_maximumNumberEditor:null,_minimumNumberEditor:null,_valueDifferenceByIndex:[],_currentTopValue:[],_isLTR:!0,_ctrlDown:!1,_histogramSurface:null,_css:null,_minPrecisionForSmallNumbers:3,_handles:[],properties:{loaded:!1,intermediateChanges:!0,type:null,minimum:0,maximum:100,values:[],precision:2,handles:[],handlesVisible:!0,primaryHandleIndex:null,ticksVisible:!0,
labelsVisible:!0,ratioLabelsVisible:null,minLabel:null,maxLabel:null,isDate:!1},constructor:function(a,b){this._css={container:"esri-renderer-slider",slidernode:"esri-slider-node",sliderarea:"esri-slider-area",sliderarearight:"esri-slider-area-right",moveable:"esri-moveable",handler:"esri-handle",handlerSpan:"esri-handle-span",handlerContainer:"esri-handle-container",handlerLabel:"esri-handle-label",handlerLabelSpan:"esri-handle-label-span",topLabelNode:"esri-top-label-node",bottomLabelNode:"esri-bottom-label-node",
topLabelNodeHover:"esri-top-label-node-hover",bottomLabelNodeHover:"esri-bottom-label-node-hover",heatmapTick:"esri-heatmap-tick",handlerTick:"esri-handler-tick",handlerTickTop:"esri-handler-tick-top",handlerTickBottom:"esri-handler-tick-bottom"};this.labelsVisible=a.labelsVisible||this._visibleLabels},startup:function(){this.inherited(arguments);var a=p.get(this._sliderArea,"height");this._sliderHeight=a?a:200;this._checkMinMaxDefaults();this._isLTR=this.isLeftToRight();if(!this._isLTR){var a=p.get(this._sliderNode,
"padding-left")+p.get(this._sliderNode,"padding-right"),b=Math.round(p.get(this._sliderNode,"width"));this._sliderNodeWidth_RTL=a+b}this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();this._generateCtrlKeyListener();this.watch("values",this._valuesChange);this.watch("minimum, maximum, ratioLabelsVisible",this._updateTimeout);this.loaded=!0;this.emit("load")},destroy:function(){this.inherited(arguments)},setValue:function(a,b,d){var c=this.get("values"),e=c.slice(0);
"object"===typeof c[0]?e[a].value=b:e[a]=b;if(this.intermediateChanges||d)this.values=e;d?this.emit("stop",{values:this.get("values")}):this.emit("slide",{values:e})},_updateTimeout:function(a,b,d){this._updateSlider()},_updateSlider:function(){this._reset();this._checkMinMaxDefaults();this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();this._generateCtrlKeyListener()},_checkMinMaxDefaults:function(){var a=this.values,b;this.minimum===this.maximum&&a&&0<a.length&&(isNaN(a[0])?
this.set({minimum:0,maximum:2*a[0].value}):this.set({minimum:0,maximum:2*a[0]}));a&&0<a.lenth&&(b=isNaN(a[0])?a[0].value:a[0],this.minimum>b&&(this.minimum=b),a=isNaN(a[a.length-1])?a[a.length-1].value:a[a.length-1],this.maximum<a&&(this.maximum=a));this.precision=v.getCombinedPrecision(this.minimum,this.maximum)},_calculateValueFromHandlePosition:function(a){var b=this.get("minimum"),d=this.get("maximum"),c=this.get("precision"),e=this.get("step")||Math.pow(10,-c);return 1>=b&&-1<=b&&1>=d&&-1<=d||
c>=this._minPrecisionForSmallNumbers?(a*(d-b)+b)/e*e:parseFloat((Math.round((a*(d-b)+b)/e)*e).toFixed(c))},_generateMoveables:function(){var a,b=this._sliderNode,d=this._sliderHeight,c=this.get("minimum"),e=this.get("maximum"),r=this.get("labelsVisible"),g=this.get("ticksVisible"),m=f.hitch(this,this.setValue),k=this.get("values");this._updateMinMaxLabels();this.moveables=a=t.map(k,f.hitch(this,function(k,h){var l,y,q,n,A,w;if("object"===typeof k&&k.hidden)return null;"object"===typeof k&&(k=k.value);
l=u.create("div",{style:this._getHandleStyleString(k),className:this._css.moveable},b);l.handleContainer=A=u.create("div",{className:this._css.handlerContainer},l);l.arrowSpan=q=u.create("span",{className:this._css.handlerSpan},A);l.handler=k=u.create("div",{className:this._css.handler},A);"HeatmapSlider"!==this.type&&(!0===r||"object"===typeof r&&-1!==t.indexOf(r,"handles"))&&(y=this._generateHandleLabel(l,h));g&&this._generateHandleTicks(l,h);n=new G.constrainedMoveable(l,{handle:A,within:!0,constraints:f.hitch(this,
function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d}})});n.onMoveStart=f.hitch(this,function(b){var c=this.handles,e=t.indexOf(c,h),z,g;this._currentTopValue[h]=b.node.style.top;w=Number(b.node.style.top.replace("px",""));l.labelNode&&l.labelNode._autoPositioned&&(p.set(l.labelNode,"top","3px"),l.labelNode._autoPositioned=!1);v._autoPositionHandleLabels(this.get("moveables"));l._numberEditor&&(l._numberEditor.destroy(),l._numberEditor=null);h!==this.primaryHandleIndex?(c&&0<c.length?
(b=null!==c[e-1]?c[e-1]:null,c=null!==c[e+1]?c[e+1]:null,e=a[b],c=a[c]):(e=a[h-1],c=a[h+1]),e&&c?(e=e.style.top,c=c.style.top,z=Number(e.replace("px","")),g=Number(c.replace("px","")),n.constraints=f.hitch(this,function(){return{t:g+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d-g-(d-z+4)}})):e?(e=e.style.top,z=Number(e.replace("px","")),n.constraints=f.hitch(this,function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d-(d-z+2)}})):c&&(c=c.style.top,g=Number(c.replace("px","")),
n.constraints=f.hitch(this,function(){return{t:g+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d-(g+2)}}))):(c&&0<c.length?(b=null!==c[e-1]?c[e-1]:null,c=null!==c[e+1]?c[e+1]:null,e=a[b],c=a[c]):(e=a[h-1],c=a[h+1]),e&&c&&(e=e.style.top,c=c.style.top,z=Number(e.replace("px","")),g=Number(c.replace("px","")),n.constraints=f.hitch(this,function(){return{t:2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d-4}})))});n.onMoved=f.hitch(this,function(b){var g,k,r,l,n;h===this.primaryHandleIndex&&(r=
Number(this._currentTopValue[h].replace("px",""))-Number(b.node.style.top.replace("px","")),this._currentTopValue[h]=b.node.style.top,t.forEach(a,f.hitch(this,function(a,b){a&&b!==h&&(l=Number(a.style.top.replace("px","")),n=l-r,g=1-Number(n/d),k=this._calculateValueFromHandlePosition(g),k<c||k>e||(p.set(a,"top",n+"px"),m(b,k,!1),a.labelNode&&(a.labelNode.spanNode.innerHTML=this.ratioLabelsVisible?this._getLabelValueFromIndex(b):this._formatValue(k.toFixed(6)))))})));g=1-Number(b.node.style.top.replace("px",
""))/d;k=this._calculateValueFromHandlePosition(g);h!==this.primaryHandleIndex&&this._ctrlDown&&(r=Number(this._currentTopValue[h].replace("px",""))-Number(b.node.style.top.replace("px","")),this._currentTopValue[h]=b.node.style.top,0===h?(l=Number(a[a.length-1].style.top.replace("px","")),b=l+r,b>d&&(b=d),0>b&&(b=0),p.set(a[a.length-1],"top",b+"px"),b=1-b/d,b=this._calculateValueFromHandlePosition(b),m(a.length-1,b,!1),a[a.length-1].labelNode&&(a[a.length-1].labelNode.spanNode.innerHTML=this._formatValue(b.toFixed(6)))):
h===a.length-1&&(l=Number(a[0].style.top.replace("px","")),b=l+r,b>d&&(b=d),0>b&&(b=0),p.set(a[0],"top",b+"px"),b=1-b/d,b=this._calculateValueFromHandlePosition(b),m(0,b,!1),a[0].labelNode&&(a[0].labelNode.spanNode.innerHTML=this._formatValue(b.toFixed(6)))));m(h,k,!1);this._updateRoundedLabels();y&&(b=this._formatValue(parseFloat(this._roundValue([k,parseFloat(this._getLabelValueFromIndex(h,!0))])[0]).toFixed(this.precision)),y.spanNode.innerHTML=this.ratioLabelsVisible?this._getLabelValueFromIndex(h):
b);v._autoPositionHandleLabels(this.get("moveables"))});n.onMoveStop=f.hitch(this,function(a){a=Number(a.node.style.top.replace("px",""));a===w?w=null:(a=this._calculateValueFromHandlePosition(1-a/d),m(h,a,!0),this._updateRoundedLabels(),y&&(a=x.format(parseFloat(x.round([a,parseFloat(this._getLabelValueFromIndex(h,!0))])[0]).toFixed(this.precision)),y.spanNode.innerHTML=this.ratioLabelsVisible?this._getLabelValueFromIndex(h):a),v._autoPositionHandleLabels(this.get("moveables")))});this.handlesVisible||
(p.set(k,"display","none"),p.set(q,"display","none"));return l}));v._autoPositionHandleLabels(this.get("moveables"))},_reset:function(){t.forEach(this.moveables,f.hitch(this,function(a){a&&a.parentElement.removeChild(a)}));this.moveables=[]},_getHandleStyleString:function(a){var b=this.get("minimum"),d=this.get("maximum");return"top: "+Math.round((1-(a-b)/(d-b))*this._sliderHeight)+"px; "+("left: "+(this._isLTR?0:this._sliderNodeWidth_RTL)+"px;")},_generateHandleTicks:function(a,b){var d=this._css,
c=d.handlerTick+" "+d.handlerTickTop,e=d.handlerTick+" "+d.handlerTickBottom;b=0===b?e:c;"HeatmapSlider"===this.type&&(b+=d.heatmapTick);a.tick=u.create("div",{className:b},a)},_updateLabels:function(){this._updateMinMaxLabels();this._updateRoundedLabels()},_resetLabelPositions:function(){t.forEach(this.moveables,function(a){if(a){var b=a.labelNode;b&&(p.set(b,"top","3px"),a.labelNode._autoPositioned=!1)}})},_generateHandleLabel:function(a,b){var d,c;d=u.create("div",{className:this._css.handlerLabel},
a);c=u.create("span",{className:this._css.handlerLabelSpan,innerHTML:this._getLabelValueFromIndex(b)},d);d.spanNode=c;a.labelNode=d;q(d,"click",f.hitch(this,function(){this._generateHandleLabelEditor(a,b)}));return d},_updateMinMaxLabels:function(){var a=this.minimum,b=this.maximum,d=this.labelsVisible,c=this.minLabel,e=this.maxLabel,f=this._topNodeSpan,g=this._bottomNodeSpan,m=this._isZoomed,k=this._maxZoomLabel,n=this._minZoomLabel,h=this.ratioLabelsVisible,l=this._maxRatioLabel,q=this._minRatioLabel,
p=this._roundedDataLabels;!1===d||"object"===typeof d&&-1===t.indexOf(d,"data")?(f.innerHTML="",g.innerHTML=""):m?h?(f.innerHTML=l,g.innerHTML=q):(f.innerHTML=this._formatValue(k),g.innerHTML=this._formatValue(n)):h?(f.innerHTML=l,g.innerHTML=q):(m=isNaN(c)?c:this._roundValue([c,e])[0],d=isNaN(e)?e:this._roundValue([c,e])[1],c=isNaN(m)||null===m?c:this._formatValue(m),e=isNaN(d)||null===d?e:this._formatValue(d),a=this._formatValue(p[0])||this._formatValue(a),b=this._formatValue(p[1])||this._formatValue(b),
f.innerHTML=e||b,g.innerHTML=c||a)},_formatValue:function(a){"string"===typeof a&&(a=Number(a));return this.isDate?C.formatDate(new Date(a),C.timelineDateFormatOptions):x.format(a)},_roundValue:function(a){return this.isDate?a.slice(0):x.round(a)},_updateRoundedLabels:function(){this._roundedDataLabels=this._roundValue([this.minimum,this.maximum]);switch(this.type){case "SizeSlider":case "ClassedSizeSlider":case "ClassedColorSlider":case "UnivariateColorSizeSlider":this._roundedHandleLabels=this._roundValue(this.values);
break;case "ColorSlider":case "OpacitySlider":this._roundedHandleLabels=this._roundValue(this._getValuesFromObject(this.values))}this._updateRatioLabels()},_updateRatioLabels:function(){var a=this.get("ratioLabelsVisible"),b=this.get("minimum"),d=this.get("maximum"),c=this._getValuesFromObject(this.values),e=[],f,g;a&&("percent"!==a&&"percentTotal"!==a?a=null:("percent"===a?(t.forEach(c,function(a){e.push(this._getRatioFromValue(a))},this),f=this._formatValue(this._getRatioFromValue(b).toFixed(2)),
g=this._formatValue(this._getRatioFromValue(d).toFixed(2))):"percentTotal"===a&&(t.forEach(c,function(a){e.push(this._getRatioFromValue(a))},this),f=this._formatValue(this._getRatioFromValue(b).toFixed(2)),g=this._formatValue(this._getRatioFromValue(d).toFixed(2))),this._ratioLabels=e,this._minRatioLabel=f+"%",this._maxRatioLabel=g+"%"))},_generateMinMaxEditors:function(){!this.labelsVisible||"object"===typeof this.labelsVisible&&-1===t.indexOf(this.labelsVisible,"data")||"HeatmapSlider"===this.type?
(D.remove(this._topNode,this._css.topLabelNodeHover),D.remove(this._botNode,this._css.bottomLabelNodeHover)):(q(this._topNode,"click",f.hitch(this,this._generateMaxEditor)),q(this._botNode,"click",f.hitch(this,this._generateMinEditor)))},_generateMaxEditor:function(){if(!(this._maximumNumberEditor&&this._topLabelNode||this._isZoomed)){var a=this.get("minLabel"),b=this.get("maxLabel"),d=this.get("maximum"),c=this.handles,e;this._topNodeSpan.innerHTML="";this._topLabelNode=u.create("input",{type:"text"},
this._topNode);e=c&&0<c.length?this.values[c[c.length-1]]:this.values[this.values.length-1];"object"===typeof e&&(e=e.value);this.ratioLabelsVisible&&(e=this._getLabelValueFromIndex(this.values.length-1,!0).replace("%",""),d=Number(this._maxRatioLabel.replace("%","")));this.isDate?(c=new w({date:new Date(Number(d)),required:!0,constraints:{min:new Date(e),max:null}},this._topLabelNode),a={editor:c,editorPropName:"_maximumNumberEditor",spanNode:this._topNodeSpan,operator:"\x3c"},c.on("keydown",f.hitch(this,
this._minMaxKeydownDateHandler,a)),c.on("blur",f.hitch(this,this._minMaxBlurDateValue,a)),c.watch("date",f.hitch(this,this._minMaxUpdateDateValue,a))):(c=new B({value:Number(d),required:!0,constraints:{min:e,max:"percentTotal"===this.ratioLabelsVisible?100:null,places:"0,20"}},this._topLabelNode),q(c,"keydown",f.hitch(this,this._keydownHandler,{editor:c,originalValidate:!1})),q(c,"blur",f.hitch(this,this._minMaxBlurHandler,{editor:c,editorPropName:"_maximumNumberEditor",label:b,current:d,spanNode:this._topNodeSpan,
index:1,minLabel:a,maxLabel:b,ratioLabel:this._maxRatioLabel})),q(c,"change",f.hitch(this,this._minMaxChangeHandler,{label:b,current:d,spanNode:this._topNodeSpan,index:1,minLabel:a,maxLabel:b,ratioLabel:this._maxRatioLabel,handleValue:e,operator:"\x3c"})));this._maximumNumberEditor=c;c.startup();c.focus();c.textbox.select()}},_generateMinEditor:function(){if(!(this._minimumNumberEditor&&this._botLabelNode||this._isZoomed)){var a=this.minLabel,b=this.maxLabel,d=this.minimum,c=this.handles,e;this._bottomNodeSpan.innerHTML=
"";this._botLabelNode=u.create("input",{type:"text"},this._botNode);e=c&&0<c.length?this.values[c[0]]:this.values[0];"object"===typeof e&&(e=e.value);this.ratioLabelsVisible&&(console.log("TEST",this._getLabelValueFromIndex(0,!0)),e=String(this._getLabelValueFromIndex(0,!0)).replace("%",""),d=Number(this._minRatioLabel.replace("%","")));this.isDate?(c=new w({date:new Date(Number(d)),required:!0,constraints:{min:null,max:new Date(e)}},this._botLabelNode),a={editor:c,editorPropName:"_minimumNumberEditor",
spanNode:this._bottomNodeSpan,operator:"\x3e"},c.on("keydown",f.hitch(this,this._minMaxKeydownDateHandler,a)),c.on("blur",f.hitch(this,this._minMaxBlurDateValue,a)),c.watch("date",f.hitch(this,this._minMaxUpdateDateValue,a))):(c=new B({value:Number(d),required:!0,constraints:{max:e,min:"percentTotal"===this.ratioLabelsVisible?0:null,places:"0,20"}},this._botLabelNode),q(c,"keydown",f.hitch(this,this._keydownHandler,{editor:c,originalValidate:!1})),q(c,"blur",f.hitch(this,this._minMaxBlurHandler,{editor:c,
editorPropName:"_minimumNumberEditor",label:a,current:d,spanNode:this._bottomNodeSpan,index:0,minLabel:a,maxLabel:b,ratioLabel:this._minRatioLabel})),q(c,"change",f.hitch(this,this._minMaxChangeHandler,{label:a,current:d,spanNode:this._bottomNodeSpan,index:0,minLabel:a,maxLabel:b,ratioLabel:this._minRatioLabel,handleValue:e,operator:"\x3e"})));this._minimumNumberEditor=c;c.startup();c.focus();c.textbox.select()}},_minMaxBlurHandler:function(a,b){b=a.editor;var d=a.editorPropName,c=a.label,e=a.current,
f=a.spanNode,g=a.index,m=a.minLabel,k=a.maxLabel;a=a.ratioLabel;m=isNaN(c)?c:this._roundValue([m,k])[g];c=isNaN(m)||null===m?c:this._formatValue(m);e=this._formatValue(this._roundedDataLabels[g])||this._formatValue(e);this.labelsVisible||"object"===typeof this.labelsVisible&&-1!==t.indexOf(this.labelsVisible,"data")?f.innerHTML=this.ratioLabelsVisible?a:c||e:f.innerHTML="";b.destroy();this[d]=null},_minMaxChangeHandler:function(a,b){var d=a.label,c=a.current,e=a.spanNode,r=a.index,g=a.minLabel,m=
a.maxLabel,k=a.ratioLabel,n=a.handleValue;a=a.operator;("\x3c"===a?b<Number(n):b>Number(n))||isNaN(b)||void 0===b?(b=isNaN(d)?d:this._roundValue([g,m])[r],b=isNaN(b)||null===b?d:this._formatValue(b),c=this._formatValue(this._roundedDataLabels[r])||this._formatValue(c),e.innerHTML=this.ratioLabelsVisible?k:b||c):(k=this.ratioLabelsVisible?this._getValueFromPercent(b):b,e.innerHTML=this.ratioLabelsVisible?k:this._formatValue(b),this.set("\x3c"===a?"maximum":"minimum",k),this._reset(),this._updateRoundedLabels(),
this._generateMoveables(),this._generateMinMaxEditors(),this.emit("data-value-change",{min:this.minimum,max:this.maximum,values:f.clone(this.values)}))},_minMaxKeydownDateHandler:function(a,b){13===b.keyCode&&a.editor.isValid()&&setTimeout(f.hitch(this,this._destroyMinMaxHandleEditor,a),0)},_minMaxBlurDateValue:function(a,b){setTimeout(f.hitch(this,this._destroyMinMaxHandleEditor,a),0)},_destroyMinMaxHandleEditor:function(a){a.spanNode.innerHTML=this._formatValue(this.get("\x3c"===a.operator?"maximum":
"minimum"));a.editor.destroy();this[a.editorPropName]=null},_minMaxUpdateDateValue:function(a){var b=a.spanNode,d=a.operator;a=a.editor.get("date");var d="\x3c"===d?"maximum":"minimum",c=this.get(d);a=a&&a.getTime();if(c=c!==a)b.innerHTML=this._formatValue(a),this.set(d,a);this._reset();this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();c&&this.emit("data-value-change",{min:this.minimum,max:this.maximum,values:f.clone(this.values)})},_generateHandleLabelEditor:function(a,
b){if(!a._numberEditor){var d=this.get("handles"),c=this.get("maximum"),e=this.get("minimum"),r=this._isZoomed,g=this.get("values"),m=g[b],k=t.indexOf(d,b),n=a.labelNode,h,l,p,v;"object"===typeof m&&(m=m.value);n.spanNode.innerHTML="";v=u.create("input",{type:"text"},n);d&&0<d.length?(h=null!==d[k-1]?d[k-1]:null,l=null!==d[k+1]?d[k+1]:null,d=g[h],g=g[l]):(d=g[b-1],g=g[b+1]);"object"===typeof d&&(d=d.value);"object"===typeof g&&(g=g.value);k=void 0!==d&&null!==d?d:r&&!isNaN(this._minZoomLabel)?this._minZoomLabel:
e;p=void 0!==g&&null!==g?g:r&&!isNaN(this._maxZoomLabel)?this._maxZoomLabel:c;this.ratioLabelsVisible&&(m=this._getLabelValueFromIndex(b).replace("%",""),k="undefined"!==typeof d?Number(String(this._getLabelValueFromIndex(h,!0)).replace("%","")):Number(this._minRatioLabel.replace("%",""))||Number(this._getRatioFromValue(this.minimum)),p="undefined"!==typeof g?Number(String(this._getLabelValueFromIndex(l,!0)).replace("%","")):Number(this._maxRatioLabel.replace("%",""))||Number(this._getRatioFromValue(this.maximum)));
this.isDate?(h=new w({date:new Date(m),required:!0,constraints:{min:new Date(k),max:new Date(p)}},v),b={editor:h,editorPropName:"_numberEditor",min:e,max:c,index:b,zoomed:r,spanNode:n.spanNode,moveable:a},h.on("keydown",f.hitch(this,this._stopKeydownDateHandler,b)),h.on("blur",f.hitch(this,this._stopBlurDateHandler,b)),h.watch("date",f.hitch(this,this._stopUpdateDateValue,b))):(h=new B({value:m,constraints:{min:k,max:p,places:"0,20"}},v),q(h,"keydown",f.hitch(this,this._keydownHandler,{editor:h,originalValidate:!1})),
q(h,"blur",f.hitch(this,this._blurHandler,{editor:h,editorPropName:"_numberEditor",updatedValue:m,min:e,max:c,index:b,zoomed:r,spanNode:n.spanNode,moveable:a})),q(h,"change",f.hitch(this,this._changeHandler,{editor:h,index:b,spanNode:n.spanNode})));a._numberEditor=h;h.focus();h.textbox.select()}},_keydownHandler:function(a,b){var d=a.originalValidate;a=a.editor;!1!==d&&(a.validate=d);13===b.keyCode&&(b=a.get("value"),void 0===b&&(b=a.get("displayedValue")),b<=a.constraints.max&&b>=a.constraints.min?
a.focusNode.blur():(d=a.validate,a.validate(!1),a.validate=function(){return!1}))},_blurHandler:function(a,b){b=a.editor;var d=a.editorPropName,c=a.updatedValue,e=a.min,f=a.max,g=a.index,m=a.zoomed,k=a.spanNode;a=a.moveable;isNaN(b.get("value"))&&b.set("value",c);m&&(b.get("value")>f||b.get("value")<e)&&(this._isZoomed=!1,this.emit("zoom-out"));k.innerHTML=this._getLabelValueFromIndex(g);b.destroy();a[d]=null},_changeHandler:function(a,b){var d=a.editor,c=a.index;a=a.spanNode;var e=b;b>d.constraints.max||
b<d.constraints.min||isNaN(b)||void 0===b?a.innerHTML=this._getLabelValueFromIndex(c):(this.ratioLabelsVisible&&(e=this._getValueFromPercent(b)),"object"===typeof this.values[c]?this.values[c].value=e:this.values[c]=e,this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),this.emit("handle-value-change",{values:this.values}))},_stopKeydownDateHandler:function(a,b){13===b.keyCode&&a.editor.isValid()&&setTimeout(f.hitch(this,this._destroyHandleEditor,a),0)},
_stopBlurDateHandler:function(a,b){setTimeout(f.hitch(this,this._destroyHandleEditor,a),0)},_destroyHandleEditor:function(a){a.spanNode.innerHTML=this._getLabelValueFromIndex(a.index);a.editor.destroy();a.moveable[a.editorPropName]=null},_stopUpdateDateValue:function(a){var b=a.min,d=a.max,c=a.index,e=a.zoomed,f=a.spanNode;a=(a=a.editor.get("date"))&&a.getTime();e&&(a>d||a<b)&&(this._isZoomed=!1,this.emit("zoom-out"));if(b=("object"===typeof this.values[c]?this.values[c].value:this.values[c])!==a)"object"===
typeof this.values[c]?this.values[c].value=a:this.values[c]=a;f.innerHTML=this._getLabelValueFromIndex(c);this._reset();this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();b&&this.emit("handle-value-change",{values:this.values})},_getRatioFromValue:function(a){var b=this.get("ratioLabelsVisible");return"percent"===b?100*a:"percentTotal"===b?a/(1+a)*100:null},_getValueFromPercent:function(a){var b=this.get("ratioLabelsVisible");if("percent"===b)return a/100;if("percentTotal"===
b)return 100<=a?100:a/(100-a)},_getLabelValueFromIndex:function(a,b){return this.ratioLabelsVisible&&this._ratioLabels[a]?!0===b?parseFloat(this._ratioLabels[a].toFixed(2))+"%":this._formatValue(parseFloat(this._ratioLabels[a].toFixed(2)))+"%":!0===b?this._roundedHandleLabels[a]:this._formatValue(this._roundedHandleLabels[a])},_getValuesFromObject:function(a){var b=[];t.forEach(a,function(a){b.push(a.value)});return b},_getDecimalPlaces:function(a){return x.format(a,{places:"0,20",round:-1}).replace(/^-?\d*\.?|0+$/g,
"").length},_collisionCheck:function(a,b){return!(a.right<b.left||a.left>b.right||a.bottom<b.top||a.top>b.bottom)},_generateCtrlKeyListener:function(){},_valuesChange:function(){this.emit("data-change",{values:this.get("values")})}})});