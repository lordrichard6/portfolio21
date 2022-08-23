import styled from "styled-components";
import Image from "next/image";

import { homeHeader } from "../../../assets/data";
import CometsComponent from './comets'
import HomepageTitleComponent from './title'
import HeaderImageComponent from './image'
import StarsComponent from './stars'


export default function Header() {

  return (
    <SectionContainer id="top">
      <Background
        src={homeHeader.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="paulo reizinho header"
      />
      <StarsComponent />
      <CometsComponent />
      <InnerContainer>
        <HomepageTitleComponent />
        <HeaderImageComponent />
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  animation: flash 3.1s linear;

  @media screen and (max-width: 500px) {
    height: 100%;
  }

  @keyframes flash {
    0% {
      filter: blur(0) brightness(1);
    }
    96% {
      filter: brightness(1) blur(0);
    }
    98% {
      filter: brightness(10) blur(0.5rem);
    }
    100% {
      filter: blur(0) brightness(1);
    }
  }
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
  }
  @media screen and (min-width: 1080px) {
    width: 70%;
  }
`;

const Background = styled(Image)`
  z-index: 0;
`;
