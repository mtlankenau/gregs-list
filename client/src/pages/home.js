import React from "react";
import { Grid, GridItem, Container } from '@chakra-ui/react'

const Home = ()=> {

        return(
            <Container>
                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                    <GridItem colSpan={2} bg='papayawhip' />
                    <GridItem colSpan={2} bg='papayawhip' />
                    <GridItem colSpan={4} bg='tomato' />
                </Grid>
            </Container>
        );
};

export default Home;