import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faLinkedin,
  faInstagram,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faDungeon,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../public/icon.png";
import { Variables } from "../../assets/variables";
import FormComponent from "./form";
// import { FormComponent } from './formJS'

export default function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <SectionContainer>
          <HeaderTitle>Thanks for visiting</HeaderTitle>
          <LogoContainer>
            <img src={logo} alt="logo" />
            <h2>Paulo Reizinho</h2>
          </LogoContainer>
          <SmallText>This website is powered by:</SmallText>
          <IconContainer>
            <Icon>
              <FontAwesomeIcon icon={faReact} />
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
              <FontAwesomeIcon icon={faLinkedin} />
            </Icon>
            <Icon
              href="https://www.instagram.com/l0rdr1chard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Icon>
            <Icon
              href="https://github.com/lordrichard6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </Icon>
          </IconContainer>
          <HorizontalContainer>
            <BlueIcon>
              <FontAwesomeIcon icon={faDungeon} />
            </BlueIcon>
            <SmallText>Currently living in Zurich</SmallText>
          </HorizontalContainer>
          <HorizontalContainer>
            <BlueIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </BlueIcon>
            <SmallText>paulolopesreizinho@gmail.com</SmallText>
          </HorizontalContainer>
          <HorizontalContainer>
            <BlueIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
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
  background-color: ${Variables.secondary};
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

  h2 {
    /* width: 33.333333%;
        font-size: 1.5rem;
        line-height: 1.625; */
  }
`;

const SmallText = styled.p``;

const Button = styled.button`
  background-color: ${Variables.primary};
    align-self: center;
    color: #eee;
    font-size: 1rem;
    border-radius: 0.375rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    border: 0;
`;

const IconContainer = styled.div`
  color: ${Variables.primary};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  display: block;
  width: 2.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const HorizontalContainer = styled.div`
  width: 100%;
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
`;

const BlueIcon = styled.span`
  background-color: ${Variables.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  border-radius: 9999px;
  color: #eee;
  padding: 0.5rem;
  margin-right: 0.5rem;
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
