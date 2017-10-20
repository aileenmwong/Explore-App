const Marker = require('../models/markers');

const markerController = {};

//render all of the data from the db
markerController.index = (req, res) => {
  console.log('inside markerController')
  Marker.findAll()
    // .then(markers => {
    // res.json({
    //   message: 'ok',
    //   data: markers,
    // })
    .then(markers => {
      // console.log(markers);
      res.render('./explore-map', {
        data: markers,
      })
    }).catch(err => {
      // console.log(err);
      res.status(500).json(err);
    });
};

// markerController.home = (req, res) => {
//   console.log('inside markerController')
//   Marker.findAll()
//     // .then(markers => {
//     // res.json({
//     //   message: 'ok',
//     //   data: markers,
//     // })
//     .then(markers => {
//       console.log(markers);
//       res.render('./explore-home', {
//         data: markers,
//       })
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// };

//renders the data from a single item in the db
markerController.show = (req, res) => {
  Marker.findById(req.params.id)
    // .then(marker => {
    // res.json({
    //   message: 'ok',
    //   data: marker,
    // });
    .then(marker => {
      res.render('./explore-single', {
        data: marker,
      });
    }).catch(err => {
      // console.log(err);
      res.status(500).json(err);
    });
}

//posts an item to the db
markerController.create = (req, res) => {
  console.log(req.body)

  const { park_name, address, city, state, image, website, description, weather, directions, hours, coordinates, lat, lng } = req.body

    let park = {
        park_name,
        address,
        city,
        state,
        image,
        website,
        description,
        weather,
        directions,
        hours,
        coordinates,
        lat: parseFloat(coordinates.match(/^lat:(.+),.+:(.+)$/)[1]),
        lng: parseFloat(coordinates.match(/^lat:(.+),.+:(.+)$/)[2])
      }

  Marker.create(park)
    .then(markers => {
      res.redirect('/explore');
      })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
  };

//this is the controller function that renders the data when searching for an item in the API
markerController.search = (req, res) => {
  Marker.search
    .then(markers => {
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
    res.redirect('/explore');
    })
  .catch(err => {
    // console.log(err);
    res.status(500).json(err);
  });
};

//export the controller
module.exports = markerController;
