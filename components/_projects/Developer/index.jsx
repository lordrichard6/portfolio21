import styled from "styled-components";

import { projects } from "../../../assets/data/projects";
import { Colors } from "../../../assets/variables";
import Project from "./project";

export default function Developer() {
  return (
    <SectionContainer>
      <BackgroundGradient></BackgroundGradient>
      <ProjectsContainer>
        {projects.map((item, i) => {
          return (
            <Project
              key={i}
              src={item.image}
              alt={item.alt}
              title={item.title}
              tech={item.icon}
              link={item.link}
              show={item.show}
              github={item.github}
              techs={item.techs}
              backgroundColor={item.backgroundColor}
            />
          );
        })}
      </ProjectsContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  overflow: hidden;
  h1 {
    font-size: 4rem;
    font-weight: 400;
    text-shadow: 1px 2px 4px #00000081;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const BackgroundGradient = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #1d2124 0%,
    rgba(0, 0, 0, 0.2) 38.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;