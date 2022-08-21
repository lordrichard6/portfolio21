import styled from "styled-components";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Earth from '../../../assets/images/homepage/earth.svg'

export default function HexagonComponent() {
  const bringUp = {
    visible: {
      opacity: 1,
      y: 0,
      x: "-50%",
      transition: { duration: 2.5, type: 'spring', bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 100,
      x: "-50%",
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4
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
    <HexagonBig 
        as={motion.div}
        ref={ref}
        variants={bringUp}
        initial="hidden"
        animate={controls}
    >
      <div className="hexagon-container">
        <div className="sub-container">
          <div className="sky">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="comet"></div>
          </div>
        </div>
        <div className="moon">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="tentacle"></div>
        <div className="flag">
          <div className="small-tentacle"></div>
        </div>

        <div className="ship">
          <div className="ship-rotate">
            <div className="pod"></div>
            <div className="fuselage"></div>
          </div>
        </div>
      </div>

      <div className="shooting-star"></div>

      <div className="windmill">
        <div className="light"></div>
        <div className="blades"></div>
      </div>

      <div className="earth">
        <Image src={Earth} layout="responsive" alt="" />
      </div>
      
    </HexagonBig>
  );
}

const HexagonBig = styled.div`
  position: absolute;
  /* left: -200px; */
  left: 50%;
  transform: translateX(-50%);
  top: 420px;
  height: 700px;
  width: 800px;
  z-index: 100;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: #20303c;
  background: linear-gradient(to top, #283e51, #0a2342);
  overflow: hidden;

  @media screen and (max-width: 764px) {
    top: 230px;
    left: 50%;
    transform: translateX(-50%);
    height: 300px;
    width: 350px;
  }

  .earth {
    position: absolute;
    top: 500px;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 764px) {
      top: 210px;
    }
  }
`;
