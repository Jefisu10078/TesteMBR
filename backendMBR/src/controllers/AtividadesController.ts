import { Request, Response} from 'express';
import db from '../database/connections';

export default class AtividadesController
{
    async index(request:Request, response:Response){
        const filters = request.query;
        const serie = filters.serie as string;
        const materia = filters.materia as string;

        let atividades;
        if(serie && materia){
            atividades = await db('atividades')
            .where('series.id','=',serie)
            .andWhere('materias.id','=',materia)
            .join('series','atividades.id_serie','series.id')
            .join('materias','atividades.id_materia','materias.id')
            .join('questoes_atividade','atividades.id','=','questoes_atividade.id_atividade')
            .join('questoes','questoes_atividade.id_questao','=','questoes.id')
            .join('opcoes_questao','questoes.id','=','opcoes_questao.id_questao')
            .join('opcoes','opcoes_questao.id_opcao','=','opcoes.id')
            .select(['atividades.atividade','questoes.titulo','questoes.descricao','opcoes.opcao','opcoes.certo']);
        }else {
            atividades = await db('atividades')
            .join('series','atividades.id_serie','series.id')
            .join('materias','atividades.id_materia','materias.id')
            .join('questoes_atividade','atividades.id','=','questoes_atividade.id_atividade')
            .join('questoes','questoes_atividade.id_questao','=','questoes.id')
            .join('opcoes_questao','questoes.id','=','opcoes_questao.id_questao')
            .join('opcoes','opcoes_questao.id_opcao','=','opcoes.id')
            .select(['atividades.atividade','questoes.titulo','questoes.descricao','opcoes.opcao','opcoes.certo']);
        }
        return response.json(atividades)
    }

    async create(request:Request, response:Response){
        const {
            atividade,
            serie,
            materia
        } = request.body;
        const trx = await db.transaction();
        try{
            await trx('atividades').insert({
                atividade,
                serie,
                materia
            });

            await trx.commit();

            return response.status(201).send({
                Message:"Atividade cadastrada com Sucesso"
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
            atividade,
            serie,
            materia
        } = request.body;
        const trx = await db.transaction();
        try{
           await trx('atividades')
            .where({id: id})
            .update({
                atividade: atividade,
                serie: serie,
                materia: materia
            });

            await trx.commit();

            return response.status(201).send({
                Message:"Atividade Atualizada com sucesso"
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
           await trx('atividades')
            .where({id: id})
            .del();

            await trx.commit();

            return response.status(201).send({
                Message:"Atividade Removida com sucesso"
            });

        }catch(error){
            await trx.rollback();
            return response.status(400).json({
                error: 'Ocorreu um erro! Tente novamente mais tarde'
            })
        }
    }

    async gravarRespostas(request:Request, response:Response){
        const {
            id_usuario,
            id_atividade,
            id_questao,
            id_opcao
        } = request.body;

        const trx = await db.transaction();

        try{
            await trx('atividade_aluno').insert({
                id_usuario,
                id_atividade,
                id_questao,
                id_opcao
            });

            await trx.commit();

             return response.status(201).send({
                 Message:"Respostas Gravadas com sucesso"
             });

         }catch(error){
             await trx.rollback();
             return response.status(400).json({
                 error: 'Ocorreu um erro! Tente novamente mais tarde'
             })
         }
    }
}