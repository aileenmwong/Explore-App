// window.onload = function() {
//   console.log('main.js is running');

let parkName;
let address;
let image;
let website;
let latLong;


  var callNps = function(event) {
    event.preventDefault();
    // console.log('inside callApi')
    // the callApi function makes the ajax call to get the data
    let state = document.querySelector('#input').value;
    console.log(state);
    let url = {
      "async": true,
      "crossDomain": true,
      "url": `https://developer.nps.gov/api/v0/parks?stateCode=${state}&fields=images,addresses`,
      "method": "GET",
      "headers": {
        "authorization": SUPER_SECRET_NPS,
        "cache-control": "no-cache",
        "postman-token": "6f542f13-6d93-a6db-26c0-727dce301262"
      }
    }

    $.ajax(url)
    .done(function(data) {
      console.log(data.data);
      for (let i=0; i < data.data.length; i++) {
      parkName = data.data[i].fullName;
      address = data.data[i].addresses.line3;
      image = data.data[i].images.url[4];
      website = data.data[i].url;
      latLong = data.data[i].latLong;
      manipulateDom(parkName,address,image,website,latLong);
      }
    })
    .fail(function(data) {
      console.log('failed getting park');
    })
  }

  // change the inner html of divs with appropriate data
  var manipulateDom = function(parkName,address,image,website,latLong){
    document.querySelector('#parkName').innerHTML = parkName;
    document.querySelector('#address').innerHTML = address;
    document.querySelector('#website').innerHTML = website;
    document.querySelector('#latLong').innerHTML = latLong;
    document.querySelector('#image').src = image;
  }

  let searchButton = document.querySelector('#btnSearch');
  //add event listener to the submit button and call Api function
  searchButton.addEventListener('click', callNps);


  // var getCoords = function(event) {
  //   event.preventDefault();
  //   // console.log('inside callApi')
  //   // the callApi function makes the ajax call to get the data
  //   let coords = document.querySelector('#mapInput').value;
  //   console.log(coords);

  //   //$.ajax('https://explore-the-parks.firebaseio.com/', { coords })


  //   let firebaseUrl = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://explore-the-parks.firebaseio.com/",
  //     "method": "POST",
  //     "data": coords
  //     }

  //   $.ajax(firebaseUrl)
  //   .done(function(data) {
  //     console.log(data);
  //     })
  //   .fail(function(data) {
  //     console.log('failed getting park');
  //   })
  // }

  // let mapButton = document.querySelector('#btnMap');
  // //add event listener to the submit button and call Api function
  // mapButton.addEventListener('click', getCoords);


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
// };
