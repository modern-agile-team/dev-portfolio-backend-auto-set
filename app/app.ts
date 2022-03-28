import express from 'express';
import dotenv from 'dotenv';

import teckstack from './src/apis/TeckStacks';

const app: express.Application = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/src/public`));

app.use('/api', teckstack);

export default app;
