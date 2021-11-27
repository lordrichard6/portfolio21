import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { skillsExperience } from "../../../assets/data";
import { ProgressBar } from "./progressBar";
import Card from "./card";

export default function Right() {
  let { t } = useTranslation();

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
        <Card
          title={t(skillsExperience[0].title)}
          company={skillsExperience[0].company}
          period={skillsExperience[0].period}
          text={t(skillsExperience[0].text)}
        />
      </InnerSection>
    </RightSection>
  );
}

const RightSection = styled.div`
  width: 50%;
  min-height: 80vh;
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
  height: 100%;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  p {
    font-size: 1.25rem;
  }
`;

const SkillsContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  .width {
    width: 100%;
  }
`;
