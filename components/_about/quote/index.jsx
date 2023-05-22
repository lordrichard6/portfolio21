import React from "react";
import useTranslation from "next-translate/useTranslation";

import { TextPrimaryAnimated } from "../../_shared";

export default function AboutQuote() {
  let { t } = useTranslation();
  return (
    <section className="section-quote flex-centered section-y-short">
      <div className="background-gradient" />
      <TextPrimaryAnimated style="quote section-x-default" text={t("about:quote_01")} />
    </section>
  );
}