//require the configuration
const db = require('../db/config');

//create an empty object to push the function that the model is using into
const Marker = {};

// //2 TABLE SET UP
// //this is the function that selects all the parks for a user
Marker.findAllByUser = (user_id) => {
  return db.query(
    `
    SELECT * FROM parks
    INNER JOIN users
    ON user_id = users.id
    WHERE user_id = $1,
    `);
};

//this is the function selects all of the data from the database
Marker.findAll = () => {
  return db.query(
    `
    SELECT * FROM parks
    `);
};

//this is the function that selects one park
Marker.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM parks
    WHERE id = $1
    `, [id]);
};

//this is the function that selects one park by user
Marker.create = parks => {
  console.log('inside of create function')
  return db.one(
    `
    INSERT INTO parks
    (park_name, address, city, state, coordinates, lat, lng, image, website, description, weather, directions, hours)
    VALUES ($/park_name/, $/address/, $/city/, $/state/, $/coordinates/, $/lat/, $/lng/, $/image/, $/website/, $/description/, $/weather/, $/directions/, $/hours/)
    RETURNING *
    `, parks
    );
};

//this is the function deletes a single item in the database
Marker.delete = (id) => {
  return db.none(`
    DELETE FROM parks
    WHERE id = $1
    `, [id]);
}

module.exports = Marker;

