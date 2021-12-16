import Header from "../components/_homepage/Header";

import AboutMe from "../components/_homepage/AboutMe";
import Sardinha from "../components/_homepage/Sardinha";
import LeftBastards from "../components/_homepage/LeftBastards";
import MyPassions from "../components/_homepage/MyPassions";
import Banner from "../components/banner";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
        <Header />
        <AboutMe />
        <Sardinha />
        <LeftBastards />
        <MyPassions />
        {/* <Banner /> */}
    </Layout>
  );
}
