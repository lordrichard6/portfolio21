// IMPORTS
import pattern from "../images/pattern.png";

// Home
// import aboutMeImg from "../images/homepage/blue_01.jpg";

// Projects
// import backgroundProjects from "../images/projects/header_02.jpg";

// Skills
// import backgroundSkills from "../images/skills/header_03.jpg";

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
  SiGithub,
  SiInstagram,
  SiLinkedin
} from "react-icons/si";
// Banners ---------------------------------------------------------------
// LAYOUT ---------------------------------------------------------------
export const pageLinks = [
  {
    to: "/",
    tabName: "common:home",
  },
  {
    to: "/projects",
    tabName: "common:projects",
  },
  {
    to: "/about",
    tabName: "common:about",
  },
  {
    to: "/contact",
    tabName: "common:contact",
  },
  // {
  //   to: "/cv_4186",
  //   tabName: "My CV",
  // },
];

export const languages = [
  {
    name: "pt",
    flag: "/pt.svg"
  },
  {
    name: "en",
    flag: "/en.svg"
  },
  {
    name: "de",
    flag: "/de.svg"
  }
]

export const logos = [
  {
    img: "/logo_white.svg",
    alt: "paulo lopes reizinho logo white"
  },
  {
    img: "/logo_gold.png",
    alt: "paulo lopes reizinho logo gold"
  },
]
// HOMEPAGE ---------------------------------------------------------------
export const home_heroBackground = {
  img: "/home/home_header.jpg",
  alt: "man dream about space"
}
export const home_heroImage = {
  img: "/logo_crossed.png",
  alt: "paulo reizinho crossed arms"
}
export const home_title = {
  title_01: "home:header_main_title_01",
  title_02: "home:header_main_title_02",
  title_03: "home:header_main_title_03",
  sub_title_01: "home:header_sub_title_01",
  sub_title_02: "home:header_sub_title_02",
}
export const home_quote = {
  image: "/home/jordan_b&w.png",
  alt: "jordan peterson black and white photoshoped with dipping effect",
  quote: "home:quote_home",
  author: "Jordan Peterson"
}
export const home_about = {
  title: "home:about_title",
  intro_01: "Want to know more about me? Check below this terminal screen and see if you can find my information, Please keep in mind this requires a little bit of patience and advanced knowledge.",
  intro_02: "This terminal is just a way to give some interactivity to the website and make it more fun and also a way to have a taste of how the terminal works, which is a basic tool for the developer. \nType 'help' to start.",
  intro_mobile: "home:about_intro",
  dual_img: {
    img_01: {
      img: "/home_me_01.png",
      alt: "paulo lopes reizinho black and white"
    },
    img_02: {
      img: "/home_me_03.png",
      alt: "paulo lopes reizinho formal"
    }
  },
  personal_text: {
    first_line_01: "home:about_first_line_01",
    first_line_02: "home:about_first_line_02",
    second_line: "home:about_second_line",
    third_line: "home:about_third_line",
    fourth_line_01: "home:about_forth_line_01",
    fourth_line_02: "home:about_forth_line_02",
    fifth_line_01: "home:about_fith_line_01",
    fifth_line_02: "home:about_fith_line_02",
    fifth_line_03: "home:about_fith_line_03",
    fifth_line_04: "home:about_fith_line_04",
    fifth_line_05: "home:about_fith_line_05",
    name_01: "Paulo",
    name_02: "Reizinho",
    town: "Gavião",
    country: "Portugal",
    city_actual: "Zurich"
  },
  btn: {
    link: "/about",
    text: "common:more_about"
  }
}

// PROJECTS ---------------------------------------------------------------
export const projects_quote = {
  image: "/home/elon_blue.png",
  alt: "elon musk with mars and a rocket behind him in a blue filter",
  quote: "projects:quote",
  author: "Elon Musk"
}
// ABOUT ---------------------------------------------------------------
export const about_quote = {
  image: "/home/carl_b&w.png",
  alt: "carl jung black and white image with nature effect",
  quote: "about:quote",
  author: "Carl Jung"
}
// CONTACT ---------------------------------------------------------------

// GENERAL ---------------------------------------------------------------
export const SocialMedia = [
  {
    icon: <SiGithub className='fa' />,
    iconName: "Github",
    link: "https://github.com/lordrichard6"
  },
  {
    icon: <SiLinkedin className='fa' />,
    iconName: "Linkedin",
    link: "https://www.linkedin.com/in/pauloreizinho/"
  },
  {
    icon: <SiInstagram className='fa' />,
    iconName: "Instagram",
    link: "https://www.instagram.com/paulo_reizinho/"
  },
]

export const email = "paulolopesreizinho@gmail.com"

export const CVLink = 'https://www.pauloreizinho.com/cv_4186'

// .............................................................................................

// export const bannerProjects = {
//   backgroundImage: bannerProj,
//   alt: "city zurich",
//   logo: logoWhite,
//   text: "Projects page",
// };

// export const bannerSkills = {
//   backgroundImage: bannerEdu,
//   alt: "lisbon portugal",
//   logo: logoWhite,
//   text: "Education page",
// };

export const projectsHeader = {
  backgroundImage: "backgroundProjects",
};

// Home ---------------------------------------------------------------
// export const homeHeader = {
//   backgroundImage: backgroundHome,
//   logo: logoWhite,
// };

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
  sideImg: "aboutMeImg",
  imgAlt: "paulo lopes reizinho",
};

export const hobbies = [
  {
    title: "home:hobbies_title01",
    // imgSrc: hobby_01,
    alt: "computer",
    text: "home:hobbies_text01",
    className: "hobby",
  },
  {
    title: "home:hobbies_title02",
    // imgSrc: hobby_02,
    alt: "gym",
    text: "home:hobbies_text02",
    className: "hobby-reverse",
  },
  {
    title: "home:hobbies_title03",
    // imgSrc: hobby_03,
    alt: "hiking",
    text: "home:hobbies_text03",
    className: "hobby",
  },
  {
    title: "home:hobbies_title04",
    // imgSrc: hobby_04,
    alt: "cooking",
    text: "home:hobbies_text04",
    className: "hobby-reverse",
  },
];

// Skills ---------------------------------------------------------------
export const skillsHeader = {
  backgroundImage: "backgroundSkills",
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