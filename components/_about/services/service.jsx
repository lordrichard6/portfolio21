import React from "react";

import { ImagesComponent, EntryAnimation ,BtnBlue } from "../../_shared";
import { bringUp } from "../../../utilities/framer-animations";

export default function SingleService({
  key,
  imgSrc,
  alt,
  serviceName,
  textShort,
  cardType,
  onClick
}) {
  return (
    <EntryAnimation style={`service-card flex ${cardType}`} animation={bringUp} key={key}>
      <ImagesComponent src={imgSrc} alt={alt} style="picture" />
      <h2>{serviceName}</h2>
      <p className="text-primary">{textShort}</p>
      <BtnBlue onClick={onClick} text="Know more" />
    </EntryAnimation>
  );
}
