import styled from "styled-components";
// import Image from "next/image";

import { skillsAndExperience, skillsExperience } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
import { ProgressBar } from "./progressBar";

export default function SkillsExp() {
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

  return (
    <SectionContainer>
      <LeftSection>
        <InnerSection>
          <Title>{skillsAndExperience.title}</Title>
          <p>
            {skillsAndExperience.text01}
            <br />
            {skillsAndExperience.text02}
            <br />
            {skillsAndExperience.text03}
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
            <h2>{skillsExperience[0].title}</h2>
            <h3>{skillsExperience[0].company}</h3>
            <p>{skillsExperience[0].period}</p>
            <p>{skillsExperience[0].text}</p>
          </ExperienceContainer>
        </InnerSection>
      </RightSection>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  color: ${Colors.primary};
  margin: 4rem 0;

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 390px) {
    width: 100%;
  }
`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;

  @media screen and (max-width: 390px) {
    width: 100%;
  }
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
  justify-content: center;
  .width {
    width: 100%;
  }
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
  text-shadow: 1px 2px 4px #00000081;
`;
