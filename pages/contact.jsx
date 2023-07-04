import { ContactInfo, ContactForm, MapComponent } from "../components/_contact";
import Layout from "../components/Layout";

export default function ProjectsPage() {
  return (
    <Layout>
      <ContactInfo />
      <ContactForm />
      <MapComponent />
    </Layout>
  );
}
