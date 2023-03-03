import styled from "styled-components";
// import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  return (
    <div className="text-slate-100 w-full lg:w-1/2 flex flex-col z-10">
      <Title className="mb-4 text-5xl md:text-7xl xl:text-8xl  uppercase font-black leading-tight text-center">
        <h1>{t("home:header_01")}</h1>

        <h1>{t("home:header_02")}</h1>

        <h1>{t("home:header_03")}</h1>

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
      <SubTitle className="text-2xl 2xl:text-4xl text-center font-medium">
        {t("home:header_slogan")}
      </SubTitle>
    </div>
  );
}

const Title = styled.div`
  font-family: "Work Sans", sans-serif;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};

  animation: showTitle 3.8s linear;
`;

const SubTitle = styled.h2`
  letter-spacing: 0.2em;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};

  animation: showSubtitle 3.5s linear;
`;
