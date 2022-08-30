import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaLaptop,
} from "react-icons/fa";
import sardinha from "../../../assets/images/homepage/sardinha.png";

export default function Right() {
  let { t } = useTranslation();

  const data = [
    {
      href: "https://www.instagram.com/sardinhadrive/",
      icon: <FaInstagram className="hover" alt="instagram sardinha drive" />,
    },
    {
      href: "https://www.facebook.com/sardinhadrive",
      icon: <FaFacebookF className="hover" alt="facebook sardinha drive" />,
    },
    {
      href: "https://www.linkedin.com/company/sardinha-drive",
      icon: <FaLinkedin className="hover" alt="linkedin sardinha drive" />,
    },
    {
      href: "https://twitter.com/SardinhaDrive",
      icon: <FaTwitter className="hover" alt="twitter sardinha drive" />,
    },
    {
      href: "https://patricia-vila-nova.vercel.app/",
      icon: (
        <FaLaptop className="hover" alt="official website sardinha drive" />
      ),
    },
  ];

  return (
    <RightContainer>
      <ImageContainer>
        <Link
          href="https://patricia-vila-nova.vercel.app/"
          target="_blank"
          passHref
        >
          <Image src={sardinha} alt="sardinha logo" />
        </Link>
      </ImageContainer>
      <SubTitle>Sardinha Drive</SubTitle>
      <Text>{t("home:sardinha_text")}</Text>
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
  width: 100%;
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

  @media screen and (max-width: 764px) {
    order: 2;
    width: 60%;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #eee;
  letter-spacing: 0.2em;
  z-index: 1;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 992px) {
    order: 1;
    text-align: center;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const Text = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 400;
  color: #eee;
  letter-spacing: 1px;
  z-index: 1;
  text-align: center;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 992px) {
    order: 3;
    text-align: center;
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  width: 60%;
  font-size: 3rem;
  font-weight: 400;
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin: 2rem 0;

  @media screen and (max-width: 764px) {
    order: 4;
    width: 80%;
  }

  .hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1) translateY(-0.5rem);
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
      color: #9f60cc;
      z-index: 20;
    }
  }
`;
