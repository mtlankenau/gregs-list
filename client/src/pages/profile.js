import { Box, Container, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_USER } from "../utils/queries";


export default function Profile () {

    const { username: userParam } = useParams();
    console.log(userParam);
    const { loading, data } = useQuery(GET_SINGLE_USER, {
        variables: {username: userParam}
    });
    const user = data?.user || {};
    console.log(user);

    if(loading) {
        return <div><p>&#x1F354</p> Loading...</div>
    }

        return(
            <Container>
                <Box fontWeight='bold'>
                    Your Posts:
                </Box>
                {user.posts.map((post) => (
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
                ))}
                {/* <Box>
                    <Box fontWeight='bold'>
                    {user.firstName} {user.lastName}
                    </Box>
                    <Box>
                        {user.username}
                    </Box>
                </Box>
                <Box>

                </Box>
                <Box fontWeight='bold'>
                    Available Jobs
                </Box>
                <Box
                        w='100%'
                        rounded='5px'
                        overflow='hidden'
                        boxShadow='sm'
                        bg='gray.200'>
                        
                        <Box p={4}>
                            <Stack inInLine align='baseline'>
                                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Piano</Text>
                            </Stack>
                            <Text fontWeight='light' fontSize='md'>
                                Discription of job, whatever mumbo jumbo you want to have here.
                            </Text>
                            
                        </Box>
                        <Stack my={4} direction={'row'} spacing={100} align={'center'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Username</Text>
                                <Text fontWeight={600}>First Last</Text>
                                <Text color={'gray.500'}>Feb 05, 2022</Text>
                            </Stack>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Email: {user.email}</Text> 
                                <Text color={'gray.500'}>Phone: {user.phoneNumber}</Text>
                            </Stack>
                        </Stack> 
                    </Box> */}
                {/* <Box>
                    <Box fontWeight='bold'>
                        FirstName LastName
                    </Box>
                    <Box>
                        Username
                    </Box>
                </Box>
                <Box>

                </Box>
                <Box fontWeight='bold'>
                    Available Jobs
                </Box>
                <Box
                        w='100%'
                        rounded='5px'
                        overflow='hidden'
                        boxShadow='sm'
                        bg='gray.200'>
                        
                        <Box p={4}>
                            <Stack isInline align='baseline'>
                                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Piano</Text>
                            </Stack>
                            <Text fontWeight='light' fontSize='md'>
                                Discription of job, whatever mumbo jumbo you want to have here.
                            </Text>
                            
                        </Box>
                        <Stack my={4} direction={'row'} spacing={100} align={'center'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Username</Text>
                                <Text fontWeight={600}>First Last</Text>
                                <Text color={'gray.500'}>Feb 05, 2022</Text>
                            </Stack>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Email</Text> 
                                <Text color={'gray.500'}>555-555-5555</Text>
                            </Stack>
                        </Stack> 
                    </Box> */}
            </Container>
        );
}