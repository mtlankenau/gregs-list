import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {InputGroup,
  InputLeftElement,
	Input,
  Icon,
	FormControl,
	Stack,
	Button} from '@chakra-ui/react';
import { EditIcon, EmailIcon, PhoneIcon, LockIcon, SearchIcon } from '@chakra-ui/icons';
  
// const formData = [
//   { name: "First name", icon: EditIcon, value: 'firstName' },
//   { name: "Last name", icon: EditIcon, value: 'lastName' },
//   { name: "Email", icon: EmailIcon, value: 'email' },
//   { name: "Phone number", icon: PhoneIcon, value: 'phoneNumber' },
//   { name: "Username", icon: SearchIcon, value: 'username' },
//   { name: "Password", icon: LockIcon, value: 'password' }
// ];

const Signup = () => {

  // const [signUp, setSignUp] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  //   username: '',
  //   password: ''
  // });

  // const [addUser, { error }] = useMutation(ADD_USER);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(name);
  //   console.log(value);
  //   setSignUp({
  //     ...signUp,
  //     [name]: value,
  //   });
  //   console.log(signUp);
  // }; 

  // const handleSignup = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...signUp }
  //     });

  //     console.log(data);

  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const [signUp, setSignUp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: ''
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setSignUp({
      ...signUp,
      [name]: value,
    });
    console.log(signUp);
  }; 

  const handleSignup = async (event) => {
    event.preventDefault();

    console.log('Hello test test');

    try {
      const { data } = await addUser({
        variables: { ...signUp }
      });

      console.log(data);
      console.log(data.addUser.token);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormControl textAlign='center'>
      <Stack spacing={3} m={3}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={EditIcon} color='gray.500' />}
          />
          <Input
            type='First name'
            placeholder='First name'
            aria-label='First name'
            name='firstName'
            value={signUp.firstName}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={EditIcon} color='gray.500' />}
          />
          <Input
            type='Last name'
            placeholder='Last name'
            aria-label='Last name'
            name='lastName'
            value={signUp.lastName}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={EmailIcon} color='gray.500' />}
          />
          <Input
            type='Email'
            placeholder='Email'
            aria-label='Email'
            name='email'
            value={signUp.email}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={PhoneIcon} color='gray.500' />}
          />
          <Input
            type='Phone number'
            placeholder='Phone number'
            aria-label='Phone number'
            name='phoneNumber'
            value={signUp.phoneNumber}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={SearchIcon} color='gray.500' />}
          />
          <Input
            type='Username'
            placeholder='Username'
            aria-label='Username'
            name='username'
            value={signUp.username}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={LockIcon} color='gray.500' />}
          />
          <Input
            type='Password'
            placeholder='Password'
            aria-label='Password'
            name='password'
            value={signUp.password}
            onChange={handleChange}
          />
        </InputGroup>

        {/* {formData.map((item) => (
          <InputGroup key={item.name}>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={item.icon} name={item.name} color='gray.500' />}
            />
            <Input
              type={item.name}
              placeholder={item.name}
              aria-label={item.name}
              name={item.value}
              onChange={handleChange}
            />
          </InputGroup>
        ))} */}
        <Button boxShadow='md' _active={{ boxShadow: 'lg' }} onClick={handleSignup}>
          Signup
        </Button>
      </Stack>
      {error && <div>Signup failed, try again!</div>}
    </FormControl>
  );
};

export default Signup;