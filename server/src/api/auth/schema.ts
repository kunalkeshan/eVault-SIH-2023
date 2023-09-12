import * as yup from 'yup';

const signUp = {
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
};

const login = {
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
};

const getProfile = {
  authorization: yup.string().required(),
};

export const signUpSchema = new yup.ObjectSchema(signUp);
export const loginSchema = new yup.ObjectSchema(login);
export const getProfileSchema = new yup.ObjectSchema(getProfile);
