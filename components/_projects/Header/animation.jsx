import styled from "styled-components";

export default function Animation() {
  return (
    <Container>
      <div className="gradient"></div>
      <div className="tri">
      </div>
      <div className="squ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="end">
        <div>J</div>
        <div>E</div>
        <div>C</div>
        <div>O</div>
        <div>T</div>
        <div>S</div>
        <div>R</div>
        <div>P</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 2;

  .gradient {
    position: absolute;
    display: block;
    width: 100vw;
    height: 100vh;
    /* background: linear-gradient(0deg, #1D2124 0%, rgba(29, 33, 36, 0.2) 38.54%, rgba(29, 33, 36, 0) 100%); */
  }

  /* animation triangle */

  .tri {
    position: absolute;
    bottom: -300vw;
    left: -100vw;
    width: 0;
    height: 0;
    border-left: 150vw solid rgba(255, 0, 0, 0);
    border-right: 150vw solid rgba(255, 0, 0, 0);
    border-bottom: 60vw solid #1d2124;
    animation: tri 1.6s 0.2s ease-in-out forwards;

    @media screen and (min-width: 1200px) {
      bottom: -320vw;
    }
    @media screen and (min-width: 2000px) {
      bottom: -340vw;
    }

    @media screen and (max-width: 764px) {
      border-left: 180vw solid rgba(255, 0, 0, 0);
      border-right: 220vw solid rgba(255, 0, 0, 0);
      border-bottom: 120vw solid #1d2124;
    }
  }

  @keyframes tri {
    100% {
      transform: translateY(-300vw);
    }
  }

  /* animation squares */

  .squ {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .squ div {
    position: absolute;
    top: calc((50% - 50px));
    left: calc((50% - 50px));
    width: 100px;
    height: 100px;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: 50%;
    transform: scale(0);
    @media screen and (max-width: 992px) {
      width: 60px;
      height: 60px;
    }
  }

  .squ div:nth-child(1) {
    animation: squ 0.6s 0.2s cubic-bezier(0, 0.73, 0.54, 2.4) forwards;
  }
  .squ div:nth-child(2) {
    animation: moveSqu_01 0.8s 0.9s forwards;
  }
  .squ div:nth-child(3) {
    animation: moveSqu_02 0.8s 0.9s forwards;
  }
  .squ div:nth-child(4) {
    animation: moveSqu_03 0.8s 0.9s forwards;
  }
  .squ div:nth-child(5) {
    animation: moveSqu_04 0.8s 0.9s forwards;
  }
  .squ div:nth-child(6) {
    animation: moveSqu_05 0.8s 0.9s forwards;
  }
  .squ div:nth-child(7) {
    animation: moveSqu_06 0.8s 0.9s forwards;
  }
  .squ div:nth-child(8) {
    animation: moveSqu_07 0.8s 0.9s forwards;
  }
  .squ div:nth-child(9) {
    animation: moveSqu_08 0.8s 0.9s forwards;
  }

  @keyframes squ {
    0% {
      transform: translateY(100px) scale(0);
    }
    20% {
      transform: translateY(100px) scale(1);
    }
    99% {
      transform: translateY(0) scale(1);
    }
    100% {
      transform: translateY(0) scale(0);
    }
  }

  @keyframes moveSqu_01 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-120px);
      border-radius: 16px;
    }
  }

  @keyframes moveSqu_02 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0px);
      border-radius: 16px;
    }
  }

  @keyframes moveSqu_03 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(120px);
      border-radius: 16px;
    }
  }

  @keyframes moveSqu_04 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(240px);
      border-radius: 16px;
    }
  }

  @keyframes moveSqu_05 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(360px);
      border-radius: 16px;
    }
  }

  @keyframes moveSqu_06 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-240px);
      border-radius: 16px;
    }
  }

  @keyframes moveSqu_07 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-360px);
      border-radius: 16px;
    }
  }

  @keyframes moveSqu_08 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-480px);
      border-radius: 16px;
    }
  }

  /* mobile animation */
  @media screen and (max-width: 992px) {
    @keyframes moveSqu_01 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translate(-40px, -70px);
        border-radius: 16px;
      }
    }

    @keyframes moveSqu_02 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(0px);
        border-radius: 16px;
      }
    }

    @keyframes moveSqu_03 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translate(40px, 70px);
        border-radius: 16px;
      }
    }

    @keyframes moveSqu_04 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translate(80px, 140px);
        border-radius: 16px;
      }
    }

    @keyframes moveSqu_05 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translate(120px, 210px);
        border-radius: 16px;
      }
    }

    @keyframes moveSqu_06 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translate(-80px, -140px);
        border-radius: 16px;
      }
    }

    @keyframes moveSqu_07 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translate(-120px, -210px);
        border-radius: 16px;
      }
    }

    @keyframes moveSqu_08 {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translate(160px, 280px);
        border-radius: 16px;
      }
    }
  }

  /* animation end   */

  .end {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .end div {
    position: absolute;
    top: calc((50% - 50px));
    left: calc((50% - 50px));
    width: 100px;
    height: 100px;
    color: #fff;
    line-height: 100px;
    text-align: center;
    opacity: 0;
    font-size: 96px;
    font-weight: 800;
    animation: end 1s 1.6s forwards;
    @media screen and (max-width: 992px) {
      font-size: 60px;
      width: 60px;
      height: 60px;
      line-height: initial;
    }
  }

  .end div:nth-child(1) {
    transform: translateX(-120px);
  }

  .end div:nth-child(3) {
    transform: translateX(120px);
  }

  .end div:nth-child(4) {
    transform: translateX(-240px);
  }

  .end div:nth-child(5) {
    transform: translateX(240px);
  }

  .end div:nth-child(6) {
    transform: translateX(360px);
  }

  .end div:nth-child(7) {
    transform: translateX(-360px);
  }

  .end div:nth-child(8) {
    transform: translateX(-480px);
  }
  /* mobile animation */
  @media screen and (max-width: 992px) {
    .end div:nth-child(1) {
      transform: translateY(-10px);
    }

    .end div:nth-child(2) {
      transform: translate(40px, 60px);
    }

    .end div:nth-child(3) {
      transform: translate(80px, 130px);
    }

    .end div:nth-child(4) {
      transform: translate(-40px, -80px);
    }

    .end div:nth-child(5) {
      transform: translate(120px, 200px);
    }

    .end div:nth-child(6) {
      transform: translate(160px, 270px);
    }

    .end div:nth-child(7) {
      transform: translate(-80px, -150px);
    }

    .end div:nth-child(8) {
      transform: translate(-120px, -220px);
    }
  }

  @keyframes end {
    100% {
      opacity: 1;
    }
  }
`;

