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
        <Icon className="z-10" href="https://www.linkedin.com/in/pauloreizinho/" target="_blank">
          <FaLinkedin alt="github paulo reizinho profile" />
        </Icon>
        <Icon className="z-10" href="https://www.instagram.com/paulo_reizinho/" target="_blank">
          <FaInstagram alt="instagram paulo reizinho profile" />
        </Icon>
        <Icon className="z-10" href="https://github.com/lordrichard6" target="_blank">
          <FaGithub alt="github paulo reizinho profile" />
        </Icon>
        <Icon className="z-10" href="https://discord.gg/3seHDYvu" target="_blank">
          <FaDiscord alt="discord paulo reizinho" />
        </Icon>
        <Icon className="z-10" href="https://wa.link/sru6m7" target="_blank">
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
  /* color: ${(props) => props.theme.color}; */
  color: #fff;
  margin: 0.6rem;
  font-size: 2.5rem;
  transition: 0.5s ease-in-out;

  &:hover {
    color: ${Colors.primary};
    animation: vibrate-1 0.3s linear infinite both;
  }

  @keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

`;