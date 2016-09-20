const knex = require('../db/connection');

function getAllEvents(req, res, next) {
  var payload;
  knex('events')
  .then(events => {
    var ticketsPromise = events.map(event => {
      return knex('tickets')
      .where({event_id: event.id})
      .join('tickets_attendees', 'tickets.id', 'tickets_attendees.ticket_id');
    });
    return Promise.all(ticketsPromise)
    .then(tickets => {

      tickets.forEach((ticket, i) => {
        events[i].attendees = ticket.map(ticket => ticket.id);
      });
      events.forEach((event) => {
        event.attendees = event.attendees.length;
      });

      var venuesPromise = events.map(event => {
        return knex('venues')
        .select('venues.capacity', 'venues.name')
        .where('venues.id', event.venue_id);
      });
      return Promise.all(venuesPromise)
      .then((results) => {
        results.forEach((result, i) => {
          events[i].venue_name = result[0].name;
          events[i].capacity = result[0].capacity;
        });
        events.sort(function(a, b) {
          return a.start_datetime - b.start_datetime;
        });
        var now = new Date();
        var timezoneOffset = now.getTimezoneOffset();
        now = now.getTime() + (timezoneOffset * 60000);
        var renderEvents = events.filter((event) => {
          return event.end_datetime.getTime() >= now;
        });
        res.render('index', {events: renderEvents});
      });
    });
  });
}

module.exports = {
  getAllEvents
};
