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
    WHERE id = $1
    `, [id]);
};



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

