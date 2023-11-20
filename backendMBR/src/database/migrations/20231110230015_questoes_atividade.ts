import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('questoes_atividade', function(table){
        table.increments('id');
        table.integer('id_atividade').unsigned();
        table.foreign('id_atividade').references('id').inTable('atividades').onDelete('CASCADE');
        table.integer('id_questao').unsigned();
        table.foreign('id_questao').references('id').inTable('questoes').onDelete('CASCADE');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('questoes_atividade')
}
