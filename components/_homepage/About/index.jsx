import React, { useState } from "react";
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
  // ImagesComponent
  SocialInclineBlock,
} from "../../_shared";

import { SocialMedia, home_about } from "../../../assets/data";
import TerminalComponent from "./terminal";

export default function HomeAbout() {
  let { t } = useTranslation();
  // const [keyboardValue, setKeyboardValue] = useState('');

  // const handleKeyPress = (key) => {
  //   setKeyboardValue(prevValue => prevValue + key);
  //   const textarea = document.getElementById('cmd');
  //   textarea.value += key;
  //   textarea.scrollTop = textarea.scrollHeight;
  //   console.log(key)

  // };

  return (
    <section className="home-section-about section-y-default section-x-default flex-centered relative flex-col">
      <TextAnimationLetter
        className="title-primary-md flex-centered"
        text={t(home_about.title)}
      />
      {/* TEXT DESKTOP */}
      <div className="section-width-default mx-auto mb-8 hidden lg:block">
        <p className="text-primary mb-4">{home_about.intro_mobile}</p>
        <p className="text-primary mb-4">{home_about.intro_01}</p>
        <p className="text-primary">{home_about.intro_02}</p>
      </div>
      {/* TEXT MOBILE */}
      <div className="section-width-default mx-auto mb-8 lg:hidden">
        <p className="text-primary mb-2">{home_about.intro_mobile}</p>
      </div>

      <div className="content-wrapper w-full flex-centered flex-col sm:h-auto xl:flex-row lg:my-10 xl:w-[1100px] relative">
        {/* <ImagesComponent
              style="absolute sm:hidden h-[990px] mt-[266px] ml-[18px] overflow-visible"
              alt="good old nokia 3310"
              src="/home/nokia_3310.png"
            /> */}
        
        {/* TERMINAL DESKTOP */}
        <TerminalComponent />

        {/* IMAGES AND TEXT ANIMATION */}
        <div className="right-wrapper order-2 min-w-[290px] xl:w-1/2 w-full mt-6 lg:hidden">
          <TextComponent />
        </div>
        <EntryAnimation style="left-wrapper order-1 w-full flex items-center flex-col lg:hidden" animation={bringFromLeft}>
          <ImagesDualEffectComponent
            style="w-[260px] md:w-[400px] h-[260px] md:h-[400px] image-hover hover:cursor-pointer"
            alt={home_about.dual_img.img_01.alt}
            alt2={home_about.dual_img.img_02.alt}
            src={home_about.dual_img.img_01.img}
            src2={home_about.dual_img.img_02.img}
          />
        </EntryAnimation>
      </div>

      {/* SOCIAL BTNS */}
      <EntryAnimation style="socialmedia-buttons flex justify-center w-full lg:hidden my-4" animation={bringUp}>
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

      <EntryAnimation style="cta-button" animation={bringUp}>
        <BtnPrimaryCTA
          color="_2"
          text={t(home_about.btn.text)}
          link={home_about.btn.link}
        />
      </EntryAnimation>
    </section>
  );
}
