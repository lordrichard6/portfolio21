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
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <AboutHeader />
      <AboutQuote />
      <AboutMeSection />
      <AboutServices />
      <HobbiesSection />
      <AboutGallery />
      <Waves />
    </Layout>
  );
}
