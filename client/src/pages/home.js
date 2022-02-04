import React from "react";
import { Container, Box, Flex, Spacer } from '@chakra-ui/react'

const Home = ()=> {

        return(
            <Container>
                <Box 
                    bg='grey'
                    rounded='5px' 
                    boxShadow='sm' 
                    w='100%'
                    p={4} 
                    color='black'>This is the box that has a picture and G R E G ' S   L I S T
                </Box>
                <Box 
                    bg='white' 
                    w='100%'
                    pt={8}
                    pb={8} 
                    >Jobs</Box>

                <Flex>
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            job
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            job
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            job
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            job
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            job
                        </Box>
                    </Box>
                </Flex>
                <Box 
                    bg='white' 
                    w='100%'
                    pt={8}
                    pb={8} 
                    >Gigs</Box>

                <Flex>
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            gig
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            gig
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            gig
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            gig
                        </Box>
                    </Box> <Spacer />
                    <Box as='button' maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Box p='6'>
                            gig
                        </Box>
                    </Box>
                </Flex>
            </Container>
        );
};

export default Home;