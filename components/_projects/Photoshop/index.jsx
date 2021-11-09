import styled from "styled-components";
import Image from "next/image";

import picture from "../../../assets/images/projects/sky_02.jpg";
import project_01 from "../../../assets/images/projects/leftBastards_logo.jpg";
import project_02 from "../../../assets/images/projects/patricia_logo.jpg";
import project_03 from "../../../assets/images/projects/patricia_vector.jpg";
import project_04 from "../../../assets/images/projects/patricia_draw.jpg";
import project_05 from "../../../assets/images/projects/me_logo.jpg";
import project_06 from "../../../assets/images/projects/me_vector.jpg";
import project_07 from "../../../assets/images/projects/me_comic.jpg";
import project_08 from "../../../assets/images/projects/sardinha_logo.jpg";
import { Variables } from "../../../assets/variables";

export default function Photoshop() {
  return (
    <SectionContainer>
      <h1>Photoshop</h1>
      <Projects>
        <Image
          src={project_01}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
        <Image
          src={project_02}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
        <Image
          src={project_03}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
        <Image
          src={project_04}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
      </Projects>
      <Projects>
        <Image
          src={project_05}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
        <Image
          src={project_06}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
        <Image
          src={project_07}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
        <Image
          src={project_08}
          objectFit="cover"
          objectPosition="center"
          alt="picture"
        />
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
