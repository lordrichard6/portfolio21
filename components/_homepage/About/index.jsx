import React from "react";
import useTranslation from "next-translate/useTranslation";

import {
  bringFromLeft,
  bringUp
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

  const button = {
    link: "/about",
    text: "common:more_about"
  }
  const title = "home:about_title"

  return (
    <section className="home-section-about section-y-default section-x-default flex-centered">
      <TextAnimationLetter
        className="title-primary-md flex-centered"
        text={t(title)}
      />
      <div className="content-wrapper">
        <div className="right-wrapper">
          <TextComponent />
          <EntryAnimation animation={bringUp}>
            <ul className="home-social">
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
        </div>
        <EntryAnimation style="left-wrapper" animation={bringFromLeft}>
          <ImageComponent />
        </EntryAnimation>
      </div>
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
