import React, { useState } from "react"
import "../styles/index.scss";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import { ChakraProvider } from "@chakra-ui/react";

import "nprogress/nprogress.css"; //styles of nprogress

import theme from "../config/theme";
delete theme.styles.global;

import LoadingScreen from "../components/_shared/loading"
import Layout from "../components/Layout";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 1000);// Timeout duration in milliseconds

      // Clear the timeout if the route changes before the timeout completes
      router.events.on("routeChangeComplete", () => {
        clearTimeout(loadingTimeout);
      });
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <Layout>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ChakraProvider resetCSS={false} theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>

      )
      }
    </Layout>
  );
}

export default MyApp;