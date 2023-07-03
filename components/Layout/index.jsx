import Head from "next/head";
import React, { useState } from "react";
import Router, { useRouter } from "next/router";

import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const isCvPage = router.pathname === "/cv_2023";

  return (
    <>
      <Head>
        <title>Paulo Reizinho</title>
        <meta name="Paulo Reizinho" content="Paulo Reizinho Developer Portfolio" />
        <meta
          name="google-site-verification"
          content="fz36mAU8oe5cQ1weXZqrsHihiDBj-G6u72mdREUjVYk"
        />
        <link rel="icon" href="/logo_gold.png" />
      </Head>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      {isCvPage ? null : <Navbar toggle={toggle} />}
      <main className="layout">{children}</main>
      {isCvPage ? null : <Footer />}
    </>
  );
}