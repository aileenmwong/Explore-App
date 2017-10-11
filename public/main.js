// window.onload = function() {
//   console.log('main.js is running');

let park_name;
let address;
let city;
let park_state;
let coordinates;
let image;
let website;
let description;


  var callNps = function(event) {
    event.preventDefault();
    // console.log('inside callApi')
    // the callApi function makes the ajax call to get the data
    let stateCode = document.querySelector('#input').value;
    console.log(stateCode);
    let data = {
      "stateCode": stateCode
    }
    let url = {
      "async": true,
      "crossDomain": true,
      "url": `https://developer.nps.gov/api/v0/parks?stateCode=${stateCode}&fields=images,addresses`,
      "method": "GET",
      "headers": {
        "authorization": "B619A928-B3D8-4138-BDD4-B1C0CC6408C7",
        "cache-control": "no-cache",
        "postman-token": "6f542f13-6d93-a6db-26c0-727dce301262"
      }
    }

    $.ajax(url)
    .done(function(data) {
      console.log('the data is -->', data.data);
      for (let i=0; i < data.data.length; i++) {
      park_name = data.data[i].fullName;
      address = data.data[i].addresses[0].line1;
      city = data.data[i].addresses[0].city;
      park_state = data.data[i].addresses[0].stateCode;
      coordinates = data.data[i].latLong;
      image = data.data[i].images[0].url;
      website = data.data[i].url;
      description = data.data[i].description;
      manipulateDom(park_name, address, city, park_state, coordinates, image, website, description);
      }
    })
    .fail(function(data) {
      console.log('failed getting park');
    })
  }

  // change the inner html of divs with appropriate data
  var manipulateDom = function(park_name, address, city, park_state, coordinates, image, website, description){
        //create a container to append the lis
    let $container = $('<ul>').attr('class', 'resultCont');

    let parkName = $('<li>').attr('class', 'resultName').html(park_name);
    //append the location to the container
    parkName.appendTo($container);

    let parkAddress = $('<li>').attr('class', 'resultAddress').html(address);
    //append the address to the container
    parkAddress.appendTo($container);

    let parkCity = $('<li>').attr('class', 'resultCity').html(city);
    //append the phone to the container
    parkCity.appendTo($container);

    let parkState = $('<li>').attr('class', 'resultState').html(park_state);
    //append the phone to the container
    parkState.appendTo($container);

    let parkCoords = $('<li>').attr('class', 'resultCoords').html(coordinates);
    //append the phone to the container
    parkCoords.appendTo($container);

    let parkImage = $('<li>').attr('class', 'resultImage').append(`<img src="${image}"/>`);
    //append the phone to the container
    parkImage.appendTo($container);

    let parkDescription = $('<li>').attr('class', 'resultDescription').html(description);
    //append the phone to the container
    parkDescription.appendTo($container);

    let parkWebsite = $('<li>').attr('class', 'resultWebsite').html(website);
    let websiteButton = $('<button>').attr('class', 'websiteButton').html('Go To Website');
    //append the website to the container
    $container.append(parkWebsite);
    //append the button to the container
    $container.append(websiteButton);
    //wrap the button in the link
    websiteButton.wrap('<a href="'+ website +'"></a>');


    //append the container to the search results
    $('#searchResults').append($container)
  }

  let searchButton = document.querySelector('#btnSearch');
  //add event listener to the submit button and call Api function
  searchButton.addEventListener('click', callNps);


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
