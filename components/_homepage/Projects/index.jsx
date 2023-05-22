import useTranslation from "next-translate/useTranslation";

import {
  TitlePrimary,
  BtnPrimaryCTA,
  EntryAnimation,
} from "../../_shared";
import { projects } from "../../../assets/data/projects";
import ProjectCard from './projectCard'

import { bringUp } from "../../../utilities/framer-animations";

export default function ProjectsSection() {
  let { t } = useTranslation();
  const featuredProjects = projects.filter(project => project.featured === true);
  
  return (
    <div>
      <TitlePrimary title={t("home:projects_title")} />
      <EntryAnimation style="flex-row flex-wrap flex-centered" animation={bringUp}>
        {featuredProjects.map((item, i) => {
          return (
            <ProjectCard
            key={i}
            imageSrc={item.image}
            imageAlt={item.alt}
            cardHeading={item.title}
            cardText={t(item.shortText)}
            link={item.link}
            cardId={item.cardId}
            icon={item.icon}
          />
          )
        })}
      </EntryAnimation>
      <EntryAnimation animation={bringUp}>
        <BtnPrimaryCTA
          color="_3"
          text={t("common:btn_more_projects")}
          link="/projects"
          styles="mt-4"
        />
      </EntryAnimation>
    </div>
  );
}
