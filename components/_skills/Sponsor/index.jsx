import styled from "styled-components";
import Image from "next/image";

import Udemy from "../../../assets/images/skills/udemy.png";
import EDX from "../../../assets/images/skills/edx.png";
import Youtube from "../../../assets/images/skills/youtube.png";
import logo from "../../../public/logo_black.png";

export default function Sponsor() {
  return (
    <SectionContainer>
      <InnerContainer>
        <ImageWrapper
          href="https://www.udemy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Udemy} alt="" objectFit="cover" />
        </ImageWrapper>
        <ImageWrapper
          href="https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={EDX} alt="" objectFit="cover" />
        </ImageWrapper>
        <ImageWrapper
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Youtube} alt="" objectFit="cover" />
        </ImageWrapper>
        <ImageWrapper href="https://www.pauloreizinho.com/">
          <Image src={logo} alt="" objectFit="cover" />
        </ImageWrapper>
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
`;

const ImageWrapper = styled.a`
  width: 10rem;
  cursor: pointer;
`;
