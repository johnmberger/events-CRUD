const knex = require('../db/connection');

function getEvent(eventID) {
  return Promise.all([
    knex('events').where('id', eventID),
    knex('tickets').where('event_id', eventID)
  ]);
}

module.exports = {
  getEvent
};
