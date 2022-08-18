import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import linkedin from "../../../assets/images/homepage/sardinha_linkedin.png";
import facebook from "../../../assets/images/homepage/sardinha_face.png";
import website from "../../../assets/images/homepage/sardinha_web.png";

export default function Left() {
  return (
    <LeftContainer>
      <FirstImage>
        <Link
          href="https://www.linkedin.com/company/sardinha-drive"
          target="_blank"
          passHref
        >
          <Image src={linkedin} alt="sardinha linkedin" />
        </Link>
      </FirstImage>
      <SecondImage>
        <Link
          href="https://www.linkedin.com/company/sardinha-drive"
          target="_blank"
          passHref
        >
          <Image src={facebook} alt="sardinha facebook" />
        </Link>
      </SecondImage>
      <ThirdImage>
        <Link
          href="https://www.linkedin.com/company/sardinha-drive"
          target="_blank"
          passHref
        >
          <Image src={website} alt="sardinha website" />
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
  &:hover {
  }

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
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
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
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
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
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    z-index: 20;
  }

  @media screen and (min-width: 2024px) {
    width: 28rem;
    margin-left: 6rem;
  }
`;
