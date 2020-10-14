import 'reflect-metadata';

import express from 'express';
import routes from './routes/index.routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => response.json({}));

app.listen(3333, () => {
  console.log('vai que vai');
});
