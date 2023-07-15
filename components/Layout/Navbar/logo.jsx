import Link from "next/link";

import { ImagesComponent } from "../../_shared";
import { logos } from "../../../assets/data";

export default function Logo() {
  return (
    <div className="logo-container flex-centered">
      <div>
        <Link className="cursor-pointer" href="/" passHref>
          <ImagesComponent style="logo-image w-10 md:w-14" alt={logos[0].alt} src={logos[0].img} />
        </Link>
      </div>
    </div>
  );
}
