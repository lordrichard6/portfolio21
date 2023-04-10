import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

import SmallHexagon from "./smallHexagon";

import HobbyImg from "../../../../assets/images/homepage/hobby_04.png";
import MiaCook from "../../../../assets/images/homepage/mia_cook.png";
import AniCook from "../../../../assets/images/homepage/ani_cook.gif";

export default function HobbiesComponent() {
  let { t } = useTranslation();
  let router = useRouter();

  return (
    <Container className="flex justify-center items-center">
      <SmallHexagon title="Cook" img={HobbyImg} imgDesc="eating fallout" />
      <Text id="text_04">
        <h2
          className={router.locale === "pt" ? "portuguese" : ""}
          data-shadow={t("home:hobbies_title04_01")}
        >
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
    </Container>
  );
}

const Container = styled.div`
  h2,
  h3 {
    z-index: 1;
    /* display: inline-block; */
    text-align: center;
    color: white;
    font-family: "Righteous", serif;
    font-size: 8em;
    line-height: 1;
    text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
    &:after {
      /* content: attr(data-shadow); */
      position: absolute;
      top: 0.06em;
      left: 0.06em;
      z-index: -1;
      text-shadow: none;
      background-image: linear-gradient(
        45deg,
        transparent 45%,
        hsla(48, 20%, 90%, 1) 45%,
        hsla(48, 20%, 90%, 1) 55%,
        transparent 0
      );
      background-size: 0.05em 0.05em;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shad-anim 15s linear infinite;
    }

    @media screen and (max-width: 764px) {
      font-size: 3.4rem;
      line-height: 0.8;
    }

    @keyframes shad-anim {
      0% {
        background-position: 0 0;
      }
      0% {
        background-position: 100% -100%;
      }
    }
    &:nth-child(1) {
      transform: translate(0, 0) rotate(-10deg);

      &.portuguese {
        transform: translate(-5%, -140%) rotate(-10deg);
      }
    }
    &:nth-child(2) {
      text-align: right;
      margin-right: 10rem;
      @media screen and (max-width: 764px) {
        margin-right: 1rem;
        font-size: 4rem;
      }
    }
    &:nth-child(3) {
      transform: translate(0, 0) rotate(10deg);
    }
  }
  h3 {
    font-size: 3.5rem;
    line-height: 1em;
    transform: translate(0, 0) rotate(10deg);
    text-shadow: 0.06em 0.06em 0 rgb(179, 101, 77);
    margin-top: 2rem;
    &:after {
      top: 0.15em;
      left: 0.15em;
    }

    @media screen and (max-width: 764px) {
      font-size: 1.6em;
      margin-top: 0.5rem;
    }
  }
  .gif {
    position: absolute;
    width: 140px;
    top: 50%;
    left: 50%;
    transform: translate(-150%, 130%);
    @media screen and (max-width: 764px) {
      width: 70px;
      transform: translate(-250%,-360%);
    }
  }
  .cook {
    position: absolute;
    width: 180px;
    top: 10%;
    right: 38%;
    transform: translate(50%, 20%);
    z-index: 0;
    @media screen and (max-width: 764px) {
      width: 70px;
      transform: translate(70%,-50%);
    }
  }
`;

const Text = styled.div`
  z-index: 99;
  position: absolute;
  height: 700px;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  filter: blur(30px) brightness(10);
  transition: all 500ms ease-in-out;

  @media screen and (max-width: 764px) {
    top: 55%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 250px;
  }
`;
