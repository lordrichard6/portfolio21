import styled from "styled-components";
import Image from "next/image";

import { Variables } from "../../../assets/variables";
import pattern from "../../../assets/images/pattern.png";
import picture from "../../../assets/images/homepage/blue_01.jpg";

export default function AboutMe() {
  return (
    <SectionContainer>
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <InnerContainer>
        <LeftContainer>
          <h1>About me</h1>
          <p>
            My name is Paulo Reizinho, is was born in 1986 in a small town in
            the middle of Portugal but I`m currently living in Swiss land more
            precisely in Zurich.
            <br />
            <br />
            I took Administration with focus in accounting but thing is, in
            which i learned quite a lot and adopted an organized methodology.
            Anyway, I love coding and the challenges that come with it specially
            when you find a solution for an hard problem. Course is never to
            late to change careers and create great things on the process
            provided that you have what it takes.
            <br />
            <br />
            Well, I`ve been learning web Development since 2019 with highs and
            lows. Focusing on the front-end with a special interest in the
            design of visually appealing UI and an intuitive UX so people don`t
            get lost. My main tech is React, but my learning journey will never
            stop, but I`m leaning more to Next.js. I do my designs with Figma
            and Photoshop, for styling I like to use a hybrid approach with
            styled-components and tailwind, which bring a organized and
            maintainable code and beautifull to look at.
            <br />
            <br />
            Any more info please contact me, all my contacts are in the footer.
          </p>
        </LeftContainer>
        <RightContainer>
          <Image src={picture} alt="paulo lopes reizinho" objectFit="cover" />
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  /* max-height: 100vh; */
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${Variables.primary};
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

    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 0.5rem;

  @media screen and (max-width: 390px) {
    width: 100%;
    margin: 0;
  }
`;
