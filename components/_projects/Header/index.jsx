import styled from "styled-components";
import Image from "next/image";
import someImage from "../../../assets/images/homepage/hobby_02.jpg"

export default function Header() {
  return (
    <SectionContainer id="top">
        <div className="gradient"></div>
      <div className="tri">
        {/* <Image src={someImage} alt="" objectFit="cover" layout="fill" /> */}
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
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  /* overflow: hidden; */
  margin: 0;
  padding: 0;
  border: 0;

  .gradient {
    position: absolute;
    display: block;
    width: 100vw;
    height: 100vh;
    /* background: linear-gradient(0deg, #1D2124 0%, rgba(29, 33, 36, 0.2) 38.54%, rgba(29, 33, 36, 0) 100%); */
  }

  /* -----------------------
animation tri 5.9s
----------------------- */
  .tri {
    position: absolute;
    bottom: -300vw;
    left: -100vw;
    width: 0;
    height: 0;
    border-left: 150vw solid rgba(255, 0, 0, 0);
    border-right: 150vw solid rgba(255, 0, 0, 0);
    border-bottom: 60vw solid #1D2124;
    /* border-bottom: 60vw solid; */
    animation: tri 0.6s 0.8s linear forwards;
  }

  @keyframes tri {
    100% {
      transform: translateY(-300vw);
    }
  }

  /* -----------------------
animation squ
----------------------- */
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
    background: #3a6e9a;
    border-radius: 50%;
    transform: scale(0);
  }

  .squ div:nth-child(1) {
    animation: squ 0.6s 0.6s cubic-bezier(0, 0.73, 0.54, 2.4) forwards;
  }
  .squ div:nth-child(2) {
    animation: moveSqu_01 0.8s 1.3s forwards;
  }
  .squ div:nth-child(3) {
    animation: moveSqu_02 0.8s 1.3s forwards;
  }
  .squ div:nth-child(4) {
    animation: moveSqu_03 0.8s 1.3s forwards;
  }
  .squ div:nth-child(5) {
    animation: moveSqu_04 0.8s 1.3s forwards;
  }
  .squ div:nth-child(6) {
    animation: moveSqu_05 0.8s 1.3s forwards;
  }
  .squ div:nth-child(7) {
    animation: moveSqu_06 0.8s 1.3s forwards;
  }
  .squ div:nth-child(8) {
    animation: moveSqu_07 0.8s 1.3s forwards;
  }
  .squ div:nth-child(9) {
    animation: moveSqu_08 0.8s 1.3s forwards;
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
      transform: translateX(-200px);
      border-radius: 0;
    }
  }

  @keyframes moveSqu_02 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0px);
      border-radius: 0;
    }
  }

  @keyframes moveSqu_03 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200px);
      border-radius: 0;
    }
  }

  @keyframes moveSqu_04 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(400px);
      border-radius: 0;
    }
  }

  @keyframes moveSqu_05 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(600px);
      border-radius: 0;
    }
  }

  @keyframes moveSqu_06 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-400px);
      border-radius: 0;
    }
  }

  @keyframes moveSqu_07 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-600px);
      border-radius: 0;
    }
  }

  @keyframes moveSqu_08 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-800px);
      border-radius: 0;
    }
  }

  /* -----------------------
animation end  
----------------------- */
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
    font-size: 70px;
    color: #fff;
    line-height: 100px;
    text-align: center;
    opacity: 0;
    animation: end 1s 1.8s forwards;
  }


  .end div:nth-child(1) {
  transform: translateX(-200px);
}

.end div:nth-child(3) {
  transform: translateX(200px);
}

.end div:nth-child(4) {
  transform: translateX(-400px);
}

.end div:nth-child(5) {
  transform: translateX(400px);
}

.end div:nth-child(6) {
  transform: translateX(600px);
}

.end div:nth-child(7) {
  transform: translateX(-600px);
}

.end div:nth-child(8) {
  transform: translateX(-800px);
}


  @keyframes end {
    100% {
      opacity: 1;
    }
  }
`;
