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

export default function HobbiesTitleComponent() {
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

        <Container
          as={motion.div}
          ref={ref}
          variants={bringUp}
          initial="hidden"
          animate={controls}
          id="hobbies-title"
        >
            <h1>{t("home:hobbies_title")}</h1>
        </Container>
  );
}

const Container = styled.div`
`;
