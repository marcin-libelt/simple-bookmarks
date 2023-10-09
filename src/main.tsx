import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    config: {
      initialColorMode: "dark",
    },
    global: {
      a: {
        color: "hsl(245, 75%, 52%)",
      },
      h1: {
        color: "hsl(245, 75%, 52%)",
        fontSize: "64px",
        lineHeight: "80px",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
