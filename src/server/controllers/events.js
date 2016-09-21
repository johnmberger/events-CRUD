const knex = require('../db/connection');

function getEvent(eventID) {
  return Promise.all([
    knex('events').where('id', eventID),
    knex('tickets').where('event_id', eventID)
  ]);
}

function register(eventID, formSubmission) {
  return knex('attendees').where(knex.raw('LOWER("email") = ?', formSubmission.email.toLowerCase()))
  .then((individual) => {
    if (individual.length) {
      var person = individual[0];
      var now = new Date();
      var timezoneOffset = now.getTimezoneOffset();
      now = now.getTime() + (timezoneOffset * 60000);
      if (now - person.birthday.getTime() < 661500000000) {
        return {
          message: 'existing user, not old enough',
          data: person,
          formSubmission
        };
      }
    } else {
      return knex('attendees').insert({
        preferred_name: formSubmission.preferred_name,
        last_name: formSubmission.last_name,
        email: formSubmission.email,
        birthday: formSubmission.birthday
      }).returning(['id', 'birthday'])
      .then((data) => {
        var now = new Date();
        now = now.getTime();
        if (now - data[0].birthday.getTime() > 661500000000) {
          return knex('tickets_attendees')
          .insert({
            attendee_id: data[0].id,
            ticket_id: formSubmission.ticket_id
          }).returning('attendee_id');
        } else {
          return 'new user, not old enough';
        }
      });
    }
  });
}

module.exports = {
  getEvent,
  register
};
