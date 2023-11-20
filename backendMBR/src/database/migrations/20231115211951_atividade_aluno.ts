import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('atividade_aluno', function(table){
        table.increments('id');
        table.integer('id_usuario').unsigned();
        table.foreign('id_usuario').references('id').inTable('usuarios').onDelete('CASCADE');
        table.integer('id_atividade').unsigned();
        table.foreign('id_atividade').references('id').inTable('atividades').onDelete('CASCADE');
        table.integer('id_questao').unsigned();
        table.foreign('id_questao').references('id').inTable('questoes').onDelete('CASCADE');
        table.integer('id_opcao').unsigned();
        table.foreign('id_opcao').references('id').inTable('opcoes').onDelete('CASCADE');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('atividade_aluno')
}
