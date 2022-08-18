import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Colors } from "../../assets/variables";
import logo from "../../public/logo_clean.png";

export default function Logo() {
  return (
    <LogoContainer>
      <LogoWrapper>
        <Link href="/" passHref>
          <Image src={logo} alt="paulo lopes reizinho" />
        </Link>
      </LogoWrapper>
      <h1 className="fullname">Paulo Lopes Reizinho</h1>
      <h1 className="partialname">Paulo Lopes R</h1>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${Colors.white};
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 0;

    &.fullname{
      @media screen and (max-width: 1200px) {
        display: none;
      }
      @media screen and (max-width: 1024px) {
        display: block;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &.partialname {
      @media screen and (min-width: 1200px) {
        display: none;
      }
      @media screen and (max-width: 1200px) {
        display: block;
      }
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  }
`;

const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
