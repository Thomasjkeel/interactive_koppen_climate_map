/* STYLING OF GeoJSON layer. ADAPTED FROM: https: //leafletjs.com/examples/choropleth/*/
function style(feature) {
    return {
        fillColor: getColor(feature.properties.DN), // gets the color based on the value of currency compared with base
        weight: 1,
        opacity: .1,
        color: 'white',
        fillOpacity: 0.5
    };
}

// Function for mapping colors to the currency values returned from the API for each country
function getColor(d) {
    return d > 29 ? "rgb(102 102 102)" :
        d > 28 ? "rgb(178 178 178)" :
        d > 27 ? "rgb(0 70 95)" :
        d > 26 ? "rgb(0 125 125)" :
        d > 25 ? "rgb(55 200 255)" :
        d > 24 ? "rgb(0 255 255)" :
        d > 23 ? "rgb(50 0 135)" :
        d > 22 ? "rgb(75 80 180)" :
        d > 21 ? "rgb(90 120 220)" :
        d > 20 ? "rgb(170 175 255)" :
        d > 19 ? "rgb(150 100 150)" :
        d > 18 ? "rgb(150 50 150)" :
        d > 17 ? "rgb(200 0 200)" :
        d > 16 ? "rgb(255 0 255)" :
        d > 15 ? "rgb(50 200 0)" :
        d > 14 ? "rgb(100 255 80)" :
        d > 13 ? "rgb(200 255 80)" :
        d > 12 ? "rgb(50 150 50)" :
        d > 11 ? "rgb(100 200 100)" :
        d > 10 ? "rgb(150 255 150)" :
        d > 9 ? "rgb(150 150 0)" :
        d > 8 ? "rgb(200 200 0)" :
        d > 7 ? "rgb(255 255 0)" :
        d > 6 ? "rgb(255 220 100)" :
        d > 5 ? "rgb(245 165 0)" :
        d > 4 ? "rgb(255 150 150)" :
        d > 3 ? "rgb(255 0 0)" :
        d > 2 ? "rgb(70 170 250)" :
        d > 1 ? "rgb(0, 120, 255)" :
        d > 0 ? "rgb(0, 0, 255)" :
        "rgba(0, 0, 0, 0)"; // make invisible with fourth argument (alpha)
}

/* STYLING OF GeoJSON layer. ADAPTED FROM: https: //leafletjs.com/examples/choropleth/*/
function styleCountry(feature) {
    return {
        fillColor: "rgba(102 102 102,0)", // getColor(feature.properties.DN), // gets the color based on the value of currency compared with base
        weight: 1,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.0
    };
}

// // Function for mapping colors to the currency values returned from the API for each country
// function getCountryColor(d) {
//     return d > 29 ? "rgb(102 102 102)" :
//         "rgba(0, 0, 0, 0)"; // make invisible with fourth argument (alpha)
// }

function onEachFeature(feature, layer) {
    if (feature.properties.DN == 0) {
        console.log("bad")
    } else {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }
}
function onEachCountry(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetCountryHighlight,
        click: zoomToFeature
    });
}

// double clicking will zoom to the country that is clicked on
function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
}

// listener that highlights a country that is hovered over
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        dashArray: '',
        fillOpacity: 0.3
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    // info.update(layer.feature.properties);
}
function resetHighlight(e) {
    koppenjs.resetStyle(e.target);
    // info.update();
}

function resetCountryHighlight(e) {
    countriesjs.resetStyle(e.target);
    // info.update();
}
