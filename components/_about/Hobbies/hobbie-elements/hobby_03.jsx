import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

import SmallHexagon from "./smallHexagon";

import HobbyImg from "../../../../assets/images/homepage/hobby_03.png";
import Mountains from "../../../../assets/images/homepage/mountains.png";

import AniBear from "../../../../assets/images/homepage/ani_bear.gif";

export default function Hobby3() {
  let { t } = useTranslation();
  let router = useRouter();

  return (
    <Container className="flex justify-center items-center">
      <SmallHexagon title="Outside" img={HobbyImg} imgDesc="natue fallout" />
      <Text className="md:pt-10" id="text_03">
        <h2 className={router.locale === "pt" ? "portuguese" : ""}>
          {t("home:hobbies_title03_01")}
        </h2>
        <h2 className={router.locale === "pt" ? "portuguese" : ""}>&</h2>
        <h2 className={router.locale === "pt" ? "portuguese" : ""}>
          {t("home:hobbies_title03_02")}
        </h2>
        <h3 className={router.locale === "pt" ? "portuguese" : ""}>
          “{t("home:hobbies_text03")}”
        </h3>
        <figure className="mountains">
          <Image src={Mountains} layout="responsive" alt="mountains shape" />
        </figure>
        <figure className="gif">
          <Image src={AniBear} layout="responsive" alt="bear gif" />
        </figure>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  h2,
  h3 {
    font-family: "Bangers", cursive;
    text-align: center;
    color: hsl(50, 50%, 50%);
    z-index: 2;
    font-size: 7rem;
    letter-spacing: 15px;
    text-transform: uppercase;
    line-height: 0.8;
    transform: translate(0, 0) rotate(-10deg);
    text-shadow: 1px 1px hsl(50, 50%, 45%), 2px 2px hsl(50, 50%, 40%),
      3px 3px hsl(50, 50%, 35%), 4px 4px hsl(50, 50%, 34%),
      5px 5px hsl(50, 50%, 33%), 6px 6px hsl(50, 50%, 32%),
      7px 7px hsl(50, 50%, 31%), 8px 8px hsl(50, 50%, 30%), 9px 9px #6f6325,
      10px 10px hsl(50, 50%, 28%), 10px 10px 30px rgba(0, 0, 0, 0.7);

    @media screen and (max-width: 764px) {
      font-size: 2.8rem;
      transform: translate(0, 0) rotate(-5deg);
    }

    // &.portuguese {
    //     font-size: 6em;
    //     @media screen and (max-width: 764px){
    //         font-size: 2.3em;
    //         letter-spacing: 10px;
    //     }
    // }
  }

  h3 {
    z-index: 3;
    font-size: 2rem;
    letter-spacing: 4px;
    line-height: 1;
    color: #adff2f;
    margin: 0 8rem;
    margin-top: 9.5rem;
    @media screen and (max-width: 764px) {
      font-size: 1rem;
      letter-spacing: 2px;
      margin: 0 0.4rem;
      margin-top: 4.5rem;
      &.portuguese {
        font-size: 0.75em;
        transform: translate(5%, 280%) rotate(-10deg);
      }
    }
  }
  .gif {
    z-index: 2;
    position: absolute;
    width: 150px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) rotate(-10deg);
    animation: bearWalking 12s ease-in-out infinite;
    @media screen and (max-width: 764px) {
      width: 75px;
      top: 18%;
    }
  }
  .mountains {
    position: absolute;
    width: 400px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) rotate(-10deg);
    @media screen and (max-width: 764px) {
      width: 200px;
      transform: translate(50%, -320%) rotate(-5deg);
    }
  }
  @keyframes bearWalking {
    0% {
      transform: translate(-50%, 0) rotate(-10deg) rotateY(0deg);
    }
    45% {
      transform: translate(180%, -40%) rotate(-10deg) rotateY(0deg);
    }
    50% {
      transform: translate(180%, -40%) rotate(-10deg) rotateY(180deg);
    }
    95% {
      transform: translate(-50%, 0) rotate(-10deg) rotateY(180deg);
    }
    100% {
      transform: translate(-50%, 0) rotate(-10deg) rotateY(0deg);
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
