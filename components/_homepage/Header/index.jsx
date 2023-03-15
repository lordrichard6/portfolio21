import styled from "styled-components";
import Image from "next/image";

import { homeHeader } from "../../../assets/data";

import LogoComponent from "./logo";

import { StarsComponent, CometsComponent } from "./stars";
import HomepageTitleComponent from "./title";

export default function HeaderSection() {
  return (
    <SectionContainer
      className="w-screen h-screen relative flex justify-center items-center py-24"
      id="top"
    >
      <Image
        src={homeHeader.backgroundImage}
        fill
        alt="paulo reizinho header"
        className="z-0 object-cover object-center"
      />
      <StarsComponent />
      <CometsComponent />
      <div className="w-4/5 lg:w-3/4 flex flex-col-reverse lg:flex-row justify-center items-center">
        <HomepageTitleComponent />
        <LogoComponent />
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  animation: flash 3.1s linear;
`;
