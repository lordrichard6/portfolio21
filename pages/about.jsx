import React from "react";

import {
  AboutHeader,
  AboutQuote,
  AboutMeSection,
  AboutServices,
  HobbiesSection,
  AboutGallery,
} from "../components/_about";
import Waves from "../components/_about/waves/index";

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutQuote />
      <AboutMeSection />
      <AboutServices />
      <HobbiesSection />
      <AboutGallery />
      <Waves />
    </>
  );
}
