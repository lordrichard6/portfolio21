import styled from "styled-components";
// import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { bringUp } from "../../../../utilities/framer-animations";


export default function CenterHexagonComponent() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
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
      </div>
      <div className="shooting-star"></div>
    </HexagonBig>
  );
}

const HexagonBig = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-30%)!important;
  height: 700px;
  width: 800px;
  z-index: 1;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: #20303c;
  background: linear-gradient(to top, #283e51, #0a2342);
  overflow: hidden;

  @media screen and (max-width: 764px) {
    transform: translate(-50%,25%)!important;
    height: 300px;
    width: 350px;
  }
`;
