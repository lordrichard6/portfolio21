import React from "react";

import { TitleUpAndDown } from "../../_shared";

export default function HobbiesTitleComponent({ title, text }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <TitleUpAndDown title={title} />
      <div className="mx-auto w-3/4 md:w-1/2 2xl:w-1/3 mt-8 mb-12">
        <p className="normal-text">{text}</p>
      </div>
    </div>
  );
}
