import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { bannerSkills } from "../../assets/data";
import { Colors } from "../../assets/variables";

export default function BannerProjects() {
  return (
    <SectionContainer>
      <Background
        src={bannerSkills.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="sky is not the limit"
      />
      <Link href="/skills">
        <div className="link">
          <h1>{bannerSkills.text}</h1>
          <Icon>{bannerSkills.icon}</Icon>
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
    text-shadow: 1px 2px 4px #00000081;
    
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