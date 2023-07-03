import {
  HomeHeader,
  HomeQuote,
  HomeAbout,
  HomeProjects,
  EvoSection,
} from "../components/_homepage";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeQuote />
      <HomeAbout />
      <HomeProjects />
      <EvoSection />
    </>
  );
}
