import React from 'react';
import { Box, Flex, Stack, Center, Link, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'

const Footer = () => {

  const creators = [
    { name: "Michael Lankenau", github: "https://github.com/mtlankenau" },
    { name: "Brendan Lewis", github: "https://github.com/brendanjflewis" },
    { name: "Jordan Yanev", github: "https://github.com/jyanev01" },
    { name: "Daniel Wilkinson", github: "https://github.com/DanWilk" }
  ];

  return (
    <Flex justify='space-around' marginTop='auto'>
      <Box pt={8}>
      <Center>&copy;2022 Created By:</Center>
        <Stack spacing={8} justify='center' align='center' isInline>
          {creators.map((creator) => (
              <Link href={creator.github} target='_blank' key={creator.name}>
                <Icon as={FaGithub} />{creator.name}
              </Link>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Footer;