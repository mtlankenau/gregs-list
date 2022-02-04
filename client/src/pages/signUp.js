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
  
const formData = [
  { name: "First name", icon: EditIcon, signUp: 'firstName' },
  { name: "Last name", icon: EditIcon, signUp: 'lastName' },
  { name: "Email", icon: EmailIcon, signUp: 'email' },
  { name: "Phone number", icon: PhoneIcon, signUp: 'phoneNumber' },
  { name: "Username", icon: SearchIcon, signUp: 'username' },
  { name: "Password", icon: LockIcon, signUp: 'password' }
];

const Signup = () => {

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
    console.log(name);
    console.log(value);
    setSignUp({
      ...signUp,
      [name]: value,
    });
    console.log(signUp);
  }; 

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...signUp }
      });

      console.log(data);

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormControl textAlign='center'>
      <Stack spacing={3} m={3} ml={350} mr={350}>
        {formData.map((item) => (
          <InputGroup key={item.name}>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={item.icon} name={item.name} color='gray.500' />}
            />
            <Input
              type={item.name}
              placeholder={item.name}
              aria-label={item.name}
              name={item.signUp}
              onChange={handleChange}
            />
          </InputGroup>
        ))}
        <Button boxShadow='md' _active={{ boxShadow: 'lg' }} onClick={handleSignup}>
          Signup
        </Button>
      </Stack>
      {error && <div>Signup failed, try again!</div>}
    </FormControl>
  );
};

export default Signup;