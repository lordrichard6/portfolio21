import styled from "styled-components";
import Image from "next/image";
import { FaReact, FaHouseUser, FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import logo from "../../public/logo_blue.png";
import { Colors } from "../../assets/variables";
import FormComponent from "./form";
// import { FormComponent } from './formJS'

export default function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <SectionContainer>
          <HeaderTitle>Thanks for visiting</HeaderTitle>
          <LogoContainer>
            <Image src={logo} alt="paulo reizinho" height={100} width={100}/>
            <h2>Paulo Lopes</h2>
          </LogoContainer>
          <SmallText>This website is powered by:</SmallText>
          <IconContainer>
            <Icon>
              <FaReact />
            </Icon>
          </IconContainer>
          <Button>
            <a href="https://drive.google.com/file/d/14Ou5up4Gowv7XMNx6ct1oUE7-1m5DK2s/view?usp=sharing">
              Download my CV
            </a>
          </Button>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>contactMe</HeaderTitle>
          <FormComponent />
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>myInfo</HeaderTitle>
          <IconContainer>
            <Icon
              href="https://www.linkedin.com/in/pauloreizinho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Icon>
            <Icon
              href="https://www.instagram.com/l0rdr1chard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Icon>
            <Icon
              href="https://github.com/lordrichard6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Icon>
          </IconContainer>
          <HorizontalContainer>
            <BlueIcon>
              <FaHouseUser />
            </BlueIcon>
            <SmallText>Currently living in Zurich</SmallText>
          </HorizontalContainer>
          <HorizontalContainer>
            <BlueIcon>
              <HiMail />
            </BlueIcon>
            <SmallText>paulolopesreizinho@gmail.com</SmallText>
          </HorizontalContainer>
          <HorizontalContainer>
            <BlueIcon>
              <FaPhoneAlt />
            </BlueIcon>
            <SmallText>+41 78 798 95 33</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho. All
          rights reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${Colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionContainer = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
  img {
    width: 2rem;
  }
`;

const SmallText = styled.p`
  justify-items: center;
`;

const Button = styled.button`
  background-color: ${Colors.primary};
    align-self: center;
    color: #eee;
    font-size: 1rem;
    border-radius: 0.375rem;
    padding:0.5rem 0.4rem;
    border: 0;
`;

const IconContainer = styled.div`
  color: ${Colors.primary};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0.5rem;
  font-size: 2rem;
`;

const HorizontalContainer = styled.div`
  width: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 390px) {
      width: 80%;
    }
`;

const BlueIcon = styled.span`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  color: #eee;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;

const BottomContainer = styled.div`
  /* max-width: 42rem;
    width: 100%;
    display: flex;
    justify-content: start; */
`;

const CopyrightText = styled.small`
  /* font-size: 12px;
    color: #25282a; */
`;
