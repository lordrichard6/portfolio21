import useTranslation from "next-translate/useTranslation";

import { blured } from "../../../utilities/framer-animations";
import { TextAnimationWord, EntryAnimation, ImagesComponent } from "../../_shared";

export default function HomeQuote() {
  let { t } = useTranslation();

  const main_image = {
    image: "/home/jordan_b&w.png",
    alt: "jordan peterson black and white photoshoped with dipping effect"
  }
  const quote = "home:quote_home";

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
      <TextAnimationWord
        className="text-quote section-x-default text-primary flex flex-wrap"
        text={t(quote)}
      />
    </section>
  );
}
