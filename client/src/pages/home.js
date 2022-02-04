import React from "react";
import { Grid, GridItem, Container } from '@chakra-ui/react'

const Home = ()=> {

        return(
            <Container>
                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={6}
                >
                    <GridItem colSpan={2} bg='tomato' />
                    <GridItem colSpan={2} bg='papayawhip' />
                    <GridItem colSpan={2} bg='papayawhip' />
                    <GridItem colSpan={2} bg='tomato' />
                    <GridItem colSpan={2} bg='tomato' />
                    <GridItem colSpan={2} bg='papayawhip' />
                </Grid>
            </Container>
        );
};

export default Home;