import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LangChange() {
  let router = useRouter();

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
