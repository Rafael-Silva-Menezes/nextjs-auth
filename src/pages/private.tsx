import { Flex } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { withAuth } from '../hof/withAuth';
import { http } from '../utils/http';

interface PrivatePageProps {
	name: string;
	payload: any;
}

const PrivatePage: NextPage<PrivatePageProps> = (props) => {
	console.log(props.payload);
	return (
		<Flex w="100vw" h="100vh" justify="center" align="center" fontSize="30">
			Private Page - {props.name}
		</Flex>
	);
};

export const getServerSideProps: GetServerSideProps = withAuth(
	async (ctx: any, cookies: any) => {
		const { data } = await http.get('test-auth', {
			headers: {
				Authorization: `Bearer ${cookies.token}`,
			},
		});

		return {
			props: data,
		};
	}
);

export default PrivatePage;
