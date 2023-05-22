import React, { useState } from "react";

import Modal from "./modal";
import { gallery } from "../../../assets/data/gallery";
import PicturesComponent from "./pictures";
import { TextAnimationLetter } from "../../_shared";

export default function AboutGallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imgSrc);
  };

  return (
    <section className="about-section-gallery">
      <TextAnimationLetter className="title-primary-md flex justify-center" text="Here's some pictures" />
      <div className="gallery-wrapper">
        {gallery.map((item, i) => {
          return (
            <PicturesComponent
              key={i}
              className={item.className}
              imgSrc={item.imgSrc}
              alt={item.alt}
              onClick={() => handelClick(item, i)}
            />
          );
        })}
        {clickedImg && (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        )}
      </div>
    </section>
  );
}
