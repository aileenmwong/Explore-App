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

//this is the function that selects one park by user
Marker.findByIdByUser = (users.id, parks.id) => {
  return db.oneOrNone(
    `
    SELECT * FROM parks
    INNER JOIN users
    ON user_id = users.id
    WHERE users.id = $1
    AND parks.id = $2
    `, [users.parks.id]);
};

//this is the function that selects one park
Marker.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM parks
    INNER JOIN users
    ON user_id = users.id
    WHERE id = $1
    `, [id]);
};

//this is the function that selects one park by user
Marker.createByUser = parks => {
  parks.user_id = Number.parseInt(parks.user_id, 10)
  console.log(parks.user_id)
  return db.one(
    `
    INSERT INTO parks
    (park_name, address, city, state, coordinates, image, website, description, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
    `, [parks.park_name, parks.address, parks.city, parks.state, parks.coordinates, parks.image, parks.website, parks. description, parks.user_id]
    );
};

//this is the function that selects one park by user
Marker.create = parks => {
  return db.one(
    `
    INSERT INTO parks
    (park_name, address, city, state, coordinates, image, website, description)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `, [parks.park_name, parks.address, parks.city, parks.state, parks.coordinates, parks.image, parks.website, parks.description]
    );
};

//this is the function deletes a single item in the database
Gram.delete = (id) => {
  return db.none(`
    DELETE FROM parks
    WHERE id = $1
    `, [id]);
}

module.exports = Marker;

// 3 TABLE SET UP
// //this is the function that selects all the parks for a user
// Marker.findAllByUser = (user_id) => {
//   return db.query(
//     `
//     SELECT * FROM user_parks
//     INNER JOIN parks
//     ON park_id = parks.id
//     WHERE user_id = $1,
//     `);
// };

// //this is the function selects all of the data from the database
// Marker.findAll = () => {
//   return db.query(
//     `
//     SELECT * FROM parks
//     `);
// };

// //this is the function that selects one park by user
// Marker.findByIdByUser = (user_id, id) => {
//   return db.oneOrNone(
//     `
//     SELECT * FROM user_parks
//     INNER JOIN parks
//     ON park_id = parks.id
//     WHERE user_id = $1
//     AND parks.id = $2
//     `, [id]);
// };

// //this is the function that selects one park
// Marker.findByIdByUser = (id) => {
//   return db.oneOrNone(
//     `
//     SELECT * FROM user_parks
//     INNER JOIN parks
//     ON park_id = parks.id
//     WHERE parks.id = $1
//     `, [id]);
// };

