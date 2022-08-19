import styled from "styled-components";

import {
  FaHouseUser,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";
import { Colors } from "../../assets/variables";

export default function SocialLinksComponent() {

  return (
      <IconContainer>
        <Icon href="https://www.linkedin.com/in/pauloreizinho/" target="_blank">
          <FaLinkedin alt="github paulo reizinho profile" />
        </Icon>
        <Icon href="https://www.instagram.com/l0rdr1chard/" target="_blank">
          <FaInstagram alt="instagram paulo reizinho profile" />
        </Icon>
        <Icon href="https://github.com/paulo_reizinho/" target="_blank">
          <FaGithub alt="github paulo reizinho profile" />
        </Icon>
        <Icon href="https://discord.gg/2UPrkCUU" target="_blank">
          <FaDiscord alt="discord paulo reizinho" />
        </Icon>
        <Icon href="https://wa.link/sru6m7" target="_blank">
          <FaWhatsapp alt="whatsapp paulo reizinho" />
        </Icon>
      </IconContainer>
  );
}

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  color: ${(props) => props.theme.color};
  margin: 0.5rem;
  font-size: 2.5rem;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${Colors.primary};
    transform: scale(1.05) translateY(-0.5rem);
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`;