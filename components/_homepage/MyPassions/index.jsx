import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Colors } from "../../../assets/variables";
import HobbiesComponent from "./hobbies";
import HexagonComponent from "./hexagon";
import EvolutionComponent from "./evolution";
// import PoligonsAnimationComponent from './poligons_animation'

export default function MyPassions() {
  let { t } = useTranslation();

  const bringUp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.5, type: 'spring', bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4
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
    <SectionContainer>
      <BackgroundGradient></BackgroundGradient>
        <motion.h1
          ref={ref}
          variants={bringUp}
          initial="hidden"
          animate={controls}
        >
          {t("home:hobbies_title")}
        </motion.h1>
        <HexagonComponent />
        <HobbiesComponent />
        <EvolutionComponent />
      {/* <PoligonsAnimationComponent /> */}
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 120vh;
  /* padding: 5rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.white};
  overflow: hidden;
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: linear-gradient(to right, #20303c, #478995, #b2d6bc);

  @media screen and (max-width: 764px) {
    min-height: 1200px;
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 1px 2px 3px #00000081;

    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
    @media screen and (max-width: 764px) {
      margin: 0;
    }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;

  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    #0f2027 0%,
    rgba(15, 32, 39, 0.2) 38.54%,
    rgba(15, 32, 39, 0) 100%
  );
`;
