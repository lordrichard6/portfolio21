import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function QuoteComponent() {
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
    <Container>
      <BackgroundGradient></BackgroundGradient>
      <Quote
        ref={ref}
        as={motion.div}
        variants={bringUp}
        initial="hidden"
        animate={controls}
      >
        <h2>
          <strong>
            “{t("common:gallery_quote_01")}”
          </strong>
          <i>— Nikola Tesla</i>
        </h2>
      </Quote>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const Quote = styled.div`
  width: 680px;
  margin-top: 10rem;
  z-index: 1;

  @media screen and (max-width: 576px) {
    width: 320px;
  }

  h2 {
    font-size: 32px;
    line-height: 50px;
    letter-spacing: 1px;
    color: #d9d9d9;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
    /* color: #fccaff; */
    strong {
      font-weight: 600;
    }
    i {
      font-weight: 300;
    }
    @media screen and (max-width: 576px) {
      font-size: 24px;
      line-height: 40px;
    }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(179.46deg, #5C4963 5.46%, rgba(233, 162, 129, 0.2) 68.65%, rgba(187, 122, 121, 0) 89.54%);
`;
