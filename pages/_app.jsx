import "../styles/index.scss";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { ChakraProvider } from "@chakra-ui/react";

import "nprogress/nprogress.css"; //styles of nprogress

import theme from "../config/theme";
delete theme.styles.global;

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
