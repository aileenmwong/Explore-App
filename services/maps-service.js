//require isomorphic-fetch
require('isomorphic-fetch');
//require dotenv to hide keys
require('dotenv').config();

//declare a function of getSearchResults with req, res, and next as parameters
function getMapResults(req, res, next) {
  //declare variables for search terms in the API key
  const CLIENT_ID_MAP = process.env.SUPER_SECRET_MAP;

//   //fetch the api
//   fetch(`https://api.foursquare.com/v2/venues/search?near=${req.body.locationSearch}+&query=${req.body.food}+&limit=10&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20170831`)
//   //use then promise to fetch response
//   .then((fetchRes) => {
//     console.log('the data back from API call ->', fetchRes);
//     //return the data
//     return fetchRes.json();
//     // use
//   }).then((jsonFetchRes) => {
//     console.log(jsonFetchRes);
//     res.json(jsonFetchRes);
//   }).catch((err) => {
//     console.log(err);
//     res.status(500).json({"data":"didn't find anything"})
//   });
}

//export the helper file
module.exports = {
  getMapResults: getMapResults,
}
