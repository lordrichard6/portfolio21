import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { BsArrowDownLeftCircleFill } from "react-icons/bs";

import { projectsDev } from "../../../assets/data";
import { Colors } from "../../../assets/variables";

export default function Developer() {

  return (
    <SectionContainer>
      <h1>Developer</h1>
      {/* <MainProject>
        {data.main.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <ImageWrapper>
                <Image
                  src={item.image}
                  objectFit="cover"
                  objectPosition="bottom"
                  alt={item.alt}
                />
              </ImageWrapper>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="text">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className="link-wrap">
                  <h3>Go to website</h3>
                  <Link href={item.link}>
                    <BsArrowDownLeftCircleFill className="link" />
                  </Link>
                </div>
              </div>
            </ProjectWrapper>
          );
        })}
      </MainProject> */}
      <SecondaryProjects>
        {projectsDev.secondary.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <ImageWrapper>
                <Image
                  src={item.image}
                  objectFit="cover"
                  objectPosition="center"
                  alt={item.alt}
                />
              </ImageWrapper>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="text">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className="link-wrap">
                  <h3>Go to website</h3>
                  <Link href={item.link} target="_blank">
                    <BsArrowDownLeftCircleFill className="link" />
                  </Link>
                </div>
              </div>
            </ProjectWrapper>
          );
        })}
      </SecondaryProjects>
      <OtherProjects>
        {projectsDev.other.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <ImageWrapper>
                <Image
                  src={item.image}
                  objectFit="cover"
                  objectPosition="center"
                  alt={item.alt}
                />
              </ImageWrapper>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="text">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2 className="small-title">{item.title}</h2>
                <p className="small-text">{item.text}</p>
                <div className="link-wrap">
                  <h3 className="mobile-none">Go to website</h3>
                  <Link href={item.link} target="_blank">
                    <BsArrowDownLeftCircleFill className="link" />
                  </Link>
                </div>
              </div>
            </ProjectWrapper>
          );
        })}
      </OtherProjects>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
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

// const MainProject = styled.div`
//   width: 100vw;
//   height: 80vh;
//   display: flex;
//   justify-content: center;
// `;

const SecondaryProjects = styled.div`
  width: 100%;
  /* max-height: 50vh; */
  /* display: flex; */
  columns: 2;
  gap: 0;
  /* flex-direction: row; */

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;

const OtherProjects = styled.div`
  width: 100%;
  /* height: 60vh; */
  column-count: 4;
  gap: 0;

  @media screen and (max-width: 390px) {
    columns: 2;
  }
`;

const ProjectWrapper = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

  .small-text {
    @media screen and (max-width: 390px) {
      font-size: 0.8rem;
      margin: 0;
    }
  }
  .small-title {
    @media screen and (max-width: 390px) {
      font-size: 1rem;
      margin: 2px;
      margin-bottom: 4px;
    }
  }
  .mobile-none {
    @media screen and (max-width: 390px) {
      display: none;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-blend-mode: color-burn;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.5);
  }
  .overlay2 {
    position: absolute;
    top: 0;
    left: -150%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    /* filter: blur(5px); */

    transform: skewX(-30deg);
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
    padding: 25px;
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
    text-transform: uppercase;
    margin-bottom: 0;
    letter-spacing: 1px;
    opacity: 0;
    transition: 0.5s;
    transition-timing-function: linear;
    transform: translateY(-10px);

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

    @media screen and (min-width: 2560px) {
      font-size: 1.6rem;
      /* letter-spacing: 10px; */
    }
  }
  h3 {
    @media screen and (min-width: 2560px) {
      font-size: 1.8rem;
      /* letter-spacing: 10px; */
    }
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
      left: 0%;
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
  display: flex;
  width: 100%;
  height: 100%;
`;
