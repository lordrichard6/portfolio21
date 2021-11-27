import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../assets/variables";

export default function SiteMap() {
  let { t } = useTranslation();

  return (
    <SectionContainer>
      <h1>{t("common:sitemap")}</h1>
      <LinkScroll to="top" smooth={true} duration={600} spy={true}>
        <h2>{t("common:goTop")}</h2>
      </LinkScroll>
      <Link href="/" passHref>
        <h2>{t("common:home")}</h2>
      </Link>
      <Link href="/projects" passHref>
        <h2>{t("common:projects")}</h2>
      </Link>
      <Link href="/skills" passHref>
        <h2>{t("common:skills")}</h2>
      </Link>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 390px) {
    order: 1;
    margin-top: 1rem;
  }
  h1 {
    font-weight: 400;
    text-decoration: underline;
    font-size: 1.8rem;
  }
  h2 {
    font-weight: 400;
    margin: 0.4rem 0;
    cursor: pointer;
    letter-spacing: 2px;
    &:hover {
      color: ${Colors.primary};
      transition: 0.3s ease-in-out;
    }
  }
`;
