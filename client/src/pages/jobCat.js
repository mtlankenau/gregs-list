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
            <Container minW='100%' minH='100%' bg='blue.200'>
               <Box>
                   {/* {posts.postByCat.postTitle} Category: {postCategory} */}
               </Box>
               <Wrap>
                   {posts.length === 0 &&
                       <Box>No posts have been made for this category yet!</Box>
                   }
                   {posts.map((post) => (
                    <Box
                        w='100%'
                        rounded='5px'
                        overflow='hidden'
                        boxShadow={'2x1'}
                        bg='gray.200'
                        p={6}
                        key={post._id}
                        as={Link}
                        href={`/single-job/${post.username}/${post._id}`}>
                        
                        <Box p={4}>
                            <Stack align='baseline'>
                                <Text 
                                // color={'green.500'}
                                as='h2' 
                                fontWeight={700} 
                                fontSize={'xl'} 
                                my={2}>
                                    {post.postTitle}
                                </Text>
                            </Stack>
                            <Text 
                                // fontWeight={600} 
                                fontSize={'2x1'}>
                                {post.postDescription}
                            </Text>
                            
                        </Box>
                        <Stack my={2} direction={'row'} spacing={100} align={'center'}>
                            <Stack  direction={'column'} spacing={0} fontSize={'sm'} ml={4} >
                                <Text fontWeight={700} color="green.500">${post.postPrice}</Text>
                            </Stack>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'} >
                                <Text fontWeight={600}>Posted by: {post.username}</Text>
                                <Text color={'gray.500'}> @ {post.createdAt}</Text>
                                </Stack>
                        </Stack>
                    </Box>
                   ))}
                </Wrap>
           </Container>
        );
}