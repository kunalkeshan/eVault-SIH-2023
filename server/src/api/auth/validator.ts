import { NextFunction, Request, Response } from 'express';
import LoggerInstance from '../../loaders/logger';
import { getProfileSchema, loginSchema, signUpSchema } from './schema';

export async function signUpValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    req.body = await signUpSchema.validate(req.body, { stripUnknown: true });
    next();
  } catch (e) {
    LoggerInstance.error(e);
    res.status(422).json({
      message: 'Validation Failed',
      error: e.errors.map(error => error),
    });
  }
}

export async function loginValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    req.body = await loginSchema.validate(req.body, { stripUnknown: true });
    next();
  } catch (e) {
    LoggerInstance.error(e);
    res.status(422).json({
      message: 'Validation Failed',
      error: e.errors.map(error => error),
    });
  }
}

export async function getProfileValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    req.body = await getProfileSchema.validate(req.headers);
    next();
  } catch (e) {
    LoggerInstance.error(e);
    res.status(422).json({
      message: 'Token Required',
      error: e.errors.map(error => error),
    });
  }
}
