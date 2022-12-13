import cors from 'cors';
import express from 'express';

const createServer = () => {
  const app = express();
  app.use(cors());
  app.get('/', (req, res) => res.status(200).send('Test ci 2 Tout est OK'));
  app.use('*', (req, res) => res.status(404).send('Retour arrière frérot'));
  return app;
};

export default createServer;
