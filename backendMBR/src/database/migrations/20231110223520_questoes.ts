import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('questoes', function(table){
        table.increments('id');
        table.string('titulo', 255).notNullable();
        table.text('descricao').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('questoes')
}
