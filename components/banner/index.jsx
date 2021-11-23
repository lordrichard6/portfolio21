import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Colors } from "../../assets/variables";
import Button from "./button";

export default function Banner() {
  return (
    <SectionContainer>
      <InnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <Link href="/projects">
            <div className="link">
              <Button text="Projects page" />
            </div>
          </Link>
          <Link href="/skills">
            <div className="link">
              <Button text="Skills page" />
            </div>
          </Link>
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  height: 40rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  background: url('/banner_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h1 {
    z-index: 1;
    font-weight: 400;
    font-size: 3rem;
    text-shadow: 0px 0px 6px #000000b1;

    @media screen and (max-width: 390px) {
      font-size: 2rem;
    }
  }
  .link {
    width: 100%;
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LeftContainer = styled.div``;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
