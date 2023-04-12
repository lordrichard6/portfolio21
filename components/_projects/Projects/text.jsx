import styled from "styled-components";

export default function ProjectsIntro({ pageIntro }) {
  return (
    <Container className="z-10 max-w-[1000px] my-10 px-8 md:my-24 2xl:my-44">
      <p className="normal-text whitespace-pre-line	 z-10">{pageIntro}</p>
    </Container>
  );
}

const Container = styled.div``;
