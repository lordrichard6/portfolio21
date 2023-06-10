import React, { useState } from "react";

import { AiOutlineHtml5 } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { MdPictureAsPdf } from "react-icons/md";
import {
  FaCss3Alt,
  FaGitAlt,
  FaUbuntu,
  FaSearchLocation,
  FaRegArrowAltCircleRight,
  FaPhoneAlt,
  FaArrowCircleRight,
  FaPeopleCarry,
  FaCertificate,
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
  SiJoomla,
  SiWindows,
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

const helpingHand = [
  { icon: <SiJoomla /> },
  { icon: <AiOutlineHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <SiFigma /> },
  { icon: <SiWindows /> },
  { icon: <GiSteeringWheel /> },
  { icon: <FaPeopleCarry /> },
  { icon: <IoIosPeople /> },
];

const pickwings = [
  { icon: <SiAngular /> },
  { icon: <SiDjango /> },
  { icon: <SiTypescript /> },
  { icon: <AiOutlineHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <SiJavascript /> },
  { icon: <SiPython /> },
  { icon: <SiDocker /> },
  { icon: <SiFigma /> },
  { icon: <SiNodedotjs /> },
  { icon: <FaGitAlt /> },
  { icon: <SiGitlab /> },
  { icon: <FaUbuntu /> },
  { icon: <SiYarn /> },
  { icon: <SiAdobephotoshop /> },
];

const feinheit = [
  { icon: <SiAngular /> },
  { icon: <SiDjango /> },
  { icon: <AiOutlineHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <SiJavascript /> },
  { icon: <SiPython /> },
  { icon: <SiDocker /> },
  { icon: <SiNodedotjs /> },
  { icon: <FaGitAlt /> },
  { icon: <SiGitlab /> },
  { icon: <FaUbuntu /> },
  { icon: <SiYarn /> },
];

export default function CVMain() {
  const [isOpen, setIsOpen] = useState({
    leftColumn: false,
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
        <div className={`position ${isOpen.exp1 ? "toggled" : ""}`}>
          <FaArrowCircleRight onClick={() => toggle('exp1')} className="arrow mt-1" />
          <div className="ml-2">
            <div className="flex">
              <h2 className="w-[300px]">Aug 2022 - Now!</h2>
              <h2>| Helping Hand</h2>
            </div>
            <div className="bg-slate-100 rounded-lg mr-4 mt-2 px-2 py-3">
              <h3>Front end developer, Mover, Driver, Assembler</h3>
              <h4>
                Reference: Michael Silbermann - CEO at Helping Hand |
                +410434431737 | info@helpinghand.ch
              </h4>
              <p className="whitespace-pre-line mt-2">
                {`As my developer studies progress i took work on amoving company, in which i had the following responsibilities:
                  - Alterations and improvements on the company website;
                  - Move safely the clients items and furniture;
                  - Orient and organize the job with the client as team lead;
                  - Drive and deliver packages;
                  - Assemble different type of furniture;`}
              </p>
              <div className="text-teal-900 flex mt-2">
                <h3 className="text-3xl uppercase">Tecnologies:</h3>
                <div className="flex flex-wrap">
                  {helpingHand.map((tech, i) => {
                    return (
                      <div key={i} className="text-3xl ml-1">
                        {tech.icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`position ${isOpen.exp2 ? "toggled" : ""}`}>
          <FaArrowCircleRight onClick={() => toggle('exp2')} className="arrow mt-1" />
          <div className="ml-2">
            <div className="flex">
              <h2 className="w-[300px]">Feb 2022 - Jul 2022</h2>
              <h2>| Pickwings</h2>
            </div>
            <div className="bg-slate-100 rounded-lg mr-4 mt-2 px-2 py-3">
              <h3>FRONT END DEVELOPER, DESIGNER</h3>
              <h4>
                Reference: Carlos Martinho - Senior Software Engineer at
                Pickwings | +410787422051 | carlos@pickwings.ch
              </h4>
              <p className="whitespace-pre-line mt-2">
                {`My latest position was at Pickwings(about.pickwings.ch)
                  I was part of a new project, a job platform for drivers, fahrerzentrale.ch,
                  launched Fall of 2022.
                  I was responsible for the following:
                  -Diverse Front End implementations;
                  -Analize and debug; 
                  -Changing and testing REST API; 
                  -Design and improve the ongoing project;
                  -Mobile optimizations;
                  `}
              </p>
              <div className="text-teal-900 flex mt-2">
                <h3 className="text-3xl uppercase">Tecnologies:</h3>
                <div className="flex flex-wrap">
                  {pickwings.map((tech, i) => {
                    return (
                      <div key={i} className="text-3xl ml-1">
                        {tech.icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`position ${isOpen.exp3 ? "toggled" : ""}`}>
          <FaArrowCircleRight onClick={() => toggle('exp3')} className="arrow mt-1" />
          <div className="ml-2">
            <div className="flex">
              <h2 className="w-[300px]">Apr 2020 - Dez 2021</h2>
              <h2>| Helping Hand</h2>
            </div>
            <div className="info bg-slate-100 rounded-lg mr-4 mt-2 px-2 py-3">
              <h3>Front end developer, Mover, Driver, Assembler</h3>
              <h4>
                Reference: Michael Silbermann - CEO at Helping Hand |
                +410434431737 | info@helpinghand.ch
              </h4>
              <p className="whitespace-pre-line mt-2">
                {`As my developer studies progress i took work on amoving company, in which i had the following responsibilities:
                  - Alterations and improvements on the company website;
                  - Move safely the clients items and furniture;
                  - Orient and organize the job with the client as team lead;
                  - Drive and deliver packages;
                  - Assemble different type of furniture;`}
              </p>
              <div className="text-teal-900 flex mt-2">
                <h3 className="text-3xl uppercase">Tecnologies:</h3>
                <div className="flex flex-wrap">
                  {helpingHand.map((tech, i) => {
                    return (
                      <div key={i} className="text-3xl ml-1">
                        {tech.icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`position ${isOpen.exp4 ? "toggled" : ""}`}>
          <FaArrowCircleRight onClick={() => toggle('exp4')} className="arrow mt-1" />
          <div className="ml-2">
            <div className="flex">
              <h2 className="w-[300px]">Aug 2019 - Feb 2020</h2>
              <h2>| Feinheit</h2>
            </div>
            <div className="bg-slate-100 rounded-lg mr-4 mt-2 px-2 py-3">
              <h3>Front end developer, Mover, Driver, Assembler</h3>
              <h4>
                Reference: Matthias Kestenholz - Partner and Software Engineer
                at Feinheit | +41094797896 | mk@feinheit.ch
              </h4>
              <p className="whitespace-pre-line mt-2">
                {`My first internship was at Feinheit AG(feinheit.ch) where I worked as a
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
                    `}
              </p>
              <div className="text-teal-900 flex mt-2">
                <h3 className="text-3xl uppercase">Tecnologies:</h3>
                <div className="flex flex-wrap">
                  {feinheit.map((tech, i) => {
                    return (
                      <div key={i} className="text-3xl ml-1">
                        {tech.icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recomendations">
        <h3 className="text-teal-900 text-2xl font-semibold mb-2 mt-4">
          Recomendations
        </h3>
        <hr className="h-1 bg-teal-900" />
        <div className="text-teal-900 flex items-center mt-2">
          <FaCertificate />
          {/* <ImagesComponent
              style="w-[140px] h-[50px] ml-3"
              alt="feinheit"
              src="/pickwings.png"
            /> */}
          <button>
            <a href="https://drive.google.com/file/d/1jchf2W1kNPwqgja7_O8FvrL2a5dR8wfJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Check it out</a>
          </button>
          <h2>Pickwings</h2>
          <p>(DE)</p>
        </div>
        <div className="text-teal-900 flex items-center mt-2">
          <FaCertificate />
          {/* <ImagesComponent
              style="w-[140px] h-[50px] ml-3"
              alt="feinheit"
              src="/feinheit.png"
            /> */}
          <button>
            <a href="https://drive.google.com/file/d/1nnekEjPDoVEyVdZSn_P-4Fu598DrRRhf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Check it out</a>
          </button>
          <h2>Feinheit</h2>
          <p>(DE)</p>
        </div>
      </div>

      <div className="certifications">
        <h3 className="text-teal-900 text-2xl font-semibold mb-2 mt-4">
          Certificates
        </h3>
        <hr className="h-1 bg-teal-900" />
        <div className="text-teal-900 flex items-center mt-2">
          <TbCertificate />
          {/* <ImagesComponent
              style="w-[140px] h-[50px] ml-3"
              alt="iefp"
              src="/iefp.png"
            /> */}
          <button>
            <a href="https://drive.google.com/file/d/1GUD5DhtC0MK9tD-ivo-ZVl3N4ub3oqoL/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Check it out</a>
          </button>
          <h2>Managment and Administration</h2>
          <p>(DE)</p>
        </div>
        <div className="text-teal-900 flex items-center mt-2">
          <TbCertificate />
          {/* <ImagesComponent
              style="w-[140px] h-[50px] ml-3"
              alt="udemy"
              src="/udemy.png"
            /> */}
          <button>
            <a href="https://drive.google.com/file/d/1dN3f5oHThMCSrBg3Gf9tpr3-GOjoNm9h/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Check it out</a>
          </button>
          <h2>Complete Web Developer: Zero to Mastery</h2>
        </div>
        <div className="text-teal-900 flex items-center mt-2">
          <TbCertificate />
          {/* <ImagesComponent
              style="w-[140px] h-[50px] ml-3"
              alt="udemy"
              src="/udemy.png"
            /> */}
          <button>
            <a href="https://drive.google.com/file/d/1h9tkGfllT_CmWCn12ERj8sQfSxc6RRXL/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Check it out</a>
          </button>
          <h2>Modern React with Redux</h2>
        </div>
      </div>
    </div>
  );
}
