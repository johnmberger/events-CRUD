const faker = require('faker');

function ticketsAttendeesSeed(knex, id) {
  return knex('tickets_attendees').insert({
    ticket_id: faker.random.number({
      min: 1,
      max: 18
    }),
    attendee_id: id
  });
}

exports.seed = function (knex, Promise) {
  const iterationArray = new Array(240);

  var ArrayOfPromises = Array.from(iterationArray)
  .map((item, i) => {
    var id;
    if (i > 119) {
      id = 240 - i;
    } else {
      id = i + 1;
    }
    return ticketsAttendeesSeed(knex, id);
  });

  return Promise.all(ArrayOfPromises);
};
