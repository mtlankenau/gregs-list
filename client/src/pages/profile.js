import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Profile () {

        return(
            <Container>
                <Box>
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
                                <Text fontWeight={600}>Email</Text> 
                                <Text color={'gray.500'}>555-555-5555</Text>
                            </Stack>
                        </Stack> 
                    </Box>
            </Container>
        );
}