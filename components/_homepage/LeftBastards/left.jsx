import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import instagram from "../../../assets/images/homepage/left_insta.png";
import youtube from "../../../assets/images/homepage/left_yt.png";
import website from "../../../assets/images/homepage/left_web.png";

export default function Left() {
  return (
    <LeftContainer>
      <FirstImage>
        <Link href="https://www.instagram.com/left_bastards/" target="_blank">
          <Image src={instagram} alt="left bastards instagram" />
        </Link>
      </FirstImage>
      <SecondImage>
        <Link
          href="https://www.youtube.com/channel/UCFDqsXZSVve8LXMa5uevdyg"
          target="_blank"
        >
          <Image src={youtube} alt="left bastards youtube" />
        </Link>
      </SecondImage>
      <ThirdImage>
        <Link href="https://left-bastards.vercel.app/" target="_blank">
          <Image src={website} alt="left bastards website" />
        </Link>
      </ThirdImage>
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  margin: 4rem 0;
  /* height: auto; */

  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const FirstImage = styled.div`
  width: 10rem;
  height: auto;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
    z-index: 20;
  }
  @media screen and (min-width: 2024px) {
    width: 12rem;
  }
`;
const SecondImage = styled.div`
  position: absolute;
  top: -2rem;
  left: 8rem;
  width: 10rem;
  height: auto;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  /* z-index: 1; */

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
    z-index: 20;
  }

  @media screen and (max-width: 768px) {
    width: 6rem;
    left: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    left: 30%;
  }

  @media screen and (min-width: 2024px) {
    top: -4rem;
    left: 10rem;
    width: 12rem;
  }
`;
const ThirdImage = styled.div`
  width: 25rem;
  height: auto;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
    z-index: 20;
  }

  @media screen and (min-width: 2024px) {
    width: 28rem;
    margin-left: 6rem;
  }
`;
