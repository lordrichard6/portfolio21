import ContactCard from "../components/_contact";
import Contacts from "../components/Footer/contacts";
import Layout from "../components/Layout";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="overflow-y-hidden h-screen flex flex-col justify-center items-center">
        <h1 className="text-slate-100 text-6xl mb-20">Contact Me 😉</h1>
        <ContactCard />
        <Contacts />
      </div>
    </Layout>
  );
}
