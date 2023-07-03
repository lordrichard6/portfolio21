import useTranslation from "next-translate/useTranslation";

import { EntryAnimation } from "../../_shared";
import { bringFromLeft } from "../../../utilities/framer-animations";

export default function AboutTextComponent() {
  let { t } = useTranslation();

  return (
    <EntryAnimation style="about-left-side text-primary" animation={bringFromLeft}>
      <p className="text-primary first-paragraph">{t("about:about_text01")}</p>
      <br />
      <p className="text-primary">{t("about:about_text02")}</p>
      <br />
      <p className="text-primary">{t("about:about_text03")}</p>
      <br />
      <p className="text-primary">{t("about:about_text04")}</p>
    </EntryAnimation>
  );
}
