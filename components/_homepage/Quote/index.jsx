import useTranslation from "next-translate/useTranslation";

import { textFromLeft } from "../../../utilities/framer-animations";
import { EntryAnimation, ImagesComponent } from "../../_shared";
import { home_quote } from "../../../assets/data";

export default function HomeQuote() {
  let { t } = useTranslation();

  return (
    <section className="home-quote section-y-short flex-centered relative w-full mb-20 sm:mb-0">
      <div className="background-gradient" />
      <div className="section-width-default flex-centered h-full">
        <div className="image-quote absolute top-1/2 left-1/2 w-[600px] lg:w-[800px]">
          <ImagesComponent
            style="w-full opacity-30"
            alt={home_quote.alt}
            src={home_quote.image}
          />
        </div>
        <EntryAnimation animation={textFromLeft} style="text-quote text-primary flex flex-wrap">
          <h1 className="text-center">{t(home_quote.quote)}</h1>
          <h2 className="font-bold mt-6">{home_quote.author}</h2>
        </EntryAnimation>
      </div>
    </section>
  );
}
