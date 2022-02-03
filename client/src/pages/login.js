import React from 'react'
import {InputGroup,
  InputLeftElement,
	Input,
	FormControl,
	FormHelperText,
	Stack,
	Button} from '@chakra-ui/react';
import { SearchIcon, LockIcon } from '@chakra-ui/icons';
  
const Login = () => {
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
          />
        </InputGroup>
        <Button boxShadow='md' _active={{ boxShadow: 'lg' }}>
          <a>Login</a>
        </Button>
        <FormHelperText id='email-helper-text' textAlign='center'>
          Welcome back!
          <br />
          🏠
        </FormHelperText>
      </Stack>
    </FormControl>
  );
};

export default Login;