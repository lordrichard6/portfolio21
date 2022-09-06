import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

import Hobby_01 from "../../../assets/images/homepage/hobby_01.png";
import Hobby_02 from "../../../assets/images/homepage/hobby_02.png";
import Hobby_03 from "../../../assets/images/homepage/hobby_03.png";
import Hobby_04 from "../../../assets/images/homepage/hobby_04.png";
import Mountains from "../../../assets/images/homepage/mountains.png";
import MiaCook from "../../../assets/images/homepage/mia_cook.png";
import AniCode from "../../../assets/images/homepage/ani_code.gif";
import AniFat from "../../../assets/images/homepage/ani_fat.gif";
import AniBear from "../../../assets/images/homepage/ani_bear.gif";
import AniCook from "../../../assets/images/homepage/ani_cook.gif";

export default function HobbiesComponent() {
  let { t } = useTranslation();
  let router = useRouter();

  const bringUp = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 2, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 100,
    },
  };

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

  const code1 = `“if (☕️ === true) {`;
  const code2 = `code( );`;
  const code3 = `} else {`;
  const code4 = `fetch(☕️);`;
  const code5 = `}"`;

  return (
    <HobbyElements
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
    >
      <Hobby className="hobby__01">
        <div className="word">
          <h1>Gym</h1>
          </div>
        <figure className="image">
          <Image src={Hobby_01} layout="responsive" alt="fallout" />
        </figure>
      </Hobby>
      <Text id="text_01">
        <h2>{t("home:hobbies_title01_01")}</h2>
        <h2>&</h2>
        <h2>{t("home:hobbies_title01_02")}</h2>
        <h3 className={router.locale === "pt" ? "portuguese" : ""}>
          “{t("home:hobbies_text01")}”
        </h3>
        <figure className="gif">
          <Image src={AniFat} layout="responsive" alt="fat gif" />
        </figure>
      </Text>
      <Hobby className="hobby__02">
      <div className="word">
          <h1>Coding</h1>
          </div>
        <figure className="image">
          <Image src={Hobby_02} layout="responsive" alt="fallout" />
        </figure>
      </Hobby>
      <Text id="text_02">
        <h2>{t("home:hobbies_title02_01")}</h2>
        <h2>&</h2>
        <h2>{t("home:hobbies_title02_02")}</h2>
        <h3>{code1}</h3>
        <h3>{code2}</h3>
        <h3>{code3}</h3>
        <h3>{code4}</h3>
        <h3>{code5}</h3>
        <figure className="gif">
          <Image src={AniCode} layout="responsive" alt="coding gif" />
        </figure>
      </Text>
      <Hobby className="hobby__03">
      <div className="word">
          <h1>Outside</h1>
          </div>
        <figure className="image">
          <Image src={Hobby_03} layout="responsive" alt="fallout" />
        </figure>
      </Hobby>
      <Text id="text_03">
        <h2 className={router.locale === "pt" ? "portuguese" : ""}>
          {t("home:hobbies_title03_01")}
        </h2>
        <h2 className={router.locale === "pt" ? "portuguese" : ""}>&</h2>
        <h2 className={router.locale === "pt" ? "portuguese" : ""}>
          {t("home:hobbies_title03_02")}
        </h2>
        <h3 className={router.locale === "pt" ? "portuguese" : ""}>
          “{t("home:hobbies_text03")}”
        </h3>
        <figure className="mountains">
          <Image src={Mountains} layout="responsive" alt="mountains shape" />
        </figure>
        <figure className="gif">
          <Image src={AniBear} layout="responsive" alt="bear gif" />
        </figure>
      </Text>
      <Hobby className="hobby__04">
      <div className="word">
          <h1>Eating</h1>
          </div>
        <figure className="image">
          <Image src={Hobby_04} layout="responsive" alt="fallout" />
        </figure>
      </Hobby>
      <Text id="text_04">
        <h2 className={router.locale === "pt" ? "portuguese" : ""} data-shadow={t("home:hobbies_title04_01")}>
          {t("home:hobbies_title04_01")}
        </h2>
        <h2 data-shadow="&">&</h2>
        <h2 data-shadow={t("home:hobbies_title04_02")}>
          {t("home:hobbies_title04_02")}
        </h2>
        <h3 data-shadow={t("home:hobbies_text04")}>
          {t("home:hobbies_text04")}
        </h3>
        <figure className="cook">
          <Image src={MiaCook} layout="responsive" alt="cat cook" />
        </figure>
        <figure className="gif">
          <Image src={AniCook} layout="responsive" alt="cook gif" />
        </figure>
      </Text>
    </HobbyElements>
  );
}

const HobbyElements = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1680px;

  @media screen and (max-width: 764px) {
    height: 910px;
  }

  .shadow {
    z-index: 0;
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5)) sepia(1);
    &:hover {
      filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5)) sepia(0);
    }
  }

  .hobby__01:hover + #text_01 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  .hobby__02:hover + #text_02 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  .hobby__03:hover + #text_03 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  .hobby__04:hover + #text_04 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
`;

const Hobby = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 10;
  cursor: pointer;

  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );

  background: #20303c;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms ease-in-out;
  &:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      .word {
        opacity: 0;
        filter: blur(10px);
      }
      .image {
        filter: sepia(0) blur(0px);
      }
  }

  @media screen and (max-width: 764px) {
    width: 140px;
    height: 140px;
  }
  .word {
    position: absolute;
    font-size: 2rem;
    z-index: 1;
    transition: all 500ms ease-in-out;

    @media screen and (max-width: 764px) {
      font-size: 1.5rem;
    }
  }

  .image {
    transition: all 500ms ease-in-out;
    filter: sepia(1) blur(20px);
    width: 100%;
  }

  &.hobby__01 {
    left: 20%;
    top: 0;
    transform: translate(-20%, 0);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 54%;
      left: 15%;
      transform: translate(-15%, 0);
    }
  }
  &.hobby__02 {
    left: 80%;
    top: 0;
    transform: translate(-80%, 0);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 10px;
      left: 15%;
      transform: translate(-15%, 0);
    }
  }
  &.hobby__03 {
    left: 20%;
    top: 990px;
    transform: translate(-20%, 0);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 10px;
      left: 85%;
      transform: translate(-85%, 0);
    }
  }
  &.hobby__04 {
    left: 80%;
    top: 990px;
    transform: translate(-80%, 0);

    @media screen and (max-width: 764px) {
      margin: 0;
      top: 54%;
      left: 85%;
      transform: translate(-85%, 0);
    }
    .image {
      width: 150px;
      @media screen and (max-width: 764px) {
        width: 100px;
      }
    }
  }
`;

const Text = styled.div`
  z-index: 100;
  position: absolute;
  top: 330px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  opacity: 0;
  filter: blur(30px) brightness(10);
  transition: all 500ms ease-in-out;

  @media screen and (max-width: 764px) {
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
  }

  h3 {
    font-size: 2rem;
    line-height: 2;
    @media screen and (max-width: 764px) {
      font-size: 1.2rem;
      line-height: 1.5;
      margin-left: 22px;
    }
  }
`;
