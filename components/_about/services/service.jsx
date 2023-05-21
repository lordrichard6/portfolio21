/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImagesComponent } from "../../_shared";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

export default function SingleService({
  key,
  imgSrc,
  alt,
  serviceName,
  textShort,
  cardType,
}) {
  return (
    <div className={cardType} key={key}>
      {/* <img src={imgSrc} alt={alt} className="picture bg-sky-300"/> */}
      <ImagesComponent src={imgSrc} alt={alt} style="picture" />
      <h2>{serviceName}</h2>
      <p>{textShort}</p>
      <button>
        <h3>know more</h3>
        <TbArrowBigRightLinesFilled />
      </button>
    </div>
  );
}
