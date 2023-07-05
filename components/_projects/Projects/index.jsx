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

const newIntro = "My portfolio reflects my proficiency in web development, demonstrated through projects utilizing Next.js, React.js, Angular, and other technologies. Whether in professional or personal environments, I have consistently delivered engaging, scalable, and user-friendly experiences with constant improvment in both UI and UX design. With a focus on performance, security, and intuitive design, I strive to create web solutions that drive business growth and exceed customer expectations. Explore my portfolio further to discover the range and depth of my projects."

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
        <ProjectsIntro pageIntro={newIntro} />
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
      <EntryAnimation style="projects-title section-width-default mt-6 mb-4" animation={bringUp}>
        <h1 className="text-5xl lg:text-8xl font-black text-right">WEB DEVELOPMENT</h1>
      </EntryAnimation>
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
