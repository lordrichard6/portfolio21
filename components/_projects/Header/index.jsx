import styled from "styled-components";
import Image from "next/image";

import Animation from './animation'
import Moon from '../../../assets/images/projects/moon.png'
import Sun from '../../../assets/images/projects/sun.png'
import Night from '../../../assets/images/projects/nightsky.jpg'
import Comet from '../../../assets/images/projects/comet.png'

export default function Header() {
  return (
    <SectionContainer id="top">
      <div className="comet">
        <Image src={Comet} alt="" />
      </div>
      <MoonContainer>
        <Image src={Moon} alt="" />
      </MoonContainer>
      <SunContainer>
        <Image src={Sun} alt="" />
      </SunContainer>
      <Animation />
      <div className="night">
        <Image src={Night} alt="" objectFit="cover" layout="fill" />
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;

  .night {
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

  .comet {
    position: absolute;
    top: -10%;
    left: 100%;
    transform: rotate(6deg);
    filter: blur(2px) brightness(10);
    width: 200px;
    height: auto;
    z-index: 1;
    animation: passingComet 4.6s linear;
  }

  @keyframes passingComet {
    0% {
      transform: translate(-920%,340%);
    }
    85% {
      transform: translate(-920%,340%);
    }
    100% {
      transform: translate(0,0);
    }
  }
`;

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