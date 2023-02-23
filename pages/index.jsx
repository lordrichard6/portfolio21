import Header from "../components/_homepage/Header";

import AboutMe from "../components/_homepage/AboutMe";
import Techs from "../components/_homepage/Techs";
import MyPassions from "../components/_homepage/MyPassions";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
        <Header />
        <AboutMe />
        {/* <Techs /> */}
        <MyPassions />
    </Layout>
  );
}
