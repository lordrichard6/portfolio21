import useTranslation from "next-translate/useTranslation";

import OldTV from './oldTv'
import { TitlePrimary } from "../../_shared";

export default function HobbiesSection() {

  return (
    <section className="section-hobbies section-y-short">
      <TitlePrimary title="Hobbies build character" />
      <OldTV hobby_1="COOKING" hobby_2="OUTSIDE" hobby_3="GYM" />
    </section>
  );
}
