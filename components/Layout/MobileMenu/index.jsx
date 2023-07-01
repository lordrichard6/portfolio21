import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

import { FaTimes } from "react-icons/fa";
import { Colors } from "../../../assets/variables";
import LangChange from "../Navbar/langChange";
import { navItems } from "../../../assets/data/navbar";

export default function MobileMenu({ isOpen, toggle }) {
  const router = useRouter();
  
  let { t } = useTranslation();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navItems.map((item, i) => {
            return (
              <NavItem key={i} onClick={toggle}>
                <Link prefetch href={item.to} className={router.pathname === item.to ? "selected" : ""} passHref>
                  {/* <a className={router.pathname === item.to ? "selected" : ""}> */}
                    {t(item.tabName)}
                  {/* </a> */}
                </Link>
              </NavItem>
            );
          })}
          <br />
          <LangChange />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;
  /* background: ${Colors.primary}; */
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100" : "0")}; */
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: url("/pattern.png"),
  linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  z-index: 200;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: ${Colors.white};
`;

const SidebarWrapper = styled.div``;

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
    &.selected {
      font-weight: 800;
    }
    &:hover {
      transition: 0.2s ease-in-out;
    }
  }
`;
