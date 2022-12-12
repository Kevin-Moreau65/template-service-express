import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.get('/', (req, res) => res.status(200).send('Test ci 2 Tout est OK'));
app.use('*', (req, res) => res.status(404).send('Retour arrière frérot'));
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Le serveur est OK sur le port ${process.env.SERVER_PORT}`);
});
