import React from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";
import {
  bringUp,
  bringFromLeft,
  bringFromRight,
} from "../../../utilities/framer-animations";

import { EntryAnimation } from "../../_shared";

import AboutTextComponent from "./text";
import AboutPictureComponent from "./picture";
import { TitlePrimary } from "../../_shared";

export default function AboutMeSection() {
  let { t } = useTranslation();
  
  return (
    <SectionContainer className="relative w-screen flex flex-col justify-center items-center py-24 md:py-32">
      <TitlePrimary title={t("home:about_title")} />
      <div className="w-4/5 2xl:w-3/5 flex flex-col xl:flex-row justify-center items-center">
        <EntryAnimation style="w-full" animation={bringFromLeft}>
          <AboutTextComponent />
        </EntryAnimation>
        <EntryAnimation
          style="w-full xl:pt-10 xl:pl-6"
          animation={bringFromRight}
        >
          <AboutPictureComponent />
        </EntryAnimation>
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: ${Colors.primary_background};
`;
