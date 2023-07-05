import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { projects } from "../../../assets/data/projects";
import { Colors } from "../../../assets/variables";
import {
  bringUp,
  bringUp2,
} from "../../../utilities/framer-animations";
import { EntryAnimation, ProjectCard } from "../../_shared";


// import TitleRefexion from "./title";
// import ProjectComponent from "./project";
import ProjectsIntro from "./text";
// import ProjectsExplanation from "./projectExplanation";

export default function ProjectsSection() {
  const sortedProjectsByDate = [...projects]
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse();
  let router = useRouter();
  let { t } = useTranslation();

  return (
    <SectionContainer className="projects-section-projects">
      {/* <BackgroundGradient></BackgroundGradient> */}
      <EntryAnimation style="w-full flex justify-center" animation={bringUp}>
        <ProjectsIntro pageIntro={t("projects:projects_intro")} />
      </EntryAnimation>
      {/* <ProjectsExplanation /> */}
      {/* <div className="flex w-full h-full justify-around">
        <EntryAnimation style="w-1/2" animation={bringFromLeft}>
          <TitleRefexion word="PROFISSIONAL" />
        </EntryAnimation>
        <EntryAnimation style="w-1/2" animation={bringFromRight}>
          <TitleRefexion
            word={router.locale === "pt" ? "PESSOAL" : "PERSONAL"}
          />
        </EntryAnimation>
      </div> */}
      <div className="w-full flex-centered flex-wrap z-10">
        {sortedProjectsByDate.map((item, i) => {
          return (
            <EntryAnimation key={i} animation={bringUp2(i - 0.9)}>
              <ProjectCard
                imageSrc={item.image}
                imageAlt={item.alt}
                cardHeading={item.title}
                cardText={item.shortText}
                link={item.link}
                cardId={item.cardId}
                icon={item.icon}
                tags={item.tags}
                github={item.github}
              />
            </EntryAnimation>
          )
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
  .tutorial-personal {
    animation: tutoPersonal 4s infinite ease-in-out;
  }
  .tutorial-profissional {
    animation: tutoProfissional 4s 1.4s infinite ease-in-out;
  }
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
