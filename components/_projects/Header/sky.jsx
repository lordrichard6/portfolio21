import styled from "styled-components";
import Image from "next/image";

import Moon from '../../../assets/images/projects/moon.png'
import Sun from '../../../assets/images/projects/sun.png'
import CometsComponent from '../../_homepage/Header/comets'

export default function MoonAndSun() {
  return (
    <>
      <CometsComponent />
      <MoonContainer>
        <Image src={Moon} alt="" />
      </MoonContainer>
      <SunContainer>
        <Image src={Sun} alt="" />
      </SunContainer>
    </>
  );
}

const MoonContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0) rotate(180deg);
  width: 500px;
  height: auto;
  z-index: 2;
  animation: moveMoon 4s linear;
  
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
  transform: translate(50%, 10%) rotate(45deg);
  width: 500px;
  height: auto;
  z-index: 1;
  animation: moveSun 4s linear;

  @keyframes moveSun {
    0% {
      transform: translate(200%, 0) rotate(90deg);
    }

    100% {
      transform: translate(50%, 0) rotate(45deg);
    }
  }
`;