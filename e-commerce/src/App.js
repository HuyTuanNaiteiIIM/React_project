import Header from "./component/Header/Header.js";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Body from "./components/Body/Body.js";
import { store } from "./redux/store";
function App() {
  const [reload, setReload] = useState(false);
  store.subscribe(() => setReload((prev) => !prev))
  return (
      <Box>
        <Header />
        <Body />
      </Box>
  );
}

export default App;
