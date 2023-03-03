import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { bringUp } from "../../../utilities/framer-animations";

export default function HobbiesTitleComponent({ title }) {
  let { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
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
      <h1 className="text-center text-4xl md:text-7xl">{title}</h1>
    </Container>
  );
}

const Container = styled.div``;
