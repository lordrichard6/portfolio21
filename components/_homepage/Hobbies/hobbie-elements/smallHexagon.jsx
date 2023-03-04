import styled from "styled-components";
import Image from "next/image";

export default function SmallHexagon({title, img, imgDesc}) {

  return (
      <Hobby className="hobby">
        <div className="word">
          <h1>{title}</h1>
          </div>
        <figure className="image">
          <Image src={img} responsive alt={imgDesc} />
        </figure>
      </Hobby>
  );
}

const Hobby = styled.div`
  /* position: absolute; */
  width: 200px;
  height: 200px;
  z-index: 100;
  cursor: pointer;
  background: #20303c;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms ease-in-out;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );

  &:hover + #text_01 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  &:hover + #text_02 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  &:hover + #text_03 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }
  &:hover + #text_04 {
    opacity: 1;
    filter: blur(0) brightness(1);
  }

  &:hover {
      .word {
        opacity: 0;
        filter: blur(10px);
      }
      .image {
        filter: sepia(0) blur(0px);
      }
  }

  @media screen and (max-width: 764px) {
    width: 140px;
    height: 140px;
  }
  .word {
    position: absolute;
    font-size: 2.5rem;
    font-weight: 600;
    z-index: 1;
    transition: all 500ms ease-in-out;

    @media screen and (max-width: 764px) {
      font-size: 1.5rem;
    }
  }

  .image {
    transition: all 500ms ease-in-out;
    filter: sepia(1) blur(20px);
    width: 100%;
  }

  /* &.hobby {
    left: 20%;
    top: 0;
    transform: translate(-20%, 0);
    @media screen and (max-width: 764px) {
      margin: 0;
      top: 54%;
      left: 15%;
      transform: translate(-15%, 0);
    }
  } */
`;