import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiDownArrow } from "react-icons/bi";
import { languages } from "../../../assets/data"

export const FlagChoice = ({ lang, flag }) => {
  return (
    <div className="flag-choice flex justify-center items-center my-1">
      <h3 className="ml-2 uppercase">{lang}</h3>
      <figure className="flag relative w-[24px] h-[24px] rounded-full overflow-hidden ml-2">
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
      <div onClick={toggle} className="lang-name hidden lg:flex items-center cursor-pointer uppercase font-bold ml-2">
        {languages.map((lang, i) => router.locale === lang.name && <h3 key={i}>{lang.name}</h3>)}
        <BiDownArrow className="arrow" />
      </div>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link className="text-2xl" href={router.asPath} locale={locale} passHref>
              <div
                onClick={toggle}
                className={
                  router.locale === locale ? "font-bold" : "font-extralight"
                }
              >
                {languages.map((lang, i) => locale === lang.name && <FlagChoice key={i} lang={lang.name} flag={lang.flag} />)}
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
      height: ${({ isOpen }) => (isOpen ? "120px" : "0px")};
    }
  }
`;
