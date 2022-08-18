import styled from "styled-components";
import Image from "next/image";

import coolGuy from "../../../assets/images/homepage/gallery_cool.png";
import Cat01 from "../../../assets/images/gallery/cat01.png";
import Cat02 from "../../../assets/images/gallery/cat02.png";
import Dog01 from "../../../assets/images/gallery/dog01.png";
import Dog02 from "../../../assets/images/gallery/dog02.png";
import Birds from "../../../assets/images/gallery/birds.png";
import Bird01 from "../../../assets/images/gallery/bird01.png";
import Bird02 from "../../../assets/images/gallery/bird02.png";
import Fin from "../../../assets/images/gallery/fin.png";
import Shark from "../../../assets/images/gallery/shark.png";

export default function GalleryAnimals() {

  return (
    <Container>
        <div className="cool">
          <Image src={coolGuy} alt="" objectFit="cover" />
        </div>
        <div className="cat01">
          <Image src={Cat01} alt="" />
        </div>
        <div className="cat02">
          <Image src={Cat02} alt="" />
        </div>
        <div className="dog01">
          <Image src={Dog01} alt="" />
        </div>
        <div className="dog02">
          <Image src={Dog02} alt="" />
        </div>
        <div className="bird01">
          <Image src={Bird01} alt="" />
        </div>
        <div className="bird02">
          <Image src={Bird02} alt="" />
        </div>
        <div className="birds">
          <Image src={Birds} alt="" />
        </div>
        <div className="fin">
          <Image src={Fin} alt="" />
        </div>
        <div className="shark">
          <Image src={Shark} alt="" />
        </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  .cool {
    position: absolute;
    top: -208px;
    left: 680px;
    @media screen and (max-width: 1600px) {
      left: 480px;
    }
    @media screen and (max-width: 1200px) {
      left: 340px;
      top: -272px;
    }
    @media screen and (max-width: 992px) {
      left: 286px;
      top: -235px;
    }
    @media screen and (max-width: 576px) {
      left: 40px;
      top: -178px;
    }
  }

  .cat01 {
    position: absolute;
    display: none;
    top: 516px;
    left: 208px;
    transform: scaleX(-1);
    height: auto;
    width: 260px;
    z-index: 2;
    @media screen and (max-width: 1600px) {
      display: block;
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .cat02 {
    position: absolute;
    top: 480px;
    right: 0;
    transform: scaleX(-1);
    height: auto;
    width: 200px;
    z-index: 2;
    @media screen and (min-width: 1600px) {
      left: 60px;
      top: -120px;
    }
    @media screen and (max-width: 1600px) {
      display: none;
    }
    @media screen and (max-width: 1200px) {
      display: block;
    }
    @media screen and (max-width: 992px) {
      left: 62px;
      top: 360px;
      display: block;
    }
    @media screen and (max-width: 576px) {
      left: 202px;
      top: 338px;
      width: 160px;
    }
  }

  .dog01 {
    position: absolute;
    top: 0;
    right: 0;
    filter: brightness(0);
    height: auto;
    width: 300px;
    z-index: 2;
    @media screen and (min-width: 1600px) {
      left: 405px;
      top: -106px;
    }
    @media screen and (max-width: 1600px) {
      right: 0;
      top: 132px;
      transform: scaleX(-1);
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
    @media screen and (max-width: 992px) {
      display: block;
      top: -108px;
      left: -50px;
    }
    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  .dog02 {
    position: absolute;
    left: -5px;
    top: 290px;
    transform: scaleX(-1);
    filter: brightness(0);
    height: auto;
    width: 260px;
    z-index: 2;
    @media screen and (min-width: 1200px) {
      display: none;
    }
    @media screen and (max-width: 992px) {
      display: none;
    }
    @media screen and (max-width: 576px) {
      display: block;
      width: 200px;
      top: 524px;
    }
  }

  .bird01 {
    position: absolute;
    top: 480px;
    right: 0;
    transform: scaleX(-1);
    height: auto;
    width: 200px;
    z-index: 2;
    @media screen and (min-width: 1600px) {
      left: 220px;
      top: -215px;
    }
    @media screen and (max-width: 1600px) {
      left: 220px;
      top: -215px;
      transform: scaleX(1);
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .bird02 {
    position: absolute;
    top: -70px;
    left: -27px;
    height: auto;
    width: 300px;
    z-index: 2;
    @media screen and (min-width: 1200px) {
      display: none;
    }
    @media screen and (max-width: 992px) {
      top: 650px;
      left: 376px;
      transform: scaleX(-1);
    }
    @media screen and (max-width: 576px) {
      top: 874px;
      left: 160px;
      width: 200px;
      transform: scaleX(-1);
    }
  }

  .birds {
    position: absolute;
    display: block;
    top: 345px;
    left: -90px;
    transform: scaleX(-1);
    height: auto;
    width: 400px;
    @media screen and (min-width: 1600px) {
      top: 345px;
      left: 0px;
      width: 800px;
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .shark {
    position: absolute;
    display: none;
    bottom: -320px;
    left: -550px;
    transform: scaleX(-1) rotate(30deg);
    height: auto;
    width: 1200px;
    @media screen and (min-width: 1600px) {
      display: block;
    }
  }

  .fin {
    position: absolute;
    bottom: -100px;
    left: -90px;
    height: auto;
    width: 400px;
    filter: brightness(0);
    animation: animateFin 12s infinite;

    @media screen and (min-width: 1600px) {
      display: none;
    }
    @media screen and (max-width: 1600px) {
      left: -80%;
    }
    @media screen and (max-width: 576px) {
      left: -120%;
      animation: animateFinMobile 12s infinite;
    }

    @keyframes animateFin {
      0% {
        transform: translate(0, 0) scaleX(1);
      }
      49% {
        transform: translate(790%, 0)scaleX(1);
      }
      50% {
        transform: translate(800%, 0) scaleX(-1);
      }
      99% {
        transform: scaleX(-1);
      }
      100% {
        transform: translate(0, 0) scaleX(1);
      }
    }
    @keyframes animateFinMobile {
      0% {
        transform: translate(0, 0) scaleX(1);
      }
      49% {
        transform: translate(290%, 0)scaleX(1);
      }
      50% {
        transform: translate(300%, 0) scaleX(-1);
      }
      99% {
        transform: scaleX(-1);
      }
      100% {
        transform: translate(0, 0) scaleX(1);
      }
    }
  }
`;