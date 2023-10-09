import { Box, Container } from "@chakra-ui/react";
import useFirestore from "./hooks/useFirestore";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const { auth, useAuthState } = useFirestore();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [user] = useAuthState(auth);

  return (
    <Container maxW="5xl">
      <Header />
      <Box as="main" padding="4" color="black">
        {user ? <Bookmarks /> : <Welcome />}
      </Box>
    </Container>
  );
}

export default App;
