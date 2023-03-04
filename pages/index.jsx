import Header from "../components/_homepage/Header";

import AboutMe from "../components/_homepage/AboutMe";
import Techs from "../components/_homepage/Techs";
import MyHobbies from "../components/_homepage/Hobbies";
import BottomSection from "../components/_homepage/BottomSection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
        <Header />
        <AboutMe />
        <Techs />
        <MyHobbies />
        <BottomSection />
    </Layout>
  );
}
