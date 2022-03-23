import express from 'express';
import dotenv from 'dotenv';

const app: express.Application = express();

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.static(`${__dirname}/src/public`));

app.listen(PORT, () => console.log(`opened Express server on ${PORT}`));
