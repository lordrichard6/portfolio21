import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { FaTimes } from "react-icons/fa";
import { Colors } from "../../assets/variables";
import pattern from "../../assets/images/pattern.png";

export default function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Bg
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="pattern"
      />
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavItem onClick={toggle}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </NavItem>
          <NavItem onClick={toggle}>
            <Link href="/projects">
              <a>myProjects</a>
            </Link>
          </NavItem>
          <NavItem onClick={toggle}>
            <Link href="/skills">
              <a>mySkills</a>
            </Link>
          </NavItem>
          {/* <NavItem onClick={toggle}>
            <Link href="/404">
              <a>myBlog</a>
            </Link>
          </NavItem> */}
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
    background: ${Colors.primary};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Bg = styled(Image)`
  z-index: 0;
  opacity: 0.1;
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