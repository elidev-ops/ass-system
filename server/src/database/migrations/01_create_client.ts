import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('clients', table => {
    table.increments().primary().notNullable();
    table.string('name').notNullable();
    table.string('whatsapp').notNullable();
    table.string('user_id').notNullable();
    table.foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('clients');
}