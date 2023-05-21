import React from "react";
import useTranslation from "next-translate/useTranslation";

import AboutTextComponent from "./text";
import AboutPictureComponent from "./picture";
import { TitlePrimary } from "../../_shared";

export default function AboutMeSection() {
  let { t } = useTranslation();

  return (
    <section className="section-about section-y-default">
      <TitlePrimary title={t("home:about_title")} />
      <div className="content-wrapper">
        <AboutTextComponent />
        <AboutPictureComponent />
      </div>
    </section>
  );
}
