const knex = require('../db/connection');

function getAttendee(attendeeID) {
  return knex('attendees').where('id', attendeeID);
}

module.exports = {
  getAttendee
};
