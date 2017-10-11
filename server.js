// require dotenv to hide keys
require('dotenv').config();
// require express
const express = require('express');
// declare app as express
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

//MIDDLEWARE
//require bodyParser
const bodyParser = require('body-parser');
//require path
const path = require('path');
//require Method OVerride
const methodOverride = require('method-override');

//use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//render index page
// app.get('/', function(req, res){
//   res.render('#')
// });

app.get('/', function(req,res){
  res.send('HELLOoOOOoOOoOOOooO, WORLD! <h1>This is ROOT route</h1>');
});

app.use('*', (req, res) => {
    // send a response with status 404
    res.status(404).send(err);
});

//require the router
// const gramRoutes = require('./routes/gram-routes');
// app.use('/grams', gramRoutes);

// const apiRoutes = require('./routes/api-routes')
// app.use('/apiroute', apiRoutes);

//set the views so ejs can be rendered
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// require public folder so anything placed in public folder can be used
// app.use(express.static('public'));
// app.use(express.static(__dirname + "/public"));


//assign port
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})


