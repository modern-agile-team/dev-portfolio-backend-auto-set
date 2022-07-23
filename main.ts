import express from 'express';
import 'dotenv/config';
const app = express();

const PORT = process.env.PORT || 3000;

import header from './src/apis/header';
import visitor from './src/apis/visitor';

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/header', header);
app.use('/api/visitor', visitor);

export = app;
