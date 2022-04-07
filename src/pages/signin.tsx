import { Button, Flex, Stack } from '@chakra-ui/react';
import { FormEvent } from 'react';
import { Input } from '../components/Input';
import { setCookie } from '../utils/cookies';
import { http } from '../utils/http';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    const username = (document.querySelector('#username') as HTMLInputElement)
      .value;

    const password = (document.querySelector('#password') as HTMLInputElement)
      .value;

    const { data } = await http.post('login', {
      username,
      password,
    });

    setCookie('token', data.token);
    router.push('/private');
  }

  return (
    <Flex align="center" justify="center" w="100vw" h="100vh">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        method="post"
        onSubmit={onSubmit}
      >
        <Stack spacing="4">
          <Input name="username" type="username" label="USERNAME" />
          <Input name="password" type="password" label="PASSWORD" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          SIGNIN
        </Button>
      </Flex>
    </Flex>
  );
}
