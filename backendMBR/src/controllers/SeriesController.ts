import { Request, Response} from 'express';
import db from '../database/connections';

export default class seriesController
{
    async index(request:Request, response:Response){
        const filters = request.query;
        const serie = filters.serie as string | null;

        let series;
        if(serie){
            series = await db('series')
            .where('series.serie','=',serie)
            .select(['series.*']);
        }else {
            series = await db('series')
            .select(['series.*']);
        }
        return response.json(series)
    }

    async create(request:Request, response:Response){
        const {
            serie
        } = request.body;
        const trx = await db.transaction();
        try{
            await trx('series').insert({
                serie
            });

            await trx.commit();

            return response.status(201).send({
                Message:"Serie Cadastrada com sucesso"
            });

        }catch(error){
            await trx.rollback();
            return response.status(400).json({
                error: 'Ocorreu um erro! Tente novamente mais tarde'
            })
        }
    }

    async update(request:Request, response:Response){
        const {
            id,
            serie
        } = request.body;
        const trx = await db.transaction();
        try{
           await trx('series')
            .where({id: id})
            .update({
                serie: serie
            });

            await trx.commit();

            return response.status(201).send({
                Message:"Serie Atualizada com sucesso"
            });
        }catch(error){
            await trx.rollback();
            return response.status(400).json({
                error: 'Ocorreu um erro! Tente novamente mais tarde'
            })
        }

    }

    async delete(request:Request, response:Response){
        const {
            id
        } = request.body;
        const trx = await db.transaction();
        try{
           await trx('series')
            .where({id: id})
            .del();

            await trx.commit();

            return response.status(201).send({
                Message:"Serie Removida com sucesso"
            });

        }catch(error){
            await trx.rollback();
            return response.status(400).json({
                error: 'Ocorreu um erro! Tente novamente mais tarde'
            })
        }
    }
}