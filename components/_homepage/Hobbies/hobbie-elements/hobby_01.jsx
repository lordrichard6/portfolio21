import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

import SmallHexagon from "./smallHexagon";

import HobbyImg from "../../../../assets/images/homepage/hobby_01.png";
import AniFat from "../../../../assets/images/homepage/ani_fat.gif";

export default function Hobby1() {
  let { t } = useTranslation();
  let router = useRouter();

  return (
    <Container className="flex justify-center items-center">
      <SmallHexagon title="Gym" img={HobbyImg} imgDesc="strong fallout" />
      <Text id="text_01">
        <h2>{t("home:hobbies_title01_01")}</h2>
        <h2>&</h2>
        <h2>{t("home:hobbies_title01_02")}</h2>
        <h3 className={router.locale === "pt" ? "portuguese" : ""}>
          “{t("home:hobbies_text01")}”
        </h3>
        <figure className="gif">
          <Image src={AniFat} responsive alt="fat gif" />
        </figure>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  h2,
  h3 {
    font-size: 6rem;
    text-align: center;
    color: #fcedd8;
    font-weight: 700;
    transform: translate(0, 0%) rotate(-15deg);
    text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032,
      15px 15px 0px #46b59b, 20px 20px 0px #017e7f, 25px 25px 0px #052939;

    @media screen and (max-width: 764px) {
      font-size: 2.5rem;
      text-shadow: 3px 3px 0px #eb452b, 6px 6px 0px #efa032, 9px 9px 0px #46b59b,
        12px 12px 0px #017e7f, 15px 15px 0px #052939;
    }
  }
  h3 {
    color: #dbec45;
    font-size: 3.5rem;

    @media screen and (max-width: 764px) {
      font-size: 1.5rem;
      &.portuguese {
        font-size: 1.5rem;
      }
    }
  }
  .gif {
    position: absolute;
    width: 260px;
    top: 0;
    left: 0;
    border-radius: 16px;
    overflow: hidden;
    transform: translate(30%, 140%) rotate(-10deg);

    @media screen and (max-width: 764px) {
      width: 120px;
      transform: translate(-10%, 120%) rotate(-10deg);
    }
  }
`;

export const Text = styled.div`
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
