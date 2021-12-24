import { ChakraProvider } from '@chakra-ui/react';
import '../styles/styles.css';

function App({ Component }) {

  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}
export default App;