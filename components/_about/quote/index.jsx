import React from "react";
import useTranslation from "next-translate/useTranslation";

import { bringUp } from "../../../utilities/framer-animations";
import { TextAnimationWord, EntryAnimation, ImagesComponent } from "../../_shared";

export default function AboutQuote() {
  let { t } = useTranslation();
  return (
    <section className="about-quote flex-centered section-y-short">
        <div className="background-gradient" />
      <EntryAnimation animation={bringUp} style="image-quote h-full">
        <ImagesComponent
          style="w-full opacity-30"
          alt="Carl Jung black and white photoshoped"
          src="/home/carl_b&w.png"
        />
      </EntryAnimation>
      <TextAnimationWord className="text-quote section-x-default text-primary flex flex-wrap" text="Do not compare, do not measure. No other way is like yours. All other ways decieve and tempt you. You must fulfill the way that is in you. -Carl Jung" />
    </section>
  );
}