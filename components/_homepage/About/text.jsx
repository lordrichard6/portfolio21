import React from "react";
import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { EntryAnimation } from "../../_shared";
import { textFromRight } from "../../../utilities/framer-animations";
import { home_about } from "../../../assets/data";

export default function TextComponent() {
  let { t } = useTranslation();

  return (
    <div className="home-about glass-container mx-auto px-6 lg:px-8 py-4 max-w-[480px] xl:max-w-none">
      <EntryAnimation animation={textFromRight} delayTime={2}>
        <h2>
          {t(home_about.personal_text.first_line_01)}
          <ReactTypingEffect
            text={[t(home_about.personal_text.first_line_02), "👨‍💻", "🌍"]}
            speed={60}
            eraseDelay={600}
            className="ml-1"
          />
        </h2>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(home_about.personal_text.second_line)}{" "}
          <strong>
            {home_about.personal_text.name_01}
            <ReactTypingEffect
              text={["Ricardo", "Lopes", home_about.personal_text.name_02]}
              speed={120}
              eraseDelay={700}
              className="ml-1"
            />
          </strong>
        </h3>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(home_about.personal_text.third_line)} <strong>{home_about.personal_text.town}</strong>,
          <strong>
            <ReactTypingEffect
              text={[home_about.personal_text.country, "🇵🇹"]}
              speed={80}
              eraseDelay={700}
              className="ml-1"
            />
          </strong>
        </h3>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(home_about.personal_text.fourth_line_01)} <strong>{home_about.personal_text.city_actual}</strong>,
          <strong>
            <ReactTypingEffect
              text={[t(home_about.personal_text.fourth_line_02), "🇨🇭"]}
              speed={70}
              eraseDelay={700}
              className="ml-1"
            />
          </strong>
        </h3>
      </EntryAnimation>
      <EntryAnimation animation={textFromRight}>
        <h3>
          {t(home_about.personal_text.fifth_line_01)}
          <strong>
            <ReactTypingEffect
              text={t([home_about.personal_text.fifth_line_02, home_about.personal_text.fifth_line_03, home_about.personal_text.fifth_line_04, home_about.personal_text.fifth_line_05])}
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
