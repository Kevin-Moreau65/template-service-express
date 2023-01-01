import cors from 'cors';
import express from 'express';

const createServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.get('/', (req, res) => res.status(200).send('OK'));
  app.use('*', (req, res) => res.status(404).send('NOT FOUND'));
  return app;
};

export default createServer;
