import React from "react";
import useTranslation from "next-translate/useTranslation";

import { textFromLeft } from "../../../utilities/framer-animations";
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
    <section className="projects-quote section-y-short flex-centered relative w-full mb-20 sm:mb-0">
      <div className="background-gradient" />
      <div className="section-width-default flex-centered h-full">
        <div className="image-quote absolute top-1/2 left-1/2 w-[600px] lg:w-[800px]">
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
      </div>
    </section>
  );
}