import React from 'react'
import {InputGroup,
  InputLeftElement,
	Input,
  Icon,
	FormControl,
	Stack,
	Button} from '@chakra-ui/react';
import { EditIcon, EmailIcon, PhoneIcon, LockIcon, SearchIcon } from '@chakra-ui/icons';
  
const formData = [
  { name: "First name", icon: EditIcon },
  { name: "Last name", icon: EditIcon },
  { name: "Email", icon: EmailIcon },
  { name: "Phone number", icon: PhoneIcon },
  { name: "Username", icon: SearchIcon },
  { name: "Password", icon: LockIcon }
];

const Signup = () => {
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
            />
          </InputGroup>
        ))}
        <Button boxShadow='md' _active={{ boxShadow: 'lg' }}>
          Signup
        </Button>
      </Stack>
    </FormControl>
  );
};

export default Signup;