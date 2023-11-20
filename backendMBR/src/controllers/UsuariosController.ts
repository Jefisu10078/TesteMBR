import { Request, Response} from 'express';
import db from '../database/connections';

export default class UsuariosController
{
    async index(request:Request, response:Response){
        const filters = request.query;
        const nome = filters.nome as string | null;

        let usuarios;
        if(nome){
            usuarios = await db('usuarios')
            .where('usuarios.nome','=',nome)
            .select(['usuarios.*']);
        } else {
            usuarios = await db('usuarios')
            .select(['usuarios.*']);
        }
        return response.json(usuarios)
    }

    async notas(request:Request, response:Response){
        const filters = request.query;
        const nome = filters.nome as string | null;

        let notas;

        notas = await db('usuarios')
            .where('usuarios.nome','=',nome)
            .join('atividade_aluno','usuarios.id','=','atividade_aluno.id_usuario')
            .join('atividades','atividade_aluno.id_atividade','=','atividades.id')
            .join('series','atividades.id_serie','=','series.id')
            .join('materias','atividades.id_materia','=','materias.id')
            .join('questoes_atividade','atividades.id','=','questoes_atividade.id_atividade')
            .join('questoes','questoes_atividade.id_questao','=','questoes.id')
            .join('opcoes_questao','questoes.id','=','opcoes_questao.id_opcao')
            .join('opcoes','opcoes_questao.id_opcao','=','opcoes.id')
            .select(['usuarios.nome', 'materias.materia', 'series.serie', 'atividades.atividade', 'questoes.titulo', 'opcoes.opcao', 'opcoes.certo']);

        return response.json(notas)
    }

    async create(request:Request, response:Response){
        const {
            nome,
            ra
        } = request.body;
        const trx = await db.transaction();
        try{
            
            let id = await trx('usuarios').insert({
                nome,
                ra
            });

            await trx.commit();

            return response.status(201).send({
                data:id,
                Message:"Usuário Cadastrado com sucesso"
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
            nome,
            ra
        } = request.body;
        const trx = await db.transaction();
        try{
           await trx('usuarios')
            .where({id: id})
            .update({
                nome: nome,
                ra: ra
            });

            await trx.commit();

            return response.status(201).send({
                Message:"Usuário Atualizado com sucesso"
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
           await trx('usuarios')
            .where({id: id})
            .del();

            await trx.commit();

            return response.status(201).send({
                Message:"Usuário Removido com sucesso"
            });

        }catch(error){
            await trx.rollback();
            return response.status(400).json({
                error: 'Ocorreu um erro! Tente novamente mais tarde'
            })
        }
    }
}