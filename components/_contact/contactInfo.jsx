import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import { TextAnimationLetter } from "../_shared";

import {
  FaHouseUser,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactInfo() {
  let { t } = useTranslation();

  return (
    <section className="2xl:w-3/4 my-10">
      <TextAnimationLetter
        className="title-primary-md flex justify-center"
        text="I'd love to hear from you"
      />
      <p className="text-primary-lg font-bold mb-2">
        Please don’t hesitate to contact me either for professional or personal
        reasons,
      </p>
      <p className="text-primary-lg font-light mb-2">
        I’m generally a friendly and empathetic guy, you can reach me even if
        you are considering my services but not sure or if you just want to
        connect and want to get to know me.
      </p>
      <p className="text-primary-lg font-light mb-2">
        I’m at the moment open for <strong>permanent</strong> or{" "}
        <strong>temporary</strong> positions and as <strong>freelance</strong>.
      </p>
      <p className="text-primary-lg font-light mb-2">
        Reach me by my email:{" "}
        <a
          className="underline font-normal"
          href="mailto: paulolopesreizinho@gmail.com"
        >
          paulolopesreizinho@gmail.com
        </a>
      </p>
      <p className="text-primary-lg font-light mb-2">
        If you rather call or write me on whatsapp:
        <a className="underline underline-offset-2 font-normal whitespace-nowrap" href="tel: +41787989533">
          (+41) 078 798 95 33
        </a>
      </p>
      <p className="text-primary-lg font-light mb-2">
        Additionally heres my social media:
      </p>
      <div className="contact-social-links flex text-5xl justify-between lg:justify-start lg:text-6xl">
        <Link
          className="z-10"
          href="https://www.linkedin.com/in/pauloreizinho/"
          target="_blank"
        >
          <FaLinkedin alt="github paulo reizinho profile" />
        </Link>
        <Link
          className="z-10"
          href="https://www.instagram.com/paulo_reizinho/"
          target="_blank"
        >
          <FaInstagram alt="instagram paulo reizinho profile" />
        </Link>
        <Link
          className="z-10"
          href="https://github.com/lordrichard6"
          target="_blank"
        >
          <FaGithub alt="github paulo reizinho profile" />
        </Link>
        <Link
          className="z-10"
          href="https://discord.gg/3seHDYvu"
          target="_blank"
        >
          <FaDiscord alt="discord paulo reizinho" />
        </Link>
        <Link className="z-10" href="https://wa.link/sru6m7" target="_blank">
          <FaWhatsapp alt="whatsapp paulo reizinho" />
        </Link>
      </div>
    </section>
  );
}
