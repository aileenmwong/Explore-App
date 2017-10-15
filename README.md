![Explore Map View](/public/assets/explore-map.png "Explore Map View")

# Explore ###

Explore is an app for adventurers to search for national parks to visit. Explore uses the National Parks System API and allows users to create a digital map pinboard. Users can search by activity, state or park name to find parks they would like to visit and save them to their map. Explore will add a pin to their map based on latitude and longitude of the park. Users can see which parks are close together so they can create their own roadtrip through the parks system. 

[Go to Explore](#)

## Technologies Used ###

- CSS3  
- Vanilla Javascript  
- jQuery  
- node.js  
- express  
- Google Maps Javascript API  
- National Parks Services API  

## About the Build ### 

Initially I wanted to do a fully Google integrated product with Firebase serving as a backend with React on the front end, and trying to learn three new things (Firebase, Google Maps, and using the National Parks Service), proved to be too difficult. After many days of frustration, I ended up using Node/Express on the backend and EJS and several javascript files on the front end while integrating the two APIs together. 

I've never worked with two APIs and had them interact with each other, so I knew this was going to be a challenge. I decided to work with the APIs first since I knew that would be the hardest part. I was able to query the National Parks Services fairly quickly since their format is very similar to other APIs I've used. However, Google Maps was challenging becuase I've never used any sort of maps API. I ended up doing a lot of Google Maps tutorials to get a grasp on how to understand how it works. 

I ended up writing a lot more javascript than I anticipated while working with Google Maps and rendering a large amount of data dynamically, which was a good thing since I felt very rusty just thinking logically through problems. 

Ultimately I learned that while I feel confident in my skills, I should still not try to do too many new things at once in a short time span. I had to start over so many times (3!) that I felt rushed to complete the project. I'll need to go back and clean up my code, since I am using both jQuery and Javascript, and I know I need to switch over to one or the other. I also have a lot of comments of features that I started and would still like to implement but ran out of time to complete. 

### Example Code ###

This is the code to render a marker in Google Maps from a string of position coordinates:
```
$.ajax(url)
    .done(function(data) {
      console.log('the data is -->', data.data);
      for (let i=0; i < data.data.length; i++) {
      ...
      coordinates = data.data[i].latLong;
      ...
      manipulateDom(park_name, address, city, park_state, coordinates, image, website, description, weather, directions, hours);
      const [foo, lat, lng] = coordinates.match(/^lat:(.+),.+:(.+)$/)
      let cor = {
        ...coordinates,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      }
      addMarkerFromApi(cor);
      };

  function addMarkerFromApi(cor) {
    let lat = cor.lat;
    let lng = cor.lng
    var position = new google.maps.LatLng(lat, lng);
    var googleMarker = new google.maps.Marker({
      position: position,
      title: park_name,
      map: map
    });
```

## Build Strategy ###

### Express/Node ###
Express and Node were fairly straightforward to set up once I started working with them. I felt comfortable with the technology and have the app poised to accept user authentication once I get it set up. 

### Database Setup ###
I'm using a two table setup (initially a three table setup), but the database itself is very data heavy. One table contains all of the parks information, and the other table joins on as users. I switched from a three table setup which accounted for preventing duplicates, to a two table setup since I realized I didn't have time for user authentication and I had a mountain of work ahead of me. I plan to refactor to three when I have user authentication set up. 

### EJS/Javascript ###
EJS and Javascript were very straightforward. I was having so much trouble getting Google Maps to work (since it has to be a front end call, which is not clear in the documentation) that I ended up doing a lot of inline scripting. I've moved everything into a javascript file for each page.

## Wireframes ###

### HOME WIREFRAME ####
![Explore Home Wireframe](/public/assets/wireframe-home.png "Explore Home")

### MAP WIREFRAME ####
![Explore Map Wireframe](/public/assets/wireframe-map.png "Explore Map")

### SINGLE WIREFRAME ####
![Explore Single Wireframe](/public/assets/wireframe-single.png "Explore Single")

### TABLE WIREFRAME ####
![Explore Table Wireframe](/public/assets/wireframe-tables.png "Explore Tables")

### SYSTEM FLOWCHART ####
![Explore Flowchart Wireframe](/public/assets/Explore-flowchart.png "Explore Flowchart")

## Future Features ###
- directions from pin to pin
- saved search results
- user authentication

### Issues to solve ###
Unfortunately users are not able to save their search results. I've tried to post to the database, but it's not working - I think I need a little more time working with the data to figure out how to insert it in. The data is coming in dynamically from the API, so I think that's part of the problem. Because of this, there is no way to add new data to your map. It didn't make sense to have a form to input information into because no one would take the time to look up the latitude and longitude of a location.

I also do not have user authentication set up, so everyone who uses the app will be going to the same parks. I hope they enjoy a group road trip!


