import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("materias").del();

    // Inserts seed entries
    await knex("materias").insert([
        { id: 1, materia: "português" },
        { id: 2, materia: "inglês" },
        { id: 3, materia: "espanhol" }
    ]);
};
