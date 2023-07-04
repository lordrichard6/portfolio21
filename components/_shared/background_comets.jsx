import styled from "styled-components";

export default function CometsComponent() {
  return (
    <Comets>
      <div id="comets">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </Comets>
  );
}

const Comets = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;

  #comets {
    position: relative;
    top: -150px;
    width: 100vw;
    text-align: left;
    height: 100%;
    min-height: 900px;
    overflow: hidden;
  }

  #comets i {
    display: inline-block;
    width: 250px;
    height: 150px;
    position: absolute;
    border-radius: 5% 40% 70%;
    box-shadow: inset 0px 0px 1px #294b67;
    border: 1px solid #333;
    z-index: 1;
    background-color: #fff;
    opacity: 0.7;
    animation: falling 10s 0s infinite;
    animation-timing-function: ease-in;
  }

  #comets i:nth-child(1) {
    left: 50vw;
    height: 73px;
    width: 3px;
    background-color: #fff;
  }
  #comets i:nth-child(3) {
    height: 11px;
    width: 3px;
    animation: falling3 8s 3s infinite;
    left: 10vw;
    background-color: #fff;
  }
  #comets i:nth-child(2) {
    animation: falling2 6s 1s infinite;
    left: 30vw;
    height: 70px;
    width: 4px;
    background-color: #fff;
  }

  @keyframes falling {
    0% {
      transform: translate3d(100px, 0px, 0px) rotate(160deg);
    }

    3% {
      transform: translate3d(450px, 900px, 0) rotate(160deg);
      opacity: 0;
    }
    100% {
      transform: translate3d(450px, 900px, 0) rotate(160deg);
      opacity: 0;
    }
  }

  @keyframes falling3 {
    0% {
      transform: translate3d(0, 0, 0) rotate(150deg);
    }

    10% {
      transform: translate3d(430px, 640px, 0) rotate(150deg);
      opacity: 0;
    }

    100% {
      transform: translate3d(430px, 640px, 0) rotate(150deg);
      opacity: 0;
    }
  }

  @keyframes falling2 {
    0% {
      transform: translate3d(100px, 0, 0) rotate(130deg);
    }

    15% {
      transform: translate3d(800px, 580px, 0) rotate(130deg);
      opacity: 0;
    }

    100% {
      transform: translate3d(800px, 680px, 0) rotate(180deg);
      opacity: 0;
    }
  }
`;
