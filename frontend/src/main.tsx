import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import MetaProvider from "./context/ContextMetamask.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <MetaProvider>
      <App />
      </MetaProvider>
    </React.StrictMode>
  </ChakraProvider>
);
