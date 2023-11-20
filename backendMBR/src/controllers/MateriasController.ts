import { Request, Response} from 'express';
import db from '../database/connections';

interface Materias {
    nome: string;
    serie: number;
    materias: [];
}

export default class MateriasController
{
    async index(request:Request, response:Response){
        const filters = request.query;
        const materia = filters.materia as string | null;

        let materias;
        if(materia){
            materias = await db('materias')
            .where('materias.materia','=',materia)
            .select(['materias.*']);
        }else {
            materias = await db('materias')
            .select(['materias.*']);
        }
        return response.json(materias)
    }

    async create(request:Request, response:Response){

    }

    async update(request:Request, response:Response){

    }

    async delete(request:Request, response:Response){

    }
}