import {Box,  Heading, Text } from '@chakra-ui/react'
// import {  } from 'framer-motion'
import React from 'react'

// A demo of a SaaS feature that fades in using Framer Motion
export const FeatureAnimation = () => {
  return (
    <Box
      as="section"
      bg="gray.50"
      px={{
        base: '4',
        md: '8',
      }}
      py="12"
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        textAlign="center"
      >
        <Heading
          as="h2"
          size="2xl"
          fontWeight="extrabold"
          letterSpacing="tight"
          mb="8"
        >
          <Box
            as="span"
            position="relative"
            _after={{
              content: '""',
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}
          >
            Feature Animation
          </Box>
        </Heading>
        <Text
          fontSize="lg"
          color="gray.500"
          mb="10"
        >
          This is a demo of a SaaS feature that fades in using Framer Motion.
        </Text>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mb="8"
        >
          <Box
            as="figure"
            w="full"
            maxW="sm"
            mx="auto"
            mb="8"
          >
            <Box
              as="img"
              src="https://images.unsplash.com/photo-1556740752-7c4a23dab365?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="A feature that fades in using Framer Motion"
              rounded="lg"
              shadow="2xl"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
