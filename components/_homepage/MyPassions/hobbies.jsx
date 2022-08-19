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
        <div className="image">
          <Image src={Hobby_01} layout="responsive" alt="" />
        </div>
      </Hobby>
      <Text id="text_01">
        <h2>FITNESS_&_GYM</h2>
        <h3>“Sweat is your fat crying!”</h3>
      </Text>
      <Hobby className="hobby__02">
        <div className="image">
          <Image src={Hobby_02} layout="responsive" alt="" />
        </div>
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
        <div className="image">
          <Image src={Hobby_03} layout="responsive" alt="" />
        </div>
      </Hobby>
      <Text id="text_03">
        <h2>HIKING_&_NATURE</h2>
        <h3>
          “The nature holds answers to questions man has not yet learned to
          ask.”🗻🌊
        </h3>
      </Text>
      <Hobby className="hobby__04">
        <div className="image">
          <Image src={Hobby_04} layout="responsive" alt="" />
        </div>
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
  height: 1680px;

  @media screen and (max-width: 764px) {
    height: 910px;
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
  width: 200px;
  height: 200px;
  z-index: 2;
  cursor: pointer;
  border-radius: 50%;
  /* clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); */
  background: #20303c;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms ease-in-out;
  &:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;  
  }

  @media screen and (max-width: 764px) {
    width: 140px;
    height: 140px;
  }

  .image {
    transition: all 500ms ease-in-out;
    width: 100%;
    &:hover {
      transform: scale(1.4);
    }
  }

  &.hobby__01 {
    left: 20%;
    top: 50px;
    transform: translateX(-20%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 470px;
      left: 20%;
      transform: translateX(-20%);
    }
  }
  &.hobby__02 {
    left: 80%;
    top: 50px;
    transform: translateX(-80%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 10px;
      left: 20%;
      transform: translateX(-20%);
    }
  }
  &.hobby__03 {
    left: 20%;
    top: 990px;
    transform: translateX(-20%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 10px;
      left: 80%;
      transform: translateX(-80%);
    }
  }
  &.hobby__04 {
    left: 80%;
    top: 990px;
    transform: translateX(-80%);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 470px;
      left: 80%;
      transform: translateX(-80%);
    }
  }
`;

const Text = styled.div`
  z-index: 100;
  position: absolute;
  top: 330px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  opacity: 0;
  filter: blur(30px) brightness(10);
  transition: all 500ms ease-in-out;
  text-shadow: 0px 3px 30px #000000, 0px 3px 30px #000000, 0px 3px 30px #000000,
    0px 3px 30px #000000, 0px 3px 30px #000000;

  @media screen and (max-width: 764px) {
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    @media screen and (max-width: 764px) {
      font-size: 1.6rem;
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
