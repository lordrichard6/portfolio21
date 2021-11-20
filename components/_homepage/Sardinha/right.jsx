import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaLaptop,
} from "react-icons/fa";
import sardinha from "../../../assets/images/homepage/sardinha.png";

export default function Right() {
  return (
    <RightContainer>
      <ImageContainer>
        <Link href="https://patricia-vila-nova.vercel.app/" target="_blank">
          <Image src={sardinha} alt="sardinha logo" />
        </Link>
      </ImageContainer>
      <SubTitle>Sardinha Drive</SubTitle>
      <Text>
        They provide driving services
        <br /> within Switzerland.
      </Text>
      <IconWrapper>
        <Link href="https://www.instagram.com/sardinhadrive/" target="_blank">
          <FaInstagram className="hover" />
        </Link>
        <Link href="https://www.facebook.com/sardinhadrive" target="_blank">
          <FaFacebookF className="hover" />
        </Link>
        <Link href="https://www.linkedin.com/company/sardinha-drive" target="_blank">
          <FaLinkedin className="hover" />
        </Link>
        <Link href="https://twitter.com/SardinhaDrive" target="_blank">
          <FaTwitter className="hover" />
        </Link>
        <Link href="https://patricia-vila-nova.vercel.app/" target="_blank">
          <FaLaptop className="hover" />
        </Link>
      </IconWrapper>
    </RightContainer>
  );
}

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 10rem;
  height: auto;
  margin: 0 4rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
    z-index: 20;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #eee;
  letter-spacing: 0.2em;
  z-index: 1;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #eee;
  letter-spacing: 1px;
  z-index: 1;
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div`
  width: 50%;
  font-size: 3rem;
  font-weight: 400;
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  .hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
      z-index: 20;
    }
  }
`;
