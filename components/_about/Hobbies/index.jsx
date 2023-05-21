import useTranslation from "next-translate/useTranslation";

import HobbiesComponent from "./hobbie-elements/hobbies";
import CenterHexagonComponent from "./hobbie-elements/centerHexagon";
import { TitlePrimary } from "../../_shared";

export default function HobbiesSection() {
  let { t } = useTranslation();

  return (
    <section className="section-hobbies section-y-default">
      <TitlePrimary title="Hobbies build character" />
      <CenterHexagonComponent />
      <HobbiesComponent />
    </section>
  );
}
