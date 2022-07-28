import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import pt from '../../assets/images/pt.svg'
import en from '../../assets/images/en.svg'

export default function LangChange() {
  let router = useRouter();

  // <Image src={locale} layout="responsive" alt="" />
  return (
    <NavMenu>
      {router.locales.map((locale) => (
        <NavItem key={locale}>
          <Link href={router.asPath} locale={locale}>
            <a>{locale}</a>
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
  padding:0 0.3rem;
  a {
    cursor: pointer;

    &:hover {
    }
  }
`;
