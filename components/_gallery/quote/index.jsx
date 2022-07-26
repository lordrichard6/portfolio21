import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";

export default function QuoteComponent() {
  return (
    <Quote>
      <h2>
        <strong>
          “Our virtues and our failings are inseparable, like force and matter.
          When they separate, man is no more.”
        </strong>
        <i>— Nikola Tesla</i>
      </h2>
    </Quote>
  );
}

const Quote = styled.div`
  width: 580px;
  margin-top: 10rem;

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
