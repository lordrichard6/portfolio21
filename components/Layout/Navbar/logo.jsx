import Link from "next/link";

// import { bringFromLeft } from "../../../utilities/framer-animations";
import { EntryAnimation, ImagesComponent } from "../../_shared";

export default function Logo() {
  const logo = "/logo_white.svg";
  const logoAlt = "paulo lopes reizinho logo white";
  const myName = "Paulo Reizinho";

  return (
    // <EntryAnimation
    //   animation={bringFromLeft}
    //   style="logo-container flex-centered"
    //   threshold={0}
    // >
    <div className="logo-container flex-centered">
      <div>
        <Link href="/" passHref>
          <ImagesComponent style="logo-image" alt={logoAlt} src={logo} />
        </Link>
      </div>
      <h1 className="navbar-name">{myName}</h1>
    </div>
    // </EntryAnimation>
  );
}
