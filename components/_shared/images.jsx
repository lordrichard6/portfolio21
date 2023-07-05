import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function ImagesComponent({ style, alt, src, id }) {
  return (
    <ImageContainer id={id} className={`${style}`}>
      <Image className="image object-cover object-center drop-shadow-xl overflow-visible" fill src={src} alt={alt} />
    </ImageContainer>
  );
}

const ImageContainer = styled.figure`
/* NEXTJS image sizing fix */
width: 100%;

> div {
  position: unset !important;
}

.image {
  object-fit: cover;
  width: 100% !important;
  position: relative !important;
  /* height: unset !important; */
}
`