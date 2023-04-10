import React from "react";
import styled from "styled-components";

import useTranslation from "next-translate/useTranslation";
import { EntryAnimation } from "../../_shared";
import { bringUp } from "../../../utilities/framer-animations";

export default function AboutQuote() {
  let { t } = useTranslation();
  return (
    <Container>
      <BackgroundGradient></BackgroundGradient>
      <EntryAnimation style="quote" animation={bringUp}>
        <div className="text">
          <div className="r">“{t("common:gallery_quote_01")}”</div>
          <div className="g">“{t("common:gallery_quote_01")}”</div>
          <div className="b">“{t("common:gallery_quote_01")}”</div>
          <i>— Nikola Tesla</i>
        </div>
      </EntryAnimation>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 460px;
  display: flex;
  justify-content: center;
  .quote {
    margin-top: 10rem;
    z-index: 1;

    /* h2 {
      font-size: 32px;
      line-height: 50px;
      letter-spacing: 1px;
      color: #d9d9d9;
      text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
      strong {
        font-weight: 600;
      }
      i {
        font-weight: 300;
      }
      @media screen and (max-width: 576px) {
        font-size: 24px;
        line-height: 40px;
      }
    } */
    .text,
    .text > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .text {
      > * {
        font-size: 32px;
        line-height: 50px;
        letter-spacing: 1px;
        width: 680px;
        animation: giggle 1s ease infinite;
        mix-blend-mode: difference;
        @media screen and (max-width: 576px) {
          width: 320px;
          font-size: 24px;
          line-height: 40px;
        }
      }
      .r {
        color: #f00;
        left: -0.5px;
      }
      .g {
        color: #0f0;
        animation-delay: -0.67s;
      }
      .b {
        color: #00f;
        animation-delay: -0.33s;
        left: 0.5px;
      }
      i {
        top: 50px;
        left: 100px;
        color: #fff;
        font-weight: 200;
        font-size: 26px;
        @media screen and (max-width: 576px) {
          font-size: 18px;
          line-height: 40px;
          top: 60px;
          left: 180px;
        }
      }
    }

    @keyframes giggle {
      0%,
      100% {
        transform: translate(-50%, -50%) translateY(-2px);
      }
      50% {
        transform: translate(-50%, -50%) translateY(2px);
      }
    }
    @keyframes lines {
      0% {
        background-position: 0px 0px;
      }
      100% {
        background-position: 0px 25px;
      }
    }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    179.46deg,
    #5c4963 5.46%,
    rgba(233, 162, 129, 0.2) 68.65%,
    rgba(187, 122, 121, 0) 89.54%
  );
`;
