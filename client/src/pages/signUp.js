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
    let { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setSignUp({
      ...signUp,
      [name]: value,
    });
    // if (name === 'phoneNumber') {
    //   setSignUp({
    //     ...signUp,
    //     phoneNumber: formatPhoneNumber(value)
    //   });
    //   console.log(signUp.phoneNumber);
    //   value = signUp.phoneNumber;
    // }
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

  // function formatPhoneNumber(phoneNumberString) {
  //   var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  //   var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  //   if (match) {
  //     var intlCode = (match[1] ? '+1 ' : '');
  //     return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  //   }
  //   return null;
  // };

  // function formatPhoneNumber(value) {
  //   if (!value) return value;
  //   const phoneNumber = value.replace(/[^\d]/g, '');
  //   const phoneNumberLength = phoneNumber.length;
  //   if (phoneNumberLength < 4) return phoneNumber;
  //   if (phoneNumberLength < 7) {
  //     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  //   }
  //   return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
  //     3,
  //     6
  //   )}-${phoneNumber.slice(6, 9)}`;
  // }

  // function phoneNumberFormatter() {
  //   const inputField = document.getElementById('phone-number');
  //   const formattedInputValue = formatPhoneNumber(inputField.value);
  //   inputField.value = formattedInputValue;
  // }

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
        <Button boxShadow='md' _active={{ boxShadow: 'lg' }} onClick={handleSignup} >
          Signup
        </Button>
      </Stack>
      {error && <div>Signup failed, try again!</div>}
    </FormControl>
  );
};

export default Signup;