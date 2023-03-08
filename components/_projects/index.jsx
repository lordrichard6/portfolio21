import styled from "styled-components";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { projects } from "../../assets/data/projects";
import { Colors } from "../../assets/variables";
import TitleRefexion from "./title";
import ProjectComponent from "./project";
import ProjectsIntro from './text';

export default function Developer() {
  const sortedProjectsByDate = [...projects].sort((a, b) => a.date.localeCompare(b.date)).reverse();
  let router = useRouter();
  let { t } = useTranslation();
  
  return (
    <SectionContainer>
      <BackgroundGradient></BackgroundGradient>
      <ProjectsIntro pageIntro={t("projects:projects_intro")} />
      <div className="flex w-full justify-around">
        <TitleRefexion word="PROFISSIONAL" />
        <TitleRefexion word={router.locale === 'pt' ? 'PESSOAL' : 'PERSONAL'} />
      </div>
      <div className="w-full flex flex-col z-10">
      {sortedProjectsByDate.map((item, i) => {
        return <ProjectComponent key={i} date={item.date} icon={item.icon}icon1={item.icon1} icon2={item.icon2} type={item.type} title={item.title} link={item.link} />;
      })}
        <div className="w-1/2 h-44 border-slate-100 py-2 border-r-[1rem] mr-auto ml-2">

        </div>

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
