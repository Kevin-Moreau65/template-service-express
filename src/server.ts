import dotenv from 'dotenv';
import createServer from './app';
dotenv.config();
const startServer = () => {
  const app = createServer();
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Le serveur est OK sur le port ${process.env.SERVER_PORT}`);
  });
};
startServer();
