exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('price').notNullable();
    table.integer('event_id').notNullable();
    table.foreign('event_id').references('id').inTable('events');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};
