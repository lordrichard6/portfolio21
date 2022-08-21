import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";

import Modal from './modal'
import { gallery, animals } from "../../../assets/data/gallery";
import GalleryAnimals from './animals'
import PicturesComponent from './pictures'


export default function GalleryItems() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);


  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imgSrc);
  }

  const bringUp = {
    visible: {
      y: 0,
      transition: { duration: 3.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      y: 400,
    },
  };

  const controls = useAnimation();

  return (
    <GalleyWrapper>
      <div className="wrapper">
        <div className="animal-wrapper">
          {animals.map((item, i) => {
            return (
              <GalleryAnimals 
                key={i}
                image={item.imgSrc}
                alt={item.alt}
                className={item.className}
              />
            )
          })}
        </div>
        {gallery.map((item, i) => {
          return (
            <PicturesComponent 
              key={i} 
              className={item.className}
              imgSrc={item.imgSrc}
              alt={item.alt}
              onClick={() => handelClick(item , i)}
            />
          );
        })}
        {clickedImg && (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg}/>
        )}
      </div>
    </GalleyWrapper>
  );
}

const GalleyWrapper = styled.div`
  position: relative;
  height: 1600px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  /* margin-bottom: 150px; */
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    height: 1700px;
  }
  @media screen and (max-width: 992px) {
    height: 1980px;
  }
  @media screen and (max-width: 576px) {
    height: 1600px;
    padding-top: 0;
  }

  .wrapper {
    position: relative;
    margin-top: 200px;
    width: 1450px;
    height: auto;
    @media screen and (max-width: 1600px) {
      width: 1050px;
    }
    @media screen and (max-width: 1200px) {
      width: 855px;
    }
    @media screen and (max-width: 992px) {
      width: 650px;
    }
    @media screen and (max-width: 576px) {
      width: 470px;
      left: -15%;
    }
  }

  .animal-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .shape {
    position: absolute;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background: #20303c;
    display: block;
    height: 220px;
    width: 250px;
    box-shadow: inset 0px 0px 190px rgb(0 0 0 / 90%);

    @media screen and (max-width: 576px) {
      height: 160px;
      width: 200px;
    }
    img {
      object-position: center;
      object-fit: cover;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transform: scale(1.5);
      opacity: 0.4;
      transition: all 0.5s ease-in-out;
      &:hover {
        box-shadow: inset 0px 0px 0px rgb(0 0 0 / 90%);
        background-size: cover;
        transform: scale(1);
        opacity: 1;
      }
    }
    &__01 {
      left: 0;
      top: 120px;
      @media screen and (max-width: 576px) {
        left: 0;
      }
    }
    &__02 {
      left: 200px;
      top: 0;
      @media screen and (max-width: 576px) {
        left: 150px;
        top: 40px;
      }
    }
    &__03 {
      left: 200px;
      top: 240px;
      @media screen and (max-width: 576px) {
        left: 300px;
        top: 120px;
      }
    }
    &__04 {
      left: 400px;
      top: 120px;
      @media screen and (max-width: 576px) {
        left: 150px;
        top: 200px;
      }
    }
    &__05 {
      left: 400px;
      top: 360px;
      @media screen and (max-width: 576px) {
        left: 0;
        top: 280px;
      }
    }
    &__06 {
      left: 600px;
      top: 240px;
      @media screen and (max-width: 992px) {
        left: 0;
        top: 1320px;
      }
      @media screen and (max-width: 576px) {
        top: 280px;
        left: 300px;
      }
    }
    &__07 {
      left: 600px;
      top: 480px;
      @media screen and (max-width: 1200px) {
        top: 480px;
        left: 200px;
      }
      @media screen and (max-width: 576px) {
        top: 440px;
        left: 300px;
      }
    }
    &__08 {
      left: 800px;
      top: 360px;
      @media screen and (max-width: 1200px) {
        top: 600px;
        left: 0;
      }
      @media screen and (max-width: 576px) {
        left: 0;
        top: 440px;
      }
    }
    &__09 {
      left: 800px;
      top: 600px;
      @media screen and (max-width: 1200px) {
        top: 840px;
        left: 0;
      }
      @media screen and (max-width: 576px) {
        left: 150px;
        top: 520px;
      }
    }
    &__10 {
      left: 600px;
      top: 720px;
      @media screen and (max-width: 992px) {
        top: 840px;
        left: 400px;
      }
      @media screen and (max-width: 576px) {
        top: 600px;
        left: 300px;
      }
    }
    &__11 {
      left: 800px;
      top: 840px;
      @media screen and (max-width: 1200px) {
        left: 400px;
        top: 1080px;
      }
      @media screen and (max-width: 576px) {
        left: 150px;
        top: 680px;
      }
    }
    &__12 {
      left: 600px;
      top: 960px;
      @media screen and (max-width: 992px) {
        top: 1080px;
        left: 0;
      }
      @media screen and (max-width: 576px) {
        left: 0;
        top: 760px;
      }
    }
    &__13 {
      left: 1000px;
      top: 960px;
      @media screen and (max-width: 1600px) {
        left: 200px;
        top: 960px;
      }
      @media screen and (max-width: 576px) {
        left: 0;
        top: 1080px;
      }
    }
    &__14 {
      left: 1000px;
      top: 720px;
      @media screen and (max-width: 1600px) {
        left: 200px;
        top: 720px;
      }
      @media screen and (max-width: 576px) {
        left: 300px;
        top: 760px;
      }
    }
    &__15 {
      left: 1200px;
      top: 840px;
      @media screen and (max-width: 1600px) {
        left: 400px;
        top: 840px;
      }
      @media screen and (max-width: 992px) {
        left: 400px;
        top: 1320px;
      }
      @media screen and (max-width: 576px) {
        left: 0;
        top: 920px;
      }
    }
    &__16 {
      left: 1200px;
      top: 600px;
      @media screen and (max-width: 1600px) {
        left: 400px;
        top: 600px;
      }
      @media screen and (max-width: 992px) {
        left: 200px;
        top: 1200px;
      }
      @media screen and (max-width: 576px) {
        left: 150px;
        top: 1000px;
      }
    }
  }
`;