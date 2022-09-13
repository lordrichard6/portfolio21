import styled from "styled-components";
import Image from "next/image";

import { homeHeader } from "../../../assets/data";
import CometsComponent from "./comets";
import HomepageTitleComponent from "./title";
import HeaderImageComponent from "./image";
import StarsComponent from "./stars";

export default function Header() {
  return (
    <SectionContainer id="top" className="h-screen w-full flex justify-center itens-center">
      <Image
        src={homeHeader.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="paulo reizinho header"
        className="z-0"
      />
      <StarsComponent />
      <CometsComponent />
      <div className="w-4/5 lg:w-3/4 relative flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:text-left py-24">
        <HomepageTitleComponent />
        <HeaderImageComponent />
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  animation: flash 3.1s linear;

  @keyframes flash {
    0% {
      filter: blur(0) brightness(1);
    }
    96% {
      filter: brightness(1) blur(0);
    }
    98% {
      filter: brightness(10) blur(0.5rem);
    }
    100% {
      filter: blur(0) brightness(1);
    }
  }
`;