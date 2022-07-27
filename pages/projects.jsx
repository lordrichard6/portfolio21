import Header from "../components/_projects/Header";
import Developer from "../components/_projects/Developer";
import Designer from "../components/_projects/Designer";
import Photoshop from "../components/_projects/Photoshop";
import Sardinha from "../components/_homepage/Sardinha";
import LeftBastards from "../components/_homepage/LeftBastards";
import Layout from "../components/Layout";


export default function ProjectsPage() {

  return (
    <Layout>
      <Header />
      <LeftBastards />
      <Sardinha />
      <Developer />
      {/* <Designer />
      <Photoshop /> */}
    </Layout>
  );
}

