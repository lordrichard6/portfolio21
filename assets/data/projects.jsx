import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiAngular, SiDjango, SiJoomla } from "react-icons/si";

import dev_fastRent from "../images/projects/dev/p10-min.jpg";
import dev_lastPortfolio from "../images/projects/dev/p09-min.jpg";
import dev_skyTours from "../images/projects/dev/p06-min.jpg";
import dev_hulu from "../images/projects/dev/p08-min.jpg";
import dev_trainedMonkeys from "../images/projects/dev/p05-min.jpg";
import dev_paulsEngine from "../images/projects/dev/p07-min.jpg";
import dev_sphere from "../images/projects/dev/p11-min.jpg";
import dev_comicPortfolio from "../images/projects/dev/p14-min.jpg";
import dev_blueVariant from "../images/projects/dev/latest_01.jpg";
import currentFirstV from "../images/projects/dev/current01.png";
import dev_leftBastards from "../images/projects/dev/left.png";
import dev_sardinha from "../images/projects/dev/sardinha.png";
import dev_altynay from "../images/projects/dev/altynay.png";

// export const leftBastards = [
//   {
//     href: "https://www.instagram.com/left_bastards/",
//     icon: <FaInstagram className="hover" alt="instagram left bastards" />,
//   },
//   {
//     href: "https://www.facebook.com/groups/728183861271658/?ref=share",
//     icon: <FaFacebookF className="hover" alt="facebook left bastards" />,
//   },
//   {
//     href: "https://www.youtube.com/channel/UCFDqsXZSVve8LXMa5uevdyg",
//     icon: <FaYoutubeSquare className="hover" alt="youtube left bastards" />,
//   },
//   {
//     href: "https://left-bastards.vercel.app/",
//     icon: <FaLaptop className="hover" alt="official website left bastards" />,
//   },
// ];

// export const sardinhaDrive = [
//   {
//     href: "https://www.instagram.com/sardinhadrive/",
//     icon: <FaInstagram className="hover" alt="instagram sardinha drive" />,
//   },
//   {
//     href: "https://www.facebook.com/sardinhadrive",
//     icon: <FaFacebookF className="hover" alt="facebook sardinha drive" />,
//   },
//   {
//     href: "https://www.linkedin.com/company/sardinha-drive",
//     icon: <FaLinkedin className="hover" alt="linkedin sardinha drive" />,
//   },
//   {
//     href: "https://twitter.com/SardinhaDrive",
//     icon: <FaTwitter className="hover" alt="twitter sardinha drive" />,
//   },
//   {
//     href: "https://patricia-vila-nova.vercel.app/",
//     icon: <FaLaptop className="hover" alt="official website sardinha drive" />,
//   },
// ];

export const projects = [
  {
    image: '',
    alt: "",
    title: "FahrerZentrale",
    text: "",
    techs: "",
    link: "https://fahrerzentrale.ch/en/landing",
    github: "",
    icon1: <SiAngular />,
    icon2: <SiDjango />,
    backgroundColor: "",
    show: 0.1,
    type: 'profissional',
    date: '2022/06'
  },
  {
    image: '',
    alt: "",
    title: "Pickwings",
    text: "",
    techs: "",
    link: "https://pickwings.ch/de/",
    github: "",
    icon1: <SiAngular />,
    icon2: <SiDjango />,
    backgroundColor: "",
    show: 0.1,
    type: 'profissional',
    date: '2022/05'
  },
  {
    image: '',
    alt: "",
    title: "Helping Hand",
    text: "",
    techs: "",
    link: "https://www.helpinghand.ch/",
    github: "",
    icon1: <SiJoomla />,
    backgroundColor: "",
    show: 0.1,
    type: 'profissional',
    date: '2021/06'
  },
  {
    image: dev_altynay,
    alt: "online clothing shop",
    title: "Altynay Fashion",
    text: "",
    techs: "NextJS - MongoDB - TailwindCSS",
    link: "https://altynai-fashion.vercel.app/",
    github: "https://github.com/lordrichard6/altynai-ecommerce-shop",
    icon1: <SiNextdotjs />,
    backgroundColor: "red",
    show: 0.1,
    type: 'personal',
    date: '2022/09'
  },
  {
    image: dev_leftBastards,
    alt: "left bastards",
    title: "Left Bastards",
    text: "",
    techs: "NextJS - styled-components - typescript",
    link: "https://left-bastards.vercel.app/",
    github: "https://github.com/lordrichard6/left_bastards",
    icon1: <SiNextdotjs />,
    backgroundColor: "yellow",
    show: 0.2,
    type: 'personal',
    date: '2021/12'
  },
  {
    image: dev_sardinha,
    alt: "sardinha drive",
    title: "Sardinha Drive",
    text: "",
    techs: "NextJS - styled-components - typescript",
    link: "https://www.sardinhadrive.ch/",
    github: "https://github.com/lordrichard6/patricia_project",
    icon1: <SiNextdotjs />,
    icon2: <FaReact />,
    backgroundColor: "blue",
    show: 0.25,
    type: 'personal',
    date: '2021/11'
  },
  {
    image: dev_fastRent,
    alt: "car rental website",
    title: "FastRent",
    text: "A beautifull car rental website made with React using typescript. Used styled-components together with tailwind to style the page.",
    techs: "ReactJS - Redux - StyledC",
    link: "https://lordrichard-rentfast.netlify.app/",
    github: "https://github.com/lordrichard6/rent-fast",
    icon: <FaReact />,
    backgroundColor: "red",
    show: 0.3,
    type: 'personal',
    date: '2021/06'
  },
  {
    image: dev_skyTours,
    alt: "world tours website",
    title: "Skytours",
    text: "This project was initially built using html and Sass, then later I converted to React maintaning the Sass styling system, elegant design of a tours agency.",
    techs: "ReactJS - SASS - Jest",
    link: "https://reizinho-skytours.netlify.com/",
    github: "https://github.com/lordrichard6/skytours",
    icon: <FaReact />,
    backgroundColor: "green",
    show: 0.54,
    type: 'personal',
    date: '2021/04'
  },
  {
    image: dev_hulu,
    alt: "movie streaming platform hulu",
    title: "Hulu clone",
    text: "Built with Next.js imitating the design of the famous movie streaming platform Hulu, using the database of an API movie site TMDB.",
    techs: "NextJS - Tailwind - MovieDB APi",
    link: "https://hulu-clone-rosy.vercel.app/",
    github: "https://github.com/lordrichard6/hulu_clone",
    icon: <SiNextdotjs />,
    backgroundColor: "lightpurple",
    show: 0.61,
    type: 'personal',
    date: '2021/04'
  },
  {
    image: dev_trainedMonkeys,
    alt: "eshop for trained monkeys",
    title: "Monkey Circus",
    text: "A mocking E-comerce to sell monkeys, with a credit card payment implemented.",
    techs: "NextJS - SASS - Typescript",
    link: "https://monkeycircus-2z4e865i4.now.sh",
    github: "https://github.com/lordrichard6/monkeycircus",
    icon: <SiNextdotjs />,
    backgroundColor: "orange",
    show: 0.66,
    type: 'personal',
    date: '2020/03'
  },
  {
    image: dev_sphere,
    alt: "three.js project",
    title: "The Sphere",
    text: "My first play with Three.js.",
    techs: "JavaScript - ThreeJS",
    link: "https://lordrichard-threejs-sphere.netlify.app/",
    github: "https://github.com/lordrichard6/threejs_sphere",
    icon: <SiJavascript />,
    backgroundColor: "darkpurple",
    show: 0.79,
    type: 'personal',
    date: '2021/06'
  },
  {
    image: dev_paulsEngine,
    alt: "google api used",
    title: "Paul's Engine",
    text: "A project build with Next.js using the google search API.",
    techs: "NextJS - Tailwind - Google APi",
    link: "https://paul-search.vercel.app/",
    github: "https://github.com/lordrichard6/paul-search",
    icon: <SiNextdotjs />,
    backgroundColor: "strongred",
    show: 0.9,
    type: 'personal',
    date: '2021/04'
  },
  {
    image: currentFirstV,
    alt: "paulo reizinho forth portfolio first version",
    title: "Current Portfolio v1.0",
    text: "The first version of this website's design",
    techs: "NextJS - StyledC - FramerMotion",
    link: "https://pauloreizinho21.netlify.app/",
    github: "",
    icon: <FaReact />,
    backgroundColor: "blue",
    show: 0.14,
    type: 'personal',
    date: '2022/02'
  },
  {
    image: dev_blueVariant,
    alt: "paulo reizinho third portfolio",
    title: "3rd Portfolio",
    text: "The first version of this website's design",
    techs: "ReactJS - Typescript - StyledC",
    link: "https://lordrichard-cv-blue.netlify.app/",
    github: "https://github.com/lordrichard6/react_cv_blue",
    icon: <SiNextdotjs />,
    backgroundColor: "blue",
    show: 0.13,
    type: 'personal',
    date: '2021/09'
  },
  {
    image: dev_comicPortfolio,
    alt: "paulo reizinho portfolio design based on comics",
    title: "2nd Portfolio",
    text: "A very creative portfolio with a comic theme.",
    techs: "ReactJS - Tailwind - StyledC",
    link: "https://new-cv-parallax.netlify.app/",
    github: "https://github.com/lordrichard6/react_cv_parallax",
    icon: <FaReact />,
    backgroundColor: "lightblue",
    show: 0.78,
    type: 'personal',
    date: '2021/07'
  },
  {
    image: dev_lastPortfolio,
    alt: "paulo reizinho first portfolio",
    title: "1st Portfolio",
    text: "Created with React.js with and elengant and simplistic design",
    techs: "ReactJS - SASS",
    link: "https://reizinhocv.netlify.app/",
    github: "https://github.com/lordrichard6/reactCV",
    icon: <FaReact />,
    backgroundColor: "yellow",
    show: 0.37,
    type: 'personal',
    date: '2020/04'
  },
  {
    image: '',
    alt: "",
    title: "Limmatstadt",
    text: "",
    techs: "",
    link: "https://www.limmatstadt.ch/",
    github: "",
    icon: <FaReact />,
    backgroundColor: "yellow",
    show: 0.37,
    type: 'profissional',
    date: '2020/02'
  },
  {
    image: '',
    alt: "",
    title: "Protier",
    text: "",
    techs: "",
    link: "https://www.protier.ch/",
    github: "",
    icon: <FaReact />,
    backgroundColor: "yellow",
    show: 0.37,
    type: 'profissional',
    date: '2020/01'
  },
  {
    image: '',
    alt: "",
    title: "Bezahlbare Wohnungen",
    text: "",
    techs: "",
    link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/",
    github: "",
    icon: <FaReact />,
    backgroundColor: "yellow",
    show: 0.37,
    type: 'profissional',
    date: '2019/11'
  },
  {
    image: '',
    alt: "",
    title: "Feinheit",
    text: "",
    techs: "",
    link: "https://feinheit.ch/",
    github: "",
    icon: <FaReact />,
    backgroundColor: "yellow",
    show: 0.37,
    type: 'profissional',
    date: '2019/10'
  },
  {
    image: '',
    alt: "",
    title: "FCZ",
    text: "",
    techs: "",
    link: "https://www.fcz.ch/",
    github: "",
    icon: <FaReact />,
    backgroundColor: "yellow",
    show: 0.37,
    type: 'profissional',
    date: '2019/08'
  },
];
