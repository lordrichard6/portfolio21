import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { projectsDev } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
import Project from "./project";

export default function Developer() {
  let { t } = useTranslation();

  return (
    <SectionContainer>
      {/* <Projects>
        {projectsDev.secondary.map((item, i) => {
          return (
            <Project
              key={i}
              src={item.image}
              alt={item.alt}
              title={item.title}
              text={item.text}
              link={item.link}
              tech={item.icon}
              show={item.show}
            />
          );
        })}
      </Projects> */}
      <OtherProjects>
        {projectsDev.other.map((item, i) => {
          return (
            <Project
              key={i}
              src={item.image}
              alt={item.alt}
              title={item.title}
              tech={item.icon}
              link={item.link}
              show={item.show}
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

// const Projects = styled.div`
//   width: 100%;
//   columns: 2;
//   gap: 0;

//   @media screen and (max-width: 390px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;

const OtherProjects = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
