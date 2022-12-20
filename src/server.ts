import createServer from './app';
import helmet from 'helmet';
const startServer = () => {
  const app = createServer();
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
  app.listen(process.env.SERVER_PORT || 8080, () => {
    console.log(
      `Le serveur est OK sur le port ${process.env.SERVER_PORT || 8080}`,
    );
  });
};
startServer();
