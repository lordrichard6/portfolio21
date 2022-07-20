import styled from "styled-components";
import React, { useState } from "react";

import Sidebar from "../components/Navbar/sidebar";
import Navbar from "../components/Navbar";


import Footer from "../components/Footer";

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PageContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1>hello</h1>
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
  /* overflow-x: hidden; */
  background: linear-gradient(to right, #20303c, #478995, #b2d6bc);
`;
