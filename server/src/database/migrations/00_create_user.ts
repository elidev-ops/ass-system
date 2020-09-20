import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').primary().notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('password').notNullable();
    table.string('uf', 2).notNullable();
    table.string('city').notNullable();
    table.string('address').notNullable();
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('users');
}