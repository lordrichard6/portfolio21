import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Colors } from "../../assets/variables";

export default function Banner({ imgSrc, alt, text, icon }) {
  return (
    <SectionContainer>
      <Background
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={alt}
      />
      <Link href="/projects">
        <div className="link">
          <h1>{text}</h1>
          <Icon>{icon}</Icon>
        </div>
      </Link>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  height: 25rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  h1 {
    z-index: 1;
    font-weight: 400;
    font-size: 3rem;
    text-shadow: 0px 0px 6px #000000b1;

    @media screen and (max-width: 390px) {
      font-size: 2rem;
    }
  }
  .link {
    width: 80%;
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Background = styled(Image)`
  z-index: 0;
`;

const Icon = styled.span`
  padding-top: 1rem;
  margin-left: 1rem;
  font-size: 3rem;
  display: flex;
  align-self: center;
  text-shadow: 1px 2px 4px #00000081;

  @media screen and (max-width: 390px) {
    font-size: 2rem;
  }
`;
