// Initialize the map
var map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://governmentofbc.maps.arcgis.com/sharing/rest/content/items/b1624fea73bd46c681fab55be53d96ae/resources/styles/root.json?f=pjson', // style URL
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
