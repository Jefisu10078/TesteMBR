import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('opcoes_questao', function(table){
        table.increments('id');
        table.integer('id_questao').unsigned();
        table.foreign('id_questao').references('id').inTable('questoes').onDelete('CASCADE');
        table.integer('id_opcao').unsigned();
        table.foreign('id_opcao').references('id').inTable('opcoes').onDelete('CASCADE');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('opcoes_questao')
}
