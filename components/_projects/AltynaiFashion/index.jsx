import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FaLaptop } from "react-icons/fa";

import logo from "../../../assets/images/projects/dev/altynai_logo.png";
import name from "../../../assets/images/projects/dev/altynai_name.png";

export default function AltynaiFashion() {
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
    <SectionContainer>
      <h1>Want to buy a new Jacket?</h1>
      <div className="logo">
        <Image src={logo} alt="altynai fashion" objectFit="cover" />
      </div>
      <div className="name">
        <Image src={name} alt="altynai fashion" objectFit="cover" />
      </div>
      <Text>
        A E-Commerce fashion shop with a simplistic approach and good taste.
      </Text>
      <Link href="https://altynai-fashion.vercel.app/" passHref>
        <a target="_blank">
          <FaLaptop className="hover" alt="official website altynai fashion" />
        </a>
      </Link>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  font-family: "Kantumruy Pro", sans-serif;
  width: 100%;
  /* height: 80vh; */
  background: url("/bg.svg"),
    linear-gradient(116.82deg, #f9d7f6 0%, #fcdfd7 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  padding: 3rem 0;

  @media screen and (max-width: 992px) {
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 800;
    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
    color: #e62024;
    text-align: center;
  }

  .logo {
    width: 10%;
    /* filter: drop-shadow(3px 3px 10px black); */
    @media screen and (max-width: 500px) {
      width: 60%;
    }
  }
  .name {
    width: 50%;
    @media screen and (max-width: 500px) {
      width: 80%;
    }
  }
  .hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    font-size: 3rem;

    &:hover {
      transform: scale(1.1) translateY(-0.5rem);
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
      color: #e62024;
      z-index: 20;
    }
  }
`;

const Text = styled.h2`
  width: 50%;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1d2124;
  letter-spacing: 1px;
  z-index: 1;
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 992px) {
    text-align: center;
    width: 80%;
  }
`;
