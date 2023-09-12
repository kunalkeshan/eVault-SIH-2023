import axios from 'axios';
const isProduction = process.env.NODE_ENV === 'production';

const api = axios.create({
	baseURL: isProduction ? '' : 'http://localhost:5050',
});

export const signUpUser = async (data: User) => {
	const response = await api.post('/api/auth/signUp', data);
	return response.data;
};

export const loginUser = async (data: Pick<User, 'email' | 'password'>) => {
	const response = await api.post('/api/auth/login', data);
	return response.data;
};
