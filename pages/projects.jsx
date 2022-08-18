import Header from "../components/_projects/Header";
import Developer from "../components/_projects/Developer";
import Sardinha from "../components/_projects/Sardinha";
import LeftBastards from "../components/_projects/LeftBastards";
import Layout from "../components/Layout";


export default function ProjectsPage() {

  return (
    <Layout>
      <Header />
      <LeftBastards />
      <Sardinha />
      <Developer />
    </Layout>
  );
}

