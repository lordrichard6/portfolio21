import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import Moon from '../../../assets/images/projects/moon.png'
import Sun from '../../../assets/images/projects/sun.png'
import CometsComponent from '../../_homepage/Header/comets'

export default function MoonAndSun() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CometsComponent />
      <MoonContainer style={{ transform: `translate(-50%,${offsetY * 0.5}px) rotate(180deg)` }}>
        <Image className="img" src={Moon} alt="" />
      </MoonContainer>
      <SunContainer style={{ transform: `translate(50%,${offsetY * 0.5}px) rotate(45deg)` }}>
        <Image className="img" src={Sun} alt="" />
      </SunContainer>
    </>
  );
}

const MoonContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 500px;
  height: auto;
  z-index: 2;
  animation: moveMoon 4s linear;

  .img {
    width: 100%;
    height: auto;
  }
  
  @keyframes moveMoon {
    0% {
      transform: translate(-200%, 0) rotate(200deg);
    }

    100% {
      transform: translate(-50%, 0) rotate(180deg);
    }
  }
`;

const SunContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 50%;
  width: 250px;
  margin-top: 130px;
  height: auto;
  z-index: 1;
  animation: moveSun 4s linear;

  .img {
    width: 100%;
    height: auto;
  }

  @keyframes moveSun {
    0% {
      transform: translate(200%, 0) rotate(90deg);
    }

    100% {
      transform: translate(50%, 0) rotate(45deg);
    }
  }
`;