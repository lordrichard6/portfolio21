import styled from "styled-components";

export default function StarsComponent() {
  return (
    <Container>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div id="stars-group-4"></div>
      <div id="stars-group-5"></div>
      <div id="stars-group-6"></div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80%;
  overflow: hidden;
`