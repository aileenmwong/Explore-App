const Marker = require('../models/markers');

const markerController = {};

//render all of the data from the db
markerController.index = (req, res) => {
  Marker.findAll()
    .then(markers => {
      res.render('./explore-map', {
        data: markers,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

//renders the data from a single item in the db
markerController.show = (req, res) => {
  Marker.findById(req.params.id)
    .then(marker => {
      res.render('./explore-single', {
        data: marker,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

//posts an item to the db
markerController.create = (req, res) => {
  Marker.create({
      park_name: req.body.park_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      coordinates: req.body.coordinates,
      image: req.body.image,
      website: req.body.website,
      description: req.body.description,
      user_id: req.body.user_id
    })
    .then (grams => {
      res.redirect('/map');
      })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
  };

//this is the controller function that renders the data when searching for an item in the API
markerController.search = (req, res) => {
  Marker.search
    .then(grams => {
    res.render('./explore-search', {
  })
  .catch(err => {
    res.status(500).json(err);
  });
  });
}

//this is the controller function that renders the data when deleting an item from the database
markerController.delete = (req, res) => {
  Marker.delete(req.params.id)
  .then(() => {
    res.redirect('/map');
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//export the controller
module.exports = markerController;
