const { sequelize } = require('../models');

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

var routes = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const route = require(path.join(__dirname, file));
    routes[route.name] = route;
  });

// Function to sync Models with Database

var sync_sequelize = async function() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log("Model synchronization failed.", error)
  }
}

sync_sequelize();

module.exports = routes;