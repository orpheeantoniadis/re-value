// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./support/widget ./Search/SearchViewModel ./Search/SearchResultRenderer ./Widget ../core/lang ../core/watchUtils ../PopupTemplate dojo/keys dojo/query dojo/i18n!./Search/nls/Search".split(" "),function(d,y,t,b,e,c,n,u,v,w,p,x,f,q,h){d=function(d){function b(a){a=d.call(this)||this;a._inputNode=null;a._sourceMenuButtonNode=null;a._sourceListNode=null;a._suggestionListNode=
null;a._searchResultRenderer=null;a._popupTemplate=new x({title:h.searchResult,content:a._renderSearchResultsContent.bind(a)});a.activeMenu="none";a.activeSource=null;a.activeSourceIndex=null;a.allPlaceholder=null;a.autoNavigate=null;a.autoSelect=null;a.defaultSource=null;a.locationToAddressDistance=null;a.maxResults=null;a.maxSuggestions=null;a.minSuggestCharacters=null;a.popupEnabled=null;a.popupOpenOnSelect=null;a.popupTemplate=null;a.resultGraphic=null;a.resultGraphicEnabled=null;a.results=null;
a.searchAllEnabled=null;a.searching=!1;a.searchTerm=null;a.selectedResult=null;a.sources=null;a.suggestions=null;a.suggestionsEnabled=null;a.view=null;a.viewModel=new n;return a}t(b,d);b.prototype.postInitialize=function(){var a=this;this.viewModel.popupTemplate=this._popupTemplate;this.own(p.on(this,"viewModel","suggest-complete",function(g){0!==g.numResults&&(a.activeMenu="suggestion")}),p.on(this,"viewModel","search-start",function(){a.activeMenu="none";a._set("searching",!0)}),p.on(this,"viewModel",
"search-complete",function(g){a.activeMenu=0===g.numResults?"warning":"none";a._set("searching",!1)}),p.on(this,"viewModel","search-clear",function(){a._closePopup();a.activeMenu="none"}))};b.prototype.clear=function(){};b.prototype.focus=function(){this._inputNode&&this._inputNode.focus()};b.prototype.blur=function(){this._inputNode&&this._inputNode.blur();this.activeMenu="none"};b.prototype.search=function(a){return null};b.prototype.suggest=function(a){return null};b.prototype.render=function(){var a=
this,g=this.viewModel,b=g.searchTerm,d=this._getSourceName(g.activeSourceIndex),e=b.trim(),f=this.id,l=c.jsxFactory.createElement("input",{bind:this,placeholder:g.placeholder,"aria-label":h.searchButtonTitle,maxlength:g.maxInputLength,autocomplete:"off",type:"text",tabindex:"0",class:"esri-search__input",value:b,"aria-haspopup":"true",id:f+"_input",role:"textbox",onclick:this._handleInputClick,onkeyup:this._handleInputKeyup,oninput:this._handleInputPaste,onpaste:this._handleInputPaste,afterUpdate:this._storeInputNode}),
l=c.jsxFactory.createElement("form",{key:"esri-search__form",bind:this,class:"esri-search__form",onsubmit:this._formSubmit,role:"search"},l),r=b?c.jsxFactory.createElement("div",{key:"esri-search__clear-button",bind:this,role:"button",class:c.join("esri-search__clear-button","esri-widget-button"),tabindex:"0",title:h.clearButtonTitle,onclick:this._handleClearButtonClick,onkeydown:this._handleClearButtonClick},c.jsxFactory.createElement("span",{"aria-hidden":"true",class:"esri-icon-close"})):null,
k=g.suggestions?g.suggestions.map(function(b){var g=b.sourceIndex,d=b.results.length?a._getSuggestionHeaderNode(g):null;b=b.results.map(function(b,c){return a._getSuggestionNode(b,c,g)});return c.jsxFactory.createElement("div",{key:"esri-search__suggestion-container-"+g},d,c.jsxFactory.createElement("ul",{key:"esri-search__suggestion-list-"+g},b))}):null,k=c.jsxFactory.createElement("div",{key:"esri-search__suggestions-menu",class:c.join("esri-menu","esri-search__suggestions-menu"),role:"menu",bind:this,
afterUpdate:this._storeSuggestionsListNode},k),l=c.jsxFactory.createElement("div",{key:"esri-search__input-container",class:"esri-search__input-container"},l,r,k),r=c.jsxFactory.createElement("div",{key:"esri-search__submit-button",bind:this,role:"button",title:h.searchButtonTitle,class:c.join("esri-search__submit-button","esri-widget-button"),tabindex:"0",onclick:this._handleSearchButtonClick,onkeydown:this._handleSearchButtonClick},c.jsxFactory.createElement("span",{"aria-hidden":"true",role:"presentation",
class:"esri-icon-search"}),c.jsxFactory.createElement("span",{class:"esri-icon-font-fallback-text"},h.searchButtonTitle)),b=w.substitute({value:'"'+b+'"'},h.noResultsFound),b=e?c.jsxFactory.createElement("div",{key:"esri-search__no_results"},c.jsxFactory.createElement("div",{class:"esri-search__warning-header"},h.noResults),c.jsxFactory.createElement("div",{class:"esri-search__warning-text"},b)):null,e=e?null:c.jsxFactory.createElement("div",{key:"esri-search__empty-search"},c.jsxFactory.createElement("span",
{"aria-hidden":"true",class:"esri-icon-notice-triangle"}),c.jsxFactory.createElement("span",{class:"esri-search__no-value-text"},h.emptyValue)),e=c.jsxFactory.createElement("div",{key:"esri-search__error-menu",class:c.join("esri-menu","esri-search__warning-menu")},c.jsxFactory.createElement("div",{class:"esri-search__warning-body"},b,e)),k=g.sources,b=1<k.length,k=k&&k.toArray(),g=g.searchAllEnabled?this._getSourceNode(n.ALL_INDEX):null,d=b?c.jsxFactory.createElement("div",{key:"esri-search__source-menu-button",
bind:this,role:"button",title:h.searchIn,id:f+"_menu_button",class:c.join("esri-search__sources-button","esri-widget-button"),tabindex:"0",onkeydown:this._handleSourcesMenuToggleClick,onclick:this._handleSourcesMenuToggleClick,onkeyup:this._handleSourceMenuButtonKeyup,afterUpdate:this._storeSourceMenuButtonNode},c.jsxFactory.createElement("span",{"aria-hidden":"true",role:"presentation",class:"esri-icon-down-arrow esri-search__sources-button--down"}),c.jsxFactory.createElement("span",{"aria-hidden":"true",
role:"presentation",class:"esri-icon-up-arrow esri-search__sources-button--up"}),c.jsxFactory.createElement("span",{class:"esri-search__source-name"},d)):null,f=b?c.jsxFactory.createElement("ul",{bind:this,afterUpdate:this._storeSourcesListNode},g,k.map(function(b,g){return a._getSourceNode(g)})):null,f=c.jsxFactory.createElement("div",{key:"esri-search__source-menu",class:c.join("esri-menu","esri-search__sources-menu"),role:"menu"},f),g=this.activeMenu,g=(m={},m["esri-search--multiple-sources"]=
b,m["esri-search--loading"]=this.searching,m["esri-search--warning"]="warning"===g,m["esri-search--sources"]="source"===g,m["esri-search--show-suggestions"]="suggestion"===g,m);return c.jsxFactory.createElement("div",{class:"esri-search esri-widget"},c.jsxFactory.createElement("div",{role:"presentation",classes:g,class:"esri-search__container"},d,f,l,r,e));var m};b.prototype._handleSourcesMenuToggleClick=function(){this.activeMenu="source"===this.activeMenu?"none":"source"};b.prototype._handleClearButtonClick=
function(){this.viewModel.clear();this.focus()};b.prototype._handleSearchButtonClick=function(){var a=this.viewModel;a.cancelSuggest();a.search()};b.prototype._handleSuggestionClick=function(a){var b=this.viewModel;a=a.currentTarget;if(a=this._getSuggestResult(b.suggestions,a["data-source-index"],a["data-index"]))b.search(a),b.searchTerm=a.text,b.currentSuggestion=a,this.focus()};b.prototype._handleSourceClick=function(a){this.viewModel.activeSourceIndex=a.currentTarget["data-source-index"];this.activeMenu=
"none";this.focus()};b.prototype._storeSuggestionsListNode=function(a){this._suggestionListNode=a};b.prototype._storeSourcesListNode=function(a){this._sourceListNode=a};b.prototype._storeInputNode=function(a){this._inputNode=a};b.prototype._storeSourceMenuButtonNode=function(a){this._sourceMenuButtonNode=a};b.prototype._handleInputClick=function(){this.activeMenu="none"};b.prototype._handleInputKeyup=function(a){var b=a.keyCode,c=a.ctrlKey||a.metaKey||b===f.copyKey||b===f.LEFT_ARROW||b===f.RIGHT_ARROW||
b===f.ENTER,d=this._suggestionListNode?q("li",this._suggestionListNode):null,e=this.viewModel,h=b===f.UP_ARROW,l=b===f.DOWN_ARROW;c||(b===f.TAB||b===f.ESCAPE?(e.cancelSuggest(),this.activeMenu="none"):(h||l)&&d?(this.activeMenu="suggestion",a.stopPropagation(),a.preventDefault(),e.cancelSuggest(),(a=d[h?d.length-1:0])&&a.focus()):e.suggest())};b.prototype._handleInputPaste=function(a){var b=this.viewModel;a=a.target;b.searchTerm!==a.value&&(b.searchTerm=a.value);b.suggest()};b.prototype._handleSourceMenuButtonKeyup=
function(a){var b=a.keyCode,c=b===f.UP_ARROW,b=b===f.DOWN_ARROW;if(c||b)a.stopPropagation(),a.preventDefault(),(a=this._sourceListNode?q("li",this._sourceListNode):null)&&(c=a[c?a.length-1:0])&&c.focus()};b.prototype._handleSourceKeyup=function(a){var b=a.target,c=this._sourceListNode?q("li",this._sourceListNode):null,d=a.keyCode;d===f.ESCAPE?(this.activeMenu="none",this.focus()):c&&(b=c.indexOf(b),d===f.UP_ARROW?(a.stopPropagation(),a.preventDefault(),a=b-1,(c=0>a?this._sourceMenuButtonNode:c[a])&&
c.focus()):d===f.DOWN_ARROW&&(a.stopPropagation(),a.preventDefault(),a=b+1,(c=a>=c.length?this._sourceMenuButtonNode:c[a])&&c.focus()))};b.prototype._handleSuggestionKeyup=function(a){var b=a.target,c=this._suggestionListNode?q("li",this._suggestionListNode):null,b=c.indexOf(b),d=a.keyCode;this.viewModel.cancelSuggest();d===f.BACKSPACE||d===f.DELETE?this.focus():d===f.ESCAPE?(this.activeMenu="none",this.focus()):c&&(d===f.UP_ARROW?(a.stopPropagation(),a.preventDefault(),a=b-1,0>a?this.focus():(c=
c[a])&&c.focus()):d===f.DOWN_ARROW&&(a.stopPropagation(),a.preventDefault(),a=b+1,a>=c.length?this.focus():(c=c[a])&&c.focus()))};b.prototype._formSubmit=function(a){var b=this.viewModel;a.preventDefault();b.cancelSuggest();b.search()};b.prototype._closePopup=function(){var a=this.viewModel,b=a.get("view.popup");a.popupEnabled&&b&&(b.visible=!1)};b.prototype._getSourceName=function(a){var b=this.viewModel.sources.getItemAt(a);return a===n.ALL_INDEX?h.all:b?b.name:""};b.prototype._getSuggestionHeaderNode=
function(a){var b=this.viewModel;return 1<b.sources.length&&b.activeSourceIndex===n.ALL_INDEX?(a=this._getSourceName(a),c.jsxFactory.createElement("div",{class:"esri-header"},a)):null};b.prototype._getSuggestionNode=function(a,b,d){var e=this.viewModel.searchTerm;if(e){var g=e.toLowerCase(),f=[];(a.text||"").replace(new RegExp("("+e+")","gi"),"|$1|").split("|").forEach(function(a,e){a&&a.length&&(e=d+"-"+b+"-"+e,a.toLowerCase()===g?f.push(c.jsxFactory.createElement("strong",{key:"esri-search__partial-match-"+
e},a)):f.push(c.jsxFactory.createElement("span",{key:"esri-search__mismatch-"+e},a)))});return c.jsxFactory.createElement("li",{bind:this,onclick:this._handleSuggestionClick,onkeydown:this._handleSuggestionClick,onkeyup:this._handleSuggestionKeyup,key:"esri-search__suggestion$-{sourceIndex}_"+b,"data-index":b,"data-source-index":d,role:"menuitem",tabindex:"0"},f)}};b.prototype._getSuggestResult=function(a,b,c){var d=null;a.some(function(a){if(a.sourceIndex===b)return d=a.results[c],!0});return d};
b.prototype._getSourceNode=function(a){var b=(d={},d["esri-search__source--active"]=a===this.viewModel.activeSourceIndex,d);return c.jsxFactory.createElement("li",{bind:this,key:"esri-search__source-"+a,onclick:this._handleSourceClick,onkeydown:this._handleSourceClick,onkeyup:this._handleSourceKeyup,"data-source-index":a,role:"menuitem",class:"esri-search__source",classes:b,tabindex:"0"},this._getSourceName(a));var d};b.prototype._renderSearchResultsContent=function(){this._searchResultRenderer&&
(this._searchResultRenderer.destroy(),this._searchResultRenderer=null);this._searchResultRenderer=new u({showMoreResultsOpen:!1,viewModel:this.viewModel,container:document.createElement("div")});return this._searchResultRenderer.container};return b}(e.declared(v));b([e.property(),c.renderable()],d.prototype,"activeMenu",void 0);b([e.aliasOf("viewModel.activeSource"),c.renderable()],d.prototype,"activeSource",void 0);b([e.aliasOf("viewModel.activeSourceIndex"),c.renderable()],d.prototype,"activeSourceIndex",
void 0);b([e.aliasOf("viewModel.allPlaceholder"),c.renderable()],d.prototype,"allPlaceholder",void 0);b([e.aliasOf("viewModel.autoNavigate")],d.prototype,"autoNavigate",void 0);b([e.aliasOf("viewModel.autoSelect")],d.prototype,"autoSelect",void 0);b([e.aliasOf("viewModel.defaultSource")],d.prototype,"defaultSource",void 0);b([e.aliasOf("viewModel.locationToAddressDistance")],d.prototype,"locationToAddressDistance",void 0);b([e.aliasOf("viewModel.maxResults")],d.prototype,"maxResults",void 0);b([e.aliasOf("viewModel.maxSuggestions")],
d.prototype,"maxSuggestions",void 0);b([e.aliasOf("viewModel.minSuggestCharacters")],d.prototype,"minSuggestCharacters",void 0);b([e.aliasOf("viewModel.popupEnabled")],d.prototype,"popupEnabled",void 0);b([e.aliasOf("viewModel.popupOpenOnSelect")],d.prototype,"popupOpenOnSelect",void 0);b([e.aliasOf("viewModel.popupTemplate")],d.prototype,"popupTemplate",void 0);b([e.aliasOf("viewModel.resultGraphic")],d.prototype,"resultGraphic",void 0);b([e.aliasOf("viewModel.resultGraphicEnabled")],d.prototype,
"resultGraphicEnabled",void 0);b([e.aliasOf("viewModel.results"),c.renderable()],d.prototype,"results",void 0);b([e.aliasOf("viewModel.searchAllEnabled"),c.renderable()],d.prototype,"searchAllEnabled",void 0);b([e.property({readOnly:!0}),c.renderable()],d.prototype,"searching",void 0);b([e.aliasOf("viewModel.searchTerm"),c.renderable()],d.prototype,"searchTerm",void 0);b([e.aliasOf("viewModel.selectedResult")],d.prototype,"selectedResult",void 0);b([e.aliasOf("viewModel.sources"),c.renderable()],
d.prototype,"sources",void 0);b([e.aliasOf("viewModel.suggestions"),c.renderable()],d.prototype,"suggestions",void 0);b([e.aliasOf("viewModel.suggestionsEnabled")],d.prototype,"suggestionsEnabled",void 0);b([e.aliasOf("viewModel.view"),c.renderable()],d.prototype,"view",void 0);b([c.vmEvent("search-clear search-complete search-start select-result suggest-start suggest-complete".split(" ")),e.property({type:n}),c.renderable("viewModel.state")],d.prototype,"viewModel",void 0);b([e.aliasOf("viewModel.clear")],
d.prototype,"clear",null);b([e.aliasOf("viewModel.search")],d.prototype,"search",null);b([e.aliasOf("viewModel.suggest")],d.prototype,"suggest",null);b([c.accessibleHandler()],d.prototype,"_handleSourcesMenuToggleClick",null);b([c.accessibleHandler()],d.prototype,"_handleClearButtonClick",null);b([c.accessibleHandler()],d.prototype,"_handleSearchButtonClick",null);b([c.accessibleHandler()],d.prototype,"_handleSuggestionClick",null);b([c.accessibleHandler()],d.prototype,"_handleSourceClick",null);
return d=b([e.subclass("esri.widgets.Search")],d)});