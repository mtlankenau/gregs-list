import React, { useState } from 'react'
import {InputGroup,
  InputLeftElement,
	Input,
	FormControl,
	FormHelperText,
	Stack,
	Button} from '@chakra-ui/react';
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

  return (
    <FormControl textAlign='center'>
      <Stack spacing={3} m={3}>
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
        <Button boxShadow='md' _active={{ boxShadow: 'lg' }} onClick={handleLoginSubmit}>
          Login
        </Button>
        <FormHelperText id='email-helper-text' textAlign='center'>
          Welcome back!
          <br />
          🏠
        </FormHelperText>
        {error && <div>Login failed, please try again!</div>}
      </Stack>
    </FormControl>
  );
};

export default Login;