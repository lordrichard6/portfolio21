import {
  HomeHeader,
  HomeQuote,
  HomeAbout,
  HomeProjects,
  EvoSection,
} from "../components/_homepage";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <HomeHeader />
      <HomeQuote />
      <HomeAbout />
      <HomeProjects />
      <EvoSection />
    </Layout>
  );
}
