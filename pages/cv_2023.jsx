import { HomeHeaderSection } from "../components/_homepage";
import { ImagesComponent } from "../components/_shared";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaGitAlt,
  FaUbuntu,
  FaSearchLocation,
  FaRegArrowAltCircleRight,
  FaPhoneAlt,
  FaArrowCircleRight,
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
  SiAdobephotoshop,
  SiMinutemailer,
  SiHomebridge,
} from "react-icons/si";

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

export default function CV_2023() {
  return (
    <div className="cv-page min-h-screen w-screen flex">
      <div className="left relative z-10 h-screen bg-sky-600 flex flex-col items-center pt-10">
        <div className="left-image absolute">
          <ImagesComponent
            style="w-80 h-80 hover:cursor-pointer border-8 border-sky-600 rounded-full"
            alt="paulo reizinho"
            src="/home_me_01.png"
          />
        </div>
        <div className="arrow absolute top-[360px] -right-10 text-slate-100 text-6xl border-4 border-sky-600 bg-sky-600 rounded-full ">
          <FaRegArrowAltCircleRight />
        </div>
        <div className="left-info absolute -left-20 text-slate-100 mt-80 w-full">
          <div className="w-full">
            <h1 className="mt-10 text-2xl font-bold mx-6">Intro</h1>
            <hr className="h-2" />
            <p className="text-lg mx-6">
              Inventive and creative Front End developer with abroad expertise
              in the modern Javascript frameworks as well as a strong 6th sense
              on UI/UX & Design. I have a background on Administration and
              management, but i found recently my true call software development
              and all that comes with it,, challenges, difficulties &
              frustrations, the way to overcome those is how I become the Hero
              on my story. I’m completely self-taught, whic hmeans my curiosity
              and motivation are my strongest Traits.
            </p>
          </div>

          <div className="w-full">
            <h1 className="mt-10 text-2xl font-bold mx-6">Education</h1>
            <hr className="h-2" />
            <h2 className="mx-6 text-lg font-bold">
              Profissional Degree of Management and Administration
            </h2>
            <p className="text-lg mx-6">IEFP Portugal | 2005-2008</p>
            <h2 className="mx-6 mt-4 text-lg font-bold">High School Degree</h2>
            <p className="text-lg mx-6">
              School Dr. Solano de Abreu | 2002-2005
            </p>
          </div>

          <div className="w-full">
            <h1 className="mt-10 text-2xl font-bold mx-6">Technologies</h1>
            <hr className="h-2" />
            <div className="mx-6 flex flex-wrap">
              {techs.map((tech, i) => {
                return (
                  <div key={i} className="text-3xl m-2">
                    {tech.icon}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="right absolute w-full min-h-screen bg-slate-100 pl-[500px] pt-20">
        <h1 className="text-teal-900 text-6xl font-semibold mb-2">
          Paulo Lopes Reizinho
        </h1>
        <h2 className="text-sky-600 text-4xl font-semibold mb-2">
          Front End Developer
        </h2>
        <hr className="h-1 bg-teal-900" />
        <div className="text-teal-900 text-xl flex items-center my-4">
          <FaSearchLocation />
          <p className="ml-2">Girhaldenstrasse 17, 8040 Zurich</p>
        </div>
        <div className="text-teal-900 text-xl flex items-center my-4">
          <FaPhoneAlt />
          <p className="ml-2">+41 078 798 95 33</p>
        </div>
        <div className="text-teal-900 text-xl flex items-center my-4">
          <SiMinutemailer />
          <p className="ml-2">paulolopesreizinho@gmail.com</p>
        </div>
        <div className="text-teal-900 text-xl flex items-center my-4">
          <SiHomebridge />
          <p className="ml-2">www.pauloreizinho.com</p>
        </div>
        <div className="experience">
          <h3 className="text-teal-900 text-2xl font-semibold mb-2 mt-4">
            Profissional Experience
          </h3>
          <hr className="h-1 bg-teal-900" />
          <div className="position">
            <FaArrowCircleRight className="arrow mt-1" />
            <div className="ml-2">
              <h2>
                Front end developer, Mover, Driver, Assembler
              </h2>
              <div className="bg-slate-100 rounded-lg mr-4 mt-2 px-2 py-3">
                <h3>Helping Hand | Aug2022 - Now!</h3>
                <h4>Reference: Michael Silbermann - CEO at Helping Hand | +410434431737 | info@helpinghand.ch</h4>
                <p>
                As my developer studies progress i took work on amoving company, in which i had the following responsibilities:
                  -Alterations and improvements on the company website;
                  -Move safely the clients items and furniture;
                  -Orient and organize the job with the client as team lead;
                  -Drive and deliver packages;
                  -Assemble different type of furniture;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
