import React from "react";
import { Container, Box, Link, Flex, Heading, Wrap, Text, Stack, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,  Image, useBreakpointValue } from '@chakra-ui/react'
import ButtonAnimated from "../components/buttonAnimated";
import CreateJob from "./create-job";
import Auth from "../utils/auth";

const jobData = [
    { title: 'Music Lessons', description: 'Local music lessons from the people within your community. Video lessons are also available!' },
    { title: 'Art Lessons', description: 'Local art lessons from the people within your community. Video lessons are also available!' },
    { title: 'Garden', description: "Let's grow a garden together bro. Idk." },
    { title: 'Website Design', description: "Couldn't tell you a thing about this one." }
];

const gigData = [
    { title: 'Writing', description: 'Need a short story written? A written profile for a magazine? Find others who could use your writing skills here!' },
    { title: 'Creative', description: 'Have a knack for unique creativity? See who might need your fresh creative perspective!' },
    { title: 'Talent', description: 'Do you have a talent strange enough to stand out from the rest? Find others who need that unicyclist!' },
    { title: 'Labor', description: 'Trying to use some powertools and add another layer of callus to those fingers? See who needs a hard-worker!' }
]

const Home = ()=> {

        return(
            <Container minW='100%' minH='100%' >
                
                <Flex
                    direction='column'
                    align='center'
                    maxH={{ xl: "1200px" }}
                    m="0 auto">
                    <Flex
                        align="center"
                        justify={{ base: "center", md: "space-around", xl: "space-between" }}
                        direction={{ base: "column-reverse", md: "row" }}
                        wrap="no-wrap"
                        minH="60vh"
                        px={70}
                        mb={3}
                        
                        >
                        <Stack
                            spacing={4}
                            w={{ base: "80%", md: "40%" }}
                            align={["center", "center", "flex-start", "flex-start"]}
                        >
                            <Heading
                                as="h1"
                                size="xl"
                                fontWeight="bold"
                                color="primary.800"
                                textAlign={["center", "center", "left", "left"]}
                            >
                                Greg's List
                            </Heading>
                            <Heading
                                as="h2"
                                size="md"
                                color="primary.800"
                                opacity="0.8"
                                fontWeight="normal"
                                lineHeight={1.5}
                                textAlign={["center", "center", "left", "left"]}
                            >
                                Welcome! Find a job or gig below. Even better, you can create one with us! Let's build our community together through the power of Greg
                            </Heading>
                                {Auth.loggedIn() ? (
                                <Button
                                    as={Link} href='/createJob'
                                    variantColor="primary"
                                    borderRadius="8px"
                                    p={5}
                                    lineHeight="1"
                                    size="md"
                                    bg='blue.200'
                                    _hover={{bg: 'green.200'}}
                                >
                                    Post a Job or Gig
                                </Button>
                                ) : (
                                <Button
                                    as={Link} href='/signup'
                                    variant='outline'
                                    borderRadius="8px"
                                    p={5}
                                    lineHeight="1"
                                    size="md"
                                    bg='blue.200'
                                    _hover={{bg: 'green.200'}}
                                >
                                    Create an Account
                                </Button>
                                )}
                        </Stack>
                        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                            <Image src={require("../assets/images/jobpeople.jpg")} size="300%" rounded="1rem" shadow="2xl" />
                        </Box>

                    </Flex>
                </Flex>
            
                {/* <Box 
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

                // {/* CREATE JOB BUTTON AND OPTION FOR LOGGEDIN USERS */}
                {/* {Auth.loggedIn() &&
                    <Box rounded='5px' h='100px' w='100%' justifyContent='center'>
                        <Stack align='center' w='100%' justifyContent='center'>
                            <Button as={Link} href='/createJob' bg='gray.200' _hover={{bg:'green.300'}}>Post job - Click Here</Button>
                        </Stack>
                    </Box>
                } */}
                {/* JOBS SECTION */}
                <Accordion allowToggle rounded='5px'>
                    <AccordionItem>
                            <AccordionButton>
                                <Box 
                                    bg='white' 
                                    w='100%'
                                    fontSize='xl'
                                    pt={8}
                                    pb={8}
                                    >Jobs
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Wrap>
                                {jobData.map((job) => (
                                    <Box
                                    w='400px'
                                    rounded='5px'
                                    overflow='hidden'
                                    boxShadow='sm'
                                    bg='gray.200'>
                                    
                                        <Box p={5}>
                                            <Stack isInline align='baseline'>
                                                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>{job.title}</Text>
                                            </Stack>
                                            <Text fontWeight='light' fontSize='md'>
                                                {job.description}
                                            </Text>
                                            <Button as={Link} href={`/jobCat/${job.title}`} variant='outline' bg='blue.200' _hover={{bg: 'green.200'}} size='md' mt={3} >Find</Button>
                                        </Box> 
                                    </Box>
                                ))}
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
                                    fontSize='xl'
                                    pt={8}
                                    pb={8} 
                                    >Gigs
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Wrap>
                                {gigData.map((gig) => (
                                        <Box
                                        w='400px'
                                        rounded='5px'
                                        overflow='hidden'
                                        boxShadow='sm'
                                        bg='gray.200'>
                                    
                                            <Box p={5}>
                                                <Stack isInline align='baseline'>
                                                    <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>{gig.title}</Text>
                                                </Stack>
                                                <Text fontWeight='light' fontSize='md'>
                                                    {gig.description}
                                                </Text>
                                                <Button as={Link} href={`/jobCat/${gig.title}`} variant='outline' bg='blue.200' _hover={{bg: 'green.200'}} size='md' mt={3} >Find</Button>
                                            </Box> 
                                        </Box>
                                ))}
                                {/* <Box
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
                                </Box> */}
                            </Wrap>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        );
};

export default Home;