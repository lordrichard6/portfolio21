import useTranslation from "next-translate/useTranslation";
import React from "react";

import {
  bringUp,
  bringFromLeft,
  bringFromRight,
} from "../../../utilities/framer-animations";

import { TitleUpAndDown, EntryAnimation } from "../../_shared";
import SectionComponent from "./section";

import { frontTechs, backTechs } from "../../../assets/data/techs";

export default function TechsSection() {
  let { t } = useTranslation();

  return (
    <section className="mt-10 mb-20 lg:mb-40 md:mx-10">
      <EntryAnimation style="w-full flex justify-center" animation={bringUp}>
        <TitleUpAndDown title="Techs" />
      </EntryAnimation>
      <EntryAnimation
        style="mx-auto w-3/4 md:w-1/2 2xl:w-1/3 mt-8 mb-12"
        animation={bringUp}
      >
        <p className="normal-text">{t("home:techs_description")}</p>
      </EntryAnimation>
      <div className="text-slate-100 grid grid-cols-1 md:grid-cols-2 w-full 2xl:w-4/5 md:divide-x-4 mt-10 mx-auto">
        <EntryAnimation style="left" animation={bringFromLeft}>
          <SectionComponent title="Front-End" side={frontTechs} />
        </EntryAnimation>
        <EntryAnimation style="right" animation={bringFromRight}>
          <SectionComponent title="Back-End" side={backTechs} />
        </EntryAnimation>
      </div>
    </section>
  );
}
