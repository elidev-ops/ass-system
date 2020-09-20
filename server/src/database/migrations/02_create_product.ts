import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('products', table => {
    table.increments().primary().notNullable();
    table.string('brand').notNullable();
    table.string('model').notNullable();
    table.string('sn').notNullable();
    table.string('user_id').notNullable();
    table.integer('client_id').notNullable();

    table.foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.foreign('client_id')
      .references('id')
      .inTable('clients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('products');
}