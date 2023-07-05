import React from "react";
import useTranslation from "next-translate/useTranslation";

import AboutTextComponent from "./text";
import AboutPictureComponent from "./picture";
import { TextAnimationLetter } from "../../_shared";

export default function AboutMeSection() {
  let { t } = useTranslation();

  return (
    <section className="about-section-about flex-centered section-y-default relative flex-col">
      <TextAnimationLetter className="title-primary-md flex justify-center" text={t("home:about_title")} />
      <div className="content-wrapper flex flex-col xl:grid xl:grid-cols-2 gap-4 section-width-default">
        <AboutTextComponent />
        <AboutPictureComponent />
      </div>
    </section>
  );
}
