import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";
import Button01Component from "../../Footer/button";
import { CgBrowser } from "react-icons/cg";

export default function Project({
  src,
  alt,
  title,
  text,
  link,
  tech,
  show,
  backgroundColor,
}) {
  const [btnGone, setBtnGone] = useState(0);

  let { t } = useTranslation();

  const bringUp = {
    visible: {
      opacity: 1,
      y: 0,
      // transition: { duration: 2.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 300,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
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
    <ProjectWrapper
      ref={ref}
      as={motion.div}
      variants={bringUp}
      initial="hidden"
      animate={controls}
      transition={{ delay: show, duration: 2.6, type: "spring", bounce: 0.4 }}
      className={backgroundColor}
    >
      <ImageWrapper className="image">
        <Image src={src} objectFit="cover" objectPosition="center" alt={alt} />
      </ImageWrapper>
      <div className="content">
        <h2>{title}</h2>
        <div className="icon">{tech}</div>
        <div className={`btnWrapper ${backgroundColor}`}>
          <a href={link} target="_blank" rel="noreferrer"><CgBrowser className="browser" alt="send paulo reizinho email" /></a>
        </div>
        <Button01Component
          onClick={() => setBtnGone(1)}
          animation={btnGone ? "ani" : null}
          color="_2"
          text={t("projects:dev_button")}
        />
      </div>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  flex: 0 0 33.333333%;

  @media screen and (min-width: 1600px) {
    flex: 0 0 25%;
  }
  @media screen and (max-width: 992px) {
    flex: 0 0 50%;
  }
  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    height: 360px;
  }

  &:hover {
    .image {
      filter: blur(5px);
      transform: scale(1.1);
      opacity: 0.2;
    }
    .content {
      opacity: 1;
      animation: bounce-in-top 1.1s both;
    }
  }

  &.blue {
    background: #0a212f;
  }
  &.red {
    background: #36100c;
  }
  &.yellow {
    background: #b5c021;
  }
  &.green {
    background: #2ec021;
  }
  &.lightpurple {
    background: #6b6b83;
  }
  &.orange {
    background: #f5af19;
  }
  &.lightblue {
    background: #00b4db;
  }
  &.darkpurple {
    background: #240b36;
  }
  &.strongred {
    background: #c31432;
  }

  .content {
    position: absolute;
    width: 100%;
    top: 20%;
    opacity: 0;

    .icon {
      font-size: 3rem;
    }

    .btnWrapper {
      z-index: 0;
      position: absolute;
      top: 64%;
      left: 50%;
      transform: translate(-50%, 0);
      width: calc(0.3 * 200px);
      height: calc(0.6 * 100px);
      /* background: #1d2124; */
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      filter: brightness(1);
      &:hover {
        svg {
          font-size: 2.5rem;
        }
      }
      svg {
        font-size: 2rem;
        transition: all 0.3s;
      }
      &.blue {
        background: #0a212f;
      }
      &.red {
        background: #36100c;
      }
      &.yellow {
        background: #b5c021;
      }
      &.green {
        background: #2ec021;
      }
      &.lightpurple {
        background: #6b6b83;
      }
      &.orange {
        background: #f5af19;
      }
      &.lightblue {
        background: #00b4db;
      }
      &.darkpurple {
        background: #240b36;
      }
      &.strongred {
        background: #c31432;
      }
    }

    .ani {
      transform: translateY(200%) rotate(0);
      animation: slide-out-blurred-top 0.65s
        cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    }
    @keyframes slide-out-blurred-top {
      0% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
      100% {
        -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
        transform: translateY(-1000px) scaleY(2) scaleX(0.2);
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0;
      }
    }
    @keyframes bounce-in-top {
      0% {
        -webkit-transform: translateY(-500px);
        transform: translateY(-500px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
      }
      38% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
      }
      55% {
        -webkit-transform: translateY(-65px);
        transform: translateY(-65px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      72% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      81% {
        -webkit-transform: translateY(-28px);
        transform: translateY(-28px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      90% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      95% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
`;
