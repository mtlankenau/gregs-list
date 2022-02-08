import React from "react";
import {Container, Box, Wrap, Stack, Text, Link, Button, } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import {GET_POST_BY_CATEGORY} from '../utils/queries';
import {useQuery} from '@apollo/client';



export default function JobCat() {

    const {category: postCategory} = useParams();
    console.log(postCategory)
    const {loading, data} = useQuery(GET_POST_BY_CATEGORY, {
        variables: {postCategory}
    });
    const posts = data?.postByCat || [];
    console.log(posts);

    if(loading) {
        return <div><p>#x1F354</p> Loading...</div>
    }
        return(
            <Container minW='100%' minH='100%'>
               <Box>
                   {/* {posts.postByCat.postTitle} Category: {postCategory} */}
               </Box>
               <Wrap>
                   {posts.map((post) => (
                    <Box
                        w='100%'
                        rounded='5px'
                        overflow='hidden'
                        boxShadow='sm'
                        bg='gray.200'
                        key={post._id}
                        as={Link}
                        href={`/single-job/${post.username}/${post._id}`}>
                        
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
                                <Text fontWeight={600}>{post.username}</Text>
                                <Text fontWeight={600}>{post.postPrice}</Text>
                                <Text color={'gray.500'}>{post.createdAt}</Text>
                            </Stack>
                            {/* <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Email</Text> 
                                <Text color={'gray.500'}>555-555-5555</Text>
                            </Stack> */}
                        </Stack>
                    </Box>
                   ))}
                    {/* <Box
                        w='100%'
                        rounded='5px'
                        overflow='hidden'
                        boxShadow='sm'
                        bg='gray.200'>
                        
                        <Box p={4}>
                            <Stack align='baseline'>
                                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Music Lessons</Text>
                            </Stack>
                            <Text fontWeight='light' fontSize='md'>
                                Local music lessons from the people within your community. Video lessons are also available!
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
                </Wrap>
           </Container>
        );
}