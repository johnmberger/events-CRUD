exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets_attendees', (table) => {
    table.integer('ticket_id');
    table.integer('attendee_id');
    table.foreign('ticket_id').references('id').inTable('tickets');
    table.foreign('attendee_id').references('id').inTable('attendees');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets_attendees');
};
