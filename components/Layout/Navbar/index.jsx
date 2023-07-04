import React, { useEffect, useState } from "react";

import NavItems from "./navItems";
import LangChange from "./langChange";
import Logo from "./logo";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar({ toggle }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
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
    <nav className={`navbar-container ${navbarClasses.join(" ")} absolute top-0 lg:mt-8 py-2 flex justify-center w-screen z-30`}>
      <div className="inner-container section-width-default flex justify-between items-center relative">
        <Logo />
        <div className="menu-burger flex-centered">
          <HiMenuAlt2 className="lg:hidden text-5xl" alt="burger menu" onClick={toggle} />
        </div>
        <div className="navigation-items hidden lg:flex z-50">
          <NavItems />
          <div className="language-container">
            <LangChange />
          </div>
        </div>
      </div>
    </nav>
  );
}
