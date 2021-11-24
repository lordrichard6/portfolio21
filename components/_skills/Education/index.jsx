import styled from "styled-components";

import { education } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
import Card from "./card";

export default function Education() {
  return (
    <PageContainer>
      <SectionTitle>Education</SectionTitle>
      {education.map((n, i) => {
        return (
          <Card
            key={i}
            title={n.title}
            school={n.school}
            start={n.start}
            finish={n.finish}
            text={n.text}
          />
        );
      })}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  background: url("/lines.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const SectionTitle = styled.h1`
  align-self: center;
  margin-top: 0;
  font-size: 4rem;
  font-weight: 400;
  color: ${Colors.dark};
`;
