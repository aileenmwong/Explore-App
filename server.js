// require dotenv to hide keys
require('dotenv').config();
// require express
const express = require('express');
// declare app as express
const app = express();
const logger = require('morgan');
const cors = require('cors');

// app.use(cors())
app.use(logger('dev'));

//MIDDLEWARE
//require bodyParser
const bodyParser = require('body-parser');
//require path
const path = require('path');
//require Method OVerride
const methodOverride = require('method-override');

// const parkService    = require('./services/mapsService');
const Marker = require('./models/markers')

//use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//render index page
app.get('/', function(req, res){
  res.render('explore-home')
});

//render search page
app.get('/search', function(req, res){
  console.log(res,'this is res in /search<---------')
  res.render('explore-search')
});

//render map page
// app.get('/map', function(req, res){
//   res.render('explore-map')
// });

// require the router
const markerRoutes = require('./routes/marker-routes');
app.use('/explore', markerRoutes);

// const apiRoutes = require('./routes/api-routes')
// app.use('/apiroute', apiRoutes);

// app.get('/test', (req, res) => {
//   res.json(parkService.getParks());
// })

// app.post('/result', async (req,res) => {
//   let searchTerm = req.body.search.toLowerCase();
//   let result = await parkService.getParks(searchTerm);
//    console.log(res,'<-----res data back')
//   let markers = result.map(element => {
//     console.log(element.fullName,'element in the back ')
//     console.log(element.lat,'element in the back ')
//     console.log(element.lng,'element in the back ')
//     console.log(element.states,' is this undefined element in the back ')
//      return{
//       lat: element.lat,
//       lng: element.lng,
//       state: element.states,
//       description: element.description,
//       park_name: element.fullName,
//       weather: element.weatherInfo,
//       website: element.url
//     }
//     console.log(element,'<----------')
//   }).then(markers=>{
//     console.log(element,'<----------')
//   // res.json(newResult);
//   res.json('./explore-search', { data: markers });
// })
//   })

//set the views so ejs can be rendered
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//require public folder so anything placed in public folder can be used
app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));


//assign port
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})
