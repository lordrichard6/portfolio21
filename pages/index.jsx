import {
  HeaderSection,
  AboutMeSection,
  TechsSection,
  MyHobbiesSection,
  BottomSection,
} from "../components/_homepage";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeaderSection />
      <AboutMeSection />
      <TechsSection />
      <MyHobbiesSection />
      <BottomSection />
    </Layout>
  );
}
