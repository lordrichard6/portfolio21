import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import { Colors } from "../../assets/variables";

export default function SiteMap() {
  return (
    <SectionContainer>
      <h1>siteMap</h1>
      <LinkScroll to="top" smooth={true} duration={600} spy={true}>
        <h2>Go to Top</h2>
      </LinkScroll>
      <Link href="/">
        <h2>Home</h2>
      </Link>
      <Link href="/projects">
        <h2>Projects</h2>
      </Link>
      <Link href="/projects">
        <h2>Skills</h2>
      </Link>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 390px) {
    margin: 2rem 0;
  }
  h1 {
    font-weight: 400;
    text-decoration: underline;
    font-size: 1.8rem;
  }
  h2 {
    font-weight: 400;
    margin: 0.4rem 0;
    cursor: pointer;
    letter-spacing: 2px;
    &:hover {
      color: ${Colors.primary};
      transition: 0.3s ease-in-out;
    }
  }
`;
