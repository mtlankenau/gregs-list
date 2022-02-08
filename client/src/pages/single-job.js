import { Container, Box, Wrap, Stack, Text, Button, Link } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST, GET_SINGLE_USER } from "../utils/queries";

export default function SingleJob () {

    const { username: username } = useParams();
    const {loading, data} = useQuery(GET_SINGLE_USER, {
        variables: {username}
    });
    const user = data?.user || {};
    console.log(user);

    const { postId: _id } = useParams();
    console.log(_id);
    const { data: postData } = useQuery(GET_SINGLE_POST, {
        variables: {_id}
    });
    const singlePost = postData?.post || {};
    console.log(singlePost);
    
    if(loading) {
        return <div><p>&#x1F354</p> Loading...</div>
    }
    
        return(
           <Container>
               <Box>
                   Job Category: {singlePost.postCategory}
               </Box>
               <Wrap>
                    <Box
                        w='100%'
                        rounded='5px'
                        overflow='hidden'
                        boxShadow='sm'
                        bg='gray.200'>
                        
                        <Box p={4}>
                            <Stack inInLine align='baseline'>
                                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>{singlePost.postTitle}</Text>
                                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>{singlePost.postPrice}</Text>
                            </Stack>
                            <Text fontWeight='light' fontSize='md'>
                                {singlePost.postDescription}
                            </Text>
                            
                        </Box>
                        <Stack my={4} direction={'row'} spacing={100} align={'center'}>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>{user.username}</Text>
                                <Text fontWeight={600}>{user.firstName}</Text>
                                <Text fontWeight={600}>{user.lastName}</Text>
                                <Text color={'gray.500'}>{singlePost.createdAt}</Text>
                            </Stack>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>{user.email}</Text> 
                                <Text color={'gray.500'}>{user.phoneNumber}</Text>
                            </Stack>
                        </Stack> 
                    </Box>
                </Wrap>
           </Container>
        );
}