import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AboutTitleComponent from "./title";

export default function AboutTextComponent() {
  let { t } = useTranslation();

  const bringUp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

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
    <LeftContainer
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
    >
      <AboutTitleComponent title={t("home:about_title")} />
      <p>
        {t("home:about_text01")}
        <br />
        <br />
        {t("home:about_text02")}
        <br />
        <br />
        {t("home:about_text03")}
        <br />
        <br />
        {t("home:about_text04")}
      </p>
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  z-index: 1;
  margin-right: 0.5rem;
  color: #eee;

  @media screen and (max-width: 992px) {
    margin: 0;
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 2560px) {
      font-size: 1.8rem;
    }
  }
`;
