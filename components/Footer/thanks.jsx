import styled from "styled-components";
import Image from "next/image";

import { SiNextdotjs } from "react-icons/si";
import { Colors } from "../../assets/variables";
import logo from "../../public/logo_white.png";

export default function Thanks() {
  return (
    <SectionContainer>
      <h1>Thanks for visiting</h1>
      <LogoContainer>
        <Image src={logo} alt="paulo reizinho" height={100} width={100} />
      </LogoContainer>
      <IconContainer>
        <p>This website is powered by:</p>
        <Icon>
          <SiNextdotjs alt="nextjs logo"/>
        </Icon>
      </IconContainer>
      <Button>
        <a href="https://drive.google.com/file/d/14Ou5up4Gowv7XMNx6ct1oUE7-1m5DK2s/view?usp=sharing">
          Download my CV
        </a>
      </Button>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 390px) {
    order: 3;
    margin-bottom: 1rem;
  }
  h1 {
    font-weight: 400;
    text-decoration: underline;
    font-size: 1.8rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  /* color: ${Colors.primary}; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  font-size: 2rem;
`;

const Button = styled.button`
  background-color: ${Colors.primary};
  align-self: center;
  color: #eee;
  font-size: 1rem;
  border-radius: 0.375rem;
  padding: 0.5rem 0.4rem;
  border: 0;
`;
