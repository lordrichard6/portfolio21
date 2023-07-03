import ContactsSection from "./contacts"
import ProfissionalExpSection from "./experience"
import RecommendationsSection from "./recomendations"
import CertificatesSection from "./certificates"
import HeaderSection from './header'

export default function CVMain() {
  return (
    <div className="main-content">
      <HeaderSection />

      <ContactsSection />

      <ProfissionalExpSection />

      <RecommendationsSection /> 

      <CertificatesSection />
    </div>
  );
}
