import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import Animation from './animation'
import Night from '../../../assets/images/projects/nightsky.jpg'
import MoonAndSun from './sky'
import StarsComponent from '../../_homepage/Header/stars'

export default function Header() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionContainer id="top">
      <MoonAndSun />
      <Animation />
      <div className="night" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
        <Image src={Night} alt="" objectFit="cover" layout="fill" />
      </div>
      <StarsComponent />
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

  .night {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: 2s all ease;
    animation: bringNight 4.2s linear;
  }

  @keyframes bringNight {
    0% {
      opacity: 0;;
    }
    85% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;