import useTranslation from "next-translate/useTranslation";

import { EntryAnimation, TextAnimationLetter } from "../../_shared";
import {
  bringFromLeft,
  bringFromLeft02,
  bringFromLeft03,
} from "../../../utilities/framer-animations";
import { home_title } from "../../../assets/data";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  return (
    <div className="title-container w-full xl:w-1/2 flex flex-col z-30 lg:mt-0 absolute xl:relative -bottom-10 xl:bottom-0">
      <div className="main-title blue-glow">
        <EntryAnimation animation={bringFromLeft}>
          <h1>{t(home_title.title_01)}</h1>
        </EntryAnimation>
        <EntryAnimation animation={bringFromLeft02}>
          <h1>{t(home_title.title_02)}</h1>
        </EntryAnimation>
        <EntryAnimation animation={bringFromLeft03}>
          <h1>{t(home_title.title_03)}</h1>
        </EntryAnimation>
      </div>
      <div className="sub-title">
        <TextAnimationLetter
          className="text text-primary flex flex-wrap"
          text={t(home_title.sub_title_01)}
        />
        <TextAnimationLetter
          className="text text-primary flex flex-wrap"
          text={t(home_title.sub_title_02)}
        />
      </div>
    </div>
  );
}
