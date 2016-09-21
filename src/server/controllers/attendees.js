const knex = require('../db/connection');

function getAttendee(attendeeID) {
  return Promise.all([
    knex('attendees').where('id', attendeeID),
    knex('tickets_attendees').where('attendee_id', attendeeID)
    .join('tickets', 'tickets.id', 'tickets_attendees.ticket_id')
    .join('events', 'events.id', 'tickets.event_id')
  ]);
}

module.exports = {
  getAttendee
};
