import useTranslation from "next-translate/useTranslation";

import { EntryAnimation, TextAnimationLetter } from "../../_shared";
import {
  bringFromLeft,
  bringFromLeft02,
  bringFromLeft03,
  bringUp,
} from "../../../utilities/framer-animations";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  return (
    <div className="title-container">
      <div className="main-title">
        <EntryAnimation animation={bringFromLeft}>
          <h1>{t("home:header_01")}</h1>
        </EntryAnimation>
        <EntryAnimation animation={bringFromLeft02}>
          <h1>{t("home:header_02")}</h1>
        </EntryAnimation>
        <EntryAnimation animation={bringFromLeft03}>
          <h1>{t("home:header_03")}</h1>
        </EntryAnimation>
      </div>
      {/* <EntryAnimation style="w-fit mx-auto" animation={bringUp}> */}
        <div className="sub-title">
        <TextAnimationLetter className="text text-primary flex flex-wrap" text={t("home:header_slogan_01")} />
        <TextAnimationLetter className="text text-primary flex flex-wrap" text={t("home:header_slogan_02")} />
          {/* <div className="font-black">{t("home:header_slogan_01")}</div>
          <div>
            <span>{t("home:header_slogan_02")}</span>
          </div> */}
        </div>
      {/* </EntryAnimation> */}
    </div>
  );
}
