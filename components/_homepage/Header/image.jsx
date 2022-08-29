import styled from "styled-components";
import Image from "next/image";

import { homeHeader } from "../../../assets/data";

export default function HeaderImageComponent() {
  return (
    <ImageContainer>
      <Image src={homeHeader.logo} alt="paulo reizinho logo" />
    </ImageContainer>
  );
}

const ImageContainer = styled.figure`
  width: 50%;
  height: auto;
  animation: showHead 3s linear;
  /* filter: drop-shadow(10px 10px 5px #1a1a1a); */

  @media screen and (max-width: 1024px) {
    animation: showHeadMobile 3s linear;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @keyframes showHead {
    0% {
      filter: blur(10rem) brightness(8);
      transform: scale(2) translate(-20%, 0);
    }
    50% {
      filter: blur(0) brightness(2);
      transform: scale(2) translate(-20%, 0);
    }
    60% {
      transform: scale(2) translate(-20%, 0);
    }

    96% {
      filter: blur(0) brightness(2);
    }
    98% {
      transform: scale(1) translate(0, 0);
      filter: blur(5rem) brightness(10);
    }
    100% {
      filter: blur(0) brightness(2);
    }
  }

  @keyframes showHeadMobile {
    0% {
      filter: blur(10rem) brightness(8);
      transform: scale(2) translate(0, 0);
    }
    50% {
      filter: blur(0) brightness(2);
      transform: scale(2) translate(0, 0);
    }
    60% {
      transform: scale(2) translate(0, 0);
    }

    96% {
      filter: blur(0) brightness(2);
    }
    98% {
      transform: scale(1) translate(0, 0);
      filter: blur(5rem) brightness(10);
    }
    100% {
      filter: blur(0) brightness(2);
    }
  }
`;
