import React from "react";

import Layout from "../components/Layout";
import HeaderComponent from "../components/_about/header/index"
import QuoteComponent from "../components/_about/quote/index"
import AboutMe from "../components/_about/AboutMe"
import TechsSection from "../components/_about/Techs"
import HobbiesSection from "../components/_about/Hobbies"
import GalleryItems from "../components/_about/gallery/index"
import Waves from "../components/_about/waves/index"

export default function AboutPage() {
  return (
    <Layout>
      <HeaderComponent />
      <QuoteComponent />
      <AboutMe />
      <TechsSection />
      <HobbiesSection />
      <GalleryItems />
      <Waves />
    </Layout>
  );
}