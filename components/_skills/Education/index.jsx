import styled from "styled-components";

import { courses } from "../../../assets/static";
import { Variables } from "../../../assets/variables";

export default function Education() {
  return (
    <PageContainer>
      <SectionTitle>Courses</SectionTitle>
      {courses.map((n, index) => {
        return (
          <InnerContainer>
            <CourseTitle>{n.title}</CourseTitle>
            <TextSchool>{n.school}</TextSchool>
            <TextBase>
              {n.start} - {n.finish}
            </TextBase>
            <TextBase>{n.text}</TextBase>
          </InnerContainer>
        );
      })}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: #d1d5db;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h1`
  align-self: center;
  margin-top: 0;
  font-size: 4rem;
  font-weight: 400;
  color: ${Variables.primary};
`;

const CourseTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 0;
  font-weight: 400;
  color: ${Variables.primary};
`;

const TextSchool = styled.p`
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
  color: rgba(107, 114, 128);
`;

const TextBase = styled.p`
  margin: 0;
  color: rgba(107, 114, 128);
`;
