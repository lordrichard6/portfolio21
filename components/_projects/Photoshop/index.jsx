import styled from "styled-components";
import Image from "next/image";

import { projectsCreative } from "../../../assets/data";
import { Colors } from "../../../assets/variables";

export default function Photoshop() {

  return (
    <SectionContainer>
      <h1>Photoshop</h1>
      <Projects>
        {projectsCreative.map((item, index) => {
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
  color: ${Colors.white};
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