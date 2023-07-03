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

const experience = [
  {
    company: "Helping Hand",
    year: "Aug 2022 - Now!",
    role: "Front end developer, Mover, Driver, Assembler",
    reference: "Reference: Michael Silbermann - CEO at Helping Hand | +410434431737 | info@helpinghand.ch",
    description: `As my developer studies progress i took work on amoving company, in which i had the following responsibilities:
                  - Alterations and improvements on the company website;
                  - Move safely the clients items and furniture;
                  - Orient and organize the job with the client as team lead;
                  - Drive and deliver packages;
                  - Assemble different type of furniture;`,
    techs: [<SiJoomla key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiFigma key={0} />, <SiWindows key={0} />, <GiSteeringWheel key={0} />, <FaPeopleCarry key={0} />, <IoIosPeople key={0} />],
    class: 'exp1',
  },
  {
    company: "Pickwings",
    year: "Feb 2022 - Jul 2022",
    role: "FRONT END DEVELOPER, DESIGNER",
    reference: "Reference: Carlos Martinho - Senior Software Engineer at Pickwings | +410787422051 | carlos@pickwings.ch",
    description: `My latest position was at Pickwings(about.pickwings.ch)
    I was part of a new project, a job platform for drivers, fahrerzentrale.ch,
    launched Fall of 2022.
    I was responsible for the following:
    -Diverse Front End implementations;
    -Analize and debug; 
    -Changing and testing REST API; 
    -Design and improve the ongoing project;
    -Mobile optimizations;
    `,
    techs: [<SiAngular key={0} />, <SiDjango key={0} />, <SiTypescript key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiJavascript key={0} />, <SiPython key={0} />, <SiDocker key={0} />, <SiFigma key={0} />, <SiNodedotjs key={0} />, <FaGitAlt key={0} />, <SiGitlab key={0} />, <FaUbuntu key={0} />, <SiYarn key={0} />, <SiAdobephotoshop key={0} />,],
    class: 'exp2',
  },
  {
    company: "Helping Hand",
    year: "Apr 2020 - Dez 2021",
    role: "Front end developer, Mover, Driver, Assembler",
    reference: "Reference: Michael Silbermann - CEO at Helping Hand | +410434431737 | info@helpinghand.ch",
    description: `As my developer studies progress i took work on amoving company, in which i had the following responsibilities:
                  - Alterations and improvements on the company website;
                  - Move safely the clients items and furniture;
                  - Orient and organize the job with the client as team lead;
                  - Drive and deliver packages;
                  - Assemble different type of furniture;`,
    techs: [<SiJoomla key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiFigma key={0} />, <SiWindows key={0} />, <GiSteeringWheel key={0} />, <FaPeopleCarry key={0} />, <IoIosPeople key={0} />],
    class: 'exp3',
  },
  {
    company: "Feinheit",
    year: "Aug 2019 - Feb 2020",
    role: "Front-end developer",
    reference: "Reference: Matthias Kestenholz - Partner and Software Engineer at Feinheit | +41094797896 | mk@feinheit.ch",
    description: `My first internship was at Feinheit AG(feinheit.ch) where I worked as a
    Front-End developer mainly with SCSS and HTML in projects with Angular
    and Django on an Agile environment in the following projects: 
    -Some minor changes on the already existing project, www.fcz.ch;
    -Small styling changes on the company site, feinheit.ch; 
    -Part of the campaign website “Mehr bezahlbare Wohnungen” that
      was taken offline, but you can check some details
      here(feinheit.ch/arbeiten/mehr-bezahlbare-wohnungen), in which i
      was part of the Front-end team; 
      -Some small changes and corrections on the already existing site,
        www.limmatstadt.ch;
      -Front-End implementation, desktop and mobile of Protier, www.protier.ch;
    `,
    techs: [<SiAngular key={0} />, <SiDjango key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiJavascript key={0} />, <SiPython key={0} />, <SiDocker key={0} />, <SiNodedotjs key={0} />, <FaGitAlt key={0} />, <SiGitlab key={0} />, <FaUbuntu key={0} />, <SiYarn key={0} />],
    class: 'exp4',
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
    <div className="experience">
      <h2>
        Profissional Experience
      </h2>
      <hr />

      {experience.map((item, i) => {
        return (
          <div key={i} className={`position ${isOpen[item.class] ? "toggled" : ""}`}>
            <FaArrowCircleRight onClick={() => toggle(item.class)} className="arrow mt-1" />
            <div className="ml-2">
              <div className="flex">
                <h2 className="w-[300px]">{item.year}</h2>
                <h2>| {item.company}</h2>
              </div>
              <div className="bg-slate-100 rounded-lg mr-4 mt-2 px-2 py-3">
                <h3>{item.role}</h3>
                <h4>
                  {item.reference}
                </h4>
                <p className="whitespace-pre-line mt-2">
                  {item.description}
                </p>
                <div className="text-teal-900 flex mt-2">
                  <h3 className="text-3xl uppercase">Tecnologies:</h3>
                  <div className="flex flex-wrap text-3xl">
                    {item.techs}
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
