import useTranslation from "next-translate/useTranslation";

import OldTV from './oldTv'
import { TextAnimationLetter } from "../../_shared";

export default function HobbiesSection() {

  return (
    <section className="section-hobbies section-y-short">
      <TextAnimationLetter className="title-primary-md flex justify-center" text="Hobbies build character" />
      <OldTV hobby_1="COOKING" hobby_2="OUTSIDE" hobby_3="GYM" />
    </section>
  );
}
