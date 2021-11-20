import styled from "styled-components";
import Image from "next/image";

import NavItems from "./navItems";
import Logo from "./logo";
import { Colors } from "../../assets/variables";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggle }) {
  return (
    <Nav id="top">
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars alt='burger menu'/>
        </MobileIcon>
        <Logo />
        <NavItems />
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
  z-index: 1;
  background-color: ${Colors.primary};
  background: url("/pattern.png"), ${Colors.primary};

  @media screen and (max-width: 1440px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  @media screen and (min-width: 1440px) {
    width: 70%;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 390px) {
    transform: translate(-100%, 40%) !important;
    font-size: 1.8rem !important;
  }
  @media screen and (max-width: 810px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
  }
`;
