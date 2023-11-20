import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('series', function(table){
        table.increments('id');
        table.string('serie', 255).notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('series')
}
