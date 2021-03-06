const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return Promise.all([
        knex('events').insert({
          title: 'How to Gracefully Skin a Cat',
          description: 'Ever looked like a psycho when you skinned your cat? This event will include a rousing demonstration of graceful feline de-skinning',
          over_21: true,
          venue_id: 5,
          start_datetime: faker.date.future(),
          end_datetime: faker.date.future()
        }),
        knex('events').insert({
          title: faker.company.companyName() + ' ' + faker.company.bsAdjective() + ' ' + faker.company.bsNoun(),
          description: faker.lorem.sentences(4),
          over_21: false,
          venue_id: 1,
          start_datetime: faker.date.between(faker.date.recent(), '2016-12-31'),
          end_datetime: faker.date.future()
        }),
        knex('events').insert({
          title: faker.company.companyName() + ' ' + faker.company.bsAdjective() + ' ' + faker.company.bsNoun(),
          description: faker.lorem.sentences(4),
          over_21: true,
          venue_id: 1,
          start_datetime: faker.date.between(faker.date.recent(), '2016-12-31'),
          end_datetime: faker.date.future()
        }),
        knex('events').insert({
          title: faker.company.companyName() + ' ' + faker.company.bsAdjective() + ' ' + faker.company.bsNoun(),
          description: faker.lorem.sentences(4),
          over_21: true,
          venue_id: 2,
          start_datetime: faker.date.recent(),
          end_datetime: faker.date.future()
        }),
        knex('events').insert({
          title: faker.company.companyName() + ' ' + faker.company.bsAdjective() + ' ' + faker.company.bsNoun(),
          description: faker.lorem.sentences(4),
          over_21: false,
          venue_id: 2,
          start_datetime: faker.date.recent(),
          end_datetime: faker.date.recent()
        }),
        knex('events').insert({
          title: faker.company.companyName() + ' ' + faker.company.bsAdjective() + ' ' + faker.company.bsNoun(),
          description: faker.lorem.sentences(4),
          over_21: false,
          venue_id: 3,
          start_datetime: faker.date.between(faker.date.recent(), '2016-12-31'),
          end_datetime: faker.date.future()
        }),
        knex('events').insert({
          title: 'How to Eat Pie Quickly',
          description: 'A beginner lesson for pie eating contest hopefuls',
          over_21: false,
          venue_id: 4,
          start_datetime: faker.date.between(faker.date.recent(), '2016-12-31'),
          end_datetime: faker.date.future()
        })
      ]);
    });
};
