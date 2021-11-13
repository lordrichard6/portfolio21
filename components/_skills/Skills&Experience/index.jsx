import styled from "styled-components";
import Image from "next/image";

import { Variables } from "../../../assets/variables";
import { ProgressBar } from "./progressBar";
import logo from "../../../public/icon.png";

export default function SkillsExp() {
  const data = {
    title: "Skills & Experience",
    text01:
      "Based on my personal choice and time spent learning, I have stronger skills on the front-end, the visual aspect is of big importance and on that I feel like a Monet looking to create my Lady with the Umbrella.",
    text02:
      " have learned HTML and CSS, then went on to Javascript, then Sass. I decided to go to React as my framework(library) of choice, not because of it`s popularity, but because of it`s component based structure and workflow.",
    text03:
      "But anyway, i don`t mean to leave you on a cliffhanger but if you want to hear more about my learning path and work experience, feel free to contact me.",
  };

  const skillsBarData = [
    {
      title: "Front-End",
      progress: 80,
    },
    {
      title: "Back-End",
      progress: 30,
    },
    {
      title: "UX & UI",
      progress: 70,
    },
    {
      title: "React.js",
      progress: 80,
    },
  ];
  const expData = [
    {
      title: "Front-End",
      company: "Feinheit",
      period: "2019 - 2020",
      text: "An Agency for webdesign, online markting, campaining, social media, CMS and IT Infrastructure.",
    },
  ];
  return (
    <SectionContainer>
      <LeftSection>
        <InnerSection>
          <Title>{data.title}</Title>
          <p>
            {data.text01}
            <br />
            {data.text02}
            <br />
            {data.text03}
          </p>
        </InnerSection>
        {/* <Image src={logo} alt="logo" /> */}
      </LeftSection>
      <RightSection>
        <InnerSection>
          <SkillsContainer>
            {skillsBarData.map((item, i) => {
              return (
                <div key={i}>
                  <h2>{item.title}</h2>
                  <ProgressBar completed={item.progress} />
                </div>
              );
            })}
          </SkillsContainer>
          <ExperienceContainer>
            <h2>{expData[0].title}</h2>
            <h3>{expData[0].company}</h3>
            <p>{expData[0].period}</p>
            <p>{expData[0].text}</p>
          </ExperienceContainer>
        </InnerSection>
      </RightSection>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  color: ${Variables.primary};
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const LeftSection = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  h2 {
    font-weight: 600;
  }
`;

const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  p {
    font-size: 1.25rem;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  background-color: #d1d5db;
  padding: 1rem;
  margin-top: 2rem;
  h2 {
    margin-top: 0;
  }

  h3 {
    color: rgba(107, 114, 128);
    margin: 0;
  }
  p {
    color: rgba(107, 114, 128);
    margin: 0;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 4rem;
  font-weight: 400;
`;
