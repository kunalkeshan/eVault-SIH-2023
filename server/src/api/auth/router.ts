import { Router, Request, Response } from 'express';
import LoggerInstance from '../../loaders/logger';
import { createUser } from './controller';
import { signUpValidator } from './validator';
const authRouter = Router();

async function handleSignUp(req: Request, res: Response) {
  try {
    console.log(req.body);
    const result: any = await createUser(req.body);
    if (result.bool) {
      res.status(201).json({
        message: 'Success',
      });
    } else {
      throw {
        status: 400,
        message: result.message,
      };
    }
  } catch (e) {
    LoggerInstance.error(e);
    res.status(e.status || 500).json({
      message: e.message || 'Request Failed',
    });
  }
}

authRouter.post('/signUp', signUpValidator, handleSignUp);

export default authRouter;
