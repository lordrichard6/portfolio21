import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Hobby1 from "./hobby_01";
import Hobby2 from "./hobby_02";
import Hobby3 from "./hobby_03";
import Hobby4 from "./hobby_04";

import { bringUp } from "../../../../utilities/framer-animations";

export default function HobbiesComponent() {
  let { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
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
    <HobbyElements
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
      className="relative grid grid-cols-2 gap-y-60 md:gap-y-[34rem] justify-center items-center w-full z-10"
    >
      <Hobby1 />
      <Hobby2 />
      <Hobby3 />
      <Hobby4 />
    </HobbyElements>
  );
}

const HobbyElements = styled.div`
  /* height: 1680px; */
`;
