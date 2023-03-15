import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import {
  bringUp,
  bringFromLeft,
  bringFromRight,
} from "../../../utilities/framer-animations";

import AboutTextComponent from "./text";
import AboutPictureComponent from "./picture";

export default function AboutMeSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <SectionContainer className="relative w-screen flex flex-row justify-center items-center py-24 md:py-32">
      <BackgroundGradient className="absolute w-full h-full" />
      <div ref={ref} className="w-4/5 2xl:w-3/5 flex flex-col xl:flex-row justify-center items-center">
        <motion.div
          variants={bringFromLeft}
          initial="hidden"
          animate={controls}
          className="w-full"
        >
          <AboutTextComponent />
        </motion.div>
        <motion.div
          variants={bringFromRight}
          initial="hidden"
          animate={controls}
          className="w-full xl:pt-10 xl:pl-6"
        >
          <AboutPictureComponent />
        </motion.div>
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: ${Colors.primary_background};
`;

const BackgroundGradient = styled.div`
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.2) 38.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;
