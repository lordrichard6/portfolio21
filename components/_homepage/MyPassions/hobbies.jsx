import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import Hobby_01 from "../../../assets/images/homepage/hobby_01.png";
import Hobby_02 from "../../../assets/images/homepage/hobby_02.png";
import Hobby_03 from "../../../assets/images/homepage/hobby_03.png";
import Hobby_04 from "../../../assets/images/homepage/hobby_04.png";

export default function HobbiesComponent() {
  let { t } = useTranslation();
  const br = `\n`;

  const code1 = `“if (☕️ === true) {`;
  const code2 = `code( );`;
  const code3 = `} else {`;
  const code4 = `fetch(☕️);"`;
  const code5 = `}"`;

  return (
    <HobbyElements>
      <Hobby className="hobby__01">
        <Image src={Hobby_01} layout="responsive" alt="" />
      </Hobby>
      <Text id="text_01">
        <h2>FITNESS_&_GYM</h2>
        <h3>“Sweat is your fat crying!”</h3>
      </Text>
      <Hobby className="hobby__02">
        <Image src={Hobby_02} layout="responsive" alt="" />
      </Hobby>
      <Text id="text_02">
        <h2>CODE_&_LEARN</h2>
        <h3>
          {code1}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{code2}
          <br />
          &nbsp;&nbsp;{code3}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{code4}
          <br />
          &nbsp;&nbsp;{code5}
        </h3>
      </Text>
      <Hobby className="hobby__03">
        <Image src={Hobby_03} layout="responsive" alt="" />
      </Hobby>
      <Text id="text_03">
        <h2>HIKING_&_NATURE</h2>
        <h3>
          “The nature holds answers to questions man has not yet learned to
          ask.”🗻🌊
        </h3>
      </Text>
      <Hobby className="hobby__04">
        <Image src={Hobby_04} layout="responsive" alt="" />
      </Hobby>
      <Text id="text_04">
        <h2>COOK_&_INVENT</h2>
        <h3>“STRESSED is DESSERTS spelled backwards.”</h3>
      </Text>
    </HobbyElements>
  );
}

const HobbyElements = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 764px) {
    height: 80vh;
  }

  .hobby__01:hover + #text_01 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  .hobby__02:hover + #text_02 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  .hobby__03:hover + #text_03 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  .hobby__04:hover + #text_04 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
`;

const Hobby = styled.div`
  position: absolute;
  width: 250px;
  height: auto;
  z-index: 2;
  cursor: pointer;

  @media screen and (max-width: 764px) {
    width: 100px;
    height: 100px;
    position: absolute;
  }
  &.hobby__01 {
    left: 20%;
    transform: translateX(-20%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 130px;
      left: 0;
      transform: translateX(0);
    }
  }
  &.hobby__02 {
    left: 80%;
    transform: translateX(-80%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 60px;
      left: 30%;
      transform: translateX(-30%);
    }
  }
  &.hobby__03 {
    left: 20%;
    top: 980px;
    transform: translateX(-20%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 60px;
      left: 70%;
      transform: translateX(-70%);
    }
  }
  &.hobby__04 {
    left: 80%;
    top: 980px;
    transform: translateX(-80%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 120px;
      left: 100%;
      transform: translateX(-100%);
    }
  }
`;

const Text = styled.div`
  z-index: 2;
  position: absolute;
  top: 330px;
  left: 75px;
  width: 400px;
  opacity: 0;
  filter: blur(30px) brightness(10);
  transition: all 500ms ease-in-out;

  @media screen and (max-width: 764px) {
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
  }

  h2 {
    font-size: 3rem;
    @media screen and (max-width: 764px) {
      font-size: 1.6rem;
      text-align: center;
    }
  }
  h3 {
    font-size: 2rem;
    line-height: 2;
    @media screen and (max-width: 764px) {
      font-size: 1.2rem;
      line-height: 1.5;
      margin-left: 22px;
    }
  }
`;