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
        <Icon>
          <FaReact />
          <h2>react</h2>
        </Icon>
        <Icon>
          <SiNextdotjs />
          <h2>next</h2>
        </Icon>
        <Icon>
          <SiTypescript />
          <h2>typescript</h2>
        </Icon>
        <Icon>
          <SiHtml5 />
          <h2>html</h2>
        </Icon>
        <Icon>
          <FaCss3 />
          <h2>css</h2>
        </Icon>
        <Icon>
          <SiJavascript />
          <h2>javascript</h2>
        </Icon>
        <Icon>
          <FaNodeJs />
          <h2>node</h2>
        </Icon>
        <Icon>
          <SiAdobephotoshop />
          <h2>photoshop</h2>
        </Icon>
        <Icon>
          <FaFigma />
          <h2>figma</h2>
        </Icon>
        <Icon>
          <SiTailwindcss />
          <h2>tailwind</h2>
        </Icon>
        <Icon>
          <SiStyledcomponents />
          <h2>styled components</h2>
        </Icon>
        <Icon>
          <FaNpm />
          <h2>npm</h2>
        </Icon>
        <Icon>
          <FaYarn />
          <h2>yarn</h2>
        </Icon>
        <Icon>
          <FaGitAlt />
          <h2>git</h2>
        </Icon>
        <Icon>
          <FaPython />
          <h2>python</h2>
        </Icon>
        <Icon>
          <SiDjango />
          <h2>django</h2>
        </Icon>
        <Icon>
          <FaSass />
          <h2>sass</h2>
        </Icon>
        <Icon>
          <SiGraphql />
          <h2>graphql</h2>
        </Icon>
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
