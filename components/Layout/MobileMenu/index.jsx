import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { FaTimes } from "react-icons/fa";
import LangChange from "../Navbar/langChange";
import { navItems } from "../../../assets/data/navbar";

export default function MobileMenu({ isOpen, toggle }) {
  const router = useRouter();

  let { t } = useTranslation();

  return (
    <side isOpen={isOpen} onClick={toggle} style={{ right: isOpen ? "-60%" : "-100%" }} className="mobile-menu fixed top-0 right-0 w-full h-3/5 rounded-bl-xl flex flex-col z-40">
      <div onClick={toggle}>
        <FaTimes className="text-5xl ml-[20%] mt-3" />
      </div>
      <div>
        <div className="flex flex-col justify-start items-start pl-4 mt-6">
          {navItems.map((item, i) => {
            return (
              <div className="mobile-item flex-centered" key={i} onClick={toggle}>
                <Link prefetch href={item.to} className={router.pathname === item.to ? "selected" : ""} passHref>
                  {t(item.tabName)}
                </Link>
              </div>
            );
          })}
          <br />
          <LangChange />
        </div>
      </div>
    </side>
  );
}