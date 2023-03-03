import Router from "next/router";
import NProgress from "nprogress"; //nprogress module

import "../styles/globals.scss";
import "../styles/globals.css";
import "../styles/custom.scss";
import "../styles/hexagon.scss";
import "../styles/aboutme.scss";
import "../styles/gallery.scss";
import "../styles/hobbies.scss";
import "../styles/stars.scss";
import "../styles/404.scss";
import "../styles/main.scss";
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
