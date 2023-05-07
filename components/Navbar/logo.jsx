import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo_clean.png";

export default function Logo() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="paulo lopes reizinho"
            responsive
            className="w-auto h-16 md:w-20 md:h-20 cursor-pointer"
          />
        </Link>
      </div>
      <h1 className="w-10 tracking-tight leading-7 md:leading-6 text-2xl md:text-4xl font-normal text-slate-100">
        Paulo Reizinho
      </h1>
    </div>
  );
}