import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import Animation from "./animation";
import Day from "../../../assets/images/projects/day.jpg";
import MoonAndSun from "./sky";
import { StarsComponent } from "../../_homepage/Header/stars";

export default function ProjectsHeader() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionContainer id="top">
      {/* <div className="day">
        <Image src={Day} alt="day" cover fill />
      </div> */}
      <div
        className="background"
        style={{ transform: `translateY(${offsetY * 0.6}px)` }}
      ></div>
      {/* <MoonAndSun /> */}
      <Animation />
      {/* <div
        className="night"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      ></div> */}
      <StarsComponent />
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  background: linear-gradient(to top, #283e51, #0a2342);

  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .night {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to top, #283e51, #0a2342);
    transition: 2s all ease;
    animation: bringNight 4.2s linear;
  }

  @keyframes bringNight {
    0% {
      opacity: 0;
    }
    85% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
