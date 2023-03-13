import { FaReact } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { SiNextdotjs, SiJavascript, SiAngular, SiDjango, SiJoomla, SiMongodb } from "react-icons/si";


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
    image: "/projects/fahrezentrale.png",
    alt: "fahrezentrale homepage",
    title: "FahrerZentrale",
    creator: "Pickwings",
    myContribution: "Front-end, Design and Back-end",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Angular", "Django", "Docker"],
    link: "https://fahrerzentrale.ch/en/landing",
    github: "",
    icon: [<SiAngular key={0} />,<SiDjango key={1} />],
    type: 'profissional',
    date: '2022/06'
  },
  {
    image: '/projects/pickwings.png',
    alt: "pickwings homepage",
    title: "Pickwings",
    creator: "Pickwings",
    myContribution: "Small Front-end tweaks",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Angular", "Django", "Docker"],
    link: "https://pickwings.ch/de/",
    github: "",
    icon: [<SiAngular key={0}/>,<SiDjango key={1}/>],
    type: 'profissional',
    date: '2022/05'
  },
  {
    image: '/projects/helping.png',
    alt: "helping hand homepage",
    title: "Helping Hand",
    creator: "WebDvision",
    myContribution: "Small Front-end tweaks",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Joomla"],
    link: "https://www.helpinghand.ch/",
    github: "",
    icon: [<SiJoomla key={0}/>],
    backgroundColor: "",
    show: 0.1,
    type: 'profissional',
    date: '2021/06'
  },
  {
    image: "/projects/altynai.png",
    alt: "online clothing shop",
    title: "Altynay Fashion",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["NextJS","MongoDB", "TailwindCSS", "styled-components", "BCrypt", "Axios", "React Paypal"],
    link: "https://altynai-fashion.vercel.app/",
    github: "https://github.com/lordrichard6/altynai-ecommerce-shop",
    icon: [<SiNextdotjs key={0}/>, <SiMongodb key={1}/>],
    type: 'personal',
    date: '2022/09'
  },
  {
    image: "/projects/bastards.png",
    alt: "left bastards website",
    title: "Left Bastards",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["NextJS","styled-components", "React Icons", "Typescript"],
    link: "https://left-bastards.vercel.app/",
    github: "https://github.com/lordrichard6/left_bastards",
    icon: [<SiNextdotjs key={0}/>],
    type: 'personal',
    date: '2021/12'
  },
  {
    image: "/projects/sardinha.png",
    alt: "sardinha drive",
    title: "Sardinha Drive",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["NextJS","styled-components", "typescript", "Framer-motion", "Material-ui"],
    link: "https://www.sardinhadrive.ch/",
    github: "https://github.com/lordrichard6/patricia_project",
    icon: [<SiNextdotjs key={0}/>],
    type: 'profissional',
    date: '2021/11'
  },
  {
    image: "/projects/fastrent.png",
    alt: "car rental website",
    title: "FastRent",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["ReactJS","Redux","tailwindCSS", "styled-components", "typescript", "Jest"],
    link: "https://lordrichard-rentfast.netlify.app/",
    github: "https://github.com/lordrichard6/rent-fast",
    icon: [<FaReact key={0}/>],
    type: 'personal',
    date: '2021/06'
  },
  {
    image: "/projects/skytours.png",
    alt: "world tours website",
    title: "Skytours",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["ReactJS","SASS", "HTML"],
    link: "https://reizinho-skytours.netlify.com/",
    github: "https://github.com/lordrichard6/skytours",
    icon: [<FaReact key={0}/>],
    type: 'personal',
    date: '2021/04'
  },
  {
    image: "/projects/hulu.png",
    alt: "movie streaming platform hulu",
    title: "Hulu clone",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["NextJS","TailwindCSS", "MovieDB APi"],
    link: "https://hulu-clone-rosy.vercel.app/",
    github: "https://github.com/lordrichard6/hulu_clone",
    icon: [<SiNextdotjs key={0}/>],
    type: 'personal',
    date: '2021/04'
  },
  {
    image: "/projects/monkey.png",
    alt: "eshop for trained monkeys",
    title: "Monkey Circus",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["NextJS","Typescript", "SASS", "PAYPAL APi"],
    link: "https://monkeycircus-2z4e865i4.now.sh",
    github: "https://github.com/lordrichard6/monkeycircus",
    icon: [<SiNextdotjs key={0}/>],
    type: 'personal',
    date: '2020/03'
  },
  {
    image: "/projects/sphere.png",
    alt: "three.js project",
    title: "The Sphere",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["JavaScript","ThreeJS"],
    link: "https://lordrichard-threejs-sphere.netlify.app/",
    github: "https://github.com/lordrichard6/threejs_sphere",
    icon: [<SiJavascript key={0}/>, <TbBrandThreejs key={1}/>],
    type: 'personal',
    date: '2021/06'
  },
  {
    image: "/projects/paul-engine.png",
    alt: "google api used",
    title: "Paul's Engine",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["NextJS","TailwindCSS", "Google APi"],
    link: "https://paul-search.vercel.app/",
    github: "https://github.com/lordrichard6/paul-search",
    icon: [<SiNextdotjs key={0}/>],
    type: 'personal',
    date: '2021/04'
  },
  {
    image: "/projects/portfolio4.png",
    alt: "paulo reizinho forth portfolio first version",
    title: "Actual Portfolio v0.5",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["NextJS","Styled-components","TailwindCSS","Framer-motion",""],
    link: "https://pauloreizinho21.netlify.app/",
    github: "",
    icon: [<SiNextdotjs key={0}/>],
    type: 'personal',
    date: '2022/02'
  },
  {
    image: "/projects/portfolio03.png",
    alt: "paulo reizinho third portfolio",
    title: "3rd Portfolio",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["ReactJS","Typescript","Styled-components"],
    link: "https://lordrichard-cv-blue.netlify.app/",
    github: "https://github.com/lordrichard6/react_cv_blue",
    icon: [<SiNextdotjs key={0}/>],
    type: 'personal',
    date: '2021/09'
  },
  {
    image: "/projects/portfolio02.png",
    alt: "paulo reizinho portfolio design based on comics",
    title: "2nd Portfolio",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["ReactJS","TailwindCSS","styled-components","emailJS"],
    link: "https://new-cv-parallax.netlify.app/",
    github: "https://github.com/lordrichard6/react_cv_parallax",
    icon: [<FaReact key={0}/>],
    type: 'personal',
    date: '2021/07'
  },
  {
    image: "/projects/portfolio01.png",
    alt: "paulo reizinho first portfolio",
    title: "1st Portfolio",
    creator: "Paulo Reizinho",
    myContribution: "Complete",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["ReactJS","SASS"],
    link: "https://reizinhocv.netlify.app/",
    github: "https://github.com/lordrichard6/reactCV",
    icon: [<FaReact key={0}/>],
    type: 'personal',
    date: '2020/04'
  },
  {
    image: '/projects/limmatstadt.png',
    alt: "",
    title: "Limmatstadt",
    creator: "Feinheit",
    myContribution: "Small Front-end and back-end changes",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Angular", "Django"],
    link: "https://www.limmatstadt.ch/",
    github: "",
    icon: [<SiAngular key={0} />,<SiDjango key={1} />],
    type: 'profissional',
    date: '2020/02'
  },
  {
    image: '/projects/protier.png',
    alt: "",
    title: "Protier",
    creator: "Feinheit",
    myContribution: "Front-end implementation",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Angular", "Django"],
    link: "https://www.protier.ch/",
    github: "",
    icon: [<SiAngular key={0} />,<SiDjango key={1} />],
    type: 'profissional',
    date: '2020/01'
  },
  {
    image: '/projects/bezahlbare-Wohnungen.png',
    alt: "",
    title: "Bezahlbare Wohnungen",
    creator: "Feinheit",
    myContribution: "Front-end implementation",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Angular", "Django"],
    link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/",
    github: "",
    icon: [<SiAngular key={0} />,<SiDjango key={1} />],
    type: 'profissional',
    date: '2019/11'
  },
  {
    image: '/projects/feinheit.png',
    alt: "",
    title: "Feinheit",
    creator: "Feinheit",
    myContribution: "Front-end small changes",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Angular", "Django"],
    link: "https://feinheit.ch/",
    github: "",
    icon: [<SiAngular key={0} />,<SiDjango key={1} />],
    type: 'profissional',
    date: '2019/10'
  },
  {
    image: '/projects/fcz.png',
    alt: "",
    title: "FCZ Website",
    creator: "Feinheit",
    myContribution: "Front-end small changes",
    text: ["COMING SOON!"],
    // text: [
    //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit nulla est ex deserunt exercitation anim occaecat.", 
    //   "Sit nulla est ex deserunt exercitation anim occaecat.",
    //   "Lorem ipsum dolor sit amet consectetur adip, Lorem ipsum dolor sit amet consectetur adip"
    // ],
    techs: ["Angular", "Django"],
    link: "https://www.fcz.ch/",
    github: "",
    icon: [<SiAngular key={0} />,<SiDjango key={1} />],
    type: 'profissional',
    date: '2019/08'
  },
];
