import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import "../styles/globals.scss";
import "../styles/custom.scss";
import "../styles/hexagon.scss";
import "../styles/aboutme.scss";
import "../styles/gallery.scss"
import "../styles/hobbies.scss"

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
