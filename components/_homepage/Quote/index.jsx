import useTranslation from "next-translate/useTranslation";

import { blured, textFromLeft } from "../../../utilities/framer-animations";
import { EntryAnimation, ImagesComponent } from "../../_shared";

export default function HomeQuote() {
  let { t } = useTranslation();

  const main_image = {
    image: "/home/jordan_b&w.png",
    alt: "jordan peterson black and white photoshoped with dipping effect"
  }
  const quote = {
    quote: "home:quote_home",
    author: "Jordan Peterson"
  }
    ;

  return (
    <section className="home-quote">
      <div className="background-gradient" />
      <EntryAnimation animation={blured} style="image-quote">
        <ImagesComponent
          style="w-full opacity-50"
          alt={main_image.alt}
          src={main_image.image}
        />
      </EntryAnimation>
      <EntryAnimation animation={textFromLeft} style="text-quote section-x-default text-primary flex flex-wrap">
        <h1 className="font-light text-center">{t(quote.quote)}</h1>
        <h2 className="font-bold">{quote.author}</h2>
      </EntryAnimation>
      {/* <TextAnimationWord
        className="text-quote section-x-default text-primary flex flex-wrap"
        text={t(quote)}
      /> */}
    </section>
  );
}
