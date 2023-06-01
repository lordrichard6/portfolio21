import Layout from "../components/Layout";
import { ContactInfo, ContactForm, MapComponent } from "../components/_contact";

export default function ProjectsPage() {
  return (
    <Layout>
      <ContactInfo />
      <ContactForm />
      <MapComponent />
    </Layout>
  );
}
