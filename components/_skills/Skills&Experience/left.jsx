import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

export default function Left() {
  let { t } = useTranslation();

  return (
    <LeftSection>
      <InnerSection>
        <Title>{t("skills:S&E_title")}</Title>
        <p>
          {t("skills:S&E_text01")}
          <br />
          {t("skills:S&E_text02")}
          <br />
          {t("skills:S&E_text03")}
        </p>
      </InnerSection>
    </LeftSection>
  );
}

const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  p {
    font-size: 1.25rem;
    letter-spacing: 1px;

    @media screen and (min-width: 2024px) {
      font-size: 1.5rem;
    }
  }
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 4rem;
  font-weight: 400;
  text-shadow: 1px 2px 4px #00000081;
`;
