import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("series").del();

    // Inserts seed entries
    await knex("series").insert([
        { id: 1, serie: "1º Serie" },
        { id: 2, serie: "2º Serie" },
        { id: 3, serie: "3º Serie" },
        { id: 4, serie: "4º Serie" },
        { id: 5, serie: "5º Serie" }
    ]);
};
