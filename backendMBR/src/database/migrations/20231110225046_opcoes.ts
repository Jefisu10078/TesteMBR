import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('opcoes', function(table){
        table.increments('id');
        table.string('opcao', 255).notNullable();
        table.boolean('certo').defaultTo(false);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('opcoes')
}
