import {setUpdateListener, gotoMapLocation} from './map.js'
import {geoLoops} from './config.js'
import {Location} from './Location.js'

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d;
}

const locations = []

async function loadLocations() {
    const locationNames = Object.keys(geoLoops)
    for (let name of locationNames) {
        const location = new Location(name, geoLoops[name])
        locations.push(location)
    }
}

loadLocations()

function updateLocation (lat, lon) {
    for (let loc of locations) {
        const dist = getDistanceFromLatLonInKm(lat, lon, loc.geo[0], loc.geo[1])
        loc.setDistance(dist)

        if (dist < 0.2) {
            console.log(loc.name, dist)
        }

    }
}

setUpdateListener((lat, lon) => {
    updateLocation(lat, lon)
})

function success(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    // Zeilen einkommentieren für GPS Updates
    gotoMapLocation(lat, lon)
    updateLocation(lat, lon)
}
  
function error() {
    alert('Sorry, no position available.');
}

const options = {
    enableHighAccuracy: true,
    /*   maximumAge: 30000,
    timeout: 27000 */
    maximumAge: 5000,
    timeout: 4700
};

const startbutton = document.getElementById('start'); // get submit button
startbutton.addEventListener('click', async () => {
    await Tone.start();
    Tone.Transport.start();
    console.log("audio started")

    Tone.loaded().then(() => {
        const watchID = navigator.geolocation.watchPosition(success, error, options);
    })    
});

