import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('usuarios', function(table){
        table.increments('id');
        table.string('nome', 255).notNullable();
        table.string('ra', 255).notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('usuarios')
}
