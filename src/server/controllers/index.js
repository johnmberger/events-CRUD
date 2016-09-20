const knex = require('../db/connection');

function getAllEvents(req, res, next) {
  return knex('events');
}

module.exports = {
  getAllEvents
};
