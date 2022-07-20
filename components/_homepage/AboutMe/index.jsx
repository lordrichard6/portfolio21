import styled from "styled-components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";
import { aboutMe } from "../../../assets/data";

export default function AboutMe() {
  let { t } = useTranslation();

  return (
    <SectionContainer className="background">
      <BackgroundGradient></BackgroundGradient>
      <InnerContainer>
        <LeftContainer>
          <h1>{t("home:about_title")}</h1>
          <p>
            {t("home:about_text01")}
            <br />
            <br />
            {t("home:about_text02")}
            <br />
            <br />
            {t("home:about_text03")}
            <br />
            <br />
            {t("home:about_text04")}
          </p>
        </LeftContainer>
        <RightContainer>
          {/* <Image src={aboutMe.sideImg} alt={aboutMe.imgAlt} objectFit="cover" /> */}
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background: ${Colors.primary}; */
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: linear-gradient(to right, #20303c, #478995, #b2d6bc);
`;

const BackgroundGradient = styled.div`
  position: absolute;
  
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.2) 38.54%, rgba(0, 0, 0, 0) 100%);
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    width: 80%;
  }
  @media screen and (min-width: 2560px) {
    width: 60%;
  }
`;

const LeftContainer = styled.div`
  z-index: 1;
  width: 50%;
  margin-right: 0.5rem;
  color: #eee;

  @media screen and (max-width: 390px) {
    width: 100%;
    margin: 0;
  }
  h1 {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: -10px 10px 0px #2f3030b0, -20px 20px 0px #494b4b7f,
      -30px 30px 0px #5858583d;

    @media screen and (max-width: 390px) {
      text-align: center;
    }
    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
    @media screen and (min-width: 1440px) {
      font-size: 5rem;
    }
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 2560px) {
      font-size: 1.8rem;
    }
  }
`;

const RightContainer = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  height: 100%;
  margin-left: 0.5rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  ::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "REIZINHO";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 3%, #ffffff89 10%);
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  :hover::after {
    animation: 1s glitch infinite;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }

    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }

    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }

    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }

    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }

    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }

    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }

    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }

    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }

    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }

    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;
