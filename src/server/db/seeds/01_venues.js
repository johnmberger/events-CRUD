exports.seed = function(knex, Promise) {
  return knex('venues').del()
    .then(function () {
      return Promise.all([
        knex('venues').insert({
          name: 'The Bluebird Cafe',
          capacity: 60,
          line_1: '1500 Magnolia',
          city: 'Nashville',
          state: 'TN',
          zip: 37235
        }),
        knex('venues').insert({
          name: 'The Pageant',
          capacity: 25,
          line_1: '265 Delmar Ave.',
          city: 'St. Louis',
          state: 'MO',
          zip: 63156
        }),
        knex('venues').insert({
          name: 'Ogden Theatre',
          capacity: 10,
          line_1: '1245 Colfax',
          city: 'Denver',
          state: 'CO',
          zip: 80218
        }),
        knex('venues').insert({
          name: 'Victory Sandwich Bar',
          capacity: 100,
          line_1: '34 Bernice',
          line_2: 'Basement Floor',
          city: 'Atlanta',
          state: 'GA',
          zip: 30307
        }),
        knex('venues').insert({
          name: 'Grog Shop',
          capacity: 45,
          line_1: '15890 Oak',
          line_2: 'Unit 5',
          city: 'Cleveland',
          state: 'OH',
          zip: 44101
        })
      ]);
    });
};
