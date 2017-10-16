$(document).ready(function() {
console.log('search.js is connected!');

// declare variables for data to populate from the api
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

// set the options of the map - zoom level and center
var options = {
  zoom: 4,
  center: {lat: 39.8283, lng: -98.5795},
};

// create a new map
var map = new google.maps.Map(document.getElementById('searchMap'), options);

// the callNps function makes the ajax call to get the data
  var callNps = function(event) {
    // event.preventDefault();
    // let variable stateCode be set as whatever the user inputs
    let stateCode = document.querySelector('#input').value;
    // console.log(stateCode);
    // data is set as stateCode variable
    let data = {
      "stateCode": stateCode
    };
    // let the url be set as the API call to the national parks service
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

    // when call is complete, declare all the variables as data from the api
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
      // run dom manipulation for all variables
      manipulateDom(park_name, address, city, park_state, coordinates, image, website, description, weather, directions, hours);
      // parse out the coordinates from the coordinates string using regex
      const [foo, lat, lng] = coordinates.match(/^lat:(.+),.+:(.+)$/)
      // declare the coordinates from regex as an object
      let cor = {
        ...coordinates,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      }
      // feed in the coordinates object to the addMarkerFromApi function to generate markers dynamically
      addMarkerFromApi(cor);
      };

    })
    // if the api call fails, then return no data
    .fail(function(data) {
      console.log('failed getting park');
    });
  };

  // change the inner html of divs with appropriate data
  var manipulateDom = function(park_name, address, city, park_state, coordinates, image, website, description){
    //create a container to append the lis
    let $container = $('<ul>').attr('class', 'resultCont');

    // create a top div to attach photo, name, address, city, state, coordinates
    let top = $('<div>').attr('class', 'resultTop');
    // separate the text into it's own div within the top div
    let topText = $('<div>').attr('class', 'resultTopText');

    // add a div to incorporate styling to the park name
    let parkNameCont = $('<div>').attr('class', 'resultNameCont');
    // set parkName to a li
    let parkName = $('<li>').attr('class', 'resultName').html(park_name);
    // append the name to the parkName container
    parkName.appendTo(parkNameCont);
    // append the parkName container to the top text div
    parkNameCont.appendTo(topText);

    // set parkAddress as an li
    let parkAddress = $('<li>').attr('class', 'resultAddress').html(address);
    //append the address to the top text div
    parkAddress.appendTo(topText);

    // set parkcity as an li
    let parkCity = $('<li>').attr('class', 'resultCity').html(city);
    //append the city to the top text div
    parkCity.appendTo(topText);

    // set parkState as an li
    let parkState = $('<li>').attr('class', 'resultState').html(park_state);
    //append the state to the top text div
    parkState.appendTo(topText);

    // set parkCoords as an li
    let parkCoords = $('<li>').attr('class', 'resultCoords').html(coordinates);
    //append the coordinates to the top text div
    parkCoords.appendTo(topText);

    // set park image container
    let parkImageCont = $('<div>').attr('class', 'resultImageCont')
    // set the image to an li
    let parkImage = $('<li>').attr('class', 'resultImage').append(`<img src="${image}"/>`);
    // append the image to the parkImage conatiner
    parkImage.appendTo(parkImageCont)
    // append the park image container to the top container
    parkImageCont.appendTo(top);

    // append the text to the top container
    topText.appendTo(top);
    // append the top container to the entire container
    top.appendTo($container);

    // create a header for the description
    let parkDescriptionHeader = $('<div>').attr('class', 'resultDescriptionHeader').html('Description');
    // create an li and attach the park description
    let parkDescription = $('<li>').attr('class', 'resultDescription').html(description);
    // append the description to the container
    parkDescription.appendTo(parkDescriptionHeader);
    parkDescriptionHeader.appendTo($container);

    // create a header for the weather
    let parkWeatherHeader = $('<div>').attr('class', 'resultWeatherHeader').html('Weather');
    // create an li and attach the park weather
    let parkWeather = $('<li>').attr('class', 'resultWeather').html(weather);
    // append the weather to the container
    parkWeather.appendTo(parkWeatherHeader);
    parkWeatherHeader.appendTo($container);

    // create a header for the directions
    let parkDirectionsHeader = $('<div>').attr('class', 'resultDirectionsHeader').html('Directions');
    // create an li and attach the park directions
    let parkDirections = $('<li>').attr('class', 'resultDirections').html(directions);
    //append the directions to the container
    parkDirections.appendTo(parkDirectionsHeader);
    parkDirectionsHeader.appendTo($container);

    // create a header for the operating hours
    let parkHoursHeader = $('<div>').attr('class', 'resultHoursHeader').html('Operating Hours');
    // create an li and attach the operating hours
    let parkHours = $('<li>').attr('class', 'resultHours').html(hours);
    // append the hours to the container
    parkHours.appendTo(parkHoursHeader);
    parkHoursHeader.appendTo($container);

    // create an li for the website
    let parkWebsite = $('<li>').attr('class', 'resultWebsite').html(website);
    //append the website to the container
    $container.append(parkWebsite);
    //wrap the link in a working link tag
    parkWebsite.wrap('<a href="'+ website +'"></a>');

    // create a save button
    let saveResult = $('<button>').attr({class: 'saveButton', type: 'submit'}).html('SAVE THIS PARK');
    // append the save button to the container
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

    // append the container to the search results
    $('#searchResults').append($container);
  };

  let searchButton = document.querySelector('#btnSearch');
  //add event listener to the submit button and call Api function
  searchButton.addEventListener('click', callNps);

  function addMarkerFromApi(cor) {
    // console.log('inside add marker from api')
    let lat = cor.lat;
    let lng = cor.lng
    var position = new google.maps.LatLng(lat, lng);
    // console.log('position lat -->', lat)
    // console.log('position lng -->', lng)
    // console.log(position);
    var googleMarker = new google.maps.Marker({
      position: position,
      title: park_name,
      map: map
    });
    // console.log(googleMarker);

   // Bind a popup to the marker
    googleMarker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: park_name
      });
      infoWindow.open(map, googleMarker);
    });
  };

  // RENDER MAP
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
// initialize the map
initSearchMap();

});
