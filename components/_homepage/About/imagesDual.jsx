import React from "react";
import Image from "next/image";

export default function ImagesDualEffectComponent({ style, alt, src, alt2, src2 }) {
  return (
    <figure className={`relative ${style}`}>
      <Image className="object-cover object-center" fill src={src} alt={alt} />
      <Image className="object-cover object-center" fill src={src2} alt={alt2} />
    </figure>
  );
}