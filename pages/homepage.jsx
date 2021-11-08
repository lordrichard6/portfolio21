import styled from "styled-components";
import React, { useState } from "react";

import Sidebar from "../components/Navbar/sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/_homepage/Header";
import AboutMe from "../components/_homepage/AboutMe";
import MyPassions from "../components/_homepage/MyPassions";

import Footer from "../components/Footer";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomepageContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <AboutMe />
      <MyPassions />
      <Footer />
    </HomepageContainer>
  );
}

const HomepageContainer = styled.div`
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
`;
