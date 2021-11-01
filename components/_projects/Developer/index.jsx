import styled from "styled-components";
import Image from "next/image";

import picture from "../../../assets/images/projects/sky_02.jpg";
import { Variables } from "../../../assets/variables";

export default function Developer() {
  return (
    <SectionContainer>
      <h1>Developer</h1>
      <MainProject>
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
      </MainProject>
      <SecondaryProjects>
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
      </SecondaryProjects>
      <OtherProjects>
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
      </OtherProjects>
      <OtherProjects>
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
        <Image
          src={picture}
          objectFit="cover"
          objectPosition="center"
          //   width={400}
        //   height={1200}
        />
      </OtherProjects>
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

const MainProject = styled.div`
  width: 100%;
  max-height: 50vh;
`;

const SecondaryProjects = styled.div`
  width: 100%;
  max-height: 50vh;
  display: flex;
  flex-direction: row;
`;

const OtherProjects = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
`;
