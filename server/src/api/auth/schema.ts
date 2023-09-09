import * as yup from 'yup';

const signUp = {
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
};

export const signUpSchema = new yup.ObjectSchema(signUp);
