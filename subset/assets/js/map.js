

// START: Custom Map 


function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibGVlY2hlbnplIiwiYSI6ImNsOHZib3lwYTBjOW0zb3M4N21mNXZ0d2kifQ.PG5zSa0rC0abFSIEW-Zpcw';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-97.92515697819557, 39.383402222450854], // starting position [lng, lat]
    zoom: 1 // starting zoom
  });
  // Create a default Marker and add it to the map.
  const marker = new mapboxgl.Marker()
    .setLngLat([108.94236945482766, 34.26103164881724])
    .addTo(map);
  map.flyTo({
    center: [108.94236945482766, 34.26103164881724],
    zoom: 9,
    speed: 0.3,
    curve: 1,
    easing(t) {
      return t;
    },
    maxDuration: 99999,
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
}

initMap();

// END: Custom Map 