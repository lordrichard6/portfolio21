import React, { useEffect, useState } from "react";

import NavItems from "./navItems";
import LangChange from "./langChange";
import Logo from "./logo";
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
    <nav className={`navbar-container ${navbarClasses.join(" ")}`}>
      <div className="inner-container">
        <Logo />
        <div className="menu-burger">
          <FaBars alt="burger menu" onClick={toggle} />
        </div>
        <div className="navigation-items">
          <NavItems />
          <div className="language-container">
            <LangChange />
          </div>
        </div>
      </div>
    </nav>
  );
}
