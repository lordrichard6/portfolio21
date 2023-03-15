import {
  ProjectsHeaderSection,
  ProjectsSection,
} from "../components/_projects";
import Layout from "../components/Layout";

export default function ProjectsPage() {
  return (
    <Layout>
      <ProjectsHeaderSection />
      <ProjectsSection />
    </Layout>
  );
}
