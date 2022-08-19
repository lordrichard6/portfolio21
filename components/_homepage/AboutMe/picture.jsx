import styled from "styled-components";
import Image from "next/image";

import MeFormal from "../../../assets/images/homepage/about-me.png";

export default function AboutPictureComponent() {
  return (
    <RightContainer>
      <div className="outer">
        <div className="picture">
          <Image src={MeFormal} alt="" objectFit="cover" />
        </div>
      </div>
    </RightContainer>
  );
}

const RightContainer = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  height: 100%;
  margin-left: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }

  .outer {
    position: relative;
    background: #20303c;
    width: 600px;
    height: 800px;
    overflow: hidden;

    @media screen and (max-width: 764px) {
      width: 90%;
      height: 600px;
    }
    @media screen and (max-width: 400px) {
        width: 95%;
        height: 500px;
      }

    .picture {
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      width: 800px;
      z-index: 0;
      transition: all 500ms ease-in-out;

      @media screen and (max-width: 764px) {
        width: 600px;
      }
      @media screen and (max-width: 400px) {
        width: 400px;
      }
  
      &:hover {
        transform: translateX(-50%) scale(1.2) ;
      }
    }
  }

`;
