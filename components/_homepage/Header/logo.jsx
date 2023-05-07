import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";

import { EntryAnimation } from "../../_shared";
import { bringFromRight } from "../../../utilities/framer-animations";
import { ImagesComponent } from "../../_shared";
import SignatureComponent from "./signature";

export default function LogoComponent() {
  return (
    <LogoContainer className="w-full md:w-1/2 relative z-10">
      <EntryAnimation style="" animation={bringFromRight}>
        <ImagesComponent
          style="z-10"
          alt="paulo reizinho"
          src="/logo_crossed.png"
        />
      </EntryAnimation>
      {/* <ImagesComponent
          style="z-20 absolute bottom-0 signature"
          alt="paulo reizinho signature"
          src="/signature.svg"
        /> */}
      <SignatureComponent />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  .signature {
    filter: drop-shadow(0px 0px 10px #34b3c1);
  }
`;
