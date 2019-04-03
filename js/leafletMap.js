/* Initialise leaflet map, tilelayer and GeoJSON file */
var mymap = L.map('mapid').setView([31.505, -0.09], 2);
// set some base map properties
mymap.options.minZoom = 1;
mymap.options.maxZoom = 8;
mymap.doubleClickZoom.disable(); // disable double click zoom (as double click is used to rebound the map to a country in updateMap.js)


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
}).addTo(mymap);

L.tileLayer('tileLayers/tileLayer1/{z}/{x}/{y}.png', {
    attribution: 'Georeferenced Image',
    tms: true,
    minZoom: 0,
    maxNativeZoom: 1,
    maxZoom: 2,
    opacity: 0.7
}).addTo(mymap);

var tileLayer2 = L.tileLayer('tileLayers/tileLayer2/{z}/{x}/{y}.png', {
    attribution: 'Georeferenced Image',
    tms: true,
    maxNativeZoom: 3,
    minZoom: 2,
    maxZoom: 5,
    opacity: 0.7
}).addTo(mymap);

L.tileLayer('tileLayers/tileLayer3/{z}/{x}/{y}.png', {
    attribution: 'Georeferenced Image',
    tms: true,
    maxNativeZoom: 6,
    minZoom: 5,
    maxZoom: 8,
    opacity: 0.5
}).addTo(mymap);
// koppenjs = new L.geoJson(kg_far, {
//     onEachFeature: onEachFeature,
//     style: style // style function in (updateMap.js file). Style contains rules on color of geojson layer
// }).addTo(mymap);
// mymap.setMaxBounds(koppenjs.getBounds());

// https://stackoverflow.com/questions/18687120/leaflet-zoom-in-further-and-stretch-tiles
countriesjs = new L.geoJson(countries, {
    onEachFeature: onEachCountry,
    style: styleCountry // style function in (updateMap.js file). Style contains rules on color of geojson layer
}).addTo(mymap);
mymap.setMaxBounds(countriesjs.getBounds());
mymap.on('zoomend', function () {
    console.log("Zoom = ", mymap.getZoom());
});