import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Header from '../components/_homepage/Header'
import AboutMe from '../components/_homepage/AboutMe'
import MyPassions from '../components/_homepage/MyPassions'

import Footer from '../components/Footer'

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Paulo Reizinho</title>
        <meta name="description" content="Paulo Reizinho Developer Portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <Header />
      <AboutMe />
      <MyPassions />
      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
`;
