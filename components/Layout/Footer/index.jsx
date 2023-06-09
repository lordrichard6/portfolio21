import useTranslation from "next-translate/useTranslation";

import FooterSignature from "./thanks";
import FooterContactMe from "./contact";
import SiteMap from "./siteMap";
import CopyrightComponent from './copyright'
import MarioAnimationComponent from './mario'

export default function Footer() {
  let { t } = useTranslation(); 
  
  return (
    <footer>
      <div className="inner-wrapper section-x-default">
        <FooterContactMe />
        <FooterSignature />
        {/* <SiteMap /> */}
      </div>
      <MarioAnimationComponent />
      <CopyrightComponent />
    </footer>
  );
}