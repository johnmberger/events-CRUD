exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('capacity').notNullable();
    table.string('line_1').notNullable();
    table.string('line_2');
    table.string('city').notNullable();
    table.string('state', 2).notNullable();
    table.integer('zip').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues');
};
