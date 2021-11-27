import styled from "styled-components";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'

export default function NavItems() {
  let {t} = useTranslation()

  return (
    <NavMenu>
      <NavItem>
        <Link href="/">
          <a>{t('common:home')}</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/projects">
          <a>{t('common:projects')}</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/skills">
          <a>{t('common:skills')}</a>
        </Link>
      </NavItem>
      {/* <NavItem>
            <Link href="/404">
              <a>myBlog</a>
            </Link>
          </NavItem> */}
    </NavMenu>
  );
}

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 200;
  margin: 0;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  padding-right: 1rem;
  padding-left: 1rem;
  a {
    cursor: pointer;

    &:hover {
    }
  }
`;