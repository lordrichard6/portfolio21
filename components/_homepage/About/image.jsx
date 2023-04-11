import React from "react";

import { ImagesComponent } from "../../_shared";

export default function ImageComponent() {
  return (
    <>
      <ImagesComponent
        style="w-[260px] lg:w-[400px] h-[260px] lg:h-[400px] drop-shadow-xl"
        alt="paulo reizinho"
        src="/home_me_01.png"
      />
    </>
  );
}
