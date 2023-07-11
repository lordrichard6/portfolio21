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

import { SocialMedia } from "../../../assets/data/social_media";
import TerminalComponent from "./terminal";

const intro = {
  paragraph_01: "Want to know more about me? Check below this terminal screen and see if you can find my information, Please keep in mind this requires a little bit of patience and advanced knowledge.",
  paragraph_02: "This terminal is just a way to give some interactivity to the website and make it more fun and also a way to have a taste of how the terminal works, which is a basic tool for the developer. \nType 'help' to start.",
}

const introMobile = {
  paragraph_01: "Introduction should be brief and clear, I'm simple guy with an ambition the size of a black hole.",
}



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
      <div className="section-width-default mx-auto mb-8 hidden lg:block">
        <p className="text-primary mb-2">{intro.paragraph_01}</p>
        <p className="text-primary">{intro.paragraph_02}</p>
      </div>
      <div className="section-width-default mx-auto mb-8 lg:hidden">
        <p className="text-primary mb-2">{introMobile.paragraph_01}</p>
      </div>
      <div className="content-wrapper w-full flex-centered flex-col sm:h-auto xl:flex-row lg:my-10 xl:w-[1100px] relative">
        {/* <ImagesComponent
              style="absolute sm:hidden h-[990px] mt-[266px] ml-[18px] overflow-visible"
              alt="good old nokia 3310"
              src="/home/nokia_3310.png"
            /> */}
        <TerminalComponent />
        <div className="right-wrapper order-2 min-w-[290px] xl:w-1/2 w-full mt-6 lg:hidden">
          <TextComponent />
        </div>

        <EntryAnimation style="left-wrapper order-1 w-full flex items-center flex-col lg:hidden" animation={bringFromLeft}>
          <ImagesDualEffectComponent
            style="w-[260px] md:w-[400px] h-[260px] md:h-[400px] image-hover hover:cursor-pointer"
            alt="paulo reizinho"
            src="/home_me_01.png"
            src2="/home_me_03.png"
          />
        </EntryAnimation>
      </div>

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
          text={t(button.text)}
          link={button.link}
        />
      </EntryAnimation>
    </section>
  );
}
