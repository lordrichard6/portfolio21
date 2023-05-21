import React from "react";
import useTranslation from "next-translate/useTranslation";

import { TextPrimaryAnimated } from "../../_shared";

export default function AboutQuote() {
  let { t } = useTranslation();
  return (
    <section className="section-quote">
      <div className="background-gradient" />
      <TextPrimaryAnimated style="section-width quote" text={t("about:quote_01")} />
    </section>
  );
}