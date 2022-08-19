import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import header from "../../../assets/images/gallery/gallery.jpg";
import Sand from "../../../assets/images/gallery/gallery_sand.png";

export default function BackgroundComponent() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <div className="gradient"></div>
      <div className="sky" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        <Image src={header} alt="" objectFit="cover" layout="fill" />
      </div>
      <div className="sand">
        <Image src={Sand} alt="" objectFit="cover" layout="fill" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      #5c4963 0%,
      rgba(233, 162, 129, 0.2) 38.54%,
      rgba(187, 122, 121, 0) 100%
    ) !important;
    z-index: 10;
  }
  .sky {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
  }
  .sand {
    z-index: 5;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
  }
`;
