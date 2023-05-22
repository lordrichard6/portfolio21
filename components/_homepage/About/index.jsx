import React from "react";
import useTranslation from "next-translate/useTranslation";

import {
  bringFromLeft,
  bringFromRight,
  bringUp,
} from "../../../utilities/framer-animations";

import TextComponent from "./text";
import ImageComponent from "./image";
import {
  TextAnimationLetter,
  BtnPrimaryCTA,
  EntryAnimation,
  SocialInclineBlock,
} from "../../_shared";

import { SocialMedia } from "../../../assets/data/social_media";

export default function HomeAbout() {
  let { t } = useTranslation();
  
  return (
    <section className="relative w-screen min-h-screen flex-centered flex-col">
      <TextAnimationLetter className="title-primary-md flex justify-center" text={t("home:about_title")} />
      <div className="w-4/5 2xl:w-3/5 flex-centered flex-col xl:flex-row my-6 lg:my-10">
        <EntryAnimation
          style="order-2 min-w-[290px] lg:w-[430px] xl:w-full mt-6"
          animation={bringFromRight}
        >
          <TextComponent />
          <ul className="home-social mt-10 mb-6">
            {SocialMedia.map((item, i) => {
              return (
                <SocialInclineBlock
                  key={i}
                  icon={item.icon}
                  iconName={item.iconName}
                  link={item.link}
                />
              );
            })}
          </ul>
        </EntryAnimation>
        <EntryAnimation
          style="order-1 w-full flex-centered flex-col"
          animation={bringFromLeft}
        >
          <ImageComponent />
        </EntryAnimation>
      </div>
      <EntryAnimation animation={bringUp}>
        <BtnPrimaryCTA
          color="_2"
          text={t("common:btn_more_about")}
          link="/about"
          styles="mt-4"
        />
      </EntryAnimation>
    </section>
  );
}