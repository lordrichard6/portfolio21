import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { projects } from "../../../assets/data/projects";
import {
  bringUp,
  bringUp2,
} from "../../../utilities/framer-animations";
import { EntryAnimation, ProjectCard } from "../../_shared";

import ProjectsIntro from "./text";

export default function ProjectsSection() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  let { t } = useTranslation();
  
  const sortedProjectsByDate = [...projects]
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse();

  const filteredProjects = selectedLanguage
  ? sortedProjectsByDate.filter((project) =>
      project.tags.includes(selectedLanguage)
    )
  : sortedProjectsByDate;

  return (
    <section className="projects-section-projects w-full flex-col flex-centered">
      <EntryAnimation style="w-full flex justify-center" animation={bringUp}>
        <ProjectsIntro pageIntro={t("projects:projects_intro")} />
      </EntryAnimation>
      <EntryAnimation style="projects-title section-width-default mt-6 mb-4" animation={bringUp}>
        <h1 className="text-5xl lg:text-8xl font-black text-right">PROJECTS</h1>
      </EntryAnimation>
      <div className="filter-buttons">
        <button onClick={() => setSelectedLanguage("#react")}>React</button>
        <button onClick={() => setSelectedLanguage("#django")}>Django</button>
        <button onClick={() => setSelectedLanguage("#nextjs")}>Next.js</button>
        <button onClick={() => setSelectedLanguage("#angular")}>Angular</button>
        <button onClick={() => setSelectedLanguage("#typescript")}>Typescript</button>
        {/* Add more buttons for other languages */}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-2 items-center z-10 min-h-screen">
        {filteredProjects.map((item, i) => {
          return (
            <EntryAnimation style="flex justify-center content-start" key={i} animation={bringUp2(0.4)}>
              <ProjectCard
                style="w-[320px] h-[300px] lg:w-[420px] lg:h-[340px]"
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
    </section>
  );
}