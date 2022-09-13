import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  return (
    <SloganContainer>
      <Title>
        <div id="title1" className="glitch" data-text={t("home:header_01")}>
          <span className="glitch__color glitch__color--red">
            {t("home:header_01")}
          </span>
          <span className="glitch__color glitch__color--blue">
            {t("home:header_01")}
          </span>
          <span className="glitch__color glitch__color--green">
            {t("home:header_01")}
          </span>
          <span className="glitch__main">{t("home:header_01")}</span>
        </div>
        <div id="title2" className="glitch" data-text={t("home:header_02")}>
          <span className="glitch__color glitch__color--red">
            {t("home:header_02")}
          </span>
          <span className="glitch__color glitch__color--blue">
            {t("home:header_02")}
          </span>
          <span className="glitch__color glitch__color--green">
            {t("home:header_02")}
          </span>
          <span className="glitch__main">{t("home:header_02")}</span>
        </div>
        <div id="title3" className="glitch" data-text={t("home:header_03")}>
          <span className="glitch__color glitch__color--red">
            {t("home:header_03")}
          </span>
          <span className="glitch__color glitch__color--blue">
            {t("home:header_03")}
          </span>
          <span className="glitch__color glitch__color--green">
            {t("home:header_03")}
          </span>
          <span className="glitch__main">{t("home:header_03")}</span>
        </div>
      </Title>
      <SubTitle>{t("home:header_slogan")}</SubTitle>
    </SloganContainer>
  );
}

const SloganContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.2;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
    font-weight: 600;
  }

  #title1 {
    animation: showTitle 3.8s linear;
  }
  #title2 {
    animation: showTitle 4.1s linear;
  }
  #title3 {
    animation: showTitle 4.4s linear;
  }

  .glitch {
    /* text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary}; */
    animation: glitch-skew 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 4s infinite;
    position: relative;
    transform-origin: center top;

    &__main {
      color: #fff;
    }

    &__color {
      height: 100%;
      left: 0;
      opacity: 0.8;
      position: absolute;
      top: 0;
      transform-origin: center center;
      width: 100%;
      z-index: -1;

      &--red {
        animation: glitch 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        color: red;
      }

      &--blue {
        animation: glitch 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
          reverse;
        color: blue;
      }

      &--green {
        animation: glitch 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms
          infinite;
        color: #00ff0b;
      }
    }

    &__line {
      animation: glitch-line 2s linear infinite;
      background: #000;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;

      &--first {
        animation: glitch-line 2s linear infinite;
      }

      &--second {
        animation: glitch-line 1s linear 1s infinite;
      }
    }
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-8px, 8px);
    }
    40% {
      transform: translate(-8px, -8px);
    }
    60% {
      transform: translate(8px, 8px);
    }
    80% {
      transform: translate(8px, -8px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes glitch-skew {
    0% {
      transform: skew(0deg, 0deg);
    }
    48% {
      transform: skew(0deg, 0deg);
      filter: blur(0);
    }
    50% {
      transform: skew(-20deg, 0deg);
      filter: blur(4px);
    }
    52% {
      transform: skew(20deg, 0deg);
    }
    54% {
      transform: skew(0deg, 0deg);
      filter: blur(0);
    }
    100% {
      transform: skew(0deg, 0deg);
    }
  }

  @keyframes glitch-line {
    0% {
      top: 0;
    }

    100% {
      top: 100%;
    }
  }

  @keyframes showTitle {
    0% {
      filter: blur(0) brightness(1);
      opacity: 0;
    }
    96% {
      filter: brightness(1) blur(0);
      opacity: 0;
    }
    98% {
      filter: brightness(10) blur(0.5rem);
      opacity: 1;
    }
    100% {
      filter: blur(0) brightness(1);
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #eee;
  letter-spacing: 0.2em;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};
  animation: bringText 3.5s linear;

  @keyframes bringText {
    0% {
      transform: translate(-200%, 0);
    }
    80% {
      transform: translate(-200%, 0);
    }
    96% {
      filter: blur(0) brightness(1);
      transform: translate(0, 0);
    }
    98% {
      filter: blur(1rem) brightness(10);
    }
    100% {
      filter: blur(0) brightness(1);
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;
