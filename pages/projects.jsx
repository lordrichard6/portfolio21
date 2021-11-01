import styled from "styled-components";
import Image from "next/image";


import Navbar from "../components/Navbar";
import Header from "../components/_projects/Header";
import Developer from "../components/_projects/Developer";
import Designer from "../components/_projects/Designer";
import Photoshop from "../components/_projects/Photoshop";

export default function ProjectsPage() {
    return (
        <PageContainer>
            <Navbar />
            <Header />
            <Developer />
            <Designer />
            <Photoshop />
        </PageContainer>
    )
}

const PageContainer = styled.div`
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
`;