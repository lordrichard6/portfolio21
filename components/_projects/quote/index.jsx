import React from "react";
import useTranslation from "next-translate/useTranslation";

import { SharedQuotes } from "../../_shared";
import { projects_quote } from "../../../assets/data";


export default function ProjectsQuote() {
  let { t } = useTranslation();
  return (
    <section className="projects-quote section-y-short flex-centered relative w-full mb-20 sm:mb-0">
      <div className="background-gradient" />
      <SharedQuotes
        alt={projects_quote.alt}
        img={projects_quote.image}
        quote={t(projects_quote.quote)}
        author={projects_quote.author}
      />
    </section>
  );
}