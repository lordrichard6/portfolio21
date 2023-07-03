import React from "react";
import useTranslation from "next-translate/useTranslation";

import { bringUp, textFromLeft } from "../../../utilities/framer-animations";
import { EntryAnimation, ImagesComponent } from "../../_shared";

const main_image = {
  image: "/home/elon_blue.png",
  alt: "elon musk with mars and a rocket behind him in a blue filter"
}
const quote = {
  quote: "projects:quote",
  author: "Elon Musk"
}
;

export default function ProjectsQuote() {
  let { t } = useTranslation();
  return (
    <section className="projects-quote flex-centered section-y-short">
        <div className="background-gradient" />
      <EntryAnimation animation={bringUp} style="image-quote h-full">
        <ImagesComponent
          style="w-full opacity-30"
          alt={main_image.alt}
          src={main_image.image}
        />
      </EntryAnimation>
      <EntryAnimation animation={textFromLeft} style="text-quote section-x-default text-primary flex-centered flex-col flex-wrap">
        <h1 className="font-light text-center">{t(quote.quote)}</h1>
        <h2 className="font-bold">{quote.author}</h2>
      </EntryAnimation>
    </section>
  );
}