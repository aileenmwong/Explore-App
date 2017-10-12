$(document).ready(function() {
console.log('map.js is connected!');

// RENDER MAP
// Render maps tutorial: https://www.youtube.com/watch?v=Zxf1mnP5zcw
function initMap() {
  // map options
  var options = {
    zoom: 4,
    center: {lat: 40.7134, lng: -74.0055},
  }
  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  //Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
    //add marker
    addMarker({coords:event.latLng});
  });

  // array of markers
  var markers= [
  {
    coords: {lat: 40.650002, lng: -73.949997},
    //coords: `lat: ${latlong}, lng: ${variablename}`
    content: '<h1>Brooklyn, NY</h1>'
  },
  {
    coords: {lat: 32.8235, lng: -97.1706},
    content: '<h1>Hurst, TX</h1>'
  }
  ];

  //loop through markers
  for(var i=0;i<markers.length;i++){
    addMarker(markers[i]);
  }

  // Add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });
    //check for content
    if (props.content){
      var infoWindow = new google.maps.InfoWindow({
      content: props.content
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
    }
  }
}
initMap();

});