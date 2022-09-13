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
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $primary-background;
  /* overflow-x: hidden; */
`;
