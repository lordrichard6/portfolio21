import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";
// import Animation from './animation'

export default function Header() {
  let { t } = useTranslation();

  return (
    <SectionContainer id="top">
      <Title>
        <ReactTypingEffect
          text={t("skills:header01")}
          speed={120}
          eraseDelay={700}
        />
      </Title>
      <h1>{t("skills:header02")}</h1>
      {/* <Animation /> */}
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background: url("/header_skills.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h1 {
    font-weight: 400;
    color: ${Colors.white};
    width: 80%;
    text-align: center;

    @media screen and (max-width: 764px) {
      font-size: 1.8rem;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  z-index: 1;
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
  color: ${Colors.white};
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;
