import styled from "styled-components";

import Left from "./left";
import Right from "./right";

export default function Sardinha() {
  return (
    <SectionContainer>
      <Title>
        <h1>Need a Chauffeur?</h1>
      </Title>
      <InnerContainer>
        <Left />
        <Right />
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  background: #062942;

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 400;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  color: #eee;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (min-width: 2024px) {
    width: 60%;
  }
`;

const LeftContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  /* height: auto; */

  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const FirstImage = styled.div`
  width: 10rem;
  height: auto;

  @media screen and (min-width: 2024px) {
    width: 12rem;
  }
`;
const SecondImage = styled.div`
  position: absolute;
  top: -2rem;
  left: 8rem;
  width: 10rem;
  height: auto;
  /* z-index: 1; */

  @media screen and (max-width: 768px) {
    width: 6rem;
    left: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    left: 30%;
  }

  @media screen and (min-width: 2024px) {
    top: -4rem;
    left: 10rem;
    width: 12rem;
  }
`;
const ThirdImage = styled.div`
  width: 25rem;
  height: auto;

  @media screen and (min-width: 2024px) {
    width: 28rem;
    margin-left: 6rem;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 10rem;
  height: auto;
  margin: 0 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #eee;
  letter-spacing: 0.2em;
  z-index: 1;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #eee;
  letter-spacing: 1px;
  z-index: 1;
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
`;
