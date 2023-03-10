import styled from "styled-components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import NoGlasses from "../../../assets/images/homepage/about-me.png";
import WithGlasses from "../../../assets/images/homepage/about-me_g.png";

export default function AboutPictureComponent() {
  let { t } = useTranslation();

  return (
    <RightContainer>
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
    /* width: 550px; */
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
