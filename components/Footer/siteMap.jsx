import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import { Colors } from "../../assets/variables";
import { navItems } from "../../assets/data/navbar";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SiteMap() {
  let { t } = useTranslation();

  const router = useRouter();

  const bringUp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <SectionContainer
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
    >
      <h1>{t("common:sitemap")}</h1>
      <LinkScroll to="top" smooth={true} duration={600} spy={true}>
        <h2>{t("common:goTop")}</h2>
      </LinkScroll>
      {navItems.map((item, i) => {
        return (
          <Link key={i} href={item.to} passHref>
            <h2 className={router.pathname === item.to ? "selected" : ""}>
              {t(item.tabName)}
            </h2>
          </Link>
        );
      })}
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
      font-weight: 800;
      color: ${Colors.primary};
      transition: 0.3s ease-in-out;
    }
    &.selected {
      color: ${Colors.primary};
    }
  }
`;
