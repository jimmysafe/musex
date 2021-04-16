import axios from 'axios';
import type { NewUser } from '../types/NewUser';
const { API_URL } = process.env;

export const userRegister = async (user: NewUser) => {
	const {
		email,
		username,
		firstName,
		lastName,
		thirdName,
		birthDate,
		password,
		cellphone,
		language,
	} = user;

	const { data } = await axios.post(`${API_URL}/public/signup`, {
		email,
		username,
		firstName,
		lastName,
		thirdName,
		birthDate,
		password,
		cellphone,
		language,
	});
	return data;
};

export const userLogin = async (email: string, password: string) => {
	const { data } = await axios.post(`${API_URL}/public/signin`, {
		usernameOrEmail: email,
		password,
	});
	return data;
};
