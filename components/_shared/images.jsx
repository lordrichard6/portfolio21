import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function ImagesComponent({ style, alt, src, id, priority }) {
  return (
    <ImageContainer id={id} className={`relative ${style}`}>
      <Image className="image object-cover object-center" fill sizes="(max-width: 768px) 100vw, 700px)" src={src} alt={alt} priority={priority} />
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
  overflow: visible;
  /* height: unset !important; */
}
`