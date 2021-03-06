import React from "react";
import {Container, Box, Wrap, Stack, Text, Link, Button, Center} from "@chakra-ui/react";
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
               <Wrap py={5}>
                    <Box fontSize='2xl' bg='green.200' borderRadius={10} p={4} border='2px' borderColor='gray.400'>Category: {postCategory}</Box>
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
                        href={`/single-job/${post.username}/${post._id}`}
                        border='2px'
                        borderColor='gray.400'>
                        
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
                {posts.length === 0 &&
                        <>
                       <Box alignSelf='center' fontSize={30} pb={4}>No posts have been made for the {postCategory} category yet!</Box>
                       <Button as={Link} mb={5} href={`/CreateJob`}>CLICK HERE TO CREATE A POST!</Button>
                       </>
                   }
           </Container>
        );
}