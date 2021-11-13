import styled from "styled-components";
import Image from "next/image";

import { BsArrowDownLeftCircleFill } from "react-icons/bs";
import project_portfolio from "../../../assets/images/projects/project_portfolio.jpg";
import project_leftBastards from "../../../assets/images/projects/project_leftBastards.jpg";
import project_patricia from "../../../assets/images/projects/project_patricia.jpg";
import { Variables } from "../../../assets/variables";

export default function Designer() {
  let data = [
    {
      id: 1,
      imgSrc: project_portfolio,
      alt: "the mockups of this website",
      title: "This website",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
    },
    {
      id: 2,
      imgSrc: project_leftBastards,
      alt: "the mockups of the left bastards website",
      title: "This website",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
    },
    {
      id: 3,
      imgSrc: project_patricia,
      alt: "the mockups of patricia website",
      title: "This website",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius",
    },
  ];

  return (
    <SectionContainer>
      <h1>Designer</h1>
      <ProjectsContainer>
        {data.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <ImageWrapper>
                <Image
                  src={item.imgSrc}
                  objectFit="cover"
                  objectPosition="center"
                  // layout="fill"
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
              </div>
            </ProjectWrapper>
          );
        })}
      </ProjectsContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Variables.primary};
  h1 {
    font-size: 4rem;
    font-weight: 400;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  column-count: 3;
  gap: 0;
`

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

    transform: skewX(-20deg);
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
