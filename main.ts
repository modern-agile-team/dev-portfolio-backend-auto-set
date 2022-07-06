import express from 'express';
import 'dotenv/config';
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export = app;
