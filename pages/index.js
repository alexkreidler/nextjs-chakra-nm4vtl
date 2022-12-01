import Head from 'next/head';
import {
  Box,
  Grid,
  GridItem,
  Input,
  Flex,
  Heading,
  Stack,
  Link,
} from '@chakra-ui/react';
import { JobCard } from '../components/cards/job';
import styles from '../styles/Home.module.css';
import { FeatureAnimation } from '../components/Item';

export default function Home() {
  return (
    <Box margin="1rem">
      {/* <Box bg="white" m="2rem" p="1rem" rounded="md">
        <Input placeholder="large size" size="md" />
      </Box> */}
      <FeatureAnimation />
      {/* <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg="teal.500"
          color="white"
          // {...props}
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
              Chakra UI
            </Heading>
          </Flex>

          <Box display={{ base: 'block', md: 'none' }} onClick={() => null}>
            <svg
              fill="white"
              width="12px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                fillRule="evenodd"
                d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 14a1 1 0 100 2h12a1 1 0 100-2H4z"
                clipRule="evenodd"
              />
            </svg>
          </Box>

          <Box
            display={{ md: 'block' }}
            width={{ sm: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={8}
              align="center"
              justify={['center', 'space-between', 'flex-end', 'flex-end']}
              pt={[4, 4, 0, 0]}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </Stack>
          </Box>
        </Flex>
      </Box> */}
    </Box>
  );
}
