import { ProjectsHeader, ProjectsSection, ProjectsQuote } from "../components/_projects";
import Layout from "../components/Layout";

export default function ProjectsPage() {
  return (
    <Layout>
      <ProjectsHeader />
      <ProjectsQuote />
      <ProjectsSection />
    </Layout>
  );
}
