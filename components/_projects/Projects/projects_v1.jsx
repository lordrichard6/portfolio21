import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { projects } from "../../../assets/data/projects";
import {
  bringFromLeft,
  bringFromRight,
} from "../../../utilities/framer-animations";
import { EntryAnimation } from "../../_shared";

import ProjectComponent from "./project";

export default function ProjectsSection() {
  const sortedProjectsByDate = [...projects]
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse();

  return (
      <div className="w-full flex flex-col z-10">
        {sortedProjectsByDate.map((item, i) => {
          return (
            <EntryAnimation
              key={i}
              style=""
              animation={
                item.type === "personal" ? bringFromRight : bringFromLeft
              }
            >
              <ProjectComponent
                date={item.date}
                icon={item.icon}
                type={item.type}
                title={item.title}
                creator={item.creator}
                contribution={item.myContribution}
                projectImage={item.image}
                alt={item.alt}
                text={item.text}
                techs={item.techs}
                link={item.link}
              />
            </EntryAnimation>
          );
        })}
      </div>
  );
}