import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { bannerProjects } from "../../assets/data";
import { Colors } from "../../assets/variables";

export default function BannerProjects() {
  return (
    <SectionContainer>
      <Background
        src={bannerProjects.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="sky is not the limit"
      />
      <Link href="/projects">
        <div className="link">
          <h1>{bannerProjects.text}</h1>
          <Icon>{bannerProjects.icon}</Icon>
        </div>
      </Link>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  height: 40vh;
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
    justify-content: flex-end;
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
