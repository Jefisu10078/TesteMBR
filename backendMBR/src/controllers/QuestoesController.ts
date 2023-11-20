import { Request, Response} from 'express';
import db from '../database/connections';

export default class QuestoesController
{
    async index(request:Request, response:Response){

        const questoes = await db('questoes').select('*');
        return response.json(questoes);
    }

    async create(request:Request, response:Response){
        const {
            id_atividade,
            titulo,
            descricao,
            opcoes
        } = request.body;
        const trx = await db.transaction();
        try{

            const idInsertedQuestao = await trx('questoes').insert({
                titulo,
                descricao
            });

            await trx('questoes_atividade').insert({
                id_atividade,
                id_questao: idInsertedQuestao[0]
            });

            const opcoesInsert = opcoes.map(op => ({
                opcao: op.opcao,
                certo: op.certo
            }));

            const opcoesIds = await trx('opcoes').insert(opcoesInsert).returning('id').then((ids) => { return ids });

            const opQuest = opcoesIds.map(ops=>({
                id_questao: idInsertedQuestao[0],
                id_opcao: ops
            }));

            await trx('opcoes_questao').insert(opQuest);

            await trx.commit();

            return response.status(201).send({
                Message:"Questão cadastrada com Sucesso"
            });

        }catch(error){
            await trx.rollback();
            return response.status(400).json({
                error: 'Ocorreu um erro! Tente novamente mais tarde'
            })
        }
    }

    async update(request:Request, response:Response){

    }

    async delete(request:Request, response:Response){

    }
}