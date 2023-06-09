import React, { useState } from "react";

import Modal from "./modal";
import PicturesComponent from "./pictures";
import { TextAnimationLetter } from "../../_shared";

export const gallery = [
  {
    imgSrc: "/gallery/my_fotos_01.jpg",
    alt: "me and my nephew",
    className: "shape shape__01",
  },
  {
    imgSrc: "/gallery/my_fotos_02.jpg",
    alt: "me, my brother and my nephew",
    className: "shape shape__02",
  },
  {
    imgSrc: "/gallery/my_fotos_03.jpg",
    alt: "me with some friends in zurich lake",
    className: "shape shape__03",
  },
  {
    imgSrc: "/gallery/my_fotos_04.jpg",
    alt: "me with the left bastards in a group",
    className: "shape shape__04",
  },
  {
    imgSrc: "/gallery/my_fotos_05.jpg",
    alt: "me flexing",
    className: "shape shape__05",
  },
  {
    imgSrc: "/gallery/my_fotos_06.jpg",
    alt: "me, my mother and my daughter",
    className: "shape shape__06",
  },
  {
    imgSrc: "/gallery/my_fotos_07.jpg",
    alt: "me with my family",
    className: "shape shape__07",
  },
  {
    imgSrc: "/gallery/my_fotos_08.jpg",
    alt: "me with my daughter",
    className: "shape shape__08",
  },
  {
    imgSrc: "/gallery/my_fotos_09.jpg",
    alt: "me with some friends",
    className: "shape shape__09",
  },
  {
    imgSrc: "/gallery/my_fotos_10.jpg",
    alt: "me with my family",
    className: "shape shape__10",
  },
  {
    imgSrc: "/gallery/my_fotos_11.jpg",
    alt: "me with my family",
    className: "shape shape__11",
  },
  {
    imgSrc: "/gallery/my_fotos_12.jpg",
    alt: "me with my family",
    className: "shape shape__12",
  },
  {
    imgSrc: "/gallery/my_fotos_13.jpg",
    alt: "me with my nephew",
    className: "shape shape__13",
  },
  {
    imgSrc: "/gallery/my_fotos_14.jpg",
    alt: "me in the gym",
    className: "shape shape__14",
  },
  // {
  //   imgSrc: gal_15,
  //   alt: "paulo reizinho pictures",
  //   className: "shape shape__15",
  // },
  // {
  //   imgSrc: gal_16,
  //   alt: "paulo reizinho pictures",
  //   className: "shape shape__16",
  // },
];

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
