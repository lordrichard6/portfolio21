import styled from "styled-components";

import { projects } from "../../../assets/data/projects";
import { Colors } from "../../../assets/variables";
import Project from "./project";

export default function Developer() {
  return (
    <SectionContainer>
      <OtherProjects>
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
      </OtherProjects>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
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

const OtherProjects = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
