exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.boolean('over_21');
    table.integer('venue_id').notNullable();
    table.foreign('venue_id').references('id').inTable('venues');
    table.dateTime('start_datetime').notNullable();
    table.dateTime('end_datetime').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
