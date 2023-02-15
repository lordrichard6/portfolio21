import styled from "styled-components";
import Image from "next/image";

import Mario from "../../assets/images/mario.gif";

export default function MarioAnimationComponent() {
  return (
    <Container>
      <Image className="mario" src={Mario} alt="" />
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
  position: absolute;
  width: 100px;
  bottom: -6px;
  left: -400px;
  animation: moveMario 30s infinite;
  @media screen and (max-width: 576px) {
    left: -200px;
    animation: moveMarioMobile 30s infinite;
  }

  .mario {
    height: 100%;
    width: 100%;
  }

  @keyframes moveMario {
    0% {
      transform: translateX(0) scaleX(1);
    }
    29% {
      transform: translateX(140vw) scaleX(1);
    }
    30% {
      transform: translateX(140vw) scaleX(-1);
    }
    60% {
      transform: translateX(140vw) scaleX(-1);
    }
    89% {
      transform: translateX(0) scaleX(-1);
    }
    100% {
      transform: translateX(0) scaleX(1);
    }
  }

  @keyframes moveMarioMobile {
    0% {
      transform: translateX(0) scaleX(1);
    }
    29% {
      transform: translateX(600%) scaleX(1);
    }
    30% {
      transform: translateX(600%) scaleX(-1);
    }
    60% {
      transform: translateX(600%) scaleX(-1);
    }
    89% {
      transform: translateX(0) scaleX(-1);
    }
    100% {
      transform: translateX(0) scaleX(1);
    }
  }
`;