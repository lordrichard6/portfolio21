import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LangChange() {
  let router = useRouter();

  console.log("languages", router.locales);
  console.log("selected language", JSON.stringify(router.locale));
  return (
    <NavMenu className="flex flex-row justify-center items-center list-none ">
      {router.locales.map((locale) => (
        <li
          className="text-2xl text-slate-100 font-normal uppercase m-0 px-1"
          key={locale}
        >
          <Link href={router.asPath} locale={locale} passHref>
            <div
              className={
                router.locale === locale ? "font-semibold" : "font-extralight"
              }
            >
              {locale === "pt" && <h3>pt</h3>}
              {locale === "en" && <h3>en</h3>}
            </div>
          </Link>
        </li>
      ))}
    </NavMenu>
  );
}

const NavMenu = styled.ul``;
