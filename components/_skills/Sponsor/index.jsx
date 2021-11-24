import styled from "styled-components";
import Image from "next/image";

import Udemy from "../../../assets/images/skills/udemy.png";
import EDX from "../../../assets/images/skills/edx.png";
import Youtube from "../../../assets/images/skills/youtube.png";
import logo from "../../../public/logo_black.png";

export default function Sponsor() {
  const data = [
    {
      id: 1,
      img: Udemy,
      alt: "udemy",
      link: "https://www.udemy.com/",
    },
    {
      id: 2,
      img: EDX,
      alt: "edx",
      link: "https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0",
    },
    {
      id: 3,
      img: Youtube,
      alt: "youtube",
      link: "https://www.youtube.com/",
    },
    {
      id: 4,
      img: logo,
      alt: "paulo lopes reizinho",
      link: "https://www.pauloreizinho.com/",
    },
  ];
  return (
    <SectionContainer>
      <InnerContainer>
        {data.map((item, i) => {
          return (
            <ImageWrapper
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={item.img} alt={item.alt} objectFit="cover" />
            </ImageWrapper>
          );
        })}
      </InnerContainer>
    </SectionContainer>
  );
}
const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.a`
  width: 10rem;
  cursor: pointer;
  margin: 2rem 0;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1) translateY(-0.5rem);
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    z-index: 20;
  }
`;
