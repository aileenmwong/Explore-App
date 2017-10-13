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
      "url": `https://developer.nps.gov/api/v0/parks?stateCode=${stateCode}&fields=images,addresses`,
      //change url to /parks/search - use filter function to read over collection ie state, name, on the backend
      }
    }



  // change the inner html of divs with appropriate data
  var manipulateDom = function({park_name, address, city, park_state, coordinates, image, website, description}){
        //create a container to append the lis
    let $container = $('<ul>').attr('class', 'resultCont');

    let parkName = $('<li>').attr('class', 'resultName').html(park_name);
    //append the location to the container
    parkName.appendTo($container);

    let parkAddress = $('<li>').attr('class', 'resultAddress').html(address);
    //append the address to the container
    parkAddress.appendTo($container);

    let parkCity = $('<li>').attr('class', 'resultCity').html(city);
    //append the city to the container
    parkCity.appendTo($container);

    let parkState = $('<li>').attr('class', 'resultState').html(park_state);
    //append the state to the container
    parkState.appendTo($container);

    let parkCoords = $('<li>').attr('class', 'resultCoords').html(coordinates);
    //append the coordinates to the container
    parkCoords.appendTo($container);

    let parkImageCont = $('<div>').attr('class', 'resultImageCont')
    let parkImage = $('<li>').attr('class', 'resultImage').append(`<img src="${image}"/>`);
    parkImage.appendTo(parkImageCont)
    //append the image to the container
    parkImageCont.appendTo($container);

    let parkDescription = $('<li>').attr('class', 'resultDescription').html(description);
    //append the description to the container
    parkDescription.appendTo($container);

    let parkSave = $('<input type="button" value="SAVE">').attr('class', 'resultSave')
    //append the save button to the container
    parkSave.appendTo($container);
    //NEED TO MAKE THIS SAVE

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

  $.ajax(url)
    .done(function(data) {
      console.log('the data is -->', data.data);

      data.data.map((park) => {
        return {
          park_name:   park.fullName,
          address:     park.addresses[0].line1,
          city:        park.addresses[0].city,
          park_state:  park.addresses[0].stateCode,
          coordinates: park.latLong,
          image:       park.images[0].url,
          website:     park.url,
          description: park.description,
        };
      })
      .forEach(manipulateDom)


    })
    .fail(function(data) {
      console.log('failed getting park');
    })
  }

  let searchButton = document.querySelector('#btnSearch');
  //add event listener to the submit button and call Api function
  searchButton.addEventListener('click', callNps);



// RENDER MAP
// Render maps tutorial: https://www.youtube.com/watch?v=Zxf1mnP5zcw
function initSearchMap() {
  // map options
  var options = {
    zoom: 4,
    center: {lat: 40.7134, lng: -74.0055},
  }
  // New map
  var map = new google.maps.Map(document.getElementById('searchMap'), options);

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
};

initSearchMap();
});
