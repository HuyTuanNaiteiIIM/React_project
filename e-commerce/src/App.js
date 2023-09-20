import Header from "./component/Header/Header.js";
import { Box, HStack } from "@chakra-ui/react";
// import Body from "./components/Body/Body.js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as customTheme } from "./style/theme";
function App() {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Box>
        <Header />
        {/* <Body /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
