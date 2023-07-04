import React from "react";
import useTranslation from "next-translate/useTranslation";

import {
  bringFromLeft,
  bringUp
} from "../../../utilities/framer-animations";

import TextComponent from "./text";
import ImagesDualEffectComponent from "./imagesDual";
import {
  TextAnimationLetter,
  BtnPrimaryCTA,
  EntryAnimation,
  SocialInclineBlock,
} from "../../_shared";

import { SocialMedia } from "../../../assets/data/social_media";

export default function HomeAbout() {
  let { t } = useTranslation();

  const button = {
    link: "/about",
    text: "common:more_about"
  }
  const title = "home:about_title"

  return (
    <section className="home-section-about section-y-default section-x-default flex-centered relative flex-col">
      <TextAnimationLetter
        className="title-primary-md flex-centered"
        text={t(title)}
      />
      <div className="content-wrapper w-full flex-centered flex-col xl:flex-row my-6 lg:my-10 xl:w-[1100px]">
        <div className="right-wrapper order-2 min-w-[290px] lg:w-1/2 w-full mt-6">
          <TextComponent />
        </div>
        <EntryAnimation style="left-wrapper order-1 w-full lg:w-1/2 flex-centered flex-col" animation={bringFromLeft}>
          <ImagesDualEffectComponent
            style="w-[260px] lg:w-[400px] h-[260px] lg:h-[400px] image-hover hover:cursor-pointer"
            alt="paulo reizinho"
            src="/home_me_01.png"
            src2="/home_me_03.png"
          />
        </EntryAnimation>
      </div>
      <EntryAnimation style="flex-centered w-full lg:h-[200px] my-4" animation={bringUp}>
        <ul className="home-social w-3/4">
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
      <EntryAnimation animation={bringUp}>
        <BtnPrimaryCTA
          color="_2"
          text={t(button.text)}
          link={button.link}
        />
      </EntryAnimation>
    </section>
  );
}
