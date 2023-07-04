import useTranslation from "next-translate/useTranslation";

import { EntryAnimation, TextAnimationLetter } from "../../_shared";
import {
  bringFromLeft,
  bringFromLeft02,
  bringFromLeft03,
} from "../../../utilities/framer-animations";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  const texts = {
    title_01: "home:header_main_title_01",
    title_02: "home:header_main_title_02",
    title_03: "home:header_main_title_03",
    sub_title_01: "home:header_sub_title_01",
    sub_title_02: "home:header_sub_title_02",
  };

  return (
    <div className="title-container w-full xl:w-1/2 flex flex-col z-30 -mt-40 lg:mt-0 absolute xl:relative -bottom-40 xl:bottom-0">
      <div className="main-title blue-glow">
        <EntryAnimation animation={bringFromLeft}>
          <h1>{t(texts.title_01)}</h1>
        </EntryAnimation>
        <EntryAnimation animation={bringFromLeft02}>
          <h1>{t(texts.title_02)}</h1>
        </EntryAnimation>
        <EntryAnimation animation={bringFromLeft03}>
          <h1>{t(texts.title_03)}</h1>
        </EntryAnimation>
      </div>
      <div className="sub-title">
        <TextAnimationLetter
          className="text text-primary flex flex-wrap"
          text={t(texts.sub_title_01)}
        />
        <TextAnimationLetter
          className="text text-primary flex flex-wrap"
          text={t(texts.sub_title_02)}
        />
      </div>
    </div>
  );
}
