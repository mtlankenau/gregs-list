import { Container, Box, Wrap, Stack, Text, Button, Link } from "@chakra-ui/react";
import React from "react";

export default function singleJob () {

        return(
           <Container>
               <Box>
                   Job Category (Music Lessons)
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
                    </Box>
                </Wrap>
           </Container>
        );
}