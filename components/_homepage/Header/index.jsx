import styled from "styled-components";
import Image from "next/image";

import { homeHeader } from "../../../assets/data";

import LogoComponent from "./logo";

import { StarsComponent, CometsComponent } from "../../_shared";
import HomepageTitleComponent from "./title";
import { EntryAnimation } from "../../_shared";
import { bringFromRight } from "../../../utilities/framer-animations";

export default function HomeHeaderSection() {
  return (
    <SectionContainer
      className="w-screen min-h-screen relative flex justify-center items-center py-24"
      id="top"
    >
      <Image
        src={homeHeader.backgroundImage}
        fill
        alt="paulo reizinho space background"
        className="z-0 object-cover object-center"
      />
      <StarsComponent />
      <CometsComponent />
      <div className="w-4/5 lg:w-3/4 flex flex-col-reverse lg:flex-row justify-center items-center">
        <HomepageTitleComponent />
        <EntryAnimation style="w-full md:w-1/2" animation={bringFromRight}>
          <LogoComponent />
        </EntryAnimation>
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  /* animation: flash 3.1s linear; */
`;
