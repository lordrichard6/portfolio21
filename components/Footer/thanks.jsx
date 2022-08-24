import styled from "styled-components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SiNextdotjs } from "react-icons/si";
import { Colors } from "../../assets/variables";
import logo from "../../public/logo_clean.png";

export default function Thanks() {
  let { t } = useTranslation();

  const bringFromLeft = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      x: -100,
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
    <SectionContainer
      as={motion.div}
      ref={ref}
      variants={bringFromLeft}
      initial="hidden"
      animate={controls}
    >
      <h1>{t("common:thanks")}</h1>
      <LogoContainer>
        <Image src={logo} alt="paulo reizinho" height={100} width={100} />
      </LogoContainer>
      <IconContainer>
        <p>{t("common:sitePowered")}</p>
        <Icon>
          <SiNextdotjs alt="nextjs logo" />
        </Icon>
      </IconContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 390px) {
    order: 2;
    margin-bottom: 1rem;
  }
  h1 {
    font-weight: 400;
    text-decoration: underline;
    font-size: 1.8rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  /* color: ${Colors.primary}; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  font-size: 2rem;
`;