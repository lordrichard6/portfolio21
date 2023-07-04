import Link from "next/link";

import { ImagesComponent } from "../../_shared";

export default function Logo() {
  const logo = "/logo_white.svg";
  const logoAlt = "paulo lopes reizinho logo white";
  // const myName = "Paulo Reizinho";

  return (
    <div className="logo-container flex-centered">
      <div>
        <Link className="cursor-pointer" href="/" passHref>
          <ImagesComponent style="logo-image" alt={logoAlt} src={logo} />
        </Link>
      </div>
      {/* <h1 className="navbar-name">{myName}</h1> */}
    </div>
  );
}
