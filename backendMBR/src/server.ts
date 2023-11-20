import express from 'express';
import cors from 'cors';
import routes from './route';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(4000, 'localhost', () => {
    console.log('PORT: 4000')
    console.log('Backend executando...')
})