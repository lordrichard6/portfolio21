import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { hobbies } from "../../../assets/data";
import HobbyComponent from "./hobby";
import Hexagon from "../../../assets/images/homepage/hexagon_big.svg";
import Polygons from "../../../assets/images/homepage/poligons.svg";
import Evolution from "../../../assets/images/homepage/evolution.png";
import Hobby_01 from "../../../assets/images/homepage/hobby_01.png";
import Hobby_02 from "../../../assets/images/homepage/hobby_02.png";
import Hobby_03 from "../../../assets/images/homepage/hobby_03.png";
import Hobby_04 from "../../../assets/images/homepage/hobby_04.png";

export default function MyPassions() {
  let { t } = useTranslation();

  const code = ['“if (☕️ === true) {', <br />, "code( );",<br />, "} else {",<br />, "fetch(☕️);",<br />,"}" ]


  return (
    <SectionContainer>
      <BackgroundGradient></BackgroundGradient>
      <h1>{t("home:hobbies_title")}</h1>
      <HexagonBig>
        <Image src={Hexagon} alt="hexagon" />
      </HexagonBig>
      <HobbyElements>
        {/* <div className="quote" id="quote">
          <h2>dsfsdfsd sdfsdfsd dsf sfsdf sdfsdf sdfsdfs</h2>
        </div> */}
        <div className="hobby hobby__01" id="hobby">
          <Image src={Hobby_01} layout="responsive" alt="" />
          <div className="text">
            <h1>FITNESS_&_GYM</h1>
            <h2>“Sweat is your fat crying!”</h2>
          </div>
        </div>
        <div className="hobby hobby__02">
          <Image src={Hobby_02} layout="responsive" alt="" />
          <div className="text">
            <h1>CODE_&_LEARN</h1>
            <h2>{code}</h2>
          </div>
        </div>
        <div className="hobby hobby__03">
          <Image src={Hobby_03} layout="responsive" alt="" />
          <div className="text">
            <h1>HIKING_&_NATURE</h1>
            <h2>“The nature holds answers to questions man has not yet learned to ask.”🗻🌊</h2>
          </div>
        </div>
        <div className="hobby hobby__04">
          <Image src={Hobby_04} layout="responsive" alt="" />
          <div className="text">
            <h1>COOK_&_INVENT</h1>
            <h2>“STRESSED is DESSERTS spelled backwards.”</h2>
          </div>
        </div>
      </HobbyElements>
      <div className="evolution">
        <Image src={Evolution} layout="fixed" width="1600px" height="580px" alt="" />
      </div>
      <div className="polygons">
        <Image src={Polygons} layout="responsive" alt="" />
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 120vh;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  overflow: hidden;
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: linear-gradient(to right, #20303c, #478995, #b2d6bc);

  @media screen and (max-width: 764px) {
    min-height: unset;
    padding: 4rem 0;
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 1px 2px 3px #00000081;

    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
    @media screen and (max-width: 764px) {
      margin: 0;
    }
  }

  .evolution {
    bottom: -70px;
    left: 290px;
    width: 1600px;
    position: absolute;
    @media screen and (max-width: 764px) {
      left: 0;
    }
  }

  .polygons {
    bottom: -90px;
    right: 0;
    width: 485px;
    position: absolute;
  }
`;

const HexagonBig = styled.div`
  position: absolute;
  left: -200px;
  margin-top: 180px;
  z-index: 1;

  @media screen and (max-width: 764px) {
    width: 70%;
    left: 50%;
    top: 130px;
    transform: translateX(-50%);
  }
`;

const HobbyElements = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media screen and (max-width: 764px) {
    height: 80vh;
  }

  .quote {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    z-index: 2;
    font-size: 36px;
    width: 450px;
  }

  #hobby:hover ~ #quote {
    /* opacity: 0; */
    /* left: -50%; */
    color: blue;
  }

  .hobby {
    width: 250px;
    height: auto;
    z-index: 2;
    margin-right: auto;
    cursor: pointer;

    @media screen and (max-width: 764px) {
      width: 100px;
      height: 100px;
      position: absolute;
    }

    :hover {
      .text {
        opacity: 1;
        left: 0;
      }
    }

    .text {
      z-index: 2;
      position: absolute;
      top: 70%;
      left: -50%;
      width: 400px;
      transform: translate(5%, -100%);
      opacity: 0;
      transition: all 0.4s ease-in-out;

      h1 {
        @media screen and (max-width: 764px) {
          font-size: 1.8rem;
        }
      }
      h2 {
        font-size: 3rem;
        @media screen and (max-width: 764px) {
          font-size: 1.2rem;
        }
      }
    }

    &__01 {
      margin-left: 70px;
      @media screen and (max-width: 764px) {
        margin: 0;
        top: 130px;
        left: 0;
      }

      .text {
        top: 60%;
        @media screen and (max-width: 764px) {
          top: 46px;
          left: 0;
          transform: translate(45%, 50%);
        }
      }
    }
    &__02 {
      margin-left: 514px;
      margin-bottom: 200px;
      @media screen and (max-width: 764px) {
        margin: 0;
        top: 60px;
        left: 25%;
      }
      .text {
        @media screen and (max-width: 764px) {
          top: -50px;
          left: -50%;
          transform: translate(0, 100%);
        }
      }
    }
    &__03 {
      margin-left: 514px;
      @media screen and (max-width: 764px) {
        margin: 0;
        top: 60px;
        left: 50%;
      }
      .text {
        @media screen and (max-width: 764px) {
          top: 16px;
          left: -50% !important;
          transform: translate(-28%, 100%);
        }
      }
    }
    &__04 {
      margin-left: 70px;
      @media screen and (max-width: 764px) {
        margin: 0;
        top: 120px;
        left: 75%;
      }
      .text {
        top: 65%;
        @media screen and (max-width: 764px) {
          top: 46px;
          left: -50% !important;
          transform: translate(-70%, 50%);
        }
      }
    }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;

  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    #0f2027 0%,
    rgba(15, 32, 39, 0.2) 38.54%,
    rgba(15, 32, 39, 0) 100%
  );
`;
