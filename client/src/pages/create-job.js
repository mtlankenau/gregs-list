import React from "react";
import {InputGroup,
    InputLeftElement,
      Input,
    Icon,
      FormControl,
      Stack,
      Button} from '@chakra-ui/react';
import {  CheckCircleIcon, PhoneIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Textarea } from '@chakra-ui/react'

const formData = [
    {name: "Post Tile", icon: HamburgerIcon},
    {name: "Compensation", icon: CheckCircleIcon},
    // {name: "Description", icon: EditIcon},
    {name: "Contact", icon: PhoneIcon },
];


export default function createJob () {

        return(
            <FormControl textAlign='center'>
            <Stack spacing={3} m={3} ml={250} mr={250}>
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
              <Textarea placeholder='Description' />
              <Button boxShadow='md' _active={{ boxShadow: 'lg' }}>
                Post!
              </Button>
            </Stack>
          </FormControl>
      
           
        );
}