import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import SmallHexagon from "./smallHexagon";

import HobbyImg from "../../../../assets/images/homepage/hobby_02.png";
import AniCode from "../../../../assets/images/homepage/ani_code.gif";

export default function Hobby2() {
  let { t } = useTranslation();

  const code1 = `“if (☕️ === true) {`;
  const code2 = `code( );`;
  const code3 = `} else {`;
  const code4 = `fetch(☕️);`;
  const code5 = `}"`;

  return (
    <Container className="flex justify-center items-center">
      <SmallHexagon title="Coding" img={HobbyImg} imgDesc="coding fallout" />
      <Text id="text_02">
        <h2>{t("home:hobbies_title02_01")}</h2>
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
    </Container>
  );
}

const Container = styled.div`
  h2,
  h3 {
    text-align: center;
    top: 0;
    left: 0;
    font-family: "Mr Dafoe";
    margin: 0;
    font-size: 8em;
    font-weight: 400;
    color: white;
    transform: rotate(-7deg);
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;

    @media screen and (max-width: 764px) {
      font-size: 3.5em;
    }
  }
  h2 {
    line-height: 1;
    animation: flashingPink 5s ease-in-out infinite;

    @keyframes flashingPink {
      0% {
        text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
      }
      38% {
        text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
      }
      41% {
        text-shadow: 0 0 0.08em #fff, 0 0 0.4em #fe05e1, 0 0 0.6em #fe05e1;
      }
      44% {
        text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
      }
      47% {
        text-shadow: 0 0 0.08em #fff, 0 0 0.4em #fe05e1, 0 0 0.6em #fe05e1;
      }
      50% {
        text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
      }
      88% {
        text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
      }
      91% {
        text-shadow: 0 0 0.1em #fff, 0 0 0.6em #fe05e1, 0 0 0.8em #fe05e1;
      }
      94% {
        text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
      }
      100% {
        text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
      }
    }
  }
  h3 {
    color: black;
    font-size: 3em;
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #06f512, 0 0 0.3em #06f512;

    @media screen and (max-width: 764px) {
      font-size: 1.8rem;
      line-height: 1;
    }
    &:nth-child(4) {
      margin-left: 3rem;
    }
    &:nth-child(5) {
      margin-right: 8rem;

      @media screen and (max-width: 764px) {
      }
    }
    &:nth-child(7) {
      margin-right: 14rem;

      @media screen and (max-width: 764px) {
      }
    }
  }
  .gif {
    position: absolute;
    width: 180px;
    top: 50%;
    right: 0;
    transform: translate(-60%, 0%) rotate(-7deg);
    @media screen and (max-width: 764px) {
      width: 60px;
      transform: translate(-10%,-350%) rotate(-7deg);
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
