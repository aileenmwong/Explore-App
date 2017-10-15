$(document).ready(function() {
console.log('search.js is connected!');

let park_name;
let address;
let city;
let park_state;
let coordinates;
let image;
let website;
let description;
let lat;
let lng;

var options = {
  zoom: 4,
  center: {lat: 39.8283, lng: -98.5795},
};
// New map
var map = new google.maps.Map(document.getElementById('searchMap'), options);

  var callNps = function(event) {
    // event.preventDefault();
    // the callNps function makes the ajax call to get the data
    let stateCode = document.querySelector('#input').value;
    console.log(stateCode);
    let data = {
      "stateCode": stateCode
    };
    let url = {
      "async": true,
      "crossDomain": true,
      "url": `https://developer.nps.gov/api/v0/parks?limit=50&fields=images,addresses,entranceFees,operatingHours&q=${stateCode}`,
      "method": "GET",
      "headers": {
        "authorization": "B619A928-B3D8-4138-BDD4-B1C0CC6408C7",
        "cache-control": "no-cache",
        "postman-token": "6f542f13-6d93-a6db-26c0-727dce301262"
      }
    };

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
      weather = data.data[i].weatherInfo;
      directions = data.data[i].directionsInfo;
      hours = data.data[i].operatingHours[0].description;
      manipulateDom(park_name, address, city, park_state, coordinates, image, website, description, weather, directions, hours);
      const [foo, lat, lng] = coordinates.match(/^lat:(.+),.+:(.+)$/)
      let cor = {
        ...coordinates,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      }
      addMarkerFromApi(cor);
      };

    })
    .fail(function(data) {
      console.log('failed getting park');
    });
  };

  // change the inner html of divs with appropriate data
  var manipulateDom = function(park_name, address, city, park_state, coordinates, image, website, description){
    //create a container to append the lis
    let $container = $('<ul>').attr('class', 'resultCont');

    let top = $('<div>').attr('class', 'resultTop');
    let topText = $('<div>').attr('class', 'resultTopText');

    let parkNameCont = $('<div>').attr('class', 'resultNameCont');
    let parkName = $('<li>').attr('class', 'resultName').html(park_name);
    //append the location to the container
    parkName.appendTo(parkNameCont);
    parkNameCont.appendTo(topText);

    let parkAddress = $('<li>').attr('class', 'resultAddress').html(address);
    //append the address to the container
    parkAddress.appendTo(topText);

    let parkCity = $('<li>').attr('class', 'resultCity').html(city);
    //append the city to the container
    parkCity.appendTo(topText);

    let parkState = $('<li>').attr('class', 'resultState').html(park_state);
    //append the state to the container
    parkState.appendTo(topText);

    let parkCoords = $('<li>').attr('class', 'resultCoords').html(coordinates);
    //append the coordinates to the container
    parkCoords.appendTo(topText);

    let parkImageCont = $('<div>').attr('class', 'resultImageCont')
    let parkImage = $('<li>').attr('class', 'resultImage').append(`<img src="${image}"/>`);
    parkImage.appendTo(parkImageCont)
    //append the image to the container
    parkImageCont.appendTo(top);

    topText.appendTo(top);
    top.appendTo($container);

    let parkDescriptionHeader = $('<div>').attr('class', 'resultDescriptionHeader').html('Description');
    let parkDescription = $('<li>').attr('class', 'resultDescription').html(description);
    //append the description to the container
    parkDescriptionHeader.appendTo($container);
    parkDescription.appendTo($container);

    let parkWeatherHeader = $('<div>').attr('class', 'resultWeatherHeader').html('Weather');
    let parkWeather = $('<li>').attr('class', 'resultWeather').html(weather);
    //append the weather to the container
    parkWeatherHeader.appendTo($container);
    parkWeather.appendTo($container);

    let parkDirectionsHeader = $('<div>').attr('class', 'resultDirectionsHeader').html('Directions');
    let parkDirections = $('<li>').attr('class', 'resultDirections').html(directions);
    //append the directions to the container
    parkDirectionsHeader.appendTo($container);
    parkDirections.appendTo($container);

    let parkHoursHeader = $('<div>').attr('class', 'resultHoursHeader').html('Operating Hours');
    let parkHours = $('<li>').attr('class', 'resultHours').html(hours);
    //append the hours to the container
    parkHoursHeader.appendTo($container);
    parkHours.appendTo($container);

    let parkWebsite = $('<li>').attr('class', 'resultWebsite').html(website);
    //append the website to the container
    $container.append(parkWebsite);
    //wrap the link in a working link tag
    parkWebsite.wrap('<a href="'+ website +'"></a>');

    let saveResult = $('<button>').attr({class: 'saveButton', type: 'submit'}).html('SAVE THIS PARK');
    $container.append(saveResult);

    // let saveInput = $('<input>').attr({type:'hidden', value: "<%= markers.park_name %>", class: 'saveButton'})
    // let saveResult = $('<button>').attr({class: 'saveButton', type: 'submit'}).html('SAVE THIS PARK');
    // let wrappedForm = $('.saveButton').wrapAll('<form action="" method="POST" />')
    // $container.append(wrappedForm);

    // TO SAVE TO DB
    // <form action="" method="POST">
    // <input type="hidden" value="<%= markers.park_name %>" />
    // <button type="submit">Save</button>
    // </form>

    //append the container to the search results
    $('#searchResults').append($container);
  };

  let searchButton = document.querySelector('#btnSearch');
  //add event listener to the submit button and call Api function
  searchButton.addEventListener('click', callNps);

  function addMarkerFromApi(cor) {
    console.log('inside add marker from api')
    let lat = cor.lat;
    let lng = cor.lng
    var position = new google.maps.LatLng(lat, lng);
    console.log('position lat -->', lat)
    console.log('position lng -->', lng)
    // console.log(position);
    var googleMarker = new google.maps.Marker({
      position: position,
      title: park_name,
      map: map
    });
    console.log(googleMarker);

   // Bind a popup to the marker
    googleMarker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: park_name
      });
      infoWindow.open(map, googleMarker);
    });
  };

  // RENDER MAP
  // Render maps tutorial: https://www.youtube.com/watch?v=Zxf1mnP5zcw
  function initSearchMap() {
    event.preventDefault();
    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
      // add marker
      addMarker({coords:event.latLng});
    });

    // Add marker function (based on click)
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
      });
      // check for content
      if (props.content){
        var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
      };
    };
  };

initSearchMap();

});
