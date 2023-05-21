import React, { useState } from "react";

import Modal from "./modal";
import { gallery } from "../../../assets/data/gallery";
import PicturesComponent from "./pictures";
import { TitlePrimary } from "../../_shared";

export default function GalleryItems() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imgSrc);
  };

  return (
    <section className="min-h-[1200px] md:min-h-full mb-60">
      <TitlePrimary title="Here's some pictures" />
      <div className="wrapper">
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
