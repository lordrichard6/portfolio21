import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import { bringUp } from "../../../utilities/framer-animations";
import { EntryAnimation } from "../../_shared";
import { ImagesComponent } from "../../_shared";
import HobbiesComponent from "./hobbie-elements/hobbies";
import CenterHexagonComponent from "./hobbie-elements/centerHexagon";
import { TitlePrimary } from "../../_shared";

export default function HobbiesSection() {
  const [selectedElement, setSelectedElement] = useState([1]);
  let { t } = useTranslation();

  const handleSelection = (elementId) => {
    setSelectedElement(elementId);
  };

  return (
    <section className="section-hobbies">
      <TitlePrimary title="Hobbies build character" />
      {/* <CenterHexagonComponent />
      <HobbiesComponent /> */}
      <EntryAnimation style="w-full h-full relative" animation={bringUp}>
        <div
          className={`btn-channel ${selectedElement === 1 ? "selected" : ""}`}
          onClick={() => handleSelection(1)}
        />
        <div
          className={`btn-channel second ${
            selectedElement === 2 ? "selected" : ""
          }`}
          onClick={() => handleSelection(2)}
        />
        <div
          className={`btn-channel third ${
            selectedElement === 3 ? "selected" : ""
          }`}
          onClick={() => handleSelection(3)}
        />
        {/* MOBILE BTNS */}
        <div className="mobile-option">
          <div
            className={`btn-mobile ${selectedElement === 3 ? "selected" : ""}`}
            onClick={() => handleSelection(3)}
          >
            GYM
          </div>
          <div
            className={`btn-mobile ${selectedElement === 2 ? "selected" : ""}`}
            onClick={() => handleSelection(2)}
          >
            OUTSIDE
          </div>
          <div
            className={`btn-mobile ${selectedElement === 1 ? "selected" : ""}`}
            onClick={() => handleSelection(1)}
          >
            COOKING
          </div>
        </div>
        {/* MOBILE BTNS */}
        <ImagesComponent src="/about/old_tv.png" alt="" style="old-tv" />
        <div className="screen scanlines z-10">
          <div className={`hobby ${selectedElement === 1 ? "" : "hidden"}`}>
            <ImagesComponent src="/about/cooking.jpg" alt="" style="h-full" />
          </div>
          <div className={`hobby ${selectedElement === 2 ? "" : "hidden"}`}>
            <ImagesComponent src="/about/outside.jpg" alt="" style="h-full" />
          </div>
          <div className={`hobby ${selectedElement === 3 ? "" : "hidden"}`}>
            <ImagesComponent
              src="/about/gym.jpg"
              alt=""
              style="h-full"
            />
          </div>
          <div className="h-full w-full bg-slate-900" />
        </div>
      </EntryAnimation>
    </section>
  );
}
