import {
  TitleRetro,
  BtnPrimaryCTA,
  CardPrimary,
  EntryAnimation,
} from "../../_shared";
import { projects } from "../../../assets/data/projects";

import { bringUp } from "../../../utilities/framer-animations";

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured === true);

  return (
    <div>
      <EntryAnimation animation={bringUp}>
        <TitleRetro title="My projects." />
      </EntryAnimation>
      <EntryAnimation style="flex-row flex-wrap custom-center" animation={bringUp}>
        {featuredProjects.map((item, i) => {
          return (
            <CardPrimary
            key={i}
            imageSrc={item.image}
            imageAlt={item.alt}
            cardHeading={item.title}
            cardText={item.text}
            link={item.link}
          />
          )
        })}
      </EntryAnimation>
      <EntryAnimation animation={bringUp}>
        <BtnPrimaryCTA
          color="_3"
          text="More Projects"
          link="/projects"
          styles="mt-4"
        />
      </EntryAnimation>
    </div>
  );
}
