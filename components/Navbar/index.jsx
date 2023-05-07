import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  bringDown
} from "../../utilities/framer-animations";
import NavItems from "./navItems";
import LangChange from "./langChange";
import Logo from "./logo";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

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
    <Nav className={navbarClasses.join(" ")} ref={ref}>
      <motion.div
        variants={bringDown}
        initial="hidden"
        animate={controls}
        className="flex justify-between items-center w-[80%] 2xl:w[70%]"
      >
        <MobileIcon>
          <FaBars alt="burger menu" onClick={toggle} />
        </MobileIcon>
        <Logo />
        <ItemsWrapper>
          <NavItems />
          <div className="lang flex">
            <LangChange />
          </div>
        </ItemsWrapper>
      </motion.div>
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

  @media screen and (max-width: 1024px) {
    margin-top: 16px;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    transform: translate(-100%, -50%) !important;
    font-size: 1.8rem !important;
  }
  @media screen and (max-width: 1024px) {
    width: max-content;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, -50%);
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
