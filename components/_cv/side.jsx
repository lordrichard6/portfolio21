import React, { useState } from "react";

import { ImagesComponent } from "../_shared";
import ContactsSection from "./contacts"
import DownloadButton from "./button"
import { AiOutlineHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import {
  FaCss3Alt,
  FaGitAlt,
  FaUbuntu,
  FaArrowAltCircleRight,
  FaRegArrowAltCircleRight,
  FaArrowLeft
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiJquery,
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
  SiAdobephotoshop,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiJenkins,
  SiAnsible,
  SiKubernetes,
  SiWix,
  SiAdobepremierepro
} from "react-icons/si";

import { header } from "./header"

const titles = {
  intro: "Intro",
  contacts: "Contacts",
  ed: "Education",
  techs: "Technologies",
  lang: "Languages"
}

const myImage = {
  imgSrc: "/home_me_01.png",
  alt: "paulo reizinho"
}

const intro = `Inventive and creative Front End developer with abroad expertise
  in the modern Javascript frameworks as well as a strong 6th sense
  on UI/UX & Design. I have a background on Administration and
  management, but i found recently my true call software development
  and all that comes with it, challenges, difficulties &
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

const techStack = [
  {
    techs: [
      { icon: <AiOutlineHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiJquery />, name: "JQuery" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiAngular />, name: "Angular" },
    ],
    name: "Front-end",
    class: "front"
  },
  {
    techs: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiNodedotjs />, name: "Node" },
      { icon: <SiExpress />, name: "Express.js" },
    ],
    name: "Back-end",
    class: "back"
  },
  {
    techs: [
      { icon: <SiPostgresql />, name: "Post" },
      { icon: <AiOutlineConsoleSql />, name: "SQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiGraphql />, name: "GraphQl" },
    ],
    name: "Database",
    class: "db"
  },
  {
    techs: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiGithub />, name: "Github" },
      { icon: <SiNpm />, name: "NPM" },
      { icon: <SiYarn />, name: "yarn" },
      { icon: <SiJenkins />, name: "Jenkins" },
      { icon: <SiAnsible />, name: "Ansible" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
    ],
    name: "DevOps",
    class: "devops"
  },
  {
    techs: [
      { icon: <SiAdobephotoshop />, name: "Photoshop" },
      { icon: <SiAdobepremierepro />, name: "Premiere pro" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <FaUbuntu />, name: "Ubuntu" },
      { icon: <SiWix />, name: "Wix" },
    ],
    name: "Other",
    class: "other"
  }
]

export default function CVSide() {
  const [isOpen, setIsOpen] = useState({
    front: false,
    back: false,
    db: false,
    devops: false,
    other: false,
  });

  const toggle = (element) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  return (
    <div className="sidebar w-full lg:w-[410px] z-10 min-h-screen flex flex-col items-center pt-10">

      <div className="header-container mobile-only w-full lg:hidden text-center">
        <h1 className="text-[64px] font-bold tracking-widest leading-none">
          {header.name}
        </h1>
        <span className="my-role text-zinc-400 text-[40px] font-normal ">
          {header.title}
        </span>
        <hr />
      </div>

      <div className="side-image w-[310px] h-[310px] lg:w-[310px] lg:h-[310px] border-8 rounded-full hover:cursor-pointer relative overflow-hidden m-4">
        <ImagesComponent
          style="image-wrapper"
          alt={myImage.alt}
          src={myImage.imgSrc}
        />
        {/* <video className="image-wrapper w-full hidden lg:block left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-x-[-1] absolute" src="/videos/cv_vid_tog.mp4" loop autoPlay muted type="mp4"></video> */}
      </div>
      <div className="side-info lg:-left-20 text-slate-100 w-full lg:w-[410px]">

        <div className="intro-container w-full mb-4">
          <div className="flex items-center">
            <h2>{titles.intro}</h2>
            {/* <FaArrowAltCircleRight className="cursor-pointer text-2xl" /> */}
          </div>
          <hr />
          <p>
            {intro}
          </p>
        </div>

        <div className="contacts-container mobile-only lg:hidden w-full mb-4">
          <h2>{titles.contacts}</h2>
          <hr />
          <div className="mx-6">
            <ContactsSection />
          </div>
        </div>

        <div className="education-container w-full mb-4">
          <h2>{titles.ed}</h2>
          <hr />
          {education.map((item, i) => {
            return (
              <div className="mb-2" key={i}>
                <h3>
                  {item.degree}
                </h3>
                <p>{item.school} | {item.year}</p>
              </div>
            )
          })}
        </div>

        <div className="techs-container w-full mb-4 relative">
          <h2>{titles.techs}</h2>
          <hr />

          {techStack.map((item, i) => {
            return (
              <div key={i} className="techs-wrapper mx-6 flex items-center relative my-1">
                <h4 onClick={() => toggle(item.class)} className="text-xl lg:text-2xl z-40 cursor-pointer px-2 w-24 rounded border-double border-2 border-slate-100">
                  {item.name}
                </h4>
                <FaArrowLeft className="arrow text-xl lg:text-2xl ml-1" />
                <div className={`CVtechs ${isOpen[item.class] ? "toggled" : ""}`}>
                  {item.techs.map((tech, j) => (
                    <div key={j} className="icon relative text-2xl lg:text-3xl m-1 lg:m-2">
                      {tech.icon}
                      <div className="info-box absolute rounded-md border-slate-100 border-solid border-2 bg-rose-900 px-2 bottom-5 left-5 text-lg z-50">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

        </div>
        <div className="languages-container w-full mb-4 relative">
          <h2>{titles.lang}</h2>
          <hr />
          <div className="">
            <div className="flex items-center">
              <h3 className="text-2xl">Portuguese</h3>
              <FaRegArrowAltCircleRight   />
              <h3 className="text-2xl">Native Speaker</h3>
            </div>
            <div className="flex items-center">
              <h3 className="text-2xl">English</h3>
              <FaRegArrowAltCircleRight   />
              <h3 className="text-2xl">Fluent</h3>
            </div>
            <div className="flex items-center">
              <h3 className="text-2xl">Spanish</h3>
              <FaRegArrowAltCircleRight   />
              <h3 className="text-2xl">Proficient</h3>
            </div>
            <div className="flex items-center">
              <h3 className="text-2xl">German</h3>
              <FaRegArrowAltCircleRight   />
              <h3 className="text-2xl">Intermediate</h3>
            </div>
          </div>
        </div>

        <DownloadButton style="white hidden lg:flex mt-auto" />

      </div>
    </div>
  );
}
