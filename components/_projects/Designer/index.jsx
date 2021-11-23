import styled from "styled-components";
import Image from "next/image";

import { projectsDesign } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
import Project from './project'

export default function Designer() {
  return (
    <SectionContainer>
      <h1>Designer</h1>
      <ProjectsContainer>
        {projectsDesign.map((item, index) => {
          return (
            <Project
              index={index}
              src={item.imgSrc}
              alt={item.alt}
              title={item.title}
              tech={item.icon}
            />
          );
        })}
      </ProjectsContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  h1 {
    font-size: 4rem;
    font-weight: 400;
    text-shadow: 1px 2px 4px #00000081;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  column-count: 3;
  gap: 0;

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProjectWrapper = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-blend-mode: color-burn;
    /* background-color: rgba(0, 0, 0, 0.1); */
    /* box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.5); */
  }
  .overlay2 {
    position: absolute;
    top: 35%;
    left: -150%;
    width: 90%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.7);
    /* filter: blur(5px); */

    transform: skewX(-5deg);
    transition: 0.5s;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    color: black;
    box-sizing: border-box;
    padding: 10px;
    z-index: 100;
    text-shadow: 5px 5px 10px black;

    span:nth-child(1) {
      position: absolute;
      top: 0;
      left: -20px;
      width: 0;
      height: 1px;
      background-color: white;
      transform-origin: left;
      transition: 0.7s ease-in-out;
      transition-delay: 0.7s;
    }
    span:nth-child(2) {
      position: absolute;
      top: -20px;
      left: 0;
      width: 1px;
      height: 0;
      background-color: white;
      transform-origin: top;
      transition: 0.7s ease-in-out;
      transition-delay: 0.1.1s;
    }
    span:nth-child(3) {
      position: absolute;
      bottom: 0;
      right: -20px;
      width: 0;
      height: 1px;
      background-color: white;
      transform-origin: right;
      transition: 0.7s ease-in-out;
      transition-delay: 0.9s;
    }
    span:nth-child(4) {
      position: absolute;
      bottom: -20px;
      right: 0;
      width: 1px;
      height: 0;
      background-color: white;
      transform-origin: bottom;
      transition: 0.7s ease-in-out;
      transition-delay: 0.1.3s;
    }
  }
  h2 {
    position: relative;
    color: #eee;
    font-size: 1.5rem;
    /* text-transform: uppercase; */
    margin-bottom: 1rem;
    letter-spacing: 1px;
    opacity: 0;
    transition: 0.5s;
    transition-timing-function: linear;
    transform: translateY(-0px);

    @media screen and (min-width: 2560px) {
      font-size: 3rem;
      letter-spacing: 10px;
    }
  }
  p {
    color: ${Colors.white};
    line-height: 1.2;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.5s;
    transition-timing-function: linear;
  }
  .link-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${Colors.white};
    line-height: 1.2;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.5s;
    transition-timing-function: linear;
    .link {
      cursor: pointer;
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }
  }
  &:hover {
    .overlay2 {
      left: 5%;
      /* filter: blur(12px); */
    }
    .text {
      span:nth-child(1),
      span:nth-child(3) {
        width: 115%;
      }
      span:nth-child(2),
      span:nth-child(4) {
        width: 120%;
      }
      h2 {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 1.6s;
      }
      p {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 1.7s;
      }
      .link-wrap {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 1.9s;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
