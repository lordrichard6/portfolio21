import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Left from "./left";
import Right from "./right";

export default function Sardinha() {
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
    <SectionContainer className="background-blue">
      <Title
        as={motion.div}
        variants={bringUp}
        initial="hidden"
        animate={controls}
      >
        <h1>{t("home:sardinha_title")}</h1>
      </Title>
      <InnerContainer
        ref={ref}
        as={motion.div}
        variants={bringUp}
        initial="hidden"
        animate={controls}
      >
        {/* <Left /> */}
        <Right />
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  background: url("/circuit_bg.svg"), #062942;
  background-repeat: no-repeat;

  @media screen and (max-width: 992px) {
    height: 100%;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 400;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  color: #eee;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 10;
  h1 {
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (min-width: 2024px) {
    width: 60%;
  }
`;
