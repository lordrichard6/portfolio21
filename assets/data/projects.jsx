import {
  FaInstagram,
  FaFacebookF,
  FaLaptop,
  FaYoutubeSquare,
  FaTwitter,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiJavascript } from "react-icons/si";

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
import currentFirstV from "../images/projects/dev/current01.png";
import dev_leftBastards from "../images/projects/dev/latest_03.jpg";
import dev_sardinha from "../images/projects/dev/latest_02.jpg";
import dev_myPortfolio from "../images/projects/dev/latest_04.jpg";

export const leftBastards = [
  {
    href: "https://www.instagram.com/left_bastards/",
    icon: <FaInstagram className="hover" alt="instagram left bastards" />,
  },
  {
    href: "https://www.facebook.com/groups/728183861271658/?ref=share",
    icon: <FaFacebookF className="hover" alt="facebook left bastards" />,
  },
  {
    href: "https://www.youtube.com/channel/UCFDqsXZSVve8LXMa5uevdyg",
    icon: <FaYoutubeSquare className="hover" alt="youtube left bastards" />,
  },
  {
    href: "https://left-bastards.vercel.app/",
    icon: <FaLaptop className="hover" alt="official website left bastards" />,
  },
];

export const sardinhaDrive = [
  {
    href: "https://www.instagram.com/sardinhadrive/",
    icon: <FaInstagram className="hover" alt="instagram sardinha drive" />,
  },
  {
    href: "https://www.facebook.com/sardinhadrive",
    icon: <FaFacebookF className="hover" alt="facebook sardinha drive" />,
  },
  {
    href: "https://www.linkedin.com/company/sardinha-drive",
    icon: <FaLinkedin className="hover" alt="linkedin sardinha drive" />,
  },
  {
    href: "https://twitter.com/SardinhaDrive",
    icon: <FaTwitter className="hover" alt="twitter sardinha drive" />,
  },
  {
    href: "https://patricia-vila-nova.vercel.app/",
    icon: <FaLaptop className="hover" alt="official website sardinha drive" />,
  },
];

export const projects = [
  {
    image: dev_fastRent,
    alt: "car rental website",
    title: "FastRent",
    text: "A beautifull car rental website made with React using typescript. Used styled-components together with tailwind to style the page.",
    techs: 'ReactJS - Redux - StyledC',
    link: "https://lordrichard-rentfast.netlify.app/",
    github: 'https://github.com/lordrichard6/rent-fast',
    icon: <FaReact />,
    backgroundColor: "red",
    show: 0.3,
  },
  {
    image: dev_skyTours,
    alt: "world tours website",
    title: "Skytours",
    text: "This project was initially built using html and Sass, then later I converted to React maintaning the Sass styling system, elegant design of a tours agency.",
    techs: 'ReactJS - SASS - Jest',
    link: "https://reizinho-skytours.netlify.com/",
    github: 'https://github.com/lordrichard6/skytours',
    icon: <FaReact />,
    backgroundColor: "green",
    show: 0.54,
  },
  {
    image: dev_hulu,
    alt: "movie streaming platform hulu",
    title: "Hulu clone",
    text: "Built with Next.js imitating the design of the famous movie streaming platform Hulu, using the database of an API movie site TMDB.",
    techs: 'NextJS - Tailwind - MovieDB APi',
    link: "https://hulu-clone-rosy.vercel.app/",
    github: "https://github.com/lordrichard6/hulu_clone",
    icon: <SiNextdotjs />,
    backgroundColor: "lightpurple",
    show: 0.61,
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
  },
  {
    image: dev_sphere,
    alt: "three.js project",
    title: "The Sphere",
    text: "My first play with Three.js.",
    techs: "JavaScript - ThreeJS",
    link: "https://lordrichard-threejs-sphere.netlify.app/",
    github:"https://github.com/lordrichard6/threejs_sphere",
    icon: <SiJavascript />,
    backgroundColor: "darkpurple",
    show: 0.79,
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
  },
  {
    image: currentFirstV,
    alt: "paulo reizinho forth portfolio first version",
    title: "Current Portfolio v1.0",
    text: "The first version of this website's design",
    techs: 'NextJS - StyledC - FramerMotion',
    link: "https://pauloreizinho21.netlify.app/",
    github: '',
    icon: <FaReact />,
    backgroundColor: "blue",
    show: 0.14,
  },
  {
    image: dev_blueVariant,
    alt: "paulo reizinho third portfolio",
    title: "3rd Portfolio",
    text: "The first version of this website's design",
    techs: 'ReactJS - Typescript - StyledC',
    link: "https://lordrichard-cv-blue.netlify.app/",
    github: 'https://github.com/lordrichard6/react_cv_blue',
    icon: <SiNextdotjs />,
    backgroundColor: "blue",
    show: 0.13,
  },
  {
    image: dev_comicPortfolio,
    alt: "paulo reizinho portfolio design based on comics",
    title: "2nd Portfolio",
    text: "A very creative portfolio with a comic theme.",
    techs: 'ReactJS - Tailwind - StyledC',
    link: "https://new-cv-parallax.netlify.app/",
    github: 'https://github.com/lordrichard6/react_cv_parallax',
    icon: <FaReact />,
    backgroundColor: "lightblue",
    show: 0.78,
  },
  {
    image: dev_lastPortfolio,
    alt: "paulo reizinho first portfolio",
    title: "1st Portfolio",
    text: "Created with React.js with and elengant and simplistic design",
    techs: 'ReactJS - SASS',
    link: "https://reizinhocv.netlify.app/",
    github: 'https://github.com/lordrichard6/reactCV',
    icon: <FaReact />,
    backgroundColor: "yellow",
    show: 0.37,
  },
];
