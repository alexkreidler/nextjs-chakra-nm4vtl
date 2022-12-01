import { extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  };

  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <Box
        fontSize="1rem"
        fontWeight="400"
        height="100vh"
        bg="#e6edf2"
        color={'#4a4a4a'}
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
