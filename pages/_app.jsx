import "../styles/main.scss";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module

import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    // <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    // </ChakraProvider>
  );
}

export default MyApp;
