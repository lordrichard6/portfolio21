import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

import {sardinhaDrive} from "../../../assets/data/projects";
import sardinha from "../../../assets/images/homepage/sardinha.png";

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
      <Title>
        <h1>{t("home:sardinha_title")}</h1>
      </Title>
      <InnerContainer
        ref={ref}
        as={motion.div}
        variants={bringUp}
        initial="hidden"
        animate={controls}
      >
        <ImageContainer>
          <Link
            href={sardinhaDrive[3].href}
            target="_blank"
            passHref
          >
            <Image src={sardinha} alt="sardinha logo" />
          </Link>
        </ImageContainer>
        <SubTitle>Sardinha Drive</SubTitle>
        <Text>{t("home:sardinha_text")}</Text>
        <IconWrapper>
          {sardinhaDrive.map((item, i) => {
            return (
              <Link key={i} href={item.href} target="_blank" passHref>
                {item.icon}
              </Link>
            );
          })}
        </IconWrapper>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;


  @media screen and (min-width: 2024px) {
    width: 60%;
  }
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
  font-weight: 600;
  color: #eee;
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
  width: 100%;
  font-size: 1.5rem;
  font-weight: 400;
  color: #eee;
  letter-spacing: 1px;
  z-index: 1;
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 992px) {
    text-align: center;
    width: 100%;
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
      color: #9f60cc;
      z-index: 20;
    }
  }
`;
