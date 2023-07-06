import useTranslation from "next-translate/useTranslation";

import OldTV from './oldTv'
import { TextAnimationLetter } from "../../_shared";

const intro = {
  paragraph_01: "I strongly believe that a person without hobbies is a slave of the system, therefore in order to be free and truly happy, we need to find what brings us joy outside the responsability.",
  paragraph_02: "Between being a gym rat and make the gym my own home, I also like to cook and take care of my own nutrition(as the saying -we are what we eat) and finaly I do love the calmness of nature and the discovering of beautifull sights on top of the Swiss alps.",
}

export default function HobbiesSection() {
  return (
    <section className="about-section-hobbies section-y-short">
      <TextAnimationLetter className="title-primary-md flex justify-center" text="Hobbies build character" />
      <div className="section-width-default mx-auto mb-8">
        <p className="text-primary">{intro.paragraph_01}</p>
        <p className="text-primary">{intro.paragraph_02}</p>
      </div>
      <OldTV hobby_1="COOKING" hobby_2="OUTSIDE" hobby_3="GYM" />
    </section>
  );
}
