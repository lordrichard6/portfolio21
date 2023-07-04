import { ImagesComponent } from "../_shared";
import ContactsSection from "./contacts"
import DownloadButton from "./button"
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaGitAlt,
  FaUbuntu
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

import { header } from "./header"

const titles = {
  intro: "Intro",
  contacts: "Contacts",
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

export default function CVSide() {

  return (
    <div className="sidebar w-full lg:w-[410px] z-10 min-h-screen flex flex-col items-center pt-10 lg:fixed">

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
          style="image-wrapper lg:hidden"
          alt={myImage.alt}
          src={myImage.imgSrc}
        />
        <video className="image-wrapper w-full hidden lg:block left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-x-[-1] absolute" src="/videos/cv_vid_tog.mp4" loop autoPlay muted type="mp4"></video>
      </div>
      <div className="side-info lg:-left-20 text-slate-100 w-full lg:w-[410px]">

        <div className="intro-container w-full mb-4">
          <h2>{titles.intro}</h2>
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

        <div className="techs-container w-full mb-4">
          <h2>{titles.techs}</h2>
          <hr />
          <div className="techs-wrapper mx-6 flex flex-wrap">
            {techs.map((tech, i) => {
              return (
                <div key={i} className="icon text-3xl m-2">
                  {tech.icon}
                </div>
              );
            })}
          </div>
        </div>

        <DownloadButton style="white hidden lg:flex" />

      </div>
    </div>
  );
}
