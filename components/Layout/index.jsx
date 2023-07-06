import Head from "next/head";
import React, { useState, useEffect } from "react";

import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
      <Navbar toggle={toggle} />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}