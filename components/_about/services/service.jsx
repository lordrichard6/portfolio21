import React from "react";

import { ImagesComponent, EntryAnimation } from "../../_shared";
import { bringUp } from "../../../utilities/framer-animations";
// import { TbArrowBigRightLinesFilled } from "react-icons/tb";

export default function SingleService({
  key,
  imgSrc,
  alt,
  serviceName,
  textShort,
  cardType,
}) {
  return (
    <EntryAnimation style={cardType} animation={bringUp} key={key}>
      <ImagesComponent src={imgSrc} alt={alt} style="picture" />
      <h2>{serviceName}</h2>
      <p className="text-primary">{textShort}</p>
      {/* <button>
        <h3>know more</h3>
        <TbArrowBigRightLinesFilled />
      </button> */}
    </EntryAnimation>
  );
}
