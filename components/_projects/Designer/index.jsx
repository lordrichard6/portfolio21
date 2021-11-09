import styled from "styled-components";
import Image from "next/image";

import project_portfolio from "../../../assets/images/projects/project_portfolio.jpg";
import project_leftBastards from "../../../assets/images/projects/project_leftBastards.jpg";
import project_patricia from "../../../assets/images/projects/project_patricia.jpg";
import { Variables } from "../../../assets/variables";

export default function Designer() {
  return (
    <SectionContainer>
      <h1>Designer</h1>
      <ProjectsContainer>
        <SingleProject>
          <DesignerImage
            src={project_portfolio}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
          <Text>
            <h1>My Portfolio</h1>
          <h1>My Portfolio</h1>
          <h1>My Portfolio</h1>
          </Text>
          
        </SingleProject>
        <SingleProject>
          <DesignerImage
            src={project_leftBastards}
            objectFit="cover"
            objectPosition="center"
          />
        </SingleProject>
        <SingleProject>
          <DesignerImage
            src={project_patricia}
            objectFit="cover"
            objectPosition="center"
          />
        </SingleProject>
      </ProjectsContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  /* min-height: 100vh; */
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

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const DesignerImage = styled(Image)`
  z-index: -1;
`

const SingleProject = styled.div`
    position: relative;
    margin:0 0.4rem;
    width: 33%;
    /* &:hover {
      transition: 0.2s ease-in-out;
      background-color: #000000ce;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    } */
`

const Text = styled.div`
    position: absolute;
    display: none;
    z-index: 1;
    h1 {
    }
`