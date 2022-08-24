import styled from "styled-components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Colors } from "../../assets/variables";
// import QRcode from '../../assets/images/qr.png';
import SocialLinksComponent from './social_links'
import {MdEmail} from "react-icons/md";
import {SiMinutemailer} from "react-icons/si";

export default function Contacts() {
  const [btnGone, setBtnGone] = useState(0)

  let { t } = useTranslation();

  const bringFromRight = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      x: 100,
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

  const openMail = () => {
    window.open('mailto:paulolopesreizinho@gmail.com?subject=CV%20Request&body=Dear%20Paulo,%20can%20you%20send%20me%20your%20awesome%20CV?')
  }

  return (
    <SectionContainer
      as={motion.div}
      ref={ref}
      variants={bringFromRight}
      initial="hidden"
      animate={controls}
    >
      <h1>{t("common:info")}</h1>
      <SocialLinksComponent />

      <ContactWrapper>
        <EmailButton>
          <div onClick={openMail} className="btnWrapper">
            <p>Ask me by</p>
            <MdEmail className="close" alt="send paulo reizinho email" />
            <SiMinutemailer className="open" alt="send paulo reizinho email" />
          </div>
        </EmailButton>
        <ButtonV2
          onClick={() => setBtnGone(1)}
          className={btnGone ? 'ani' : null}
        >
          <div className="button _1">
            {/* <a href="https://drive.google.com/file/d/19uYAAnvRa-fi_LpG1GhA9HQVGeBQAIuF/view?usp=sharing">{t("common:downloadCV")}</a> */}
            <a>{t("common:downloadCV")}</a>
            <div className="back"></div>
          </div>
        </ButtonV2>
        {/* very cool button but brings performance issues */}
        {/* <Button>
        <a href="https://drive.google.com/file/d/19uYAAnvRa-fi_LpG1GhA9HQVGeBQAIuF/view?usp=sharing">
          {t("common:downloadCV")}
        </a>
      </Button> */}
        {/* <ImageWrapper>
        <Image src={QRcode} alt="paulo reizinho qr" />
        </ImageWrapper> */}
        {/* <BlueIcon>
          <FaHouseUser />
        </BlueIcon>
        <p>{t("common:adress")}</p>
      </ContactWrapper>
      <ContactWrapper>
        <BlueIcon>
          <HiMail />
        </BlueIcon>
        <p>paulolopesreizinho@gmail.com</p>
      </ContactWrapper>
      <ContactWrapper>
        <BlueIcon>
          <FaPhoneAlt />
        </BlueIcon>
        <p>+41 78 798 95 33</p> */}
      </ContactWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 764px) {
    order: 3;
    margin: 2rem 0;
  }
  h1 {
    font-weight: 400;
    text-decoration: underline;
    font-size: 1.8rem;
  }
`;

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 390px) {
    width: 80%;
  }
`;

const EmailButton = styled.div`
  position: absolute;
  width: calc(0.8 * 200px);
  height: calc(0.7 * 100px);
  border-radius: 16px;
  border: 2px solid #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  .btnWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .close, p {
    filter: blur(0);
    transition: all 0.2s ease-in-out;
  }

  .open {
    position: absolute;
    opacity: 0;
    filter: blur(10px);
    transition: all 0.3s ease-in-out;
  }

  svg {
    font-size: 2rem;
    margin-left: 0.4rem;
  }
  &:hover {
    .open {
      opacity: 1;
      filter: blur(0);
    }
    .close, p {
      filter: blur(0);
      opacity: 0;
    }
  }
`

const ButtonV2 = styled.div`
  /* https://freefrontend.com/css-buttons/ */
  /* https://codepen.io/dev_loop/pen/agqYaN */
  /* width: calc(4 * 200px);
  height: calc(4 * 100px); */
  display: flex;
  justify-content: center;
  align-items: center;
  &.ani {
    transform: translateY(200%) rotate(0);
    animation: fallButton 1.2s linear;
  }

  .button {
    position: relative;
    width: calc(0.8 * 200px);
    height: calc(0.7 * 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    margin: 0 0.8rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0, 0.22, 0.3, 1);
    border-radius: 16px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }

    a {
      color: #fff;
      font-size: 1rem;
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    &._1 {
      background: #2980b9;
    }
    &._2 {
      background: #8e44ad;
    }
    &._3 {
      background: #16a085;
    }
    &._4 {
      background: #e74c3c;
    }

    .back {
      position: absolute;
      width: 0;
      height: 0;
      filter: url(#filter);
      border-radius: 50%;
      z-index: 5;
      transition: all 2.5s cubic-bezier(0.1, 0.22, 0.3, 1);
    }

    &._1 .back {
      left: -50%;
      top: -50%;
      background: #27ae60;
    }
    &._2 .back {
      right: -50%;
      top: -50%;
      background: #c0392b;
    }
    &._3 .back {
      left: -50%;
      bottom: -50%;
      background: #34495e;
    }
    &._4 .back {
      right: -50%;
      bottom: -50%;
      background: #2980b9;
    }

    &:hover .back {
      width: calc(2 * 200px);
      height: calc(2 * 100px);
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
  .button {
    margin: 0.8rem 0;
  }

  @keyframes fallButton {
    0%{
    transform: translateY(0) rotate(0);
    }
  15% {
    transform: translateY(15%) rotate(15deg);
  }
  50% {
    transform: translateY(15%) rotate(15deg);
  }
  75% {
    transform: translateY(200%) rotate(15deg);
  }
  100% {
    transform: translateY(200%) rotate(15deg);
  }
}
`;

const Button = styled.button`
  /* background-color: ${Colors.primary};
  align-self: center;
  color: #eee;
  font-size: 1rem;
  border-radius: 0.375rem;
  padding: 0.5rem 0.4rem;
  border: 0; */
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  outline: none;
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
  margin: 1rem 0;

  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;