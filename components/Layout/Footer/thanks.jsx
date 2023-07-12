import useTranslation from "next-translate/useTranslation";

import { SiNextdotjs } from "react-icons/si";
import { EntryAnimation, ImagesComponent } from "../../_shared";
import { bringFromRight } from "../../../utilities/framer-animations";

export default function FooterSignature() {
  let { t } = useTranslation();

  const signature = "/signature.svg";
  const imageAlt = "paulo lopes reizinho signature";

  const t_tech = t("common:website_powered")

  return (
    <EntryAnimation
      animation={bringFromRight}
      style="thanks-wrapper flex-centered"
      threshold={0.2}
    >
      {/* <h1>{t("common:thanks")}</h1> */}
      <div className="image-container flex-centered">
        <ImagesComponent
          style="signature-image w-[314px]"
          alt={imageAlt}
          src={signature}
        />
      </div>
      <div className="site-tech w-full flex-centered">
        <p>{t_tech}</p>
        <span className="flex-centered text-3xl ml-2">
          <SiNextdotjs alt="nextjs logo" />
        </span>
      </div>
    </EntryAnimation>
  );
}
