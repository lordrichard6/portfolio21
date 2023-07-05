import useTranslation from "next-translate/useTranslation";

import {
  TextAnimationLetter,
  BtnPrimaryCTA,
  EntryAnimation,
  ProjectCard
} from "../../_shared";
import { projects } from "../../../assets/data/projects";

import { bringUp } from "../../../utilities/framer-animations";


const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 8;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const IntroText = "As a developer I focused mainly on web development, more specificaly front-end development, in my portfolio there are projects that I've build during my employment in diversed companies aswell as projects I build personaly. More details in the project page."

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div className='loop-slider' style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    }}>
      <div className='inner-slider'>
        {children}
        {children}
      </div>
    </div>
  );
};

export default function HomeProjects() {
  let { t } = useTranslation();
  // const featuredProjects = projects.filter(project => project.featured === true);

  const button = {
    link: "/projects",
    text: "common:more_projects"
  }

  return (
    <div className="home-section-projects">
      <TextAnimationLetter className="title-primary-md flex-centered" text={t("home:projects_title")} />
      <div className='home-projects'>
        <div className="section-width-default mx-auto">
          <p className="text-primary">{IntroText}</p>
        </div>
        <div className='tag-list'>
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
              {shuffle(projects).slice(0, TAGS_PER_ROW).map(item => (
                <div key={item.cardId} className="flex-row flex-wrap flex-centered">
                  <ProjectCard
                    imageSrc={item.image}
                    imageAlt={item.alt}
                    cardHeading={item.title}
                    tags={item.tags}
                  />
                </div>
              ))}
            </InfiniteLoopSlider>
          ))}
          <div className='fade' />
        </div>
      </div>
      <EntryAnimation animation={bringUp}>
        <BtnPrimaryCTA
          color="_3"
          text={t(button.text)}
          link={button.link}
          styles="mt-4"
        />
      </EntryAnimation>
    </div>
  );
}
