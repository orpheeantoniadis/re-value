function toggleMenu(evt, allowed) {
  var menu = document.getElementById('main-menu');
  console.log(evt.srcElement.classList);
  if (evt.srcElement.parentElement.classList.contains("mdl-layout__drawer-button") && !menu.classList.contains("is-visible")) {
	 menu.classList.add("is-visible");
  }
  else if (!evt.srcElement.parentElement.classList.contains("mdl-layout__drawer-button")) {
	 menu.classList.remove("is-visible");
  }
}
require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/FeatureLayer",
	"esri/renderers/SimpleRenderer",
	"esri/symbols/SimpleMarkerSymbol",
	"esri/PopupTemplate",
	"dojo/domReady!"
], function(Map, MapView, FeatureLayer, SimpleRenderer, SimpleMarkerSymbol, PopupTemplate){

	var map = new Map({
		basemap: "streets"
	});

	/* add a layer */
	var featureLayer = new FeatureLayer({
		url: "https://ge.ch/sitgags1/rest/services/VECTOR/SITG_OPENDATA_02/MapServer/8438",
		outFields: ["*"]
	});

	featureLayer.renderer = new SimpleRenderer ({
		symbol: new SimpleMarkerSymbol({
			size: 10,
			color: "orange",
			outline: {
				width: 0.5,
				color: "black"
			}
		})
	});

	featureLayer.popupTemplate = new PopupTemplate ({
		title: "Point de collecte n°{OBJECTID} {STATUT}",
		content: "<ul><li>Commune : {COMMUNE} </li>" +
				    "<li>Adresse : {ADRESSE}</li>" +
				    "<li>Horaires : {HORAIRES}</li><ul>"
	});

	map.add(featureLayer);

	var view = new MapView({
		container: "main-content",  // Reference to the scene div created in step 5
		map: map,  // Reference to the map object created before the scene
		zoom: 12,  // Sets the zoom level based on level of detail (LOD)
		center: [6.1667, 46.2]  // Sets the center point of view in lon/lat
	});
});
window.addEventListener("click", function(e){toggleMenu(e, true)}, {capture: true, passive: true});
