import express from 'express';
import { router } from './router/routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () =>
	console.log('servido rodando na porta 3000 http://localhost:3000')
);
