import React from "react";
import useTranslation from "next-translate/useTranslation";

import AboutTextComponent from "./text";
import AboutPictureComponent from "./picture";
import { TitlePrimary } from "../../_shared";

export default function AboutMeSection() {
  let { t } = useTranslation();

  return (
    <section className="relative w-screen flex flex-col justify-center items-center py-24 md:py-32">
      <TitlePrimary title={t("home:about_title")} />
      <div className="w-4/5 2xl:w-3/5 flex flex-col xl:grid xl:grid-cols-2 gap-4">
        <AboutTextComponent />
        <AboutPictureComponent />
      </div>
    </section>
  );
}