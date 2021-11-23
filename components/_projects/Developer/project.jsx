import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Colors } from "../../../assets/variables";
import Button from "./button";

export default function Project({ src, alt, title, text, link, tech }) {
  return (
    <ProjectWrapper>
      <ImageWrapper>
        <Image src={src} objectFit="cover" objectPosition="center" alt={alt} />
      </ImageWrapper>
      <div className="overlay"></div>
      <div className="overlay2"></div>
      <div className="text">
        <h2>{title}</h2>
        <div className="icon">{tech}</div>
        {/* <p>{text}</p> */}
        <div className="link-wrap">
          <Link href={link}>
            <a target="_blank">
              <Button />
            </a>
          </Link>
        </div>
      </div>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

  .small-text {
    @media screen and (max-width: 764px) {
      font-size: 0.8rem;
      margin: 0;
    }
  }
  .small-title {
    @media screen and (max-width: 764px) {
      font-size: 1rem;
      margin: 2px;
      margin-bottom: 4px;
    }
  }
  .mobile-none {
    @media screen and (max-width: 764px) {
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
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    -moz-backdrop-filter: blur(10px);

    /* transform: skewX(-30deg); */
    transition: 0.5s;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    color: ${Colors.dark};
    box-sizing: border-box;
    padding: 25px;
    z-index: 100;
    text-shadow: 5px 5px 10px black;
  }
  h2 {
    position: relative;
    color: #eee;
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0;
    letter-spacing: 2px;
    opacity: 0;
    transition: 0.5s;
    transition-timing-function: linear;
    transform: translateY(-10px);

    @media screen and (max-width: 764px) {
      font-size: 1.2rem;
      /* letter-spacing: 10px; */
    }

    @media screen and (min-width: 2560px) {
      font-size: 3rem;
      letter-spacing: 10px;
    }
  }
  .icon {
    color: ${Colors.white};
    font-size: 3rem;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.5s;
    transition-timing-function: linear;
    margin: 0.5rem 0;

    @media screen and (max-width: 764px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 2560px) {
      font-size: 4rem;
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
      h2 {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 1.6s;
      }
      .icon {
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
