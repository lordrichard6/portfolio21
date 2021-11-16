import styled from "styled-components";
import Image from "next/image";

import project_01 from "../../../assets/images/projects/creative_01.jpg";
import project_02 from "../../../assets/images/projects/creative_02.jpg";
import project_03 from "../../../assets/images/projects/creative_03.jpg";
import project_04 from "../../../assets/images/projects/creative_04.jpg";
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
    }
  ];

  return (
    <SectionContainer>
      <h1>Photoshop</h1>
      <Projects>
        {data.map((item, index) => {
          return (
            <ImageWrapper key={index}>
              <Image
              src={item.imgSrc}
              objectFit="cover"
              objectPosition="center"
              alt={item.alt}
            />
            </ImageWrapper>          
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
  color: ${Variables.white};
  h1 {
    font-size: 4rem;
    font-weight: 400;
  }
`;

const Projects = styled.div`
  width: 100%;
  column-count: 2;
  gap: 0;

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
`;