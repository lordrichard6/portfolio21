import styled from "styled-components";

export default function ProjectsIntro({ pageIntro }) {
  return (
    <Container className="z-10 w-4/5 md:w-3/4 2xl:w-2/3 my-10 md:my-24 2xl:my-44">
      <p className="normal-text">{pageIntro}</p>
    </Container>
  );
}

const Container = styled.div``;
