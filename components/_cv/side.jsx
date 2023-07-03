import React, { useState } from "react";

import { ImagesComponent } from "../_shared";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaGitAlt,
  FaUbuntu,
  FaRegArrowAltCircleRight
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiDjango,
  SiDocker,
  SiFigma,
  SiNodedotjs,
  SiGitlab,
  SiGithub,
  SiGraphql,
  SiNpm,
  SiYarn,
  SiAdobephotoshop
} from "react-icons/si";

const titles = {
  intro: "Intro",
  ed: "Education",
  techs: "Technologies",
}

const myImage = {
  imgSrc: "/home_me_01.png",
  alt: "paulo reizinho"
}

const intro = `Inventive and creative Front End developer with abroad expertise
  in the modern Javascript frameworks as well as a strong 6th sense
  on UI/UX & Design. I have a background on Administration and
  management, but i found recently my true call software development
  and all that comes with it,, challenges, difficulties &
  frustrations, the way to overcome those is how I become the Hero
  on my story. I’m completely self-taught, which means my curiosity
  and motivation are my strongest Traits.`

const education = [
  {
    degree: "Profissional Degree of Management and Administration",
    school: "IEFP Portugal",
    year: "2005-2008",
  },
  {
    degree: "High School Degree",
    school: "School Dr. Solano de Abreu",
    year: "2002-2005",
  }
]

const techs = [
  { icon: <AiOutlineHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <SiJavascript /> },
  { icon: <SiTypescript /> },
  { icon: <SiPython /> },
  { icon: <SiReact /> },
  { icon: <SiNextdotjs /> },
  { icon: <SiAngular /> },
  { icon: <SiDjango /> },
  { icon: <SiDocker /> },
  { icon: <SiFigma /> },
  { icon: <SiNodedotjs /> },
  { icon: <FaGitAlt /> },
  { icon: <SiGithub /> },
  { icon: <SiGitlab /> },
  { icon: <FaUbuntu /> },
  { icon: <SiGraphql /> },
  { icon: <SiNpm /> },
  { icon: <SiYarn /> },
  { icon: <SiAdobephotoshop /> },
];

const button = {
  text: "Download in PDF",
  link: "https://drive.google.com/file/d/1RM1nWl7wQAJoGlOgxfNvSZFOIGsTy0oM/view?usp=drive_link"
}

export default function CVSide() {
  const [isOpen, setIsOpen] = useState({
    leftColumn: true,
  });

  const toggle = (element) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  console.log(isOpen);

  return (
    <div className={`sidebar ${isOpen.leftColumn ? "toggled" : ""}`}>
      <div className="side-image">
        {/* <ImagesComponent
          style="image-wrapper"
          alt={myImage.alt}
          src={myImage.imgSrc}
        /> */}
        {isOpen.leftColumn === true 
        ? (<video className="image-wrapper" src="/videos/cv_vid_tog.mp4" loop autoPlay muted type="mp4"></video>) 
        : (<video className="image-wrapper" src="/videos/cv_vid.mp4" loop autoPlay muted type="mp4"></video>)}
      </div>
      {/* <div onClick={() => toggle('leftColumn')} className="arrow">
        <FaRegArrowAltCircleRight />
      </div> */}
      <div className="side-info">
        <div className="w-full">
          <h1>{titles.intro}</h1>
          <hr />
          <p>
            {intro}
          </p>
        </div>

        <div className="w-full">
          <h1>{titles.ed}</h1>
          <hr />
          {education.map((item, i) => {
            return (
              <div className="mb-2" key={i}>
                <h2>
                  {item.degree}
                </h2>
                <p>{item.school} | {item.year}</p>
              </div>
            )
          })}
        </div>

        <div className="w-full">
          <h1>{titles.techs}</h1>
          <hr />
          <div className="techs-wrapper">
            {techs.map((tech, i) => {
              return (
                <div key={i} className="tech">
                  {tech.icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className="btn">
          <button>
            <a href={button.link} target="_blank" rel="noopener noreferrer">{button.text}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
