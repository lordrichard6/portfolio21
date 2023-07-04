import React, { useState } from 'react';
import { TbCertificate } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { FaSchool } from "react-icons/fa";

const staticText = {
  title: "Certificates & Hard Skills",
  btnInfo: "More Info",
  btnInfo: "More Info",
  skills: "The skills learned on this course can be resumed in the following list:",
  btnPDF: "PDF"
}

const certifications = [
  {
    title: "Managment and Administration",
    school: "IEFP Portugal",
    link: "https://drive.google.com/file/d/1GUD5DhtC0MK9tD-ivo-ZVl3N4ub3oqoL/view?usp=drive_link",
    language: "(de)",
    tags: "Web development",
    skills: ["Mathematics", "Social psycology of organizations", "Legal principles", "Iformation and communication technologies", "Health and safety at work", "Commercial documentation", "Commercial, administrative and labol law", "Accounting", "Administration and management of human resources", "Procurement and inventory management", "Technical and administrative practices", "Organization and business management", "Commercial calculation", "Portuguese and English, Business level", "Customer service", "Practice during the training"]
  },
  {
    title: "Complete Web Developer: Zero to Mastery",
    school: "Udemy",
    link: "https://drive.google.com/file/d/1dN3f5oHThMCSrBg3Gf9tpr3-GOjoNm9h/view?usp=drive_link",
    language: "",
    tags: "Web development",
    skills: ["HTML/HTML5", "CSS/CSS3", "SemanticUI", "Responsive Design", "Bootstrap 5", "Javascript (including ES6/ES7/ES8/ES9/ES10/ES2020/ES2021/ES2022)", "Asynchronous JavaScript", "HTTP/JSON/AJAX", "React + Redux + React Hooks", "Git + Github", "Command Line", "Node.js", "Express.js", "NPM", "RESTful API Design", "PostgresSQL", "SQL", "Scalable Infrastructure", "Production and Deployment"]
  },
  {
    title: "Modern React with Redux",
    school: "Udemy",
    link: "https://drive.google.com/file/d/1h9tkGfllT_CmWCn12ERj8sQfSxc6RRXL/view?usp=drive_link",
    language: "",
    tags: "Web development",
    skills: ["Fundamentals concepts behind React and Redux including JSX, state, and props", "NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax"]
  },
  {
    title: "Python and Django Full Stack Web Developer Bootcamp",
    school: "Udemy",
    link: "https://drive.google.com/file/d/1aIOMu5gfYpheZUG7NqJWFsSVzg8PVe2Z/view?usp=sharing",
    language: "",
    tags: "Web development",
    skills: ["HTML5","CSS3","Javascript","jQuery","Bootstrap 3 and 4","Python","Django Basics","Django Templates","Django Forms","Django Admin Customization","ORM","Class Based Views","REST APIs","User Authentication"]
  },
  {
    title: "Advanced CSS and Sass",
    school: "Udemy",
    link: "https://drive.google.com/file/d/1ShcED9SNGDAbeZ-U2TIE71y7csGyRHCF/view?usp=drive_link",
    language: "",
    tags: "Web development",
    skills: ["CSS techniques to create stunning designs and effects: clip-path, background-clip, mask-image, background-blend-mode, shape-outside, filter, backdrop-filter, object-fit, transform, column-count, hyphens, perspective, calc() and custom CSS properties","Advanced CSS animations with @keyframes, animation, and transition","Advanced CSS selectors, pseudo-classes, and pseudo-elements required for modern CSS development","CSS architecture: The 7-1 rule, component-based design, the BEM methodology, writing reusable, maintainable, and scalable code","Sass: variables, nesting, partials, imports, mixins, functions, extends","NPM ecosystem","Advanced responsive design workflows: mobile-first vs desktop-first strategies, selecting breakpoints, em vs rem units and feature queries to test for browser support","Responsive images in HTML and CSS for faster pageloads: resolution switching, density switching, art direction","Flexbox layouts: main concepts, introduction to both flex container and flex item-specific properties","CSS Grid layouts: main concepts, CSS grid vs flexbox, and layout techniques applied to a real-world project",]
  },
]

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState(null);

  const openPopup = (index) => {
    setActiveCert(index);
  };

  const closePopup = () => {
    setActiveCert(null);
  };

  return (
    <div className="certificates-container">
      <h2 className="ml-6 text-3xl font-bold mx-6">
        {staticText.title}
      </h2>
      <hr className="h-1" />

      {certifications.map((item, i) => {
        return (
          <div key={i} className="flex items-center m-4 h-[36px]">
            <TbCertificate className="text-4xl" />
            <button className='btn' onClick={() => openPopup(i)}>
              {staticText.btnInfo}
            </button>
            <h2 className='font-semibold text-2xl lg:text-3xl max-w-[160px] lg:max-w-none truncate'>{item.title}</h2>
            <p className="uppercase mb-3">{item.language}</p>
            {activeCert === i && (
              <div className="popup transition ease-in-out delay-150 w-full h-full flex-centered backdrop-sepia backdrop-blur-sm">
                <div className="popup-content max-w-[600px] w-full lg:w-[600px] max-h-full rounded-lg p-4 m-2">
                  <div className="flex justify-between mb-4">
                    <div className="header flex flex-col">
                      <h2 className='text-2xl lg:text-[32px] font-normal lg:leading-relaxed flex'><FaSchool className="mr-2 lg:mt-1" />{item.school}</h2>
                      <h2 className='text-2xl lg:text-[32px] font-normal lg:leading-relaxed'>{item.title}</h2>
                    </div>
                    <span onClick={closePopup} className='cursor-pointer'><ImCross className="text-xl" /></span>
                  </div>
                  <p className='text-[16px] font-normal'>{staticText.skills}</p>
                  <ul className='max-h-[400px] lg:max-h-full overflow-y-scroll lg:overflow-y-visible'>
                    {item.skills.map((skill, index) => (
                      <li key={index} className='font-light'>{skill}</li>
                    ))}
                  </ul>
                  <div className="flex">
                    <div className="flex justify-end w-full">
                      <TbCertificate className="text-6xl font-thin text-slate-100 mr-2" />
                      <button className='bg-slate-100 text-slate-800 px-4 py-2 text-[16px] font-normal my-auto'><a href={item.link} target="_blank" rel="noopener noreferrer">{staticText.btnPDF}</a></button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}

    </div>
  );
}
