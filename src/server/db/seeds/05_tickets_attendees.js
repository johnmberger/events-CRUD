const faker = require('faker');

function ticketsAttendeesSeed(knex) {
  return knex('tickets_attendees').insert({
    ticket_id: faker.random.number({
      min: 1,
      max: 18
    }),
    attendee_id: faker.random.number({
      min: 1,
      max: 120
    })
  });
}

exports.seed = function (knex, Promise) {
  const iterationArray = new Array(240);

  var ArrayOfPromises = Array.from(iterationArray)
  .map((i) => {
    return ticketsAttendeesSeed(knex);
  });

  return Promise.all(ArrayOfPromises);
};
