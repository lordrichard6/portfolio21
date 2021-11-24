import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaLaptop,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Colors } from "../../../assets/variables";
import logo from "../../../assets/images/homepage/logo_gold.png";

export default function Right() {
  const data = [
    {
      href: "https://www.instagram.com/left_bastards/",
      icon: <FaInstagram className="hover" alt="instagram left bastards" />,
    },
    {
      href: "https://www.facebook.com/groups/728183861271658/?ref=share",
      icon: <FaFacebookF className="hover" alt="facebook left bastards" />,
    },
    {
      href: "https://www.youtube.com/channel/UCFDqsXZSVve8LXMa5uevdyg",
      icon: <FaYoutubeSquare className="hover" alt="youtube left bastards" />,
    },
    {
      href: "https://left-bastards.vercel.app/",
      icon: <FaLaptop className="hover" alt="official website left bastards" />,
    },
  ];

  return (
    <RightContainer>
      <ImageContainer>
        <Link href="https://patricia-vila-nova.vercel.app/" target="_blank">
          <Image src={logo} alt="sardinha logo" />
        </Link>
      </ImageContainer>
      <SubTitle>Left Bastards</SubTitle>
      <Text>
        A group o people entusiastic about cars,
        <br /> if you like road engines,
        <br /> check them out
      </Text>
      <IconWrapper>
        {data.map((item, i) => {
          return (
            <Link key={i} href={item.href} target="_blank" passHref>
              {item.icon}
            </Link>
          );
        })}
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
  margin: 4rem 0;

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
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    z-index: 20;
  }

  @media screen and (max-width: 768px) {
    order: 2;
    width: 60%;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #caa82f;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  z-index: 1;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    order: 1;
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

  @media screen and (max-width: 768px) {
    order: 3;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 40%;
  font-size: 3rem;
  font-weight: 400;
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    order: 4;
    width: 80%;
  }

  .hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1) translateY(-0.5rem);
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
      color: #caa82f;
      z-index: 20;
    }
  }
`;
