
exports.seed = function(knex, Promise) {
  return knex('tickets').del()
    .then(function () {
      return Promise.all([
        knex('tickets').insert({
          name: 'Early Bird',
          price: '$15.99',
          event_id: 1
        }),
        knex('tickets').insert({
          name: 'Regular Price',
          price: '$20.99',
          event_id: 1
        }),
        knex('tickets').insert({
          name: 'VIP',
          price: '$49.99',
          event_id: 1
        }),
        knex('tickets').insert({
          name: 'Regular Price',
          price: '$99.99',
          event_id: 2
        }),
        knex('tickets').insert({
          name: 'VIP',
          price: '$1,000.00',
          event_id: 2
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: '$49.99',
          event_id: 3
        }),
        knex('tickets').insert({
          name: 'Floor Seats',
          price: '$35.99',
          event_id: 4
        }),
        knex('tickets').insert({
          name: 'Balcony Seats',
          price: '$9.99',
          event_id: 4
        }),
        knex('tickets').insert({
          name: 'Meet and Greey',
          price: '$109.00',
          event_id: 5
        }),
        knex('tickets').insert({
          name: 'Uber VIP',
          price: '$100,000.00',
          event_id: 5
        }),
        knex('tickets').insert({
          name: 'Regular Price',
          price: '$54.99',
          event_id: 6
        }),
        knex('tickets').insert({
          name: 'Cheap Seats',
          price: '$29.99',
          event_id: 6
        }),
        knex('tickets').insert({
          name: 'Early Bird',
          price: '$15.99',
          event_id: 7
        }),
        knex('tickets').insert({
          name: 'Cherry Pie Eater',
          price: '$10.99',
          event_id: 7
        }),
        knex('tickets').insert({
          name: 'Pumpkin Pie Eater',
          price: '$19.99',
          event_id: 7
        }),
        knex('tickets').insert({
          name: 'Pecan Pie Eater',
          price: '$27.99',
          event_id: 7
        }),
        knex('tickets').insert({
          name: 'Berry Pie Eater',
          price: '$1.00',
          event_id: 7
        }),
        knex('tickets').insert({
          name: 'Apple Pie Eater',
          price: '$17.76',
          event_id: 7
        })
      ]);
    });
};
