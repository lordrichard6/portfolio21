import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { aboutMe } from "../../../assets/data";

export default function AboutMe() {
  return (
    <SectionContainer>
      <InnerContainer>
        <LeftContainer>
          <h1>{aboutMe.title}</h1>
          <p>
            {aboutMe.text01}
            <br />
            <br />
            {aboutMe.text02}
            <br />
            <br />
            {aboutMe.text03}
            <br />
            <br />
            {aboutMe.text04}
          </p>
        </LeftContainer>
        <RightContainer>
          <Image src={aboutMe.sideImg} alt={aboutMe.imgAlt} objectFit="cover" />
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background: ${Colors.primary}; */
  background: url("/pattern.png"), ${Colors.primary};
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
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 0.5rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 390px) {
    width: 100%;
    margin: 0;
  }
`;
