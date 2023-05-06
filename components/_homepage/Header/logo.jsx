import styled from "styled-components";
import Image from "next/image";

import { homeHeader } from "../../../assets/data";

export default function LogoComponent() {
  return (
    <ImageContainer className="w-full z-10">
      <Image responsive src={homeHeader.logo} alt="paulo reizinho logo" />
    </ImageContainer>
  );
}

const ImageContainer = styled.figure`
  /* animation: showHead 3s linear; */
  /* filter: drop-shadow(10px 10px 5px #1a1a1a); */

  @media screen and (max-width: 1024px) {
    /* animation: showHeadMobile 3s linear; */
  }
`;
