import { Router, Request, Response } from 'express';
import LoggerInstance from '../../loaders/logger';
import { createUser, getProfile, loginUser } from './controller';
import { getProfileValidator, loginValidator, signUpValidator } from './validator';
const authRouter = Router();

async function handleSignUp(req: Request, res: Response) {
  try {
    console.log(req.body);
    const result = await createUser(req.body);
    // console.log('harsh', result);
    if (result.bool) {
      res.status(201).json({
        message: 'Success',
      });
    } else {
      //   console.log('here');
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

async function handleLogin(req: Request, res: Response) {
  try {
    const result = await loginUser(req.body.email, req.body.password);
    res.status(result.status).json({
      message: result.message,
      accessToken: result.accessToken ?? '',
      refreshToken: result.refreshToken ?? '',
    });
  } catch (e) {
    LoggerInstance.error(e);
    res.status(e.status || 500).json({
      message: e.message || 'Request Failed',
    });
  }
}

async function handleGetProfile(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    LoggerInstance.info(token);
    const user = await getProfile(token.substring(7, token.length));
    res.status(200).json({
      message: 'Success',
      data: user,
    });
  } catch (e) {
    LoggerInstance.error(e);
    res.status(e.status || 500).json({
      message: e.message || 'Request Failed',
    });
  }
}

authRouter.post('/signUp', signUpValidator, handleSignUp);
authRouter.post('/login', loginValidator, handleLogin);
authRouter.get('/getProfile', getProfileValidator, handleGetProfile);

export default authRouter;
