import React from "react";
import useTranslation from "next-translate/useTranslation";

import { projects } from "../../../assets/data/projects";
import {
  bringUp,
  bringUp2,
} from "../../../utilities/framer-animations";
import { EntryAnimation, ProjectCard } from "../../_shared";

import ProjectsIntro from "./text";

export default function ProjectsSection() {
  let { t } = useTranslation();
  const sortedProjectsByDate = [...projects]
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse();

  return (
    <section className="projects-section-projects w-full flex-col flex-centered">
      <EntryAnimation style="w-full flex justify-center" animation={bringUp}>
        <ProjectsIntro pageIntro={t("projects:projects_intro")} />
      </EntryAnimation>
      <EntryAnimation style="projects-title section-width-default mt-6 mb-4" animation={bringUp}>
        <h1 className="text-5xl lg:text-8xl font-black text-right">PROJECTS</h1>
      </EntryAnimation>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-2 items-center z-10">
        {sortedProjectsByDate.map((item, i) => {
          return (
            <EntryAnimation style="flex justify-center" key={i} animation={bringUp2(0.4)}>
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