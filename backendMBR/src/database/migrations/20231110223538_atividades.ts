import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('atividades', function(table){
        table.increments('id');
        table.string('atividade', 255).notNullable();
        table.integer('id_serie').unsigned();
        table.foreign('id_serie').references('id').inTable('series').onDelete('CASCADE');
        table.integer('id_materia').unsigned();
        table.foreign('id_materia').references('id').inTable('materias').onDelete('CASCADE');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('atividades')
}
