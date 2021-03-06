import styled from "styled-components";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'

import { FaTimes } from "react-icons/fa";
import { Colors } from "../../assets/variables";
import LangChange from './langChange'

export default function Sidebar({isOpen, toggle}) {
  let {t} = useTranslation()

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>

      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavItem onClick={toggle}>
            <Link href="/">
              <a>{t('common:home')}</a>
            </Link>
          </NavItem>
          <NavItem onClick={toggle}>
            <Link href="/projects">
              <a>{t('common:projects')}</a>
            </Link>
          </NavItem>
          <NavItem onClick={toggle}>
            <Link href="/skills">
              <a>{t('common:skills')}</a>
            </Link>
          </NavItem>

          {/* <NavItem onClick={toggle}>
            <Link href="/404">
              <a>myBlog</a>
            </Link>
          </NavItem> */}
          {/* <LangChange /> */}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100vh;
    /* background: ${Colors.primary}; */
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background: url("/pattern.png"), ${Colors.primary};
`;


const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: ${Colors.white};
`;

const SidebarWrapper = styled.div`
`;

const SidebarMenu = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    margin: 1rem 0;


    a {
        transition: 0.2s ease-in-out;
        z-index: 200;
        cursor: pointer;
        color: ${Colors.white};
        font-size: 2rem;
        font-weight: 400;
        &:hover {
            transition: 0.2s ease-in-out;
        }
    }
`