import {geoLoops} from './config.js'
import {route} from './routeConfig.js'

/////////////////////////////////// Global Constants /////////////////////////////////// 

////////////////////////// Locations

const yppenLat = 48.21386851242243;
const yppenLon = 16.3357821121604;

const huberLat = 48.21376415110615;
const huberLon = 16.333409465125346;



/////////////////////////////////// Global Variables /////////////////////////////////// 

let mymap;

let mylat = 48.2143106; // MY Latitude default values
let mylon = 16.3322386; // MY Longitude default values

let onUpdate;

function setUpdateListener(listener) {
    onUpdate = listener
}


/////////////////////////////////// Map & Tiles /////////////////////////////////// 

mymap = L.map('issMap', {
    minZoom: 5,
    maxZoom: 18
    // zoomDelta: 0.25,
    // zoomSnap: 0
});

// Development CLICK

// mymap.on('click', e => {
//     mylat = e.latlng.lat;
//     mylon = e.latlng.lng;
//     memarker.setLatLng([mylat, mylon]);

//     onUpdate(mylat, mylon)
// })


// Openstreatmap – creates Tiles, we need contributors
const attribution = '&copy <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors &#169;<a href="https://carto.com/attribution/" target="_blank"> CartoDB</a>';
const tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);


/////////////////////////////////// Marker /////////////////////////////////// 


////////////////////////// LEAFLET: custom icons

const meIcon = L.icon({
    iconUrl: 'me_marker.png',
    iconSize: [26, 26], // size of the icon
    iconAnchor: [13, 13], // point of the icon which will correspond to marker's location
});

const locIcon = L.icon({
    iconUrl: 'location_marker.png',
    iconSize: [30, 40], // size of the icon
    iconAnchor: [15, 40], // point of the icon which will correspond to marker's location
});

////////////////////////// LEAFLET: Fixed Locations

////////// Development Marker
// for (let loc in geoLoops) {
//     const geo = geoLoops[loc].geo
//     L.marker(geo, { icon: locIcon }).addTo(mymap); // Leaflet – set Marker to 0,0
// }

////////////////////////// LEAFLET: Variable Locations

const memarker = L.marker([mylat, mylon], { icon: meIcon }).addTo(mymap); // Leaflet – set Marker to 0,0

const waypoints = []

for (let loc of route) {
    waypoints.push(L.latLng(...loc))
}

const polyline = new L.Polyline(waypoints, {
    color: '#5cf2ff',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1,
    dashArray: '5, 5', 
    dashOffset: '10'
});
    
mymap.addLayer(polyline);


/////////////////////////////////// Go to Yppenplatz /////////////////////////////////// 

function gotoMapLocation(lat, lon) {
    mylat = lat;
    mylon = lon;
    memarker.setLatLng([mylat, mylon]);
    mymap.panTo([mylat, mylon])
}

mymap.setView([mylat, mylon], 15);
memarker.setLatLng([mylat, mylon]);

export {setUpdateListener, gotoMapLocation}