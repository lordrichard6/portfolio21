import React from "react";
import styled from "styled-components";

function StringMapper({ string }) {
  const chars = string.split("");

  const charComponents = chars.map((char, index) => {
    return (
      <div key={index} className="letter-wrapper text-4xl md:text-7xl lg:text-8xl">
        <div id="L" className="letter">
          {char}
        </div>
        <div className="shadowed">{char}</div>
      </div>
    );
  });

  return <>{charComponents}</>;
}

export default function TitleReflexion({ word }) {
  return (
    <Container className="w-full mt-8 mb-12 mx-0">
        <div className="text mx-8 2xl:mx-auto max-w-[800px]">
          <StringMapper string={word} />
        </div>
    </Container>
  );
}

const Container = styled.div`
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    z-index: 100;

    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 75%,
      rgba(255, 255, 255, 0.9) 80%,
      rgba(255, 255, 255, 0.25) 95%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .text {
    font-family: "Yanone Kaffeesatz";
    font-weight: 300;
    font-size: 100px;
    display: flex;
    justify-content: space-around;
    /* position: absolute; */
    bottom: 20vh;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    user-select: none;

    .letter-wrapper {
      padding-top: 20px;
      .letter {
        transition: ease-out 1s;
        transform: translateY(40%);
      }
      .shadowed {
        transform: scale(1, -1);
        color: #999;
        opacity: 0.1;
        filter: blur(2px);
        transition: ease-in 5s, ease-out 5s;
      }
      &:hover {
        .letter {
          opacity: 0;
          transform: translateY(-200%);
        }
        .shadowed {
          opacity: 0;
          transform: translateY(200%);
        }
      }
    }
  }
`;
