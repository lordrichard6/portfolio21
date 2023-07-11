import { ContactInfo, MapComponent } from "../components/_contact";
import Layout from "../components/Layout";

export default function ProjectsPage() {
  return (
    <Layout>
      <section className="contact-page relative flex-centered w-screen">
        <div className="absolute top-0 w-full h-full backdrop-blur-sm backdrop-hue-rotate-60" />
        <div className="section-width-default flex-col flex-centered relative mt-28 xl:mt-0">
          <h1 className="mb-8 text-6xl lg:text-8xl font-black">Contact me</h1>
          <div className="flex flex-col xl:flex-row justify-center items-start">
            <ContactInfo />
            <MapComponent />
          </div>
        </div>
      </section>
    </Layout>
  );
}
