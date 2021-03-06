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
      Text,
      FormErrorMessage } from '@chakra-ui/react';
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
    postCategory: '',
    postTitle: '',
    postPrice: '',
    postDescription: ''
  });

  const [jobType, setJobType] = useState('');
  const [catType, setCatType] = useState ('');
  const [availableCategories, setAvailableCategories] = useState({
    cat1: 'Music Lessons',
    cat2: 'Art Lessons',
    cat3: 'Garden',
    cat4: 'Website Design'
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
      if( name === 'postType') {
        setJobType(value);
        console.log(jobType);
      }
      if (name === 'postCategory') {
        setCatType(value);
        console.log(catType);
      }
      if (value === 'Job') {
        setAvailableCategories({
          cat1: 'Music Lessons',
          cat2: 'Art Lessons',
          cat3: 'Garden',
          cat4: 'Website Design'
          });
        }
      if (value === 'Gig') {
        setAvailableCategories({
          cat1: 'Writing',
          cat2: 'Creative',
          cat3: 'Talent',
          cat4: 'Labor'
          });
        }
        if (value === 'Service') {
          setAvailableCategories({
            cat1: 'Automotive',
            cat2: 'Legal',
            cat3: 'Household',
            cat4: 'Pets'
            });
        }
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
      
      if (data) {
        return <Redirect to='/' />
      }
      // return <Redirect to='/' />
    } catch (e) {
      console.error(e);
    }
  };

        return(
          <>
          <Container minW='100%' minH='100%' isInvalid={error}>
            <Flex justify='center' align='center' width='100%'
              align="center"
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
            {/* <Text fontWeight={600}>Select Your Job/Gig Below:</Text> */}
            
            <Menu  closeOnSelect={true}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                {jobType !== '' ?
                  <Text>{jobType}</Text> : (
                  <Text>Select Type:</Text>
                )}
              </MenuButton>
              <MenuList placeholder='Select Post Type'>
                <MenuItem onClick={handleChange} name='postType' value='Job'>Job</MenuItem>
                <MenuItem onClick={handleChange} name='postType' value='Gig'>Gig</MenuItem>
                <MenuItem onClick={handleChange} name='postType' value='Service'>Service</MenuItem>
              </MenuList>
            </Menu>
            </Stack>
            <Stack direction='column'>
            {/* <Text fontWeight={600} >Select Your Category Below:</Text> */}
            <Menu closeOnSelect={true}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {catType !== '' ?
                  <Text>{catType}</Text> : (
                  <Text>Select Category:</Text>
                )}
              </MenuButton>
              <MenuList>
                {jobType === 'Job' && 
                <>
                <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat1}>{availableCategories.cat1}</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat2}>{availableCategories.cat2}</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat3}>{availableCategories.cat3}</MenuItem>
                <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat4}>{availableCategories.cat4}</MenuItem>
                </>
                }
                {jobType === 'Gig' &&
                <>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat1}>{availableCategories.cat1}</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat2}>{availableCategories.cat2}</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat3}>{availableCategories.cat3}</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat4}>{availableCategories.cat4}</MenuItem>
                </>
                }
                {jobType === 'Service' &&
                <>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat1}>{availableCategories.cat1}</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat2}>{availableCategories.cat2}</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat3}>{availableCategories.cat3}</MenuItem>
                  <MenuItem onClick={handleChange} name='postCategory' value={availableCategories.cat4}>{availableCategories.cat4}</MenuItem>
                </>
                }
                
              </MenuList>
            </Menu>
            </Stack>
          </Stack>

            <FormControl textAlign='center' minW='100%' minH='100%'>
              <Flex
                direction='column'
                align='center'
                maxH={{ xl: "1200px" }}
                >
            <Stack spacing={3} m={3} ml={250} mr={250} minW='50%' minH='100%'>
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
              <Button as={Link} href='/ 'boxShadow='md' _active={{ boxShadow: 'lg' }} _hover={{bg: 'green.200'}} onClick={handlePostSubmit} bg='blue.200' alignSelf='center' maxW='50%' minW='50%'>
                Post!
              </Button>
              {error && 
              <Stack align='center'>
                <FormErrorMessage textAlign='center' fontWeight='600' fontSize='2xl'>Post failed, please try again!</FormErrorMessage>
              </Stack>
            }
            </Stack>
            </Flex>
          </FormControl>
          </>
           
        );
}