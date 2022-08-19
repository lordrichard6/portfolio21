import styled from "styled-components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import {
  FaHouseUser,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";
// import { HiMail } from "react-icons/hi";
import { Colors } from "../../assets/variables";
// import QRcode from '../../assets/images/qr.png';
import SocialLinksComponent from './social_links'

export default function Contacts() {
  let { t } = useTranslation();

  return (
    <SectionContainer>
      <h1>{t("common:info")}</h1>
      <SocialLinksComponent />

      <ContactWrapper>
        <ButtonV2>
          <div className="button _1">
            <a href="https://drive.google.com/file/d/19uYAAnvRa-fi_LpG1GhA9HQVGeBQAIuF/view?usp=sharing">{t("common:downloadCV")}</a>
            <div className="back"></div>
          </div>
        </ButtonV2>
        {/* very cool button but brings performance issues */}
        {/* <Button>
        <a href="https://drive.google.com/file/d/19uYAAnvRa-fi_LpG1GhA9HQVGeBQAIuF/view?usp=sharing">
          {t("common:downloadCV")}
        </a>
      </Button> */}
        {/* <ImageWrapper>
        <Image src={QRcode} alt="paulo reizinho qr" />
        </ImageWrapper> */}
        {/* <BlueIcon>
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
        <p>+41 78 798 95 33</p> */}
      </ContactWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 764px) {
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
  font-size: 2.5rem;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${Colors.primary};
    transform: scale(1.05) translateY(-0.5rem);
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  }
`;

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 390px) {
    width: 80%;
  }
`;

const ButtonV2 = styled.div`
  /* https://freefrontend.com/css-buttons/ */
  /* https://codepen.io/dev_loop/pen/agqYaN */
  /* width: calc(4 * 200px);
  height: calc(4 * 100px); */
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    position: relative;
    width: calc(0.8 * 200px);
    height: calc(0.7 * 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    margin: 0 0.8rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0, 0.22, 0.3, 1);
    border-radius: 16px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }

    a {
      color: #fff;
      font-size: 1rem;
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    &._1 {
      background: #2980b9;
    }
    &._2 {
      background: #8e44ad;
    }
    &._3 {
      background: #16a085;
    }
    &._4 {
      background: #e74c3c;
    }

    .back {
      position: absolute;
      width: 0;
      height: 0;
      filter: url(#filter);
      border-radius: 50%;
      z-index: 5;
      transition: all 2.5s cubic-bezier(0.1, 0.22, 0.3, 1);
    }

    &._1 .back {
      left: -50%;
      top: -50%;
      background: #27ae60;
    }
    &._2 .back {
      right: -50%;
      top: -50%;
      background: #c0392b;
    }
    &._3 .back {
      left: -50%;
      bottom: -50%;
      background: #34495e;
    }
    &._4 .back {
      right: -50%;
      bottom: -50%;
      background: #2980b9;
    }

    &:hover .back {
      width: calc(2 * 200px);
      height: calc(2 * 100px);
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
  .button {
    margin: 0.8rem 0;
  }
`;

const Button = styled.button`
  /* background-color: ${Colors.primary};
  align-self: center;
  color: #eee;
  font-size: 1rem;
  border-radius: 0.375rem;
  padding: 0.5rem 0.4rem;
  border: 0; */
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  outline: none;
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
  margin: 1rem 0;

  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;

// const BlueIcon = styled.span`
//   background-color: ${Colors.primary};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 9999px;
//   color: ${Colors.white};
//   padding: 0.5rem;
//   margin-right: 0.5rem;
//   font-size: 1.5rem;
// `;

// const ImageWrapper = styled.div`
//   width: 50%;
//   height: auto;

//   @media screen and (max-width: 764px) {
//     display: none;
//   }
// `
