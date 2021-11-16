import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Colors } from "../../assets/variables";
import { FaBars } from "react-icons/fa";
import logo from "../../public/logo_blue.png";
import pattern from "../../assets/images/pattern.png";

export default function Navbar({ toggle }) {
  return (
    <Nav>
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <LogoContainer>
          <Image
            src={logo}
            alt="paulo lopes reizinho"
          />
        </LogoContainer>
        <NavMenu>
          <NavItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/projects">
              <a>myProjects</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/skills">
              <a>mySkills</a>
            </Link>
          </NavItem>
          {/* <NavItem>
            <Link href="/404">
              <a>myBlog</a>
            </Link>
          </NavItem> */}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  position: relative;
  margin: 0;
  padding: 2px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
  background-color: ${Colors.primary};

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
`;

const BG = styled(Image)`
  z-index: 0;
  opacity: 0.1;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (min-width: 1080px) {
    width: 70%;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

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
