import React, { useState } from "react";
import {InputGroup,
    InputLeftElement,
      Input,
    Icon,
      FormControl,
      Stack,
      Button,
      Image,
      Container,
      Flex,
      Box,
      Link,
      Text} from '@chakra-ui/react';
import {  CheckCircleIcon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Textarea } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { Redirect } from "react-router-dom";

const formData = [
    {name: "Post Title", icon: HamburgerIcon, postInfo: 'postTitle'},
    {name: "Compensation", icon: CheckCircleIcon, postInfo: 'postPrice'}
];

export default function CreateJob () {

  const [postState, setPostState] = useState({
    postType: '',
    postCategory: 'Music Lessons',
    postTitle: '',
    postPrice: '',
    postDescription: ''
  });

  const [jobType, setJobType] = useState('Jobs');
  // const [availableCategories, setAvailableCategories] = useState({})

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleChange = (event) => {
      const { name, value } = event.target;
      setPostState({
        ...postState,
        [name]: value,
      });
      console.log(postState);
      if( name === 'postType') {
        setJobType(value);
      }
      console.log(jobType);
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
      
        return <Redirect to='/' />
    } catch (e) {
      console.error(e);
    }
  };

        return(
          <>
          <Container minW='100%' minH='100%'>
            <Flex justify='center' align='center' width='100%'
              align="center"
              // justify={{ base: "center", md: "space-around", xl: "space-between" }}
              // direction={{ base: "column-reverse", md: "row" }}
              // wrap="no-wrap"
              // minH="60vh"
              px={70}
              mb={3}>
              <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Image
                  src={require("../assets/images/createJob.png")}
                  size="300%" rounded="1rem" 
                />
              </Box>
            </Flex>
          </Container> 
          <Stack spacing={8} justify='center' align='center' isInline>
            <Stack direction={'column'}>
            <Text fontWeight={600}>Select Your Job/Gig Below:</Text>
            
            <Menu  closeOnSelect={true}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                {jobType}
              </MenuButton>
              <MenuList placeholder='Select Post Type'>
                <MenuItem onClick={handleChange} name='postType' value='Jobs'>Jobs</MenuItem>
                <MenuItem onClick={handleChange} name='postType' value='Gigs'>Gigs</MenuItem>
              </MenuList>
            </Menu>
            </Stack>
            <Stack direction='column'>
            <Text fontWeight={600} >Select Your Category Below:</Text>
            <Menu closeOnSelect={true}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {postState.postCategory}
              </MenuButton>
              <MenuList>
                {jobType === 'Jobs' && 
                <>
                <MenuItem onClick={handleChange} name='postCategory' value='Music Lessons'>Music Lessons</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value='Art Lessons'>Art Lessons</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value='Garden'>Garden</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value='Website Design'>Website Design</MenuItem>
                </>
                }
                {jobType === 'Gigs' &&
                <>
                  <MenuItem onClick={handleChange} name='postCategory' value='Writing'>Writing</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value='Creative'>Creative</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value='Talent'>Talent</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value='Labor'>Labor</MenuItem>
                </>
                }
                
              </MenuList>
            </Menu>
            </Stack>
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
              <Button as={Link} href='/ 'boxShadow='md' _active={{ boxShadow: 'lg' }} onClick={handlePostSubmit}>
                Post!
              </Button>
            </Stack>
          </FormControl>
          </>
           
        );
}