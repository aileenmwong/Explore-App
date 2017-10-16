window.onload = (function() {
console.log('map.js is connected!');

function initMap() {
  // Google Maps Javascript Tutorial from Documentation
  // https://developers.google.com/maps/documentation/javascript/tutorial

  // map options - set zoom level and center of the map
  var options = {
    zoom: 5,
    center: {lat: 39.8283, lng: -98.5795},
  }
  // initialize a new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  //Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
    //add marker
    addMarker({coords:event.latLng});
  });

//FOLLOWED THESE CLASS NOTES FROM ANOTHER WDI CLASS TO ADD MARKER
//https://wdi_sea.gitbooks.io/notes/content/05-express/additional-topics/express-geocode/readme.html

  // for each marker passed through, add it to the map with a popup
  markers.forEach(function(marker) {
    // console.log(marker);
    // set the position of the latitude and the longitude from the db
    var position = new google.maps.LatLng(marker.lat, marker.lng);
    // create a new marker object
    var googleMarker = new google.maps.Marker({
      position: position,
      title: marker.name,
      map: map
    })


   // Bind a popup to the marker on click
    googleMarker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: '<h3>' + marker.park_name + '</h3>'
      });
      // when the window opens, display the map and the markers
      infoWindow.open(map, googleMarker);
    });
  });
}
// initialize the map
initMap();

// RENDER MAP FROM SERVER SIDE - not working yet

// function initMap() {

//   // map options
//   var options = {
//     zoom: 4,
//     center: {lat: 40.7134, lng: -74.0055},
//   }
//   // New map
//   var map = new google.maps.Map(document.getElementById('map'), options);

  // let mapsUrl = {
  //   "async": true,
  //   "url": 'http://localhost:3000/explore',
  //   "method": "GET",
  // }

  // //Listen for click on map
  // google.maps.event.addListener(map, 'click', function(event){
  //   //add marker
  //   addMarker({coords:event.latLng});
  // });

  // fetch(mapsUrl)
  // .then (function(data) {
  //   let markerData = data.results;
  //   console.log('this is the response -->' resp);
  // })
  // .then ((resp) => resp.json())
  // .then((function(data) {
  // })
  // .catch(function(error) {
  // });

  // let lat;
  // let lng;

  // $.ajax(mapsUrl)
  // .done(function(data) {
  //   console.log('maps data -->' + data.parks);
  //   for (let i=0; i < data.data.length; i++) {
  //     lat = data.data[i].lat;
  //     lng = data.data[i].lng;
  //   }
  // })

//   // array of markers
//   var markers= [
//   {
//     coords: {lat: 40.650002, lng: -73.949997},
//     //coords: `lat: ${latlong}, lng: ${variablename}`
//     content: '<h1>Brooklyn, NY</h1>'
//   },
//   {
//     coords: {lat: 32.8235, lng: -97.1706},
//     content: '<h1>Hurst, TX</h1>'
//   }
//   ];

//   //loop through markers
//   for(var i=0;i<markers.length;i++){
//     addMarker(markers[i]);
//   }

//   // Add marker function
//   function addMarker(props) {
//     var marker = new google.maps.Marker({
//       position: props.coords,
//       map: map,
//     });
//     //check for content
//     if (props.content){
//       var infoWindow = new google.maps.InfoWindow({
//       content: props.content
//     });

//     marker.addListener('click', function() {
//       infoWindow.open(map, marker);
//     });
//     }
//   }
// }
// initMap();

});
