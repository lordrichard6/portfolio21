import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiDownArrow } from "react-icons/bi";

export const FlagChoice = ({ lang, flag }) => {
  return (
    <div className="flag-choice">
      <h3>{lang}</h3>
      <figure className="flag">
        <Image src={flag} alt={flag} fill />
      </figure>
    </div>
  );
};

export default function LangChange() {
  const [isOpen, setIsOpen] = useState(false);
  let router = useRouter();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // console.log("languages", router.locales);
  // console.log("selected language", JSON.stringify(router.locale));
  return (
    <Language className="language-dropdown" isOpen={isOpen}>
      <div onClick={toggle} className="lang-name">
        {router.locale === "pt" && <h3>pt</h3>}
        {router.locale === "en" && <h3>en</h3>}
        {router.locale === "de" && <h3>de</h3>}
        <BiDownArrow className="arrow" />
      </div>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale} passHref>
              <div
                onClick={toggle}
                className={
                  router.locale === locale ? "font-bold" : "font-extralight"
                }
              >
                {locale === "pt" && <FlagChoice lang="pt" flag="/pt.svg" />}
                {locale === "en" && <FlagChoice lang="en" flag="/en.svg" />}
                {locale === "de" && <FlagChoice lang="de" flag="/de.svg" />}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Language>
  );
}

const Language = styled.div`
  .arrow {
    transform: rotateZ(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  }
  ul {
    @media (min-width: 1024px) {
      opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
      height: ${({ isOpen }) => (isOpen ? "110px" : "0px")};
    }
  }
`;