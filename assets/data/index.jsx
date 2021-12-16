// IMPORTS
import pattern from "../images/pattern.png";

// BANNERS
import bannerProj from "../images/homepage/banner_01.jpg";
import bannerEdu from "../images/homepage/banner_02.jpg";

// Home
import backgroundHome from "../images/homepage/header_01.jpg";
import logoWhite from "../../public/logo_signature.png";
import aboutMeImg from "../images/homepage/blue_01.jpg";
import hobby_01 from "../images/homepage/hobby_01.jpg";
import hobby_02 from "../images/homepage/hobby_02.jpg";
import hobby_03 from "../images/homepage/hobby_03.jpg";
import hobby_04 from "../images/homepage/hobby_04.jpg";

// Projects
import backgroundProjects from "../images/projects/header_02.jpg";

import dev_fastRent from "../images/projects/dev/p10-min.jpg";
import dev_lastPortfolio from "../images/projects/dev/p09-min.jpg";
import dev_skyTours from "../images/projects/dev/p06-min.jpg";
import dev_hulu from "../images/projects/dev/p08-min.jpg";
import dev_trainedMonkeys from "../images/projects/dev/p05-min.jpg";
import dev_paulsEngine from "../images/projects/dev/p07-min.jpg";
import dev_netflix from "../images/projects/dev/p02-min.jpg";
import dev_sphere from "../images/projects/dev/p11-min.jpg";
import dev_comicPortfolio from "../images/projects/dev/p14-min.jpg";
import dev_blueVariant from "../images/projects/dev/latest_01.jpg";
import dev_leftBastards from "../images/projects/dev/latest_03.jpg";
import dev_sardinha from "../images/projects/dev/latest_02.jpg";
import dev_myPortfolio from "../images/projects/dev/latest_04.jpg";

import design_project_portfolio from "../images/projects/project_portfolio.png";
import design_project_leftBastards from "../images/projects/project_leftBastards.png";
import design_project_patricia from "../images/projects/project_patricia.png";

import creative_01 from "../images/projects/creative_01.jpg";
import creative_02 from "../images/projects/creative_02.jpg";
import creative_03 from "../images/projects/creative_03.jpg";
import creative_04 from "../images/projects/creative_04.jpg";

// Skills
import backgroundSkills from "../images/skills/header_03.jpg";

import {
  FaReact,
  FaCss3,
  FaNodeJs,
  FaFigma,
  FaYarn,
  FaGitAlt,
  FaPython,
  FaSass,
  FaNpm,
} from "react-icons/fa";
import {
  SiGraphql,
  SiDjango,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiJavascript,
  SiAdobephotoshop,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";
// Banners ---------------------------------------------------------------
export const bannerProjects = {
  backgroundImage: bannerProj,
  alt: "city zurich",
  logo: logoWhite,
  text: "Projects page",
};

export const bannerSkills = {
  backgroundImage: bannerEdu,
  alt: "lisbon portugal",
  logo: logoWhite,
  text: "Education page",
};

// Home ---------------------------------------------------------------
export const homeHeader = {
  backgroundImage: backgroundHome,
  logo: logoWhite,
};

export const aboutMe = {
  pattern: pattern,
  title: "About Me",
  text01:
    "My name is Paulo Reizinho, is was born in 1986 in a small town in the middle of Portugal but I`m currently living in Swiss land more precisely in Zurich.",
  text02:
    "I took Administration with focus in accounting but thing is, in which i learned quite a lot and adopted an organized methodology. Anyway, I love coding and the challenges that come with it specially when you find a solution for an hard problem. Course is never to late to change careers and create great things on the process provided that you have what it takes.",
  text03:
    "Well, I`ve been learning web Development since 2019 with highs and lows. Focusing on the front-end with a special interest in the design of visually appealing UI and an intuitive UX so people don`t get lost. My main tech is React, but my learning journey will never stop, but I`m leaning more to Next.js. I do my designs with Figma and Photoshop, for styling I like to use a hybrid approach with styled-components and tailwind, which bring a organized and maintainable code and beautifull to look at.",
  text04: "Any more info please contact me, all my contacts are in the footer.",
  sideImg: aboutMeImg,
  imgAlt: "paulo lopes reizinho",
};

export const hobbies = [
  {
    title: "home:hobbies_title01",
    imgSrc: hobby_01,
    alt: "computer",
    text: "home:hobbies_text01",
    className: "hobby",
  },
  {
    title: "home:hobbies_title02",
    imgSrc: hobby_02,
    alt: "gym",
    text: "home:hobbies_text02",
    className: "hobby-reverse",
  },
  {
    title: "home:hobbies_title03",
    imgSrc: hobby_03,
    alt: "hiking",
    text: "home:hobbies_text03",
    className: "hobby",
  },
  {
    title: "home:hobbies_title04",
    imgSrc: hobby_04,
    alt: "cooking",
    text: "home:hobbies_text04",
    className: "hobby-reverse",
  },
];

// Projects ---------------------------------------------------------------
export const projectsHeader = {
  backgroundImage: backgroundProjects,
};

export const projectsDev = {
  // main: [
  //   {
  //     id: 1,
  //     image: dev_sardinha,
  //     alt: "patricia project",
  //     title: "Private Chauffeur",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
  //     link: "https://patricia-vila-nova.vercel.app/",
  //   },
  // ],
  secondary: [
    {
      id: 1,
      image: dev_sardinha,
      alt: "patricia project",
      title: "Private Chauffeur",
      text: "A project for a friend that has her own driving service.",
      link: "https://patricia-vila-nova.vercel.app/",
      icon: <SiNextdotjs />,
    },
    {
      id: 2,
      image: dev_myPortfolio,
      alt: "paulo reizinho portfolio",
      title: "Portfolio",
      text: "This very own website a marvel of design.",
      link: "/",
      icon: <SiNextdotjs />,
    },
    {
      id: 3,
      image: dev_leftBastards,
      alt: "left bastards",
      title: "Left Bastards",
      text: "The official website of the car lovers group called, Left Bastards",
      link: "https://left-bastards.vercel.app/",
      icon: <SiNextdotjs />,
    },
    {
      id: 4,
      image: dev_blueVariant,
      alt: "paulo reizinho portfolio",
      title: "Portfolio old",
      text: "The first version of this website's design",
      link: "https://lordrichard-cv-blue.netlify.app/",
      icon: <FaReact />,
    },
  ],
  other: [
    {
      id: 1,
      image: dev_fastRent,
      alt: "car rental website",
      title: "FastRent",
      text: "A beautifull car rental website made with React using typescript. Used styled-components together with tailwind to style the page.",
      link: "https://lordrichard-rentfast.netlify.app/",
      icon: <FaReact />,
    },
    {
      id: 2,
      image: dev_lastPortfolio,
      alt: "old portfolio",
      title: "An old Portfolio",
      text: "Created with React.js with and elengant and simplistic design",
      link: "https://reizinhocv.netlify.app/",
      icon: <FaReact />,
    },
    {
      id: 3,
      image: dev_skyTours,
      alt: "world tours website",
      title: "Skytours",
      text: "This project was initially built using html and Sass, then later I converted to React maintaning the Sass styling system, elegant design of a tours agency.",
      link: "https://reizinho-skytours.netlify.com/",
      icon: <FaReact />,
    },
    {
      id: 4,
      image: dev_hulu,
      alt: "movie streaming platform hulu",
      title: "Hulu clone",
      text: "Built with Next.js imitating the design of the famous movie streaming platform Hulu, using the database of an API movie site TMDB.",
      link: "https://hulu-clone-rosy.vercel.app/",
      icon: <SiNextdotjs />,
    },
    {
      id: 5,
      image: dev_trainedMonkeys,
      alt: "eshop for trained monkeys",
      title: "Monkey Circus",
      text: "A mocking E-comerce to sell monkeys, with a credit card payment implemented.",
      link: "https://monkeycircus-2z4e865i4.now.sh",
      icon: <SiNextdotjs />,
    },
    {
      id: 6,
      image: dev_comicPortfolio,
      alt: "portfolio design based on comics",
      title: "Comic Portfolio",
      text: "A very creative portfolio with a comic theme.",
      link: "https://new-cv-parallax.netlify.app/",
      icon: <FaReact />,
    },
    {
      id: 7,
      image: dev_sphere,
      alt: "three.js project",
      title: "The Sphere",
      text: "My first play with Three.js.",
      link: "https://lordrichard-threejs-sphere.netlify.app/",
      icon: <SiJavascript />,
    },
    {
      id: 8,
      image: dev_paulsEngine,
      alt: "google api used",
      title: "Paul's Engine",
      text: "A project build with Next.js using the google search API.",
      link: "https://paul-search.vercel.app/",
      icon: <SiNextdotjs />,
    },
  ],
};

export const projectsDesign = [
  {
    id: 1,
    imgSrc: design_project_portfolio,
    alt: "the mockups of this website",
    title: "This website mockups",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
    icon: <FaFigma />,
  },
  {
    id: 2,
    imgSrc: design_project_leftBastards,
    alt: "the mockups of the left bastards website",
    title: "Left Bastards mockups",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
    icon: <FaFigma />,
  },
  {
    id: 3,
    imgSrc: design_project_patricia,
    alt: "the mockups of patricia website",
    title: "Private Chauffeur mockups",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
    icon: <FaFigma />,
  },
];

export const projectsCreative = [
  {
    id: 1,
    imgSrc: creative_01,
    alt: "project",
  },
  {
    id: 2,
    imgSrc: creative_02,
    alt: "project",
  },
  {
    id: 3,
    imgSrc: creative_03,
    alt: "project",
  },
  {
    id: 4,
    imgSrc: creative_04,
    alt: "project",
  },
];

// Skills ---------------------------------------------------------------
export const skillsHeader = {
  backgroundImage: backgroundSkills,
};

export const skillsAndExperience = {
  title: "Skills & Experience",
  text01:
    "Based on my personal choice and time spent learning, I have stronger skills on the front-end, the visual aspect is of big importance and on that I feel like a Monet looking to create my Lady with the Umbrella.",
  text02:
    " have learned HTML and CSS, then went on to Javascript, then Sass. I decided to go to React as my framework(library) of choice, not because of it`s popularity, but because of it`s component based structure and workflow.",
  text03:
    "But anyway, i don`t mean to leave you on a cliffhanger but if you want to hear more about my learning path and work experience, feel free to contact me.",
};

export const skillsExperience = [
  {
    title: "skills:exp01_title",
    company: "Feinheit",
    period: "2019 - 2020",
    text: "skills:exp01_text",
  },
];

export const tech = [
  {
    icon: <FaReact />,
    name: "react",
    color: "#02C6E9",
  },
  {
    icon: <SiNextdotjs />,
    name: "next",
    color: "#000000",
  },
  {
    icon: <SiTypescript />,
    name: "typescript",
    color: "#0074C2",
  },
  {
    icon: <SiHtml5 />,
    name: "html",
    color: "#F25320",
  },
  {
    icon: <FaCss3 />,
    name: "css",
    color: "#0066B6",
  },
  {
    icon: <SiJavascript />,
    name: "javascript",
    color: "#EAD41C",
  },
  {
    icon: <FaNodeJs />,
    name: "node",
    color: "#84BB00",
  },
  {
    icon: <SiAdobephotoshop />,
    name: "photoshop",
    color: "#001C33",
  },
  {
    icon: <FaFigma />,
    name: "figma",
    color: "#9A54F2",
  },
  {
    icon: <SiTailwindcss />,
    name: "tailwind",
    color: "#419FAA",
  },
  {
    icon: <SiStyledcomponents />,
    name: "styled components",
    color: "#9C538F",
  },
  {
    icon: <FaNpm />,
    name: "npm",
    color: "#C13534",
  },
  {
    icon: <FaYarn />,
    name: "yarn",
    color: "#1076A4",
  },
  {
    icon: <FaGitAlt />,
    name: "git",
    color: "#E44D30",
  },
  {
    icon: <FaPython />,
    name: "python",
    color: "#F0C540",
  },
  {
    icon: <SiDjango />,
    name: "django",
    color: "#003729",
  },
  {
    icon: <FaSass />,
    name: "sass",
    color: "#C26191",
  },
  {
    icon: <SiGraphql />,
    name: "graphql",
    color: "#D60090",
  },
];

// EDUCATION ---------------------------------------------------------------
export const education = [
  {
    title: "skills:ed01_title",
    start: "Sep 05",
    finish: "Sep 08",
    school: "IEFP Portugal",
    text: "skills:ed01_text",
  },
  {
    title: "skills:ed02_title",
    start: "Apr 19",
    finish: "Sep 19",
    school: "Udemy",
    text: "skills:ed02_text",
  },
  {
    title: "skills:ed03_title",
    start: "Dec 19",
    finish: "Mar 20",
    school: "EDX",
    text: "skills:ed03_text",
  },
  {
    title: "skills:ed04_title",
    start: "Dec 20",
    finish: "Mar 21",
    school: "Udemy",
    text: "skills:ed04_text",
  },
  {
    title: "skills:ed05_title",
    start: "Jan 21",
    finish: "Mar 21",
    school: "Udemy",
    text: "skills:ed05_text",
  },
];
