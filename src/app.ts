import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const createServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
    }),
  );
  app.use(
    helmet.dnsPrefetchControl({
      allow: true,
    }),
  );
  app.use(helmet.hidePoweredBy());
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
  app.use(helmet({ crossOriginEmbedderPolicy: false }));
  app.get('/', (req, res) => res.send('OK'));
  app.use('*', (req, res) => res.status(404).send('NOT FOUND'));
  return app;
};

export default createServer;
