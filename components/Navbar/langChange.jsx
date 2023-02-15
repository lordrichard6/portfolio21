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
          <Link
            href={router.asPath}
            locale={locale}
            passHref
          >
            {/* 
            USE FLAGS
            <div className="flag">
              {locale === "en" && <Image src={en} cover alt="" />}
              {locale === "pt" && <Image src={pt} cover alt="" />}
            </div> 
            */}
            <div className={router.locales === locale ? "selected" : ""}>
            {locale === "pt" && <h3>pt</h3>}
            {locale === "en" && <h3>en</h3>}
            </div>
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

  h3 {
    margin: 0;
    font-weight: 200;
    &:hover {
    font-weight: 600;
  }
  }
  &.selected {
    h3 {
      font-weight: 4200;
    }
  }

  /* FLAG STYLING
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
  } */
`;
