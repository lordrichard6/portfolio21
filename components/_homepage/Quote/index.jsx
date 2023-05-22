import useTranslation from "next-translate/useTranslation";

import { bringUp } from "../../../utilities/framer-animations";
import { TextAnimationWord, EntryAnimation, ImagesComponent } from "../../_shared";

export default function HomeQuote() {
  let { t } = useTranslation();

  return (
    <section className="home-quote">
      <div className="background-gradient" />
      <EntryAnimation animation={bringUp} style="image-quote">
        <ImagesComponent
          style="w-full opacity-50"
          alt="jordan peterson black and white photoshoped with dipping effect"
          src="/home/jordan_b&w.png"
        />
      </EntryAnimation>
      <TextAnimationWord
        className="text-quote section-x-default text-primary flex flex-wrap"
        text='"The better ambitions have to do with the development of character and ability, rather than status and power. Status you can lose. You carry character with you wherever you go, and it allows you to prevail against adversity." -Jordan Perterson'
      />
    </section>
  );
}
