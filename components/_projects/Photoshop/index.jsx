import styled from "styled-components";
import Image from "next/image";

import picture from "../../../assets/images/projects/sky_02.jpg";
import { Variables } from "../../../assets/variables";

export default function Photoshop() {
  return (
    <SectionContainer>
      <h1>Photoshop</h1>
      <Projects>
        <Image src={picture} objectFit="cover" objectPosition="center" />
        <Image src={picture} objectFit="cover" objectPosition="center" />
        <Image src={picture} objectFit="cover" objectPosition="center" />
        <Image src={picture} objectFit="cover" objectPosition="center" />
      </Projects>
      <Projects>
        <Image src={picture} objectFit="cover" objectPosition="center" />
        <Image src={picture} objectFit="cover" objectPosition="center" />
        <Image src={picture} objectFit="cover" objectPosition="center" />
        <Image src={picture} objectFit="cover" objectPosition="center" />
      </Projects>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Variables.primary};
  h1 {
    font-size: 4rem;
    font-weight: 400;
  }
`;

const Projects = styled.div`
  width: 100%;
  max-height: 60vh;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
`;
