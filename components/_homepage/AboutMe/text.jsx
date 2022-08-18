import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

export default function AboutTextComponent() {
  let { t } = useTranslation();

  return (
    <LeftContainer>
      <h1>{t("home:about_title")}</h1>
      <p>
        {t("home:about_text01")}
        <br />
        <br />
        {t("home:about_text02")}
        <br />
        <br />
        {t("home:about_text03")}
        <br />
        <br />
        {t("home:about_text04")}
      </p>
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  z-index: 1;
  width: 50%;
  margin-right: 0.5rem;
  color: #eee;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
  }
  h1 {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: -10px 10px 0px #2f3030b0, -20px 20px 0px #494b4b7f,
      -30px 30px 0px #5858583d;

    @media screen and (max-width: 390px) {
      text-align: center;
    }
    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
    @media screen and (min-width: 1440px) {
      font-size: 5rem;
    }
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 2560px) {
      font-size: 1.8rem;
    }
  }
`;
