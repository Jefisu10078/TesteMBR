import express from 'express';
import AtividadesController from './controllers/AtividadesController';
import MateriasController from './controllers/MateriasController';
import QuestoesController from './controllers/QuestoesController';
import SeriesController from './controllers/SeriesController';
import UsuariosController from './controllers/UsuariosController';

const routes = express.Router();
const atividades = new AtividadesController();
const materias = new MateriasController();
const questoes = new QuestoesController();
const series = new SeriesController();
const usuarios = new UsuariosController();

routes.get('/atividades', atividades.index);
routes.post('/atividades', atividades.create);
routes.post('/gravarRespostas', atividades.gravarRespostas);
routes.put('/atividades/:id', atividades.update);
routes.delete('/atividades/:id', atividades.delete);

routes.get('/materias', materias.index);
routes.post('/materias', materias.create);
routes.put('/materias/:id', materias.update);
routes.delete('/materias/:id', materias.delete);

routes.get('/questoes', questoes.index);
routes.post('/questoes', questoes.create);
routes.put('/questoes/:id', questoes.update);
routes.delete('/questoes/:id', questoes.delete);

routes.get('/series', series.index);
routes.post('/series', series.create);
routes.put('/series/:id', series.update);
routes.delete('/series/:id', series.delete);

routes.get('/usuarios', usuarios.index);
routes.get('/notas', usuarios.notas);
routes.post('/usuarios', usuarios.create);
routes.put('/usuarios/:id', usuarios.update);
routes.delete('/usuarios/:id', usuarios.delete);



export default routes;