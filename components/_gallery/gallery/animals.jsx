import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function GalleryAnimals({ image, className, alt }) {
  const bringUp = {
    visible: {
      opacity: 1,
      transition: { delay: 6, duration: 2.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
    <Container>
      <motion.figure
        className={className}
        variants={bringUp}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <Image className="img" src={image} alt={alt} objectFit="cover" />
      </motion.figure>
    </Container>
  );
}

const Container = styled.div`
  .img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;
