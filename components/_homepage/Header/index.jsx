import styled from "styled-components";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { homeHeader } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
// import Animation from './animation'

export default function Header() {
  let { t } = useTranslation();

  return (
    <SectionContainer id="top">
      <Background
        src={homeHeader.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="paulo reizinho header"
      />
      <InnerContainer>
        <SloganContainer>
          <Title>
            <ReactTypingEffect
              text={t("home:header_01")}
              speed={120}
              eraseDelay={700}
            />
            <ReactTypingEffect
              text={t("home:header_02")}
              speed={140}
              eraseDelay={700}
            />
            <ReactTypingEffect
              text={t("home:header_03")}
              speed={100}
              eraseDelay={700}
            />
          </Title>
          {/* <Animation /> */}
          <SubTitle>{t("home:header_slogan")}</SubTitle>
        </SloganContainer>
        <ImageContainer className="waitAnimate">
          <Image src={homeHeader.logo} alt="paulo reizinho logo" />
        </ImageContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
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

  .waitAnimate {
    /* animation: waitAnimate 4s ease-in-out infinite;
    transform-origin: 50% 50%; */
  }

  @keyframes waitAnimate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const SloganContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
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

const Title = styled.div`
  font-size: 4rem;
  font-weight: 400;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};
  color: #eee;
  display: flex;
  flex-direction: column;
  animation: showTitle 3.8s linear;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }

  @keyframes showTitle {
    0% {
      filter: blur(0) brightness(1);
      opacity: 0;
    }
    96% {
      filter: brightness(1) blur(0);
      opacity: 0;
    }
    98% {
      filter: brightness(10) blur(0.5rem);
      opacity: 1;
    }
    100% {
      filter: blur(0) brightness(1);
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #eee;
  letter-spacing: 0.2em;
  animation: bringText 3.5s linear;

  @keyframes bringText {
    0% {
      transform: translate(-200%, 0);
    }
    80% {
      transform: translate(-200%, 0);
    }
    96% {
      filter: blur(0) brightness(1);
      transform: translate(0, 0);
    }
    98% {
      filter: blur(1rem) brightness(10);
    }
    100% {
      filter: blur(0) brightness(1);
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const Background = styled(Image)`
  z-index: 0;
`;
