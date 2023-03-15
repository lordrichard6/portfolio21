import {
  Header,
  AboutMe,
  Techs,
  MyHobbies,
  BottomSection,
} from "../components/_homepage";
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
