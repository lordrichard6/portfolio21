import React from "react";
import useTranslation from "next-translate/useTranslation";

import { TextAnimationWord } from "../../_shared";

export default function AboutQuote() {
  let { t } = useTranslation();
  return (
    <section className="section-quote flex-centered section-y-short">
      <div className="background-gradient" />
      <TextAnimationWord className="text-quote section-x-default text-primary flex flex-wrap" text={t("about:quote_01")} />
    </section>
  );
}