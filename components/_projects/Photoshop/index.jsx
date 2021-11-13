import styled from "styled-components";
import Image from "next/image";

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
  const data = [
    {
      id: 1,
      imgSrc: project_01,
      alt: "project",
    },
    {
      id: 2,
      imgSrc: project_02,
      alt: "project",
    },
    {
      id: 3,
      imgSrc: project_03,
      alt: "project",
    },
    {
      id: 4,
      imgSrc: project_04,
      alt: "project",
    },
    {
      id: 5,
      imgSrc: project_05,
      alt: "project",
    },
    {
      id: 6,
      imgSrc: project_06,
      alt: "project",
    },
    {
      id: 7,
      imgSrc: project_07,
      alt: "project",
    },
    {
      id: 8,
      imgSrc: project_08,
      alt: "project",
    },
  ];

  return (
    <SectionContainer>
      <h1>Photoshop</h1>
      <Projects>
        {data.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.imgSrc}
              objectFit="cover"
              objectPosition="center"
              alt={item.alt}
            />
          );
        })}
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
  column-count: 4;
  gap: 0;
`;
