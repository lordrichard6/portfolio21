import React from "react";
import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { EntryAnimation } from "../../_shared";
import { textFromRight } from "../../../utilities/framer-animations";

export default function TextComponent() {
  let { t } = useTranslation();

  const texts = {
    first_line_01: "home:about_first_line_01",
    first_line_02: "home:about_first_line_02",
    second_line: "home:about_second_line",
    third_line: "home:about_third_line",
    fourth_line_01: "home:about_forth_line_01",
    fourth_line_02: "home:about_forth_line_02",
    fifth_line_01: "home:about_fith_line_01",
    fifth_line_02: "home:about_fith_line_02",
    fifth_line_03: "home:about_fith_line_03",
    fifth_line_04: "home:about_fith_line_04",
    fifth_line_05: "home:about_fith_line_05",
    name_01: "Paulo",
    name_02: "Reizinho",
    town: "Gavião",
    country: "Portugal",
    city_actual: "Zurich",
  };

  return (
    <div className="home-about max-w-[290px] lg:max-w-full mx-auto">
      <EntryAnimation animation={textFromRight} delayTime={2}>
        <h2>
          {t(texts.first_line_01)}
          <ReactTypingEffect
            text={t(texts.first_line_02)}
            speed={60}
            eraseDelay={600}
            className="ml-1"
          />
        </h2>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(texts.second_line)}{" "}
          <strong>
            {texts.name_01}
            <ReactTypingEffect
              text={texts.name_02}
              speed={120}
              eraseDelay={700}
              className="ml-1"
            />
          </strong>
        </h3>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(texts.third_line)} <strong>{texts.town}</strong>,
          <strong>
            <ReactTypingEffect
              text={texts.country}
              speed={80}
              eraseDelay={700}
              className="ml-1"
            />
          </strong>
        </h3>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(texts.fourth_line_01)} <strong>{texts.city_actual}</strong>,
          <strong>
            <ReactTypingEffect
              text={t(texts.fourth_line_02)}
              speed={70}
              eraseDelay={700}
              className="ml-1"
            />
          </strong>
        </h3>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(texts.fifth_line_01)}
          <strong>
            <ReactTypingEffect
              text={t([texts.fifth_line_02, texts.fifth_line_03, texts.fifth_line_04, texts.fifth_line_05])}
              speed={100}
              eraseDelay={300}
              className="ml-1"
            />
          </strong>
        </h3>
      </EntryAnimation>
    </div>
  );
}
