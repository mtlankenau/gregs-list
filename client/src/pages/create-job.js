import React, { useState } from "react";
import {InputGroup,
    InputLeftElement,
      Input,
    Icon,
      FormControl,
      Stack,
      Button,
      Container,
      Text} from '@chakra-ui/react';
import {  CheckCircleIcon, PhoneIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Textarea } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";

const formData = [
    {name: "Post Title", icon: HamburgerIcon, postInfo: 'postTitle'},
    {name: "Compensation", icon: CheckCircleIcon, postInfo: 'postPrice'}
];

export default function CreateJob () {

  const [postState, setPostState] = useState({
    postType: '',
    postCategory: '',
    postTitle: '',
    postPrice: '',
    postDescription: ''
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleChange = (event) => {
      const { name, value } = event.target;
      setPostState({
        ...postState,
        [name]: value,
      });
      console.log(postState);
  };

  const handleCharacterChange = (event) => {
    if (event.target.value.length <= 280) {
      setPostState({
        ...postState,
        postDescription: event.target.value
      })
      console.log(postState);
      setCharacterCount(event.target.value.length);
    }
  };

  const handlePostSubmit = async (event) => {
    // event.preventDefault();
    console.log(postState);
    try {
      const { data } = await addPost({
        variables: { ...postState }
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

        return(
          <>
          <Stack spacing={8} justify='center' align='center' isInline>
            <Menu  closeOnSelect={true}>
              <MenuButton as={Button}>
                Select Post Type
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleChange} name='postType' value='jobs'>Jobs</MenuItem>
                <MenuItem onClick={handleChange} name='postType' value='gigs'>Gigs</MenuItem>
              </MenuList>
            </Menu>
            <Menu closeOnSelect={true}>
              <MenuButton as={Button}>
                Select Post Category
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleChange} name='postCategory' value='Music Lessons'>Music Lessons</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value='Art Lessons'>Art Lessons</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value='Garden'>Garden</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value='Website Design'>Website Design</MenuItem>
              </MenuList>
            </Menu>
          </Stack>

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
                    name={item.postInfo}
                    onChange={handleChange}
                  />
                      
                </InputGroup>
              ))}
              <Textarea placeholder='Description' name='postDescription' value={postState.postDescription} onChange={handleChange, handleCharacterChange} />
              <Text>Character Count: {characterCount}/280</Text>
              <Button boxShadow='md' _active={{ boxShadow: 'lg' }} onClick={handlePostSubmit}>
                Post!
              </Button>
            </Stack>
          </FormControl>
          </>
           
        );
}