import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import pt from "../../assets/images/pt.svg";
import en from "../../assets/images/en.svg";

export default function LangChange() {
  let router = useRouter();

  console.log(router.locales);
  return (
    <NavMenu>
      {router.locales.map((locale) => (
        <NavItem key={locale}>
          <Link href={router.asPath} locale={locale}>
            <a className={router.locales === locale ? "selected" : ""}>
              <div className="flag">
                {locale === "en" && <Image src={en} objectFit="cover" alt="" />}
                {locale === "pt" && <Image src={pt} objectFit="cover" alt="" />}
              </div>
            </a>
          </Link>
        </NavItem>
      ))}
    </NavMenu>
  );
}

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  /* z-index: 2; */

  @media screen and (max-width: 746px) {
    font-size: 1.6rem;
    padding-right: 1.5rem;
  }
`;

const NavItem = styled.li`
  padding: 0 0.3rem;
  a {
    cursor: pointer;

    .flag {
      display: flex;
      width: 46px;
      height: 32px;
      border-radius: 10px;
      &:hover {
        border: 4px solid #fff;
      }
      span {
        border-radius: 10px;
      }
    }
    &.selected {
      .flag {
        border: 4px solid #fff;
      }
    }

    &:hover {
      font-weight: 800;
    }
  }
`;
