import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { ImCross } from "react-icons/im";

export default function Modal({ clickedImg, setClickedImg }) {
  const handleClick = () => {
    setClickedImg(null);
  };

  return (
    <Container>
      <div className="picture-wrapper">
        <div className="close">
          <ImCross style={{ cursor: "pointer" }} onClick={handleClick} />
        </div>
        <div className="image-container">
          <Image
            src={clickedImg}
            alt=""
            objectFit="cover"
            layout="responsive"
            quality="100"
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #20303ca7;
  z-index: 400;

  .picture-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 20%);
    width: 60%;
    height: auto;
    max-height: 15%;
    @media screen and (max-width: 992px) {
      width: 80%;
    }
    @media screen and (max-width: 576px) {
      width: 90%;
	  top: 10%;
    }
  }
  .close {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;
	z-index: 1000;
  }
  .image-container {
    border-radius: 16px;
    overflow: hidden;
  }
`;
