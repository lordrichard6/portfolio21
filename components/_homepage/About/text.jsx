import React from "react";
import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

export default function TextComponent() {
  let { t } = useTranslation();

  return (
    <div className="home-about max-w-[290px] lg:max-w-full mx-auto">
      <h2>
        {t("home:about_first_line")}
        <ReactTypingEffect
          text={t("home:about_first_line02")}
          speed={60}
          eraseDelay={600}
          className="ml-1"
        />
      </h2>
      <h3>
        {t("home:about_second_line")}{" "}
        <strong>
          Paulo
          <ReactTypingEffect
            text="Reizinho"
            speed={120}
            eraseDelay={700}
            className="ml-1"
          />
        </strong>
      </h3>
      <h3>
        {t("home:about_third_line")} <strong>Gavião</strong>,
        <strong>
          <ReactTypingEffect
            text="Portugal"
            speed={120}
            eraseDelay={700}
            className="ml-1"
          />
        </strong>
      </h3>
      <h3>
        {t("home:about_fith_line")} <strong>Zurich</strong>,
        <strong>
          <ReactTypingEffect
            text={t("home:about_fith_line02")}
            speed={120}
            eraseDelay={700}
            className="ml-1"
          />
        </strong>
      </h3>
      <h3>
        I am a
        <strong>
          <ReactTypingEffect
            text={["developer.", "designer", "UI & UX enthusiast"]}
            speed={120}
            eraseDelay={700}
            className="ml-1"
          />
        </strong>
      </h3>
    </div>
  );
}
