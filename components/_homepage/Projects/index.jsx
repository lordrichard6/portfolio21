import {
  TitleRetro,
  BtnPrimaryCTA,
  CardPrimary,
  EntryAnimation,
} from "../../_shared";
import { projects } from "../../../assets/data/projects";

import { bringUp } from "../../../utilities/framer-animations";

export default function ProjectsSection() {
  return (
    <div>
      <EntryAnimation animation={bringUp}>
        <TitleRetro title="My projects." />
      </EntryAnimation>
      <EntryAnimation style="flex flex-col lg:flex-row" animation={bringUp}>
        <CardPrimary
          imageSrc={projects[1].image}
          imageAlt={projects[1].alt}
          cardHeading={projects[1].title}
          cardText={projects[1].text}
          link={projects[1].link}
        />
        <CardPrimary
          imageSrc={projects[0].image}
          imageAlt={projects[0].alt}
          cardHeading={projects[0].title}
          cardText={projects[0].text}
          link={projects[0].link}
        />
        <CardPrimary
          imageSrc={projects[7].image}
          imageAlt={projects[7].alt}
          cardHeading={projects[7].title}
          cardText={projects[7].text}
          link={projects[7].link}
        />
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
