import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from './cookies';

export const http = axios.create({
	baseURL: 'http://localhost:5050',
});

http.interceptors.request.use((request: AxiosRequestConfig) => {
	if (!process.browser) {
		return request;
	}

	const token = getCookie('token');

	if (token) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		request.headers['Authorization'] = `Bearer ${token}`;
	}

	return request;
});
