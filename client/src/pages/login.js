import React, { useState } from 'react'
import {InputGroup,
  InputLeftElement,
	Input,
	FormControl,
	FormHelperText,
	Stack,
	Button,
  FormErrorMessage,
  Flex
} from '@chakra-ui/react';
import { SearchIcon, LockIcon } from '@chakra-ui/icons';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
  
const Login = () => {

  const [loginState, setLoginState] = useState({ username: '', password: ''});
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log(loginState);

    try {
      const { data } = await login({
        variables: { ...loginState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    };
  }

  // function errorMessageExample() {
  //   const [input, setInput] = useState('')
  //   const handleInputChange = (e) => setInput(e.target.value)
  //   const isError = input === ''
  //   return (
  //     <FormControl isInvalid={isError}>
  //       <FormLabel htmlFor='email'>Email</FormLabel>
  //       <Input
  //         id='email'
  //         type='email'
  //         value={input}
  //         onChange={handleInputChange}
  //       />
  //       {!isError ? (
  //         <FormHelperText>
  //           Enter the email you'd like to receive the newsletter on.
  //         </FormHelperText>
  //       ) : (
  //         <FormErrorMessage>Email is required.</FormErrorMessage>
  //       )}
  //     </FormControl>
  //   )
  // }

  return (
    <FormControl textAlign='center' isInvalid={error} minW='100%' minH='100%'>
      <Flex
        direction='column'
        align='center'
        maxH={{ xl: "1200px" }}
        >
      <Stack spacing={3} m={3} minW='50%' minH='100%'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon name='username' color='gray.500' />} />
          <Input
            type='username'
            placeholder='Username'
            aria-label='Username input field'
            name='username'
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<LockIcon name='lock' color='gray.500' />} />
          <Input
            type='password'
            placeholder='Password'
            aria-label='Password input field'
            name='password'
            onChange={handleChange}
          />
        </InputGroup>
        <Button bg='blue.200' boxShadow='md' _active={{ boxShadow: 'lg' }} _hover={{bg: 'green.200'}} maxW='50%' minW='50%' alignSelf='center' onClick={handleLoginSubmit}>
          Login
        </Button>
        <FormHelperText id='email-helper-text' textAlign='center' fontSize='lg' pt={5}>
          Welcome back!
          <br />
          🏠
        </FormHelperText>
        {error &&
          <Stack align='center'>
            <FormErrorMessage textAlign='center' fontWeight='600' fontSize='2xl'>Invalid credentials - login failed! Please try again</FormErrorMessage>
          </Stack>
        }
      </Stack>
      </Flex>
    </FormControl>
  );
};

export default Login;