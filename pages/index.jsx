import {
  HomeHeaderSection,
  AboutSection,
  ProjectsSection,
  EvoSection,
} from "../components/_homepage";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <HomeHeaderSection />
      <AboutSection />
      <ProjectsSection />
      <EvoSection />
    </Layout>
  );
}
