import styled from "styled-components";
import Image from "next/image";

import picture from "../../../assets/images/projects/sky_02.jpg";
import fastRent from "../../../assets/images/projects/dev/p10-min.jpg";
import lastPortfolio from "../../../assets/images/projects/dev/p09-min.jpg";
import skyTours from "../../../assets/images/projects/dev/p06-min.jpg";
import hulu from "../../../assets/images/projects/dev/p08-min.jpg";
import trainedMonkeys from "../../../assets/images/projects/dev/p05-min.jpg";
import paulsEngine from "../../../assets/images/projects/dev/p07-min.jpg";
import netflix from "../../../assets/images/projects/dev/p02-min.jpg";
import sphere from "../../../assets/images/projects/dev/p11-min.jpg";
import comicPortfolio from "../../../assets/images/projects/dev/p14-min.jpg";
import blueVariant from "../../../assets/images/projects/dev/latest_01.jpg";
import leftBastards from "../../../assets/images/projects/dev/latest_03.jpg";
import sardinha from "../../../assets/images/projects/dev/latest_02.jpg";

import { Variables } from "../../../assets/variables";

export default function Developer() {
  return (
    <SectionContainer>
      <h1>Developer</h1>
      <MainProject>
        <Image
          src={sardinha}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
      </MainProject>
      <SecondaryProjects>
        <Image
          src={leftBastards}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
        <Image
          src={blueVariant}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
      </SecondaryProjects>
      <OtherProjects>
        <Image
          src={fastRent}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
        <Image
          src={lastPortfolio}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
        <Image
          src={skyTours}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
        <Image
          src={hulu}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
      </OtherProjects>
      <OtherProjects>
        <Image
          src={trainedMonkeys}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
        <Image
          src={paulsEngine}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
        <Image
          src={comicPortfolio}
          objectFit="cover"
          objectPosition="center"
          alt='picture'
        />
        <Image
          src={sphere}
          objectFit="cover"
          objectPosition="center"
          alt='pic'
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
  max-height: 80vh;
  display: flex;
  justify-content: center;
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
