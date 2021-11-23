import styled from "styled-components";

import Left from "./left";
import Right from "./right";

export default function LeftBastards() {
  return (
    <SectionContainer>
      <Title>
        <h1>You like cars?</h1>
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
  background: #1d2124;
  font-family: 'Poppins', sans-serif;
  background: url('/spotlight.svg'), #1d2124;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 400;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  color: #caa82f;
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
  flex-direction: row-reverse;
  /* align-items: flex-end; */


  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (min-width: 2024px) {
    width: 60%;
  }
`;
