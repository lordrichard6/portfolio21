import ContactsSection from "./contacts"
import ProfissionalExpSection from "./experience"
import RecommendationsSection from "./recomendations"
import CertificatesSection from "./certificates"
import HeaderSection from './header'
import DownloadButton from "./button"

export default function CVMain() {
  return (
    <div className="main-content relative w-full min-h-screen lg:pl-[500px] lg:pt-20 bg-slate-100 text-slate-900">
      <HeaderSection />

    <div className="hidden lg:block">
      <ContactsSection />
    </div>

      <ProfissionalExpSection />

      <RecommendationsSection /> 

      <CertificatesSection />

      <DownloadButton style="dark flex lg:hidden" />
    </div>
  );
}
