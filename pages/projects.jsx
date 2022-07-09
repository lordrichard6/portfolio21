import Header from "../components/_projects/Header";
import Developer from "../components/_projects/Developer";
import Designer from "../components/_projects/Designer";
import Photoshop from "../components/_projects/Photoshop";
import Layout from "../components/Layout";


export default function ProjectsPage() {

  return (
    <Layout>
      <Header />
      <Developer />
      <Designer />
      <Photoshop />
    </Layout>
  );
}

