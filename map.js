// ago access token
const accessToken = "mzFcMRqhxzPAoRJavp2MJnlRO2BSOd3tUBeUnKd1MuMZtL8LTSJKXTZFussVqklx5SivTxKG9broW6ewdJtk-RIsbSVOwjwzm6jg3faMx7DleglNHSwEJ5gvvG60w2SS-WTZ9EeXYTI-ab6HOvHPTbhl9bqxYJJeKpI43olUnhc."
const basemapEnum = 'arcgis/streets';

// Initialize the map
var map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json', // style URL
    // style: 'https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapEnum}?token=${accessToken}',
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
