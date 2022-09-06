import styled from "styled-components";
import Header from "../components/_projects/Header";
import Developer from "../components/_projects/Developer";
import Sardinha from "../components/_projects/Sardinha";
import LeftBastards from "../components/_projects/LeftBastards";
import Layout from "../components/Layout";
import AltynaiFashion from "../components/_projects/AltynaiFashion";

export default function ProjectsPage() {
  return (
    <Layout>
      <Header />
      <MainProjects>
        <div className="secondary">
          <LeftBastards />
          <Sardinha />
        </div>
        <AltynaiFashion />
        <BackgroundGradient></BackgroundGradient>
      </MainProjects>
      <Developer />
    </Layout>
  );
}

const MainProjects = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;

  .secondary {
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 992px) {
    height: 100%;
    flex-direction: column;
  }
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #1d2124 0%,
    rgba(0, 0, 0, 0.2) 38.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;
