import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";

import Sidebar from "../components/Navbar/sidebar";
import Navbar from "../components/Navbar";
import GalleryItems from "../components/_gallery/gallery/index"
import QuoteComponent from "../components/_gallery/quote/index"
import HeaderComponent from "../components/_gallery/header/index"

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
      <HeaderComponent />
      <QuoteComponent />
      <GalleryItems />
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