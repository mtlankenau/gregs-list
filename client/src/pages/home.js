import React from "react";
import { Container, Box, Flex, Spacer, Wrap, Text, Stack, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const Home = ()=> {

        return(
            <Container maxW='90%'>
                {/* Image and title for Greg's List will go here */}
                <Box 
                    w='400px'
                    bg='grey'
                    rounded='5px' 
                    boxShadow='sm' 
                    w='100%'
                    p={4} 
                    color='black'>This is the box that has a picture and G R E G ' S   L I S T
                </Box>


                {/* JOBS SECTION */}
                <Accordion allowToggle>
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