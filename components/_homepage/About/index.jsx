import React from "react";
import styled from "styled-components";

import { Colors } from "../../../assets/variables";

import {
  bringFromLeft,
  bringFromRight,
  bringUp,
} from "../../../utilities/framer-animations";

import GradientTopDark from "./gradient_dark_top";
import LeftPart from "./left";
import RightPart from "./right";
import { TitleRetro, BtnPrimaryCTA, EntryAnimation } from "../../_shared";

export default function AboutSection() {
  return (
    <SectionContainer className="relative w-screen min-h-screen flex flex-col justify-center items-center py-24 md:py-44">
      <GradientTopDark />
      <EntryAnimation animation={bringUp}>
        <TitleRetro title="About me." />
      </EntryAnimation>
      <div className="w-4/5 2xl:w-3/5 flex flex-col xl:flex-row justify-center items-center">
        <EntryAnimation style="order-2 w-full" animation={bringFromRight}>
          <LeftPart />
        </EntryAnimation>
        <EntryAnimation
          style="order-1 w-full flex flex-col justify-center items-center"
          animation={bringFromLeft}
        >
          <RightPart />
        </EntryAnimation>
      </div>
      <EntryAnimation animation={bringUp}>
        <BtnPrimaryCTA
          color="_2"
          text="More about me"
          link="/about"
          styles="mt-4"
        />
      </EntryAnimation>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  background: ${Colors.primary_background};
`;
