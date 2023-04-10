import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function PicturesComponent({ className, imgSrc, alt, onClick }) {

  const bringUp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 400,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <>
      <motion.figure
        ref={ref}
        className={className}
        variants={bringUp}
        initial="hidden"
        animate={controls}
      >
        <Image
          src={imgSrc}
          alt={alt}
          objectFit="cover"
          layout="fill"
          onClick={onClick}
        />
      </motion.figure>
    </>
  );
}
