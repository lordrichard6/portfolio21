import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

export default function CopyrightComponent() {
  let { t } = useTranslation();

  return (
    <CopyrightWrapper>
      <p>Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho.</p>
      <p>{t("common:allRights")}</p>
    </CopyrightWrapper>
  );
}

const CopyrightWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  p {
    margin-bottom: 0;

    @media screen and (max-width: 764px) {
      font-size: 0.8rem;
    }
  }
`;
