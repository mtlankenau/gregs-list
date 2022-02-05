import React from "react";
import { Container, Box, Link, Flex, Spacer, Wrap, Text, Stack, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import ButtonAnimated from "../components/buttonAnimated";
import CreateJob from "./create-job";

const Home = ()=> {

        return(
            <Container minW='100%' minH='100%'>
                {/* Image and title for Greg's List will go here */}
                <Box 
                    h='200px'
                    bg='green.200'
                    rounded='5px' 
                    boxShadow='sm' 
                    w='100%'
                    p={8} 
                    color='black' align='center'>This is the box that has a picture and G R E G ' S   L I S T
                </Box> 

                {/* CREATE JOB BUTTON AND OPTION FOR LOGGEDIN USERS */}
                <Box rounded='5px' h='100px' w='100%'>
                    <Stack >
                        <Box align='center'>Interested in posting a job or gig? Create a post and contribute to the Greg's List communmity!</Box>
                        <Button as={Link} href='/createJob'>Post job</Button>
                    </Stack>
                </Box>
                {/* JOBS SECTION */}
                <Accordion allowToggle rounded='5px' >
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box 
                                    bg='white' 
                                    w='100%'
                                    pt={8}
                                    pb={8}
                                    >Jobs
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Wrap>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Music Lessons</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Local music lessons from the people within your community. Video lessons are also available!
                                        </Text>
                                        <Button as={Link} href='/jobCat' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Art Lessons</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Local art lessons from the people within your community. Video lessons are also available!
                                        </Text>
                                        <Button variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Garden</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Let's grow a garden together bro. Idk.
                                        </Text>
                                        <Button variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Website Design</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Couldn't tell you a thing about this one.
                                        </Text>
                                        <Button variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                            </Wrap>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                {/* GIGS SECTION */}
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box 
                                    bg='white' 
                                    w='100%'
                                    pt={8}
                                    pb={8} 
                                    >Gigs
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Wrap>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Music Lessons</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Local music lessons from the people within your community. Video lessons are also available!
                                        </Text>
                                        <Button variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Art Lessons</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Local art lessons from the people within your community. Video lessons are also available!
                                        </Text>
                                        <Button variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Garden</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Let's grow a garden together bro. Idk.
                                        </Text>
                                        <Button variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack inInLine align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Website Design</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Couldn't tell you a thing about this one.
                                        </Text>
                                        <Button variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                            </Wrap>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        );
};

export default Home;