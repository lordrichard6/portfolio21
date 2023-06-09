import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import { TextAnimationLetter } from "../_shared";

import {
  FaHouseUser,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const texts = {
  title: "contact:info_title",
  line_01:
    "contact:text_line_01",
  line_02:
    "contact:text_line_02",
  line_03:
    "contact:text_line_03",
  line_04: "contact:text_line_04",
  line_05: "contact:text_line_05",
  line_06: "contact:text_line_06",
};
const email = {
  link: "mailto: paulolopesreizinho@gmail.com",
  email: "paulolopesreizinho@gmail.com",
};

const tel = {
  link: "tel: +41787989533",
  number: "(+41) 078 798 95 33",
};

const social_media = [
  {
    link: "https://www.linkedin.com/in/pauloreizinho/",
    icon: <FaLinkedin alt="github paulo reizinho profile" />,
  },
  {
    link: "https://www.instagram.com/paulo_reizinho/",
    icon: <FaInstagram alt="instagram paulo reizinho profile" />,
  },
  {
    link: "https://github.com/lordrichard6",
    icon: <FaGithub alt="github paulo reizinho profile" />,
  },
  {
    link: "https://wa.link/sru6m7",
    icon: <FaWhatsapp alt="whatsapp paulo reizinho" />,
  },
];

export default function ContactInfo() {
  let { t } = useTranslation();

  return (
    <section className="contact-section-info section-y-short section-x-default pt-24">
      <TextAnimationLetter
        className="title-primary-md flex-centered mb-10"
        text={t(texts.title)}
      />
      <p>{t(texts.line_01)}</p>
      <p>{t(texts.line_02)}</p>
      <p>{t(texts.line_03)}</p>
      <p>
        {t(texts.line_04)}
        <a href={email.link}>{email.email}</a>
      </p>
      <p>
        {t(texts.line_05)}
        <a href={tel.link}>{tel.number}</a>
      </p>
      <p>{t(texts.line_06)}</p>
      <div className="contact-social-links">
        {social_media.map((item, i) => {
          return (
            <Link className="z-10" href={item.link} target="_blank" key={i}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
