// ago access token
const accessToken = "mzFcMRqhxzPAoRJavp2MJnlRO2BSOd3tUBeUnKd1MuMZtL8LTSJKXTZFussVqklx5SivTxKG9broW6ewdJtk-YuTiU_vlfnVNL4fuVQ6TOFKLnNt4fW4n20WVARk4OyIWsdBaoLGibptF1F-bKxcubZix5A0gwyKYhLIN0C0yTOoW7SRW5iPSIcMiw3sZCLk"
const basemapEnum = 'arcgis/outdoor';

// Initialize the map
var map = new maplibregl.Map({
    container: 'map', // container id
    style: `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapEnum}?token=${accessToken}`, // style url
    center: [-127.647621, 53.726669], // starting position [lng, lat]
    zoom: 5, // starting zoom (adjusted to better fit the BC region)
});

// Add a marker at the given coordinates
const marker = new maplibregl.Marker()
    .setLngLat([-127.647621, 53.726669]) // Coordinates for BC
    .addTo(map);

// Optional: Add some interactivity or other features
map.on('load', () => {
    // You could do something when the map is loaded, like adding additional markers or layers.
    console.log("Map has loaded!");
});

// Add ESRI attribution
map._controls[0].options.customAttribution += " | Powered by Esri "
map._controls[0]._updateAttributions()
