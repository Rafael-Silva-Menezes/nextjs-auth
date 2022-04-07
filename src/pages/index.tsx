import { NextPage } from 'next';
import { useAuthHttp } from '../hooks/useAuthHttp';

const Home: NextPage = () => {
	const { data: user } = useAuthHttp('user');
	return user ? <div>Hello Wolrd</div> : null;
};

export default Home;
