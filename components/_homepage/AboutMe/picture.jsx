import styled from "styled-components";
import Image from "next/image";

import meDark from "../../../assets/images/homepage/about-me_02.png";
import meLight from "../../../assets/images/homepage/about-me_01.png";

export default function AboutPictureComponent() {
  return (
    <RightContainer>
      <div className="dark">
        <Image src={meDark} alt="" objectFit="cover" />
      </div>
      <div className="light">
        <Image src={meLight} alt="" objectFit="cover" />
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
  .dark {
    z-index: 1;
    transition: 0.2s ease-in-out;
  }
  .light {
    position: absolute;
    z-index: 0;
    transition: 0.2s ease-in-out;
  }

  :hover {
    .dark {
      z-index: 0;
    }
    .light {
      position: absolute;
      z-index: 1;
    }
  }
`;
