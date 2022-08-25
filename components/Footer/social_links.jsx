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
        <Icon href="https://www.instagram.com/paulo_reizinho/" target="_blank">
          <FaInstagram alt="instagram paulo reizinho profile" />
        </Icon>
        <Icon href="https://https://github.com/lordrichard6" target="_blank">
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
  margin: 0.6rem;
  font-size: 2.5rem;
  transition: 0.5s ease-in-out;

  &:hover {
    color: ${Colors.primary};
    animation: wobble-hor-bottom 0.8s both;
  }

  @keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}

`;