import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  return (
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
