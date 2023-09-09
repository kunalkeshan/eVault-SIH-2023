import { Router } from 'express';
import authRouter from './auth/router';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use('/auth', authRouter);

  return app;
};
