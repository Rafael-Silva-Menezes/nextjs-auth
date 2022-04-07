import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { http } from '../utils/http';

const fetcher = (url: string) => http.get(url).then((res) => res.data);

export function useAuthHttp(url: string) {
	const { data, error } = useSWR(url, fetcher);

	useEffect(() => {
		if (error?.response?.status === 401) {
			Router.push('/signin');
		}
	}, [error]);

	return { data, error };
}
