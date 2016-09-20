const faker = require('faker');

function attendeeSeed(knex) {
  return knex('attendees').insert({
    preferred_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthday: faker.date.between('1991-01-01', '1999-12-31'),
    email: faker.internet.email()
  });
}

exports.seed = function (knex, Promise) {
  const iterationArray = new Array(120);

  var ArrayOfPromises = Array.from(iterationArray)
  .map((i) => {
    return attendeeSeed(knex);
  });

  return Promise.all(ArrayOfPromises);
};
