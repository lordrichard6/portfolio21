import styled from "styled-components";

import { projects } from "../../assets/data/projects";
import { Colors } from "../../assets/variables";
import TitleRefexion from "./title";
import ProjectComponent from "./project";

export default function Developer() {
  return (
    <SectionContainer>
      <BackgroundGradient></BackgroundGradient>
      <div className="flex w-full justify-around">
        <TitleRefexion word="PROFISSIONAL" />
        <TitleRefexion word="PERSONAL" />
      </div>
      <div className="w-full flex flex-col z-10">
      {projects.map((item, i) => {
        return <ProjectComponent key={i} date={item.date} icon={item.icon}icon1={item.icon1} icon2={item.icon2} type={item.type} title={item.title} link={item.link} />;
      })}
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  overflow: hidden;
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
