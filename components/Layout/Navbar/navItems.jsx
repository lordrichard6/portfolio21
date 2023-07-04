import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { navItems } from "../../../assets/data/navbar";

export default function NavItems() {
  const router = useRouter();

  let { t } = useTranslation();

  console.log(navItems);

  return (
    <ul className="page-links flex flex-row justify-end m-0 z-10 list-none">
      {navItems.map((item, i) => {
        return (
          <li key={i} className="text-navlist">
            <Link
              prefetch
              href={item.to}
              className={router.pathname === item.to ? "selected" : ""}
              passHref
            >
              {t(item.tabName)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
