import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ImCross } from "react-icons/im";

export default function Modal({ clickedImg, setClickedImg }) {
  const handleClick = () => {
    setClickedImg(null);
  };

  const bringUp = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  const bringPicture = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: 1.5, duration: 3.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 500,
    },
  };

  const bringCross = {
    visible: {
      x: 0,
      transition: { delay: 2.5, duration: 3.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      x: -1500,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
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
    <Container
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
    >
      <div className="picture-wrapper">
        <motion.div
          className="close"
          variants={bringCross}
          initial="hidden"
          animate={controls}
        >
          <ImCross style={{ cursor: "pointer" }} onClick={handleClick} />
        </motion.div>
        <motion.figure
          className="image-container"
          variants={bringPicture}
          initial="hidden"
          animate={controls}
        >
          <Image className="mainImage" src={clickedImg} alt="" quality="100" />
        </motion.figure>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #20303ca7;
  z-index: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .picture-wrapper {
    width: 60%;
    height: 90%;
    @media screen and (min-width: 1800px) {
      width: 40%;
    }
    @media screen and (max-width: 992px) {
      width: 80%;
    }
    @media screen and (max-width: 576px) {
      width: 90%;
      top: 10%;
      padding-top: 28px;
    }

    .mainImage {
      object-fit: cover;
      height: auto;
      width: 100%;
    }
  }
  .close {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
  }
  .image-container {
    max-height: 100%;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
  }
`;
