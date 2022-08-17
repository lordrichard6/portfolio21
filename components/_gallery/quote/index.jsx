import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";

export default function QuoteComponent() {
  return (
    <Container>
      <BackgroundGradient></BackgroundGradient>
      <Quote>
        <h2>
          <strong>
            “Our virtues and our failings are inseparable, like force and matter.
            When they separate, man is no more.”
          </strong>
          <i>— Nikola Tesla</i>
        </h2>
      </Quote>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const Quote = styled.div`
  width: 580px;
  margin-top: 10rem;
  z-index: 1;

  @media screen and (max-width: 576px) {
    width: 300px;
  }

  h2 {
    font-size: 32px;
    line-height: 40px;
    color: #d9d9d9;
    i {
      font-weight: 300;
    }
    @media screen and (max-width: 576px) {
      font-size: 24px;
    }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(179.46deg, #5C4963 5.46%, rgba(233, 162, 129, 0.2) 68.65%, rgba(187, 122, 121, 0) 89.54%);
`;
