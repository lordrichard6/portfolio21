import styled from "styled-components";
import React, { useState } from "react";

import Sidebar from "../components/Navbar/sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/_projects/Header";
import Developer from "../components/_projects/Developer";
import Designer from "../components/_projects/Designer";
import Photoshop from "../components/_projects/Photoshop";
import Footer from "../components/Footer";

import { Colors } from "../assets/variables";

export default function ProjectsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PageContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <Developer />
      <Designer />
      <Photoshop />
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Colors.primary};
  /* overflow-x: hidden; */
`;
