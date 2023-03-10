import styled from "styled-components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button01Component from "./button";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export default function CVButton() {
  const [btnGone, setBtnGone] = useState(0);

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
    window.open(
      "mailto:paulolopesreizinho@gmail.com?subject=CV%20Request&body=Dear%20Paulo%20can%20you%20send%20me%20your%20awesome%20CV?"
    );
  };

  return (
    <SectionContainer
      as={motion.div}
      ref={ref}
      variants={bringFromRight}
      initial="hidden"
      animate={controls}
      className="mt-6"
    >
      <ContactWrapper>
        <EmailButton>
          <div onClick={openMail} className="btnWrapper text-slate-100">
            <p>Ask me by</p>
            <MdEmail className="close" alt="send paulo reizinho email" />
            <SiMinutemailer className="open" alt="send paulo reizinho email" />
          </div>
        </EmailButton>
        <Button01Component
          onClick={() => setBtnGone(1)}
          animation={btnGone ? "ani" : null}
          color="_1"
          text={t("common:downloadCV")}
        />
      </ContactWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 764px) {
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
  .ani {
    transform: translateY(800%) rotate(0);
    animation: fallButton 1.2s linear;
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

  .close,
  p {
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
    .close,
    p {
      filter: blur(0);
      opacity: 0;
    }
  }
  @keyframes fallButton {
    0% {
      transform: translateY(0) rotate(0);
    }
    15% {
      transform: translateY(15%) rotate(15deg);
    }
    50% {
      transform: translateY(15%) rotate(15deg);
    }
    75% {
      transform: translateY(800%) rotate(15deg);
      opacity: 1;
    }
    100% {
      transform: translateY(800%) rotate(15deg);
      opacity: 0;
    }
  }
`;
