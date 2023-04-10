import React from "react";
import Image from "next/image";

export default function ImagesComponent({ style, alt, src }) {
  return (
    <figure className={`relative ${style}`}>
      <Image className="object-cover object-center" fill src={src} alt={alt} />
    </figure>
  );
}
