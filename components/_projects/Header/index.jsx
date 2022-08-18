import styled from "styled-components";
import Image from "next/image";

import Animation from './animation'
import Night from '../../../assets/images/projects/nightsky.jpg'
import MoonAndSun from './sky'

export default function Header() {
  return (
    <SectionContainer id="top">
      <MoonAndSun />
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
`;