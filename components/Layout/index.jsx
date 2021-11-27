import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";

import Sidebar from "../Navbar/sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Paulo Reizinho</title>
        <meta name="description" content="Paulo Reizinho Developer Portfolio" />
        <link rel="icon" href="/logo_black.png" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.main`
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
`;
