import express from 'express';
import dotenv from 'dotenv';

import techstack from './src/apis/TechStacks';

const app: express.Application = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/src/public`));

app.use('/api', techstack);

export default app;
