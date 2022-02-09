import { Container, Box, Center, Heading, Wrap, Stack, Text, Button, Link} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SINGLE_POST, GET_SINGLE_USER } from "../utils/queries";
import { DELETE_POST } from "../utils/mutations";
import Auth from '../utils/auth';
// import Auth from '../utils/auth';
// import DeletePostButton from "../components/deletePostButton";

export default function SingleJob() {

    const { username: username } = useParams();
    const { loading, data } = useQuery(GET_SINGLE_USER, {
        variables: { username }
    });
    const user = data?.user || {};
    console.log(user);

    const { postId: _id } = useParams();
    console.log(_id);
    const { data: postData } = useQuery(GET_SINGLE_POST, {
        variables: { _id }
    });
    const singlePost = postData?.post || {};
    console.log(singlePost);
    
    const [deletePost, { error }] = useMutation(DELETE_POST);

    const handleDelete = async (event) => {
        try {
        const { data } = await deletePost({
            variables: {username: username, postId: _id}
        });
        } catch (event) {
        console.error(event);
        }
    };

    if(loading) {
        return <div><p>&#x1F354</p> Loading...</div>
    }

    return (
        <Container>
            <Box>
                Job Category: {singlePost.postCategory}
            </Box>
            <Wrap>
                <Box
                    maxW='445px'
                    w='full'
                    rounded='5px'
                    overflow='hidden'
                    boxShadow={'2xl'}
                    bg='white'
                    p={6}
                    overflow={'hidden'}>
                    <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}>

                    </Box>

                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'md'}
                            letterSpacing={1.1}>
                            ${singlePost.postPrice}
                        </Text>
                        <Heading
                            color='black'
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {singlePost.postTitle}
                        </Heading>
                        <Text color={'gray.500'}>{singlePost.postDescription}
                        </Text>
                    </Stack>

                    <Stack my={4} direction={'row'} spacing={100} align={'center'}>
                        <Stack mt={6} direction={'column'} spacing={0} align={'left'}>
                            <Text fontWeight={600}>{user.lastName}, {user.firstName} </Text>
                            {/* <Text fontWeight={600}>{user.username}</Text> */}
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>{user.email}</Text>
                                <Text color={'gray.500'}>{user.phoneNumber}</Text>
                            </Stack>
                        </Stack>
                        <Stack>
                        <Button outline={'3px'} variant='outline' size='lg' >
                            <Link href={`/profile/${user.username}`} fontSize='sm'>User: {user.username} </Link>
                        </Button>
                        {Auth.getProfile().data.username === username &&
                            <Button bg="gray.500" _hover={{bg: 'red'}} color="white"  onClick={handleDelete}>Delete Post</Button>
                        }
                        </Stack>
                    </Stack>
                </Box>
            </Wrap>
        </Container>
    );
}