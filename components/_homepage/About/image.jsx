import React from "react";

import { ImagesDualEffectComponent } from "../../_shared";

export default function ImageComponent() {
  return (
    <>
      <ImagesDualEffectComponent
        style="w-[260px] lg:w-[400px] h-[260px] lg:h-[400px] image-hover hover:cursor-pointer"
        alt="paulo reizinho"
        src="/home_me_01.png"
        src2="/home_me_03.png"
      />
    </>
  );
}
