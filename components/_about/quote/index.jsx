import React from "react";
import useTranslation from "next-translate/useTranslation";

import { blured, textFromLeft } from "../../../utilities/framer-animations";
import { EntryAnimation, ImagesComponent } from "../../_shared";

const main_image = {
  image: "/home/carl_b&w.png",
  alt: "carl jung black and white image with nature effect"
}
const quote = {
  quote: "about:quote",
  author: "Carl Jung"
}
  ;

export default function AboutQuote() {
  let { t } = useTranslation();
  return (
    <section className="about-quote section-y-short flex-centered relative w-full mb-20 sm:mb-0">
      <div className="background-gradient" />
      <div className="section-width-default flex-centered h-full">
        <EntryAnimation animation={blured} style="image-quote absolute top-[80%] left-1/2 w-[600px] lg:w-[800px]">
          <ImagesComponent
            style="w-full opacity-30"
            alt={main_image.alt}
            src={main_image.image}
          />
        </EntryAnimation>
        <EntryAnimation animation={textFromLeft} style="text-quote text-primary flex flex-wrap">
          <h1 className="text-center">{t(quote.quote)}</h1>
          <h2 className="font-bold mt-6">{quote.author}</h2>
        </EntryAnimation>
      </div>
    </section>
  );
}