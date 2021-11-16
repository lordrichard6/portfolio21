import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import pattern from "../../../assets/images/pattern.png";
import picture from "../../../assets/images/homepage/blue_01.jpg";

export default function AboutMe() {
  const data = {
    title: "About Me",
    text01:
      "My name is Paulo Reizinho, is was born in 1986 in a small town in the middle of Portugal but I`m currently living in Swiss land more precisely in Zurich.",
    text02:
      "I took Administration with focus in accounting but thing is, in which i learned quite a lot and adopted an organized methodology. Anyway, I love coding and the challenges that come with it specially when you find a solution for an hard problem. Course is never to late to change careers and create great things on the process provided that you have what it takes.",
    text03:
      "Well, I`ve been learning web Development since 2019 with highs and lows. Focusing on the front-end with a special interest in the design of visually appealing UI and an intuitive UX so people don`t get lost. My main tech is React, but my learning journey will never stop, but I`m leaning more to Next.js. I do my designs with Figma and Photoshop, for styling I like to use a hybrid approach with styled-components and tailwind, which bring a organized and maintainable code and beautifull to look at.",
    text04:
      "Any more info please contact me, all my contacts are in the footer.",
    sideImg: picture,
    imgAlt: "paulo lopes reizinho",
  };
  return (
    <SectionContainer>
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="background pattern"
      />
      <InnerContainer>
        <LeftContainer>
          <h1>{data.title}</h1>
          <p>
            {data.text01}
            <br />
            <br />
            {data.text02}
            <br />
            <br />
            {data.text03}
            <br />
            <br />
            {data.text04}
          </p>
        </LeftContainer>
        <RightContainer>
          <Image src={data.sideImg} alt={data.imgAlt} objectFit="cover" />
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
  background: ${Colors.primary};
`;

const BG = styled(Image)`
  z-index: 0;
  opacity: 0.1;
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
    text-shadow: 1px 2px 4px #00000081;

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
