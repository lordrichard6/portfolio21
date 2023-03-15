import styled from "styled-components";
import {
  GalleryHeaderSection,
  QuoteComponent,
  GallerySection,
  WavesComponent,
} from "../components/_gallery";
import Layout from "../components/Layout";

export default function GalleryPage() {
  return (
    <Layout>
      <PageContainer>
        <GalleryHeaderSection />
        <QuoteComponent />
        <GallerySection />
        <WavesComponent />
      </PageContainer>
    </Layout>
  );
}

const PageContainer = styled.div`
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
  /* background: linear-gradient(to right, #20303c, #478995, #b2d6bc); */
`;
