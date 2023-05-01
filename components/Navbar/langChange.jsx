import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiDownArrow } from "react-icons/bi";

export const FlagChoice = ({ lang, flag }) => {
  let router = useRouter();
  return (
    <div className="flex justify-center items-center my-1">
      <h3 className="ml-2 uppercase">{lang}</h3>
      <figure className="relative w-[24px] h-[24px] rounded-full overflow-hidden ml-2">
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
    <Language
      className="language-dropdown flex relative"
      isOpen={isOpen}
    >
      <div onClick={toggle} className="hidden lg:flex items-center cursor-pointer uppercase font-bold ml-2">
        {router.locale === "pt" && <h3>pt</h3>}
        {router.locale === "en" && <h3>en</h3>}
        <BiDownArrow className="arrow ml-1" />
      </div>
      <ul className="dropdown lg:bg-slate-900 flex flex-col justify-center items-center list-none lg:absolute mx-auto top-10 right-0 w-[80px] overflow-hidden rounded-md">
        {router.locales.map((locale) => (
          <li
            className="text-2xl lg:text-xl text-slate-100 font-normal uppercase m-0"
            key={locale}
          >
            <Link href={router.asPath} locale={locale} passHref>
              <div
                className={
                  router.locale === locale ? "font-bold" : "font-extralight"
                }
              >
                {locale === "pt" && <FlagChoice lang="pt" flag="/pt.svg" />}
                {locale === "en" && <FlagChoice lang="en" flag="/en.svg" />}
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
  transition: 0.3s ease-in-out;
  transform: rotateZ(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
}
.dropdown {
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
  height: ${({ isOpen }) => (isOpen ? "80px" : "0px")};
}
li {
  &:hover {
    h3 {
      font-weight: 800;
    }
    figure {
      border-color: #fff;
      border-width: 2px;
    }
  }
}
`