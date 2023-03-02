import styled from "styled-components";
// import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  return (
    <SloganContainer className="text-slate-100">
      <Title className="mb-4 text-5xl md:text-7xl uppercase font-black leading-tight text-center">
        <h1>
          {t("home:header_01")}
        </h1>

        <h1>
          {t("home:header_02")}
        </h1>

        <h1>
          {t("home:header_03")}
        </h1>

        {/* 
        TYPING EFFECT
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
        /> */}
      </Title>
      <SubTitle className="text-2xl 2xl:text-4xl text-center font-medium">{t("home:header_slogan")}</SubTitle>
    </SloganContainer>
  );
}

const SloganContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-family: "Work Sans", sans-serif;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};
  animation: showTitle 3.8s linear;

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
  letter-spacing: 0.2em;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};
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
`;
