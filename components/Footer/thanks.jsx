import styled from "styled-components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { SiNextdotjs } from "react-icons/si";
import { Colors } from "../../assets/variables";
import logo from "../../public/logo_clean.png";

export default function Thanks() {
  let { t } = useTranslation();

  return (
    <SectionContainer>
      <h1>{t("common:thanks")}</h1>
      <LogoContainer>
        <Image src={logo} alt="paulo reizinho" height={100} width={100} />
      </LogoContainer>
      <IconContainer>
        <p>{t("common:sitePowered")}</p>
        <Icon>
          <SiNextdotjs alt="nextjs logo" />
        </Icon>
      </IconContainer>
      {/* <Button>
        <a href="https://drive.google.com/file/d/14Ou5up4Gowv7XMNx6ct1oUE7-1m5DK2s/view?usp=sharing">
          {t("common:downloadCV")}
        </a>
      </Button> */}
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

// const Button = styled.button`
//   /* background-color: ${Colors.primary};
//   align-self: center;
//   color: #eee;
//   font-size: 1rem;
//   border-radius: 0.375rem;
//   padding: 0.5rem 0.4rem;
//   border: 0; */
//   --glow-color: rgb(217, 176, 255);
//   --glow-spread-color: rgba(191, 123, 255, 0.781);
//   --enhanced-glow-color: rgb(231, 206, 255);
//   --btn-color: rgb(100, 61, 136);
//   outline: none;
//   border: 0.25em solid var(--glow-color);
//   padding: 1em 3em;
//   color: var(--glow-color);
//   font-size: 15px;
//   font-weight: bold;
//   background-color: var(--btn-color);
//   border-radius: 1em;
//   outline: none;
//   box-shadow: 0 0 1em 0.25em var(--glow-color),
//     0 0 4em 1em var(--glow-spread-color),
//     inset 0 0 0.75em 0.25em var(--glow-color);
//   text-shadow: 0 0 0.5em var(--glow-color);
//   position: relative;
//   transition: all 0.3s;
//   margin: 1rem 0;

//   &::after {
//     pointer-events: none;
//     content: "";
//     position: absolute;
//     top: 120%;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     background-color: var(--glow-spread-color);
//     filter: blur(2em);
//     opacity: 0.7;
//     transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
//   }

//   &:hover {
//     color: var(--btn-color);
//     background-color: var(--glow-color);
//     box-shadow: 0 0 1em 0.25em var(--glow-color),
//       0 0 4em 2em var(--glow-spread-color),
//       inset 0 0 0.75em 0.25em var(--glow-color);
//   }

//   &:active {
//     box-shadow: 0 0 0.6em 0.25em var(--glow-color),
//       0 0 2.5em 2em var(--glow-spread-color),
//       inset 0 0 0.5em 0.25em var(--glow-color);
//   }
// `;
