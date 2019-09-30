const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1IjoiY29saW5rOTYiLCJhIjoiY2sxNm4wbGVjMDZwczNkbGpvejJ0ZHV2dSJ9.-qk-zdj5F6N_leCPVeBi3g";

// alert("JS FILE IS WORKING")

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });

// console.log('Hello World from your main file!');
