mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]  
    zoom: 9 // starting zoom
    });

const marker = new mapboxgl.Marker({ color: 'red' })
 .setLngLat(listing.geometry.coordinates)
 .setPopup(new mapboxgl.Popup({ offset: 25 })
 .setHTML(`<i><h4>${listing.location}</h4><i/><p>Exact location will be provided after booking</p>`))   //
 .addTo(map);

