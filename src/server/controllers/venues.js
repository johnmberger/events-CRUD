const knex = require('../db/connection');

function getAllEvents(venueID) {
  return Promise.all([
    knex('events').where('venue_id', venueID).orderBy('start_datetime'),
    knex('venues').where('id', venueID)
  ]);
}

module.exports = {
  getAllEvents
};
