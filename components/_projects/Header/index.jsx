import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProjectsHeaderTitle from "./title";
import ProjectsHeaderImage from "./image";
// import { StarsComponent } from "../../_homepage/Header/stars";

export default function ProjectsHeader() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionContainer className="projects-section-header relative flex-centered" id="top">
      <div className="gradient"/>
      <ProjectsHeaderImage />
      <ProjectsHeaderTitle />
      {/* <div className="tri" /> */}
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  background: linear-gradient(to top, #283e51, #0a2342);

  .gradient {
    position: absolute;
    height: 100vh;
    width: 100%;
    background: linear-gradient(to top, #283e51,#283E51 10%, #0a234224);
    z-index: 20;
  }


  .tri {
    position: absolute;
    bottom: -30vw;
    left: -100vw;
    width: 0;
    height: 0;
    border-left: 150vw solid rgba(255, 0, 0, 0);
    border-right: 150vw solid rgba(255, 0, 0, 0);
    border-bottom: 60vw solid #1d2124;
    z-index: 10;
    
    @media screen and (min-width: 2000px) {
      bottom: -40vw;
    }
    
    @media screen and (max-width: 764px) {
      bottom: -50vw;
      border-left: 150vw solid rgba(255, 0, 0, 0);
      border-right: 220vw solid rgba(255, 0, 0, 0);
      border-bottom: 140vw solid #1d2124;
    }
  }

  @keyframes tri {
    100% {
      transform: translateY(-300vw);
    }
  }

`;
