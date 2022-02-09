import React from "react";
import { Container, Box, Link, Flex, Spacer, Wrap, Text, Stack, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Image, useBreakpointValue } from '@chakra-ui/react'
import ButtonAnimated from "../components/buttonAnimated";
import CreateJob from "./create-job";
import Auth from "../utils/auth";

const Home = ()=> {

        return(
            <Container minW='100%' minH='100%' >
                <Box 
                    h='200px'
                    // bg='pink.50'
                    rounded='5px' 
                    // boxShadow='sm' 
                    w='100%'
                    p={8} 
                    color='black' align='center'>
                        <Image 
                            height='auto'
                            width='auto'
                            src={require("../assets/images/logo.png")} 
                            alt='Logo'/>
                </Box> 

                {/* CREATE JOB BUTTON AND OPTION FOR LOGGEDIN USERS */}
                {Auth.loggedIn() &&
                    <Box rounded='5px' h='100px' w='100%' justifyContent='center'>
                        <Stack align='center' w='100%' justifyContent='center'>
                            <Button as={Link} href='/createJob' bg='gray.200' _hover={{bg:'green.300'}}>Post job - Click Here</Button>
                        </Stack>
                    </Box>
                }
                {/* JOBS SECTION */}
                <Accordion allowToggle rounded='5px'>
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
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Music Lessons</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Local music lessons from the people within your community. Video lessons are also available!
                                        </Text>
                                        <Button as={Link} href='/jobCat/Music Lessons' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Art Lessons</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Local art lessons from the people within your community. Video lessons are also available!
                                        </Text>
                                        <Button as={Link} href='/jobCat/Art Lessons' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Garden</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Let's grow a garden together bro. Idk.
                                        </Text>
                                        <Button as={Link} href='/jobCat/Garden' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Website Design</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Couldn't tell you a thing about this one.
                                        </Text>
                                        <Button as={Link} href='/jobCat/Website Design' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
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
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Writing</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Need a short story written? A written profile for a magazine? Find others who could use your writing skills here!
                                        </Text>
                                        <Button as={Link} href='/jobCat/Writing' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Creative</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Have a knack for unique creativity? See who might need your fresh creative perspective!
                                        </Text>
                                        <Button as={Link} href='/jobCat/Creative' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Talent</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Do you have a talent strange enough to stand out from the rest? Find others who need that unicyclist!
                                        </Text>
                                        <Button as={Link} href='/jobCat/Talent' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
                                    </Box> 
                                </Box>
                                <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                    <Box p={5}>
                                        <Stack isInline align='baseline'>
                                            <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Labor</Text>
                                        </Stack>
                                        <Text fontWeight='light' fontSize='md'>
                                            Trying to use some powertools and add another layer of callus to those fingers? See who needs a hard-worker!
                                        </Text>
                                        <Button as={Link} href='/jobCat/Labor' variant='outline' bgColor='green.200' size='md' mt={3} >Find</Button>
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