import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import {
  FaHouseUser,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Colors } from "../../assets/variables";

export default function Contacts() {
  let { t } = useTranslation();

  return (
    <SectionContainer>
      <h1>{t("common:info")}</h1>
      <IconContainer>
        <Icon href="https://www.linkedin.com/in/pauloreizinho/" target="_blank">
          <FaLinkedin alt="github paulo reizinho profile" />
        </Icon>
        <Icon href="https://www.instagram.com/l0rdr1chard/" target="_blank">
          <FaInstagram alt="instagram paulo reizinho profile" />
        </Icon>
        <Icon href="https://github.com/lordrichard6/" target="_blank">
          <FaGithub alt="github paulo reizinho profile" />
        </Icon>
      </IconContainer>

      <ContactWrapper>
        <BlueIcon>
          <FaHouseUser />
        </BlueIcon>
        <p>{t("common:adress")}</p>
      </ContactWrapper>
      <ContactWrapper>
        <BlueIcon>
          <HiMail />
        </BlueIcon>
        <p>paulolopesreizinho@gmail.com</p>
      </ContactWrapper>
      <ContactWrapper>
        <BlueIcon>
          <FaPhoneAlt />
        </BlueIcon>
        <p>+41 78 798 95 33</p>
      </ContactWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 390px) {
    order: 2;
    margin: 2rem 0;
  }
  h1 {
    font-weight: 400;
    text-decoration: underline;
    font-size: 1.8rem;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  color: ${Colors.white};
  margin: 0.5rem;
  font-size: 2rem;
  &:hover {
    color: ${Colors.primary};
    transition: 0.3s ease-in-out;
  }
`;

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  p {
    font-size: 1.2rem;
  }

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
  color: ${Colors.white};
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;
