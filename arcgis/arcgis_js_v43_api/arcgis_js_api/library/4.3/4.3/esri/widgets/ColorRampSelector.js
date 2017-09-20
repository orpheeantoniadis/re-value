// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/i18n!./ColorRampSelector/nls/ColorRampSelector dojo/store/Memory dojo/has dijit/form/FilteringSelect dojo/query dojo/dom-style dojo/on dojo/dom-construct".split(" "),function(f,k,d,l,m,e,n,g,h,p,q){return f([n],{declaredClass:"esri.widgets.ColorRampSelector",_colorRampNameMap:[{name:"none",id:"none"},{name:"Aspect",id:"aspect_predefined"},{name:"Black to White",id:"blackToWhite_predefined"},{name:"Blue Bright",id:"blueBright_predefined"},
{name:"Blue Light to Dark",id:"blueLightToDark_predefined"},{name:"Blue-Green Bright",id:"blueGreenBright_predefined"},{name:"Blue-Green Light to Dark",id:"blueGreenLightToDark_predefined"},{name:"Brown Light to Dark",id:"brownLightToDark_predefined"},{name:"Brown to Blue Green Diverging, Bright",id:"brownToBlueGreenDivergingBright_predefined"},{name:"Brown to Blue Green Diverging, Dark",id:"brownToBlueGreenDivergingDark_predefined"},{name:"Coefficient Bias",id:"coefficientBias_predefined"},{name:"Cold to Hot Diverging",
id:"coldToHotDiverging_predefined"},{name:"Condition Number",id:"conditionNumber_predefined"},{name:"Cyan to Purple",id:"cyanToPurple_predefined"},{name:"Cyan-Light to Blue-Dark",id:"cyanLightToBlueDark_predefined"},{name:"Distance",id:"distance_predefined"},{id:"elevation1_predefined",name:"Elevation #1"},{id:"elevation2_predefined",name:"Elevation #2"},{id:"errors_predefined",name:"Errors"},{id:"grayLightToDark_predefined",name:"Gray Light to Dark"},{id:"greenBright_predefined",name:"Green Bright"},
{id:"greenLightToDark_predefined",name:"Green Light to Dark"},{name:"Green to Blue",id:"greenToBlue_predefined"},{name:"Orange Bright",id:"orangeBright_predefined"},{name:"Orange Light to Dark",id:"orangeLightToDark_predefined"},{id:"partialSpectrum_predefined",name:"Partial Spectrum"},{id:"partialSpectrum1Diverging_predefined",name:"Partial Spectrum 1 Diverging",type:"multipart"},{id:"partialSpectrum2Diverging_predefined",name:"Partial Spectrum 2 Diverging"},{name:"Pink to YellowGreen Diverging, Bright",
id:"pinkToYellowGreenDivergingBright_predefined"},{name:"Pink to YellowGreen Diverging, Dark",id:"pinkToYellowGreenDivergingDark_predefined"},{id:"precipitation_predefined",name:"Precipitation"},{id:"prediction_predefined",name:"Predictionn"},{name:"Purple Bright",id:"purpleBright_predefined"},{id:"purpleToGreenDivergingBright_predefined",name:"Purple to Green Diverging, Bright"},{id:"purpleToGreenDivergingDark_predefined",name:"Purple to Green Diverging, Dark"},{name:"Purple-Blue Bright",id:"purpleBlueBright_predefined"},
{name:"Purple-Blue Light to Dark",id:"purpleBlueLightToDark_predefined"},{name:"Purple-Red Bright",id:"purpleRedBright_predefined"},{name:"Purple-Red Light to Dark",id:"purpleRedLightToDark_predefined"},{name:"Red Bright",id:"redBright_predefined"},{name:"Red Light to Dark",id:"redLightToDark_predefined"},{id:"redToBlueDivergingBright_predefined",name:"Red to Blue Diverging, Bright"},{id:"redToBlueDivergingDark_predefined",name:"Red to Blue Diverging, Dark"},{id:"redToGreen_predefined",name:"Red to Green"},
{id:"redToGreenDivergingBright_predefined",name:"Red to Green Diverging, Bright"},{id:"redToGreenDivergingDark_predefined",name:"Red to Green Diverging, Dark"},{name:"Slope",id:"slope_predefined"},{id:"spectrumFullBright_predefined",name:"Spectrum-Full Bright"},{id:"spectrumFullDark_predefined",name:"Spectrum-Full Dark"},{id:"spectrumFullLight_predefined",name:"Spectrum-Full Light"},{id:"surface_predefined",name:"Surface"},{id:"temperature_predefined",name:"Temperature"},{name:"White to Black",id:"whiteToBlack_predefined"},
{id:"yellowToDarkRed_predefined",name:"Yellow to Dark Red"},{id:"yellowToGreenToDarkBlue_predefined",name:"Yellow to Green to Dark Blue"},{name:"Yellow to Red",id:"yellowToRed_predefined"},{name:"Yellow-Green Bright",id:"yellowGreenBright_predefined"},{name:"Yellow-Green Light to Dark",id:"yellowGreenLightToDark_predefined"}],_colorRamps:[{id:"none",selected:!0},{id:"aspect_predefined",type:"multipart",colorRamps:[{fromColor:[190,190,190],toColor:[255,45,8]},{fromColor:[255,45,8],toColor:[255,181,
61]},{fromColor:[255,181,61],toColor:[255,254,52]},{fromColor:[255,254,52],toColor:[0,251,50]},{fromColor:[0,251,50],toColor:[255,254,52]},{fromColor:[0,253,255],toColor:[0,181,255]},{fromColor:[0,181,255],toColor:[26,35,253]},{fromColor:[26,35,253],toColor:[255,57,251]},{fromColor:[255,57,251],toColor:[255,45,8]}]},{id:"blackToWhite_predefined",fromColor:[0,0,0],toColor:[255,255,255]},{id:"blueBright_predefined",fromColor:[204,204,255],toColor:[0,0,224]},{id:"blueLightToDark_predefined",fromColor:[211,
229,232],toColor:[46,100,140]},{id:"blueGreenBright_predefined",fromColor:[203,245,234],toColor:[48,207,146]},{id:"blueGreenLightToDark_predefined",fromColor:[216,242,237],toColor:[21,79,74]},{id:"brownLightToDark_predefined",fromColor:[240,236,170],toColor:[102,72,48]},{id:"brownToBlueGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[156,85,31],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[33,130,145]}]},{id:"brownToBlueGreenDivergingDark_predefined",type:"multipart",
colorRamps:[{fromColor:[110,70,45],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[48,100,102]}]},{id:"coefficientBias_predefined",fromColor:[214,214,255],toColor:[0,57,148]},{id:"coldToHotDiverging_predefined",type:"multipart",colorRamps:[{fromColor:[69,117,181],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[214,47,39]}]},{id:"conditionNumber_predefined",type:"multipart",colorRamps:[{fromColor:[0,97,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,34,0]}]},{id:"cyanToPurple_predefined",
type:"multipart",colorRamps:[{fromColor:[0,245,245],toColor:[0,0,245]},{fromColor:[0,0,245],toColor:[245,0,245]}]},{id:"cyanLightToBlueDark_predefined",type:"multipart",colorRamps:[{fromColor:[182,237,240],toColor:[31,131,224]},{fromColor:[31,131,224],toColor:[9,9,145]}]},{id:"distance_predefined",fromColor:[255,200,0],toColor:[0,0,255]},{id:"elevation1_predefined",type:"multipart",colorRamps:[{fromColor:[175,240,233],toColor:[255,255,179]},{fromColor:[255,255,179],toColor:[0,128,64]},{fromColor:[0,
128,64],toColor:[252,186,3]},{fromColor:[252,186,3],toColor:[128,0,0]},{fromColor:[120,0,0],toColor:[105,48,13]},{fromColor:[105,48,13],toColor:[171,171,171]},{fromColor:[171,171,171],toColor:[255,252,255]}]},{id:"elevation2_predefined",type:"multipart",colorRamps:[{fromColor:[118,219,211],toColor:[255,255,199]},{fromColor:[255,255,199],toColor:[255,255,128]},{fromColor:[255,255,128],toColor:[217,194,121]},{fromColor:[217,194,121],toColor:[135,96,38]},{fromColor:[135,96,38],toColor:[150,150,181]},
{fromColor:[150,150,181],toColor:[181,150,181]},{fromColor:[181,150,181],toColor:[255,252,255]}]},{id:"errors_predefined",fromColor:[255,235,214],toColor:[196,10,10]},{id:"grayLightToDark_predefined",fromColor:[219,219,219],toColor:[69,69,69]},{id:"greenBright_predefined",fromColor:[204,255,204],toColor:[14,204,14]},{id:"greenLightToDark_predefined",fromColor:[220,245,233],toColor:[34,102,51]},{id:"greenToBlue_predefined",type:"multipart",colorRamps:[{fromColor:[32,204,16],toColor:[0,242,242]},{fromColor:[0,
242,242],toColor:[2,33,227]}]},{id:"orangeBright_predefined",fromColor:[255,235,204],toColor:[240,118,5]},{id:"orangeLightToDark_predefined",fromColor:[250,233,212],toColor:[171,65,36]},{id:"partialSpectrum_predefined",type:"multipart",colorRamps:[{fromColor:[242,241,162],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]},{fromColor:[252,3,69],toColor:[176,7,237]},{fromColor:[176,7,237],toColor:[2,29,173]}]},{id:"partialSpectrum1Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[135,
38,38],toColor:[240,149,12]},{fromColor:[240,149,12],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[74,80,181]},{fromColor:[74,80,181],toColor:[39,32,122]}]},{id:"partialSpectrum2Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[115,77,42],toColor:[201,137,52]},{fromColor:[201,137,52],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[91,63,176]},{fromColor:[91,63,176],toColor:[81,13,97]}]},{id:"pinkToYellowGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[158,
30,113],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[99,110,45]}]},{id:"pinkToYellowGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,47,73],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[22,59,15]}]},{id:"precipitation_predefined",type:"multipart",colorRamps:[{fromColor:[194,82,60],toColor:[237,161,19]},{fromColor:[237,161,19],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,219,0]},{fromColor:[0,219,0],toColor:[32,153,143]},{fromColor:[32,153,
143],toColor:[11,44,122]}]},{id:"prediction_predefined",type:"multipart",colorRamps:[{fromColor:[40,146,199],toColor:[250,250,100]},{fromColor:[250,250,100],toColor:[232,16,20]}]},{id:"purpleBright_predefined",fromColor:[255,204,255],toColor:[199,0,199]},{id:"purpleToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[77,32,150],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[20,122,11]}]},{id:"purpleToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[67,
14,89],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[24,79,15]}]},{id:"purpleBlueBright_predefined",fromColor:[223,184,230],toColor:[112,12,242]},{id:"purpleBlueLightToDark_predefined",fromColor:[229,213,242],toColor:[93,44,112]},{id:"purpleRedBright_predefined",fromColor:[255,204,225],toColor:[199,0,99]},{id:"purpleRedLightToDark_predefined",fromColor:[250,215,246],toColor:[143,17,57]},{id:"redBright_predefined",fromColor:[255,204,204],toColor:[219,0,0]},{id:"redLightToDark_predefined",
fromColor:[255,224,224],toColor:[143,10,10]},{id:"redToBlueDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[196,69,57],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[48,95,207]}]},{id:"redToBlueDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[107,13,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[13,53,97]}]},{id:"redToGreen_predefined",type:"multipart",colorRamps:[{fromColor:[245,0,0],toColor:[245,245,0]},{fromColor:[245,245,0],toColor:[0,
245,0]}]},{id:"redToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[186,20,20],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[54,145,33]}]},{id:"redToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,21,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[16,69,16]}]},{id:"slope_predefined",type:"multipart",colorRamps:[{fromColor:[56,168,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]},{id:"spectrumFullBright_predefined",
type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]},{id:"spectrumFullDark_predefined",type:"multipart",colorRamps:[{fromColor:[153,0,0],toColor:[153,153,0]},{fromColor:[153,153,0],toColor:[0,153,153]},{fromColor:[0,153,153],toColor:[0,0,153]}]},{id:"spectrumFullLight_predefined",type:"multipart",colorRamps:[{fromColor:[255,153,153],toColor:[255,255,153]},{fromColor:[255,255,153],toColor:[153,
255,255]},{fromColor:[153,255,255],toColor:[153,153,255]}]},{id:"surface_predefined",type:"multipart",colorRamps:[{fromColor:[112,153,89],toColor:[242,238,162]},{fromColor:[242,238,162],toColor:[242,206,133]},{fromColor:[242,206,133],toColor:[194,140,124]},{fromColor:[194,140,124],toColor:[255,242,255]}]},{id:"temperature_predefined",type:"multipart",colorRamps:[{fromColor:[255,252,255],toColor:[255,0,255]},{fromColor:[255,0,255],toColor:[0,0,255]},{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,
255,255],toColor:[0,255,0]},{fromColor:[0,255,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,128,0]},{fromColor:[255,128,0],toColor:[128,0,0]}]},{id:"whiteToBlack_predefined",fromColor:[255,255,255],toColor:[0,0,0]},{id:"yellowToDarkRed_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[242,167,46]},{fromColor:[242,167,46],toColor:[107,0,0]}]},{id:"yellowToGreenToDarkBlue_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[56,224,9]},{fromColor:[56,
224,9],toColor:[26,147,171]},{fromColor:[26,147,171],toColor:[12,16,120]}]},{id:"yellowToRed_predefined",fromColor:[245,245,0],toColor:[255,0,0]},{id:"yellowGreenBright_predefined",fromColor:[236,252,204],toColor:[157,204,16]},{id:"yellowGreenLightToDark_predefined",fromColor:[215,240,175],toColor:[96,107,45]}],_namesShown:!0,constructor:function(a){f.safeMixin(this,a);this._i18n=l},startup:function(){this.inherited(arguments);this._styleDijitInput();this._setupColorRampList();this._setupDropdownEvents()},
addColorRamp:function(a,c){if(9>=e("ie"))a.labelGradient="\x3chtml\x3e\x3cbody\x3e\x3clabel style\x3d'display: block; padding: 4px 0px 0px 4px;'\x3e"+a.name+"\x3c/label\x3e\x3c/body\x3e\x3c/html\x3e",a.label=a.labelGradient;else{var b=this._generateColorRampDivs(a);a.labelGradient="\x3chtml\x3e\x3cbody\x3e\x3cdiv title\x3d'"+a.name+"' style\x3d'height:18px; padding: 1px; direction: ltr!important;'\x3e"+b+"\x3c/div\x3e\x3c/body\x3e\x3c/html\x3e";a.label=this._namesShown?"\x3chtml\x3e\x3cbody\x3e\x3clabel style\x3d'display: block; padding-left: 2px;'\x3e"+
a.name+"\x3c/label\x3e\x3cdiv style\x3d'height:18px; padding: 1px; direction: ltr!important;'\x3e"+b+"\x3c/div\x3e\x3c/body\x3e\x3c/html\x3e":a.labelGradient}this.store.add(a);c&&this.set("value",a.id)},_setupDropdownEvents:function(){p(this.inputContainer,"click",k.hitch(this,this.toggleDropDown));this.dropDownEventsSetup=!0},_setupColorRampList:function(){this._generateColorRamps();this._populateColorRampList()},_styleDijitInput:function(){var a=g(".dijitReset.dijitInputInner",this.domNode)[0];
this.inputContainer=g(".dijitReset.dijitInputField.dijitInputContainer",this.domNode)[0];h.set(this.inputContainer,"height","25px!important");h.set(a,"display","none")},_generateColorRamps:function(){var a=this._i18n.colorRamps,c;d.forEach(this._colorRamps,function(b){"none"===b.id?b.label="\x3chtml\x3e\x3cbody\x3e\x3cdiv style\x3d'padding: 5px 0px 5px 2px; font-weight: 700;'\x3e"+a[b.id]+"\x3c/div\x3e\x3c/body\x3e\x3c/html\x3e":(b.name=a[b.id],9>=e("ie")?(b.labelGradient="\x3chtml\x3e\x3cbody\x3e\x3clabel style\x3d'display: block; padding: 4px 0px 0px 4px;'\x3e"+
b.name+"\x3c/label\x3e\x3c/body\x3e\x3c/html\x3e",b.label=b.labelGradient):(c=this._generateColorRampDivs(b),b.labelGradient="\x3chtml\x3e\x3cbody\x3e\x3cdiv title\x3d'"+b.name+"' style\x3d'height:18px; padding: 1px; direction: ltr!important;'\x3e"+c+"\x3c/div\x3e\x3c/body\x3e\x3c/html\x3e",b.label=this._namesShown?"\x3chtml\x3e\x3cbody\x3e\x3clabel style\x3d'display: block; padding-left: 2px;'\x3e"+b.name+"\x3c/label\x3e\x3cdiv style\x3d'height:18px; padding: 1px; direction: ltr!important;'\x3e"+
c+"\x3c/div\x3e\x3c/body\x3e\x3c/html\x3e":b.labelGradient))},this)},_populateColorRampList:function(){this.set({labelAttr:"label",labelType:"html",searchAttr:"id",store:new m({data:this._colorRamps}),value:this.value})},_generateColorRampDivs:function(a){var c,b="";"multipart"===a.type?(c=100/a.colorRamps.length,d.forEach(a.colorRamps,function(a){b+=this._generateSingleGradientDiv(a.fromColor,a.toColor,c)},this)):b=this._generateSingleGradientDiv(a.fromColor,a.toColor,100);return b},_generateSingleGradientDiv:function(a,
c,b){var e,f="";e="(90deg, rgb("+a.join()+"), rgb("+c.join()+"));";d.forEach(["-webkit-linear-gradient","-o-linear-gradient","-moz-linear-gradient","linear-gradient"],function(a){f+="background: "+a+e});return"\x3cdiv style\x3d' display: inline-block; width:"+b+"%; padding: 0; height: 100%;"+f+"'\x3e\x3c/div\x3e"},onChange:function(){this.inherited(arguments);var a;d.some(this._colorRamps,function(c){c.id===this.value&&(a=c,"none"===this.value||9>=e("ie")?this.inputContainer.innerHTML="\x3chtml\x3e\x3cbody\x3e\x3cdiv style\x3d'padding: 4px 0px 0px 4px; font-weight: 400;'\x3e"+
q.toDom(a.label).innerHTML+"\x3c/div\x3e\x3c/body\x3e\x3c/html\x3e":this.inputContainer.innerHTML=a.labelGradient)},this);this.colorRampName=this._getColorRampName(a.id);this.colorRamp=a},_getColorRampName:function(a){var c;d.some(this._colorRampNameMap,function(b){if(b.id===a)return c=b.name,!0});return c},showNames:function(a){this._namesShown=a;this._setupColorRampList()},reset:function(){this.set("value","none")},setSelected:function(a){var c;d.some(this._colorRampNameMap,function(b){if(b.name===
a)return c=b.id,!0})?(this.set("value",c),this.value=c):this.reset()}})});