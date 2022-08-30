import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../assets/images/homepage/logo_gold.png";
import { leftBastards } from "../../../assets/data/projects";

export default function LeftBastards() {
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
    <ProjectContainer>
      <Title>
        <h1>{t("home:left_title")}</h1>
      </Title>
      <InnerContainer
        as={motion.div}
        ref={ref}
        variants={bringUp}
        initial="hidden"
        animate={controls}
      >
        <ImageContainer>
          <Link href={leftBastards[3].href} target="_blank" passHref>
            <Image src={logo} alt="sardinha logo" />
          </Link>
        </ImageContainer>
        <SubTitle>Left Bastards</SubTitle>
        <Text>{t("home:left_text")}</Text>
        <IconWrapper>
          {leftBastards.map((item, i) => {
            return (
              <Link key={i} href={item.href} target="_blank" passHref>
                {item.icon}
              </Link>
            );
          })}
        </IconWrapper>
      </InnerContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.section`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background: #1d2124;
  font-family: "Poppins", sans-serif;
  background: url("/spotlight.svg"), #1d2124;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 992px) {
    height: 100%;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 400;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  color: #caa82f;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ImageContainer = styled.div`
  width: 10rem;
  height: auto;
  margin: 0 4rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    z-index: 20;
  }

  @media screen and (max-width: 764px) {
    width: 60%;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #caa82f;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  z-index: 1;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 992px) {
    text-align: center;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #eee;
  letter-spacing: 1px;
  z-index: 1;
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 60%;
  font-size: 3rem;
  font-weight: 400;
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin: 2rem 0;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  .hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1) translateY(-0.5rem);
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
      color: #caa82f;
      z-index: 20;
    }
  }
`;
