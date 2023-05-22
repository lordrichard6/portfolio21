import React from "react";
import useTranslation from "next-translate/useTranslation";

import AboutTextComponent from "./text";
import AboutPictureComponent from "./picture";
import { TextAnimationLetter } from "../../_shared";

export default function AboutMeSection() {
  let { t } = useTranslation();

  return (
    <section className="about-section-about flex-centered section-y-default section-x-default">
      <TextAnimationLetter className="title-primary-md flex justify-center" text={t("home:about_title")} />
      <div className="content-wrapper">
        <AboutTextComponent />
        <AboutPictureComponent />
      </div>
    </section>
  );
}
