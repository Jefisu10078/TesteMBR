import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("usuarios").del();

    // Inserts seed entries
    await knex("usuarios").insert([
        { id: 1, nome: "Aluno 1", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 2, nome: "Aluno 2", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 3, nome: "Aluno 3", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 4, nome: "Aluno 4", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 5, nome: "Aluno 5", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 6, nome: "Aluno 6", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 7, nome: "Aluno 7", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 8, nome: "Aluno 8", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 9, nome: "Aluno 9", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 10, nome: "Aluno 10", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 11, nome: "Aluno 11", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 12, nome: "Aluno 12", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 13, nome: "Aluno 13", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 14, nome: "Aluno 14", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 15, nome: "Aluno 15", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 16, nome: "Aluno 16", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 17, nome: "Aluno 17", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 18, nome: "Aluno 18", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 19, nome: "Aluno 19", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 20, nome: "Aluno 20", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 21, nome: "Aluno 16", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 22, nome: "Aluno 17", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 23, nome: "Aluno 18", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 24, nome: "Aluno 19", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)},
        { id: 25, nome: "Aluno 20", ra:Math.floor(Math.random() * (10000 - 1000) + 1000)}
    ]);
};
