import styled from "styled-components";
import Image from "next/image";
// import { FaInfo } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import NoGlasses from "../../../assets/images/homepage/about-me.png";
import WithGlasses from "../../../assets/images/homepage/about-me_g.png";
// import SocialLinksComponent from "../../Footer/social_links";

export default function AboutPictureComponent() {
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

  return (
    <RightContainer
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
    >
      <div className="wrapper">
        <div className="outer outer-layer">
          <div className="stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
          {/* INFO BOX */}
          {/* <div className="card" tabIndex="0">
            <span className="card__infoicon">
              <FaInfo className="fa fa-info" />
            </span>
            <h1 className="card__title">{t("home:about_i_title")}</h1>
            <SocialLinksComponent color="yellow" />

            <p className="card__credits">
              {t("home:about_i_text")} -{" "}
              <strong>paulolopesreizinho@gmail.com</strong>
            </p>
          </div> */}
          <figure className="picture">
            <Image className="me" src={NoGlasses} alt="paulo reizinho" />
          </figure>
          <figure className="picture glasses">
            <Image className="me" src={WithGlasses} alt="paulo reizinho" />
          </figure>
        </div>
      </div>
    </RightContainer>
  );
}

const RightContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  margin-left: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }

  .outer {
    position: relative;
    background: url("/pattern.png"),
      radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
    width: 550px;
    height: 750px;
    z-index: 1;
    overflow: hidden;
    border-radius: 16px;

    @media screen and (max-width: 764px) {
      width: 90%;
      height: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (max-width: 412px) {
      width: 95%;
      height: 500px;
    }

    .card {
      position: relative;
      z-index: 2;

      padding: 42px 32px;

      clip-path: circle(5% at 95% 11%);
      transition: all ease-in-out 0.3s;
      background-color: #ffffff;

      @media screen and (max-width: 764px) {
        clip-path: circle(6% at 93% 10%);
      }

      @media screen and (max-width: 412px) {
        clip-path: circle(7% at 90% 11%);
      }

      /* &__infoicon {
        position: absolute;

        top: 8px;
        right: 14px;

        font-size: 2em;
        color: #20303c;
        transition: ease-out 0.3s;

        @media screen and (max-width: 764px) {
          font-size: 1.75em;
          top: 16px;
          right: 18px;
        }

        @media screen and (max-width: 412px) {
          font-size: 1.75em;
          top: 16px;
          right: 18px;
        }
      } */
      /* &__title {
        color: #20303c;
        margin: 0;

        font-size: 3em;
        line-height: 1.8;

        @media screen and (max-width: 412px) {
          font-size: 2em;
          line-height: 1.2;
        }
      } */
      /* &__description {
        margin: 0;

        font-size: 1.1em;
        line-height: 1.6;
      } */
      /* &__credits {
        strong {
          color: #0094b5;
        }
        margin: 0;
        padding: 4px 0;

        font-size: 1.1em;
      } */

      /* &:hover,
      &:focus {
        clip-path: circle(75%);
        border-radius: 20px;
        box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12),
          0px 3px 18px rgba(0, 0, 0, 0.08);
        background: #ffffff;

        outline: none;
        .card__infoicon {
          opacity: 0;
        }
      } */
      /* &:focus {
        box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12),
          0px 3px 18px rgba(0, 0, 0, 0.08), 0px 0px 0px 4px rgba(0, 0, 0, 0.2);
      } */
    }

    .picture {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 700px;
      z-index: 0;
      /* filter: grayscale(100%); */
      transition: all 500ms ease-in-out;

      @media screen and (max-width: 764px) {
        width: 600px;
      }
      @media screen and (max-width: 412px) {
        width: 400px;
      }

      .me {
        width: 100%;
        height: auto;
      }

      &.glasses {
        &:hover {
          /* filter: grayscale(0); */
          opacity: 0;
        }
      }
    }
  }
`;
