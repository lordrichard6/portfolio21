import styled from "styled-components";
import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

export default function TitleComponent() {
  const [offsetY, setOffsetY] = useState(0);

  let { t } = useTranslation();

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <h1 style={{ transform: `translate(${offsetY * 0.3}px, ${offsetY * 0.2}px)` }}>{t("common:about_me")}</h1>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 55%;
  left: 100px;
  z-index: 1;
  width: 100%;
  height: auto;
  animation: showText 3s ease-in-out;

  @media screen and (max-width: 768px) {
    top: 60%;
    left: 0;
  }

  h1 {
    font-size: calc(20px + 18vh);
    line-height: calc(20px + 20vh);
    /*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
  color: #fccaff; */
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
      0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
    font-family: "Sacramento", cursive;
    animation: blink 12s infinite;

    @media screen and (max-width: 768px) {
      font-size: calc(20px + 12vh);
      line-height: 0.5;
      text-align: center;
    }
  }

  @-webkit-keyframes blink {
    20%,
    24%,
    55% {
      color: #111;
      text-shadow: none;
    }

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      /*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
      text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
        0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
      color: #fff6a9;
    }
  }

  @keyframes blink {
    20%,
    24%,
    55% {
      color: #111;
      text-shadow: none;
    }

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      /*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
      text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
        0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
      color: #fff6a9;
    }
  }

  @keyframes showText {
    0% {
      transform: translateY(80%) rotate(-30deg);
    }
    90% {
      transform: translateY(-5%) rotate(-5deg);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }
`;
