import { Box, Container, Stack, Text, Link, Button, Heading, Wrap, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_USER } from "../utils/queries";
import Auth from '../utils/auth';

export default function Profile () {

    const { username: userParam } = useParams();
    console.log(userParam);

    const testUser = () => {
        if( Auth.loggedIn()) {
            return Auth.getProfile().data.username;
        } else {
            return '';
        }
    }

    // const [bioText, setBioText] = useState('');

    // const handleChange = (event) => {
    //     setBioText(event.target.value);
    //     console.log(bioText);
    // }

    // const handleBioSubmit = async (event) => {

    // }

    const { loading, data } = useQuery(GET_SINGLE_USER, {
        variables: {username: userParam}
    });
    const user = data?.user || {};
    console.log(user);

    if(loading) {
        return <div><p>&#x1F354</p> Loading...</div>
    }
        return(
            <>
            <Container minW='100%' minH='100%'>
                    <Stack spacing={8} justify='center' align='center' width='100%'>
                        {/* <Box w='100%' rounded='5px' overflow='hidden' boxShadow='sm' bg='gray.200' mb='5px'>
                            Image
                        </Box> */}
                        <Heading
                                as="h1"
                                size="xl"
                                fontWeight="bold"
                                color="primary.800"
                                textAlign={["center", "center", "left", "left"]}
                            >
                                {testUser() === userParam ? 
                                <Text> Welcome to your profile {user.firstName} {user.lastName}!</Text>: (
                                <Text>You are viewing {user.username}'s profile!</Text>
                             )}
                                 <Text>Username: {user.username}</Text>
                           
                        </Heading>
                        <Heading
                                as="h2"
                                size="md"
                                color="primary.800"
                                opacity="0.8"
                                fontWeight="normal"
                                lineHeight={1.5}
                                textAlign={["center", "center", "left", "left"]}
                            >
                            {testUser() === userParam ? 
                                <Text> Welcome to your profile {user.firstName} {user.lastName}!</Text>: (
                                <Text>You are viewing {user.username}'s profile!</Text>
                             )}
                        </Heading>
                        
                        <Box w='100%' rounded='5px' overflow='hidden' boxShadow='sm' bg='gray.200' mb='5px'>
                            
                        </Box>
                            
                            {/* <FormControl textAlign='center'>
                            <Stack spacing={3} m={3} ml={250} mr={250}>
                                <Textarea placeholder='Add your profile biography' name='' value='' onChange />
                                <Button boxShadow='md' _active={{ boxShadow: 'lg' }}>Submit</Button>
                            </Stack>
                            </FormControl> */}
                    </Stack>

                    {/* <Box fontWeight='bold'>
                        Your Posts:
                    </Box> */}
                    {/* {user.posts.map((post) => (
                        <Link href={`/single-job/${user.username}/${post._id}`}>
                            <Box w='100%' rounded='5px' overflow='hidden' boxShadow='sm' bg='gray.200' mb='5px' key={post._id}>
                                <Box p={4}>
                                    <Stack align='baseline'>
                                        <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>{post.postTitle}</Text>
                                    </Stack>
                                    <Text fontWeight='light' fontSize='md'>
                                        {post.postDescription}
                                    </Text>
                                </Box>
                                <Stack my={4} direction={'row'} spacing={100} align={'center'}>
                                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                        <Text color={'gray.500'}>Posted on {post.createdAt}</Text>
                                    </Stack>
                                </Stack> 
                            </Box>
                        </Link>
                    ))} */}
            </Container>

            {user.posts.length === 0 &&
                <>
                <Container minW='75%' minH='100%'>
                    <Box alignSelf='center' fontSize={30} pb={4}>{user.username} hasn't created any posts yet!</Box>
                <Button
                    as={Link} mb={5} href={`/CreateJob`}
                    borderRadius="8px"
                    p={5}
                    lineHeight="1"
                    size="md"
                    bg='blue.200'
                    _hover={{bg: 'green.200'}}
                >
                    Create a new post
                </Button>
                </Container>
                </>
                }
            <Container minW='75%' minH='100%'>
            <Accordion allowToggle rounded='5px' bg="green.200" mt='20px'>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box 
                                bg='gray.100' 
                                w='100%'
                                pt={8}
                                pb={8}
                                fontSize='2xl'
                                fontWeight='600'
                                >
                                {testUser() === userParam ?
                                    <Text>Your posts</Text>: (
                                    <Text>{userParam}'s posts</Text>
                                )}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg='blue.200'>
                        <Wrap>
                        {user.posts.map((post) => (
                            <Box
                                w='100%'
                                rounded='5px'
                                overflow='hidden'
                                boxShadow='sm'
                                bg='gray.200'
                                border='2px'
                                borderColor='gray.400'>
                                
                                <Box p={5}>
                                    <Stack isInline align='baseline'>
                                        <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>{post.postTitle}</Text>
                                    </Stack>
                                    <Text fontWeight='light' fontSize='md'>
                                        {post.postDescription}
                                    </Text>
                                    <Button as={Link} href={`/single-job/${user.username}/${post._id}`} variant='outline' bg='blue.200' _hover={{bg: 'green.200'}} size='md' mt={3} >More info</Button>
                                </Box>
                            </Box>
                        ))}
                        </Wrap>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            </Container>
            </>
        );
};