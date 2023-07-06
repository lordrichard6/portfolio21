import React, { useState } from "react";

import { bringUp } from "../../../utilities/framer-animations";
import { ImagesComponent, EntryAnimation } from "../../_shared";

export default function HobbiesSection({hobby_1,hobby_2,hobby_3}) {
  const [selectedElement, setSelectedElement] = useState([1]);

  const handleSelection = (elementId) => {
    setSelectedElement(elementId);
  };

  return (
    <EntryAnimation style="w-full h-full relative" animation={bringUp}>
      <div
        className={`btn-channel first ${selectedElement === 1 ? "selected" : ""}`}
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
          {hobby_3}
        </div>
        <div
          className={`btn-mobile ${selectedElement === 2 ? "selected" : ""}`}
          onClick={() => handleSelection(2)}
        >
          {hobby_2}
        </div>
        <div
          className={`btn-mobile ${selectedElement === 1 ? "selected" : ""}`}
          onClick={() => handleSelection(1)}
        >
          {hobby_1}
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
          <ImagesComponent src="/about/gym.jpg" alt="" style="h-full" />
        </div>
        <div className="h-full w-full bg-slate-900">
        <ImagesComponent src="/logo_gold.png" alt="" style="h-full p-10" />
        </div>
      </div>
    </EntryAnimation>
  );
}
