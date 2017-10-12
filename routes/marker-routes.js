// require express
const express = require('express');
// require the router
const markerRoutes = express.Router();
// require the controller
const markerController = require('../controllers/marker-controller');

// require helper functions
const mapService = require('../services/maps-service');
const npsService = require('../services/nps-service');

// // get the search page from the controller
// markerRoutes.get('/search', markerController.search);

// get the single page from the controller
markerRoutes.get('/:id', markerController.show);

//get the delete function from the controller
markerRoutes.delete('/:id', markerController.delete);

//get the map page from the controller
markerRoutes.get('/', markerController.index);

// //get the map page from the controller
// markerRoutes.get('/map', markerController.index);

//get the create frunction from the controller
markerRoutes.post('/', markerController.create);

// export the router
module.exports = markerRoutes;


