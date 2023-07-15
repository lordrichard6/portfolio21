import React from "react";
import useTranslation from "next-translate/useTranslation";

import { SharedQuotes } from "../../_shared";
import { about_quote } from "../../../assets/data";

export default function AboutQuote() {
  let { t } = useTranslation();
  return (
    <section className="about-quote section-y-short flex-centered relative w-full mb-20 sm:mb-0">
      <div className="background-gradient" />
      <SharedQuotes
        alt={about_quote.alt}
        img={about_quote.image}
        quote={t(about_quote.quote)}
        author={about_quote.author}
      />

      {/* <div className="section-width-default flex-centered h-full">
        <div className="image-quote absolute top-[80%] left-1/2 w-[600px] lg:w-[800px]">
          <ImagesComponent
            style="w-full opacity-30"
            alt={main_image.alt}
            src={main_image.image}
          />
        </div>
        <EntryAnimation animation={textFromLeft} style="text-quote text-primary flex flex-wrap">
          <h1 className="text-center">{t(quote.quote)}</h1>
          <h2 className="font-bold mt-6">{quote.author}</h2>
        </EntryAnimation>
      </div> */}
    </section>
  );
}