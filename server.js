// require dotenv to hide keys
require('dotenv').config();
// require express
const path           = require('path');

const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const markerRoutes   = require('./routes/marker-routes');
const parkService    = require('./services/mapsService');


// declare app as express
const app = express();

//MIDDLEWARE
app.use(logger('dev'));

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
  res.render('explore-search')
});

// require the router
app.use('/api/pins', markerRoutes);

// const apiRoutes = require('./routes/api-routes')
// app.use('/apiroute', apiRoutes);

//set the views so ejs can be rendered
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//require public folder so anything placed in public folder can be used
app.use(express.static(__dirname + 'public'));

app.get('/test', (req, res) => {
  res.json(parkService.getParks());
})


//assign port
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})


