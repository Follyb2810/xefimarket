import NextLink from 'next/link'
import type { NextPage } from "next";
// import bgI from '../components/images/bg.avif'
import { Button, Container, Flex, Heading, Image, Stack } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}

      >
        <Stack spacing={4} align={"center"}>
          <Heading color={"brand.700"} fontSize='4xl'>XFI Marketplace</Heading>
          <Button
             as={NextLink} href='/buy'
          >Explore NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
