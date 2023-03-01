import React from "react";
import styled from "styled-components";

import HobbiesTitleComponent from "../MyPassions/title";

export default function Techs() {
  return (
    <SectionContainer>
      <HobbiesTitleComponent title="Techs" />
      <div className="container">
        <div className="left">
          <h2>Front-end</h2>
        </div>
        <div className="right">
          <h2>Back-end</h2>
        </div>
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  h2 {
    color: #fff;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: spa
  }
`;
