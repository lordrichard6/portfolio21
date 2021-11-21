import styled from "styled-components";
import React, { useState } from "react";

import { bannerProjects, bannerSkills } from "../assets/data";

import Header from "../components/_homepage/Header";
import AboutMe from "../components/_homepage/AboutMe";
import Sardinha from '../components/_homepage/Sardinha'
import LeftBastards from '../components/_homepage/LeftBastards'
import MyPassions from "../components/_homepage/MyPassions";
import Banner from "../components/banner";

import Sidebar from "../components/Navbar/sidebar";
import Navbar from "../components/Navbar";
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
      <Sardinha />
      <LeftBastards />
      <MyPassions />
      <Banner
        imgSrc={bannerProjects.backgroundImage}
        alt={bannerProjects.alt}
        text={bannerProjects.text}
        icon={bannerProjects.icon}
      />
      <Banner
        imgSrc={bannerSkills.backgroundImage}
        alt={bannerSkills.alt}
        text={bannerSkills.text}
        icon={bannerSkills.icon}
      />
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
