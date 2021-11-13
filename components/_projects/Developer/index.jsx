import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import picture from "../../../assets/images/projects/sky_02.jpg";
import fastRent from "../../../assets/images/projects/dev/p10-min.jpg";
import lastPortfolio from "../../../assets/images/projects/dev/p09-min.jpg";
import skyTours from "../../../assets/images/projects/dev/p06-min.jpg";
import hulu from "../../../assets/images/projects/dev/p08-min.jpg";
import trainedMonkeys from "../../../assets/images/projects/dev/p05-min.jpg";
import paulsEngine from "../../../assets/images/projects/dev/p07-min.jpg";
import netflix from "../../../assets/images/projects/dev/p02-min.jpg";
import sphere from "../../../assets/images/projects/dev/p11-min.jpg";
import comicPortfolio from "../../../assets/images/projects/dev/p14-min.jpg";
import blueVariant from "../../../assets/images/projects/dev/latest_01.jpg";
import leftBastards from "../../../assets/images/projects/dev/latest_03.jpg";
import sardinha from "../../../assets/images/projects/dev/latest_02.jpg";

import { Variables } from "../../../assets/variables";

export default function Developer() {
  const data = {
    main: [
      {
        id: 1,
        image: sardinha,
        alt: "patricia project",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
    ],
    secondary: [
      {
        id: 1,
        image: leftBastards,
        alt: "left bastards",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 2,
        image: blueVariant,
        alt: "my portfolio",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
    ],
    other: [
      {
        id: 1,
        image: fastRent,
        alt: "car rental",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 2,
        image: lastPortfolio,
        alt: "my last portfolio",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 3,
        image: skyTours,
        alt: "world tours website",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 4,
        image: hulu,
        alt: "movie streaming platform hulu",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 5,
        image: trainedMonkeys,
        alt: "eshop for mtrained monkeys",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 6,
        image: comicPortfolio,
        alt: "portfolio design based on comics",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 7,
        image: sphere,
        alt: "three.js project",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
      {
        id: 8,
        image: paulsEngine,
        alt: "google api used",
        title: "Private Chauffeur",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
        link: "https://patricia-vila-nova.vercel.app/",
      },
    ],
  };

  return (
    <SectionContainer>
      <h1>Developer</h1>
      <MainProject>
        {data.main.map((item, index) => {
          return (
            <ProjectWrapper>
              <ImageWrapper>
                <Image
                  key={index}
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
                  <Link href={item.link}>
                    <BsArrowDownLeftCircleFill className="link" />
                  </Link>
                </div>
              </div>
            </ProjectWrapper>
          );
        })}
      </MainProject>
      <SecondaryProjects>
        {data.secondary.map((item, index) => {
          return (
            <ProjectWrapper>
              <ImageWrapper>
                <Image
                  key={index}
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
                  <Link href={item.link}>
                    <BsArrowDownLeftCircleFill className="link" />
                  </Link>
                </div>
              </div>
            </ProjectWrapper>
          );
        })}
      </SecondaryProjects>
      <OtherProjects>
        {data.other.map((item, index) => {
          return (
            <ProjectWrapper>
              <ImageWrapper>
                <Image
                  key={index}
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
                  <Link href={item.link}>
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
  color: ${Variables.white};
  h1 {
    font-size: 4rem;
    font-weight: 400;
  }
`;

const MainProject = styled.div`
  width: 100vw;
  max-height: 80vh;
  display: flex;
  justify-content: center;
`;

const SecondaryProjects = styled.div`
  width: 100%;
  max-height: 50vh;
  display: flex;
  flex-direction: row;
`;

const OtherProjects = styled.div`
  width: 100%;
  /* height: 60vh; */
  column-count: 4;
  gap: 0;
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
    filter: blur(5px);

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
  }
  p {
    color: ${Variables.white};
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
    color: ${Variables.white};
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
  width: 100%;
  height: 100%;
`;
