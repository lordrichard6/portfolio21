import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NavItems from "./navItems";
import LangChange from "./langChange";
import Logo from "./logo";
import { Colors } from "../../assets/variables";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggle }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <Nav className={navbarClasses.join(" ")}>
      <NavbarContainer>
        <MobileIcon >
          <FaBars alt="burger menu" onClick={toggle}/>
        </MobileIcon>
        <Logo />
        <ItemsWrapper>
          <NavItems />
          <div className="lang">
            <LangChange />
          </div>
        </ItemsWrapper>
      </NavbarContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  position: absolute;
  top: 0;
  margin-top: 32px;
  padding: 2px;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 200;
  transition: 0.8s all ease;
  animation: showNav 2s linear;
  /* background: url("/pattern.png"), ${Colors.primary}; */

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
    margin-top: 16px;
  }

  @keyframes showNav {
    0% {
      filter: blur(0) brightness(1);
      opacity: 0;
    }
    86% {
      filter: brightness(1) blur(0);
      opacity: 0;
    }
    90% {
      filter: brightness(10) blur(0.5rem);
      opacity: 1;
    }
    100% {
      filter: blur(0) brightness(1);
    }
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  @media screen and (min-width: 2024px) {
    width: 70%;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    transform: translate(-100%, 40%) !important;
    font-size: 1.8rem !important;
  }
  @media screen and (max-width: 1024px) {
    width: max-content;
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

const ItemsWrapper = styled.div`
  display: flex;

  .lang {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;
