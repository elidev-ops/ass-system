import express from 'express';
import { routes } from './routes/routes';

class App {
  public server: express.Application
  public port: number;

  constructor(appInfo: { port: number }) {
    this.port = appInfo.port;
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  listen() {
    this.server.listen(this.port, () => {
      process.stdout.write(`🚀 Server started on port ${this.port}.`);
    })
  }
}

export { App };