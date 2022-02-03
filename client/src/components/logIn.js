import React from 'react'
import { Link } from 'react-router-dom';
import {InputGroup,
	InputLeftAddon,
	Icon,
	Input,
	FormControl,
	FormHelperText,
	Stack,
	Button} from '@chakra-ui/react';
  
const LogInForm = () => {
  return (
    <FormControl textAlign='center'>
      <Stack spacing={3} m={3}>
        <InputGroup>
          <InputLeftAddon children={<Icon name='email' color='gray.500' />} />
          <Input
            type='email'
            placeholder='Email'
            aria-label='Email input field'
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<Icon name='lock' color='gray.500' />} />
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
}

export default LogInForm;