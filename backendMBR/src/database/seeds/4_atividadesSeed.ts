import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("atividades").del();
    await knex("questoes").del();
    await knex("opcoes").del();
    await knex("questoes_atividade").del();
    await knex("opcoes_questao").del();
    await knex("atividade_aluno").del();

    // Inserts seed entries
    await knex("atividades").insert([
        { id: 1, atividade: "Atividade 1 - Português", id_serie: 1, id_materia: 1},
        { id: 2, atividade: "Atividade 1 - Inglês", id_serie: 1, id_materia: 2},
        { id: 3, atividade: "Atividade 1 - Espanhol", id_serie: 1, id_materia: 3}
    ]);

    await knex("questoes").insert([
        { id: 1, titulo: "Pergunta 1:", descricao: 'Qual é o pronome relativo adequado para preencher a lacuna na frase: "O livro _____ estou lendo é muito interessante."?'},
        { id: 2, titulo: "Pergunta 2:", descricao: 'Qual é a função da vírgula na seguinte frase: "O pássaro, cansado de voar, pousou na árvore."?'},
        { id: 3, titulo: "Pergunta 3:", descricao: 'Em qual alternativa a palavra está corretamente acentuada?'},
        { id: 4, titulo: "Pergunta 4:", descricao: 'Qual é o plural correto da palavra "animal"?'},
        { id: 5, titulo: "Pergunta 5:", descricao: 'Indique a opção em que todas as palavras são proparoxítonas:'}
        
    ]);

    await knex("opcoes").insert([
        { id: 1, opcao: "Que", certo: true},
        { id: 2, opcao: "Quem", certo: false},
        { id: 3, opcao: "Cujo", certo: false},
        { id: 4, opcao: "Onde", certo: false},
        { id: 5, opcao: "Como", certo: false},
        { id: 6, opcao: "Separar o sujeito do predicado.", certo: false},
        { id: 7, opcao: "Isolar uma expressão explicativa.", certo: true},
        { id: 8, opcao: "Indicar uma enumeração.", certo: false},
        { id: 9, opcao: "Marcar o início de um diálogo.", certo: false},
        { id: 10, opcao: "Sinalizar uma oração subordinada.", certo: false},
        { id: 11, opcao: "Paralelo", certo: false},
        { id: 12, opcao: "Excessao", certo: false},
        { id: 13, opcao: "Relevante", certo: true},
        { id: 14, opcao: "Acôrdo", certo: false},
        { id: 15, opcao: "Assembléia", certo: false},
        { id: 16, opcao: "Animães", certo: false},
        { id: 17, opcao: "Animaisês", certo: false},
        { id: 18, opcao: "Animáis", certo: false},
        { id: 19, opcao: "Animais", certo: true},
        { id: 20, opcao: "Animéis", certo: false},
        { id: 21, opcao: "Cômodo, álcool, fácil", certo: false},
        { id: 22, opcao: "Canoa, difícil, papel", certo: false},
        { id: 23, opcao: "Água, pólen, difícil", certo: false},
        { id: 24, opcao: "Tórax, café, hotel", certo: false},
        { id: 25, opcao: "Último, crânio, pássaro", certo: true}
        
    ]);

    await knex("questoes_atividade").insert([
        { id: 1, id_atividade: 1, id_questao: 1},
        { id: 2, id_atividade: 1, id_questao: 2},
        { id: 3, id_atividade: 1, id_questao: 3},
        { id: 4, id_atividade: 1, id_questao: 4},
        { id: 5, id_atividade: 1, id_questao: 5}

    ]);

    await knex("opcoes_questao").insert([
        { id: 1, id_questao: 1, id_opcao: 1},
        { id: 2, id_questao: 1, id_opcao: 2},
        { id: 3, id_questao: 1, id_opcao: 3},
        { id: 4, id_questao: 1, id_opcao: 4},
        { id: 5, id_questao: 1, id_opcao: 5},
        { id: 6, id_questao: 2, id_opcao: 6},
        { id: 7, id_questao: 2, id_opcao: 7},
        { id: 8, id_questao: 2, id_opcao: 8},
        { id: 9, id_questao: 2, id_opcao: 9},
        { id: 10, id_questao: 2, id_opcao: 10},
        { id: 11, id_questao: 3, id_opcao: 11},
        { id: 12, id_questao: 3, id_opcao: 12},
        { id: 13, id_questao: 3, id_opcao: 13},
        { id: 14, id_questao: 3, id_opcao: 14},
        { id: 15, id_questao: 3, id_opcao: 15},
        { id: 16, id_questao: 4, id_opcao: 16},
        { id: 17, id_questao: 4, id_opcao: 17},
        { id: 18, id_questao: 4, id_opcao: 18},
        { id: 19, id_questao: 4, id_opcao: 19},
        { id: 20, id_questao: 4, id_opcao: 20},
        { id: 21, id_questao: 5, id_opcao: 21},
        { id: 22, id_questao: 5, id_opcao: 22},
        { id: 23, id_questao: 5, id_opcao: 23},
        { id: 24, id_questao: 5, id_opcao: 24},
        { id: 25, id_questao: 5, id_opcao: 25}       
    ]);

    await knex("atividade_aluno").insert([
        { id: 1, id_usuario: 1, id_atividade: 1, id_questao: 1, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 2, id_usuario: 1, id_atividade: 1, id_questao: 2, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 3, id_usuario: 1, id_atividade: 1, id_questao: 3, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 4, id_usuario: 1, id_atividade: 1, id_questao: 4, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
        { id: 5, id_usuario: 1, id_atividade: 1, id_questao: 5, id_opcao: Math.floor(Math.random() * (5 - 1 + 1) + 1)}
    ]);

};
