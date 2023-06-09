import React from "react";
import useTranslation from "next-translate/useTranslation";

import { bringUp, textFromLeft } from "../../../utilities/framer-animations";
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
    <section className="about-quote flex-centered section-y-short">
        <div className="background-gradient" />
      <EntryAnimation animation={bringUp} style="image-quote h-full">
        <ImagesComponent
          style="w-full opacity-30"
          alt={main_image.alt}
          src={main_image.image}
        />
      </EntryAnimation>
      <EntryAnimation animation={textFromLeft} style="text-quote section-x-default text-primary flex flex-wrap">
        <h1 className="font-light text-center">{t(quote.quote)}</h1>
        <h1 className="font-bold">{quote.author}</h1>
      </EntryAnimation>
      {/* <TextAnimationWord className="text-quote section-x-default text-primary flex flex-wrap" text="Do not compare, do not measure. No other way is like yours. All other ways decieve and tempt you. You must fulfill the way that is in you. -Carl Jung" /> */}
    </section>
  );
}