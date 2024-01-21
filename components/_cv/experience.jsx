import React, { useState } from "react";

import { AiOutlineHtml5 } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import {
  FaCss3Alt,
  FaGitAlt,
  FaUbuntu,
  FaArrowCircleRight,
  FaPeopleCarry
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiAngular,
  SiDjango,
  SiDocker,
  SiFigma,
  SiNodedotjs,
  SiGitlab,
  SiYarn,
  SiAdobephotoshop,
  SiJoomla,
  SiWindows,
} from "react-icons/si";

const staticText = {
  title: "Profissional Experience",
  responsabilities: "My role and responsibilities in this company can be resumed in the following list:",
  projects: "Projects I worked with:",
  skills: "Techs/skills used/learned:"
}

const experience = [
  {
    company: "Richtig Service",
    year: "Jan 2023 - Now!",
    role: "Front-end developer, Mover, Driver, Assembler",
    reference: ["Massimiliano Salihaj", "CEO at Richtig Service", "+41 76 275 35 78", "nfo@richtigservice.ch"],
    description: ['Alterations and improvements on the company website;', 'Deliver the furniture from clients such as Rolf Benz, Natuzzi and Martinuzzi;', 'Orient and organize the job with the client as team lead;', 'Assemble different type of furniture;'],
    techs: [<AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiFigma key={0} />, <SiWindows key={0} />, <GiSteeringWheel key={0} />, <FaPeopleCarry key={0} />, <IoIosPeople key={0} />],
    class: 'exp1',
    projects: [
      {
        name: "Richtig Service",
        link: "https://www.richtigservice.ch/"
      }
    ]
  },
  {
    company: "Pickwings",
    year: "Feb 2022 - Jul 2022",
    role: "FRONT-END DEVELOPER, DESIGNER",
    reference: ["Carlos Martinho", "Senior Software Engineer at Pickwings", "+41 078 742 20 51", "carlos@pickwings.ch"],
    description: ['Diverse Front End implementations;', 'Analize and debug;', 'Changing and testing REST API; ', 'Design and improve the ongoing project;', 'Mobile optimizations;'],
    techs: [<SiAngular key={0} />, <SiDjango key={0} />, <SiTypescript key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiJavascript key={0} />, <SiPython key={0} />, <SiDocker key={0} />, <SiFigma key={0} />, <SiNodedotjs key={0} />, <FaGitAlt key={0} />, <SiGitlab key={0} />, <FaUbuntu key={0} />, <SiYarn key={0} />, <SiAdobephotoshop key={0} />,],
    class: 'exp2',
    projects: [
      {
        name: "Fahrerzentrale",
        link: "https://fahrerzentrale.ch/"
      },
      {
        name: "Pickwings",
        link: "https://pickwings.ch/"
      },
    ]
  },
  {
    company: "Helping Hand",
    year: "Apr 2020 - Dez 2021",
    role: "Front-end developer, Mover, Driver, Assembler",
    reference: ["Michael Silbermann", "CEO at Helping Hand", "+41 043 443 17 37", "info@helpinghand.ch"],
    description: ['Alterations and improvements on the company website;', 'Move safely the clients items and furniture;', 'Orient and organize the job with the client as team lead;', 'Drive and deliver packages;', 'Assemble different type of furniture;'],
    techs: [<SiJoomla key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiFigma key={0} />, <SiWindows key={0} />, <GiSteeringWheel key={0} />, <FaPeopleCarry key={0} />, <IoIosPeople key={0} />],
    class: 'exp3',
    projects: [
      {
        name: "Helping Hand",
        link: "https://www.helpinghand.ch/"
      }
    ]
  },
  {
    company: "Feinheit",
    year: "Aug 2019 - Feb 2020",
    role: "Front-end developer",
    reference: ["Matthias Kestenholz", "Partner and Software Engineer at Feinheit", "+41 094 79 78 96", "mk@feinheit.ch"],
    description: ['Some minor changes on the already existing project, www.fcz.ch;', 'Small styling changes on the company site, feinheit.ch;', 'Part of the campaign website “Mehr bezahlbare Wohnungen” that was a political campaign to appeal lower rents in Zurich, in which i was part of the Front-end team;', 'Some small changes and corrections on the already existing site, www.limmatstadt.ch;', 'Front-End implementation, desktop and mobile of Protier, www.protier.ch;'],
    techs: [<SiAngular key={0} />, <SiDjango key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiJavascript key={0} />, <SiPython key={0} />, <SiDocker key={0} />, <SiNodedotjs key={0} />, <FaGitAlt key={0} />, <SiGitlab key={0} />, <FaUbuntu key={0} />, <SiYarn key={0} />],
    class: 'exp4',
    projects: [
      {
        name: "FC Zürich",
        link: "https://www.fcz.ch/en"
      },
      {
        name: "Feinheit",
        link: "https://feinheit.ch/"
      },
      {
        name: "Mehr bezahlbare Wohnungen",
        link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/"
      },
      {
        name: "Limmatstadt",
        link: "https://www.limmatstadt.ch/"
      },
      {
        name: "Protier",
        link: "https://www.protier.ch/"
      },
    ]
  },
]

export default function ProfissionalExpSection() {
  const [isOpen, setIsOpen] = useState({
    exp1: false,
    exp2: false,
    exp3: false,
    exp4: false,
  });

  const toggle = (element) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  return (
    <div className="experience-container mt-8 lg:mt-0">
      <h2 className="ml-6 text-3xl font-bold mx-6">
        {staticText.title}
      </h2>
      <hr />

      {experience.map((item, i) => {
        return (
          <div key={i} className={`position-container ${isOpen[item.class] ? "toggled" : ""}`}>
            <div className="w-full">

              <div className="position-head flex">
                <FaArrowCircleRight onClick={() => toggle(item.class)} className="arrow mr-2" />
                <div className="flex">
                  <h2 className="w-[160px] lg:w-[240px] font-semibold text-2xl lg:text-3xl">{item.year}</h2>
                  <h2 className="font-semibold text-2xl lg:text-3xl">| {item.company}</h2>
                </div>
              </div>

              <div className="position-info bg-slate-100 rounded-lg mr-4 mt-2 px-2 py-3 w-full">
                <h3>{item.role}</h3>
                <p className="mt-2 text-lg font-bold leading-tight lg:leading-relaxed">
                  {staticText.responsabilities}
                </p>

                <ul className="tasks">
                  {item.description.map((tasks, index) => (
                    <li className="text-lg leading-tight lg:leading-relaxed" key={index}>{tasks}</li>
                  ))}
                </ul>

                <div className="projects-container text-slate-900 mt-4">
                  <p className="uppercase font-bold">{staticText.projects}</p>
                  <div className="flex flex-wrap">
                    {item.projects.map((project, index) => (
                      <a className="px-2 underline lg:no-underline font-extrabold hover:underline" key={index} href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
                    ))}
                  </div>
                </div>

                <div className="bottom-container flex justify-between mt-4">
                  <div className="icons flex flex-col justify-start">
                    <p className="uppercase font-bold">{staticText.skills}</p>
                    <div className="icon-container flex flex-wrap text-3xl max-w-[200px] lg:max-w-[300px]">
                      {item.techs.map((icons, index) => (
                        <span className="p-1" key={index}>{icons}</span>
                      ))}
                    </div>
                  </div>

                  <div className="reference flex flex-col text-slate-900 text-justify">
                    {item.reference.map((ref, index) => (
                      <span key={index}>{ref}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
