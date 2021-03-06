import Knex from 'knex';
export async function up(knex: Knex) {
  //criar tabela
  return knex.schema.createTable('point_items', (table) => {
    table.increments('id').primary();
    table.integer('item_id').notNullable().references('id').inTable('items');
    table.integer('point_id').notNullable().references('id').inTable('point');
  });
}

export async function down(knex: Knex) {
  //deletar tabela
  return knex.schema.dropTable('point_items');
}
