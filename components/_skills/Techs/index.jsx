import styled from "styled-components";
import Image from "next/image";

// import { techs } from "../../../assets/static";
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
import { Variables } from "../../../assets/variables";
import pattern from "../../../assets/images/pattern.png";

export default function Techs() {
  const data = [
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <SiJavascript />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "node",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "photoshop",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind",
    },
    {
      icon: <SiStyledcomponents />,
      name: "styled components",
    },
    {
      icon: <FaNpm />,
      name: "npm",
    },
    {
      icon: <FaYarn />,
      name: "yarn",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <FaSass />,
      name: "sass",
    },
    {
      icon: <SiGraphql />,
      name: "graphql",
    },
  ];
  return (
    <PageContainer>
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1>Techs</h1>
      <IconsContainer>
        {data.map((item, i) => {
          return (
            <Icon key={i}>
              {item.icon}
              <h2>{item.name}</h2>
            </Icon>
          );
        })}
      </IconsContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: #eee;
  background: ${Variables.primary};
  h1 {
    margin-top: 0;
    font-size: 4rem;
    font-weight: 400;
    z-index: 1;
  }
  .font-size {
    font-size: 4rem;
  }
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 4rem;
  place-items: center;
  margin-left: 4rem;
  margin-right: 4rem;
  img {
    width: auto;
    height: 2rem;
  }
  h2 {
    font-weight: 400;
  }
`;

const Icon = styled.div`
  display: grid;
  place-items: center;
  font-size: 4rem;
  text-align: center;
  z-index: 1;
  h2 {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const BG = styled(Image)`
  z-index: 0;
  opacity: 0.1;
`;
