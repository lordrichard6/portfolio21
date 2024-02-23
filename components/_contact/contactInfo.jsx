import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

// import { TextAnimationLetter } from "../_shared";

import { MdEmail, MdPermPhoneMsg } from "react-icons/md";
import {
  // FaHouseUser,
  // FaPhoneAlt,
  FaInstagram,
  FaAddressCard, 
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

const social_media = [
  {
    link: "mailto: paulolopesreizinho@gmail.com",
    icon: <MdEmail className="mr-2" alt="email paulo reizinho" />,
    text: 'paulolopesreizinho@gmail.com'
  },
  // {
  //   link: "tel: +41787989533",
  //   icon: <MdPermPhoneMsg className="mr-2" alt="phone number paulo reizinho" />,
  //   text: '+41 78 798 95 33'
  // },
  // {
  //   link: "https://www.linkedin.com/in/pauloreizinho/",
  //   icon: <FaLinkedin alt="github paulo reizinho profile" />,
  //   text: 'www.linkedin.com/in/pauloreizinho/'
  // },
  {
    link: "https://www.instagram.com/paulo_reizinho/",
    icon: <FaInstagram alt="instagram paulo reizinho profile" />,
    text: 'www.instagram.com/paulo_reizinho/'
  },
  {
    link: "https://github.com/lordrichard6",
    icon: <FaGithub alt="github paulo reizinho profile" />,
    text: 'github.com/lordrichard6'
  },
  // {
  //   link: "https://wa.link/sru6m7",
  //   icon: <FaWhatsapp alt="whatsapp paulo reizinho" />,
  //   text: 'Whatsapp'
  // },
  // {
  //   link: "https://www.pauloreizinho.com/cv_4186",
  //   icon: <FaAddressCard alt="cv paulo reizinho" />,
  //   text: 'Curriculum Vitae'
  // },
];

export default function ContactInfo() {
  let { t } = useTranslation();

  return (
    <div className="contact-section-info w-full xl:w-1/2 xl:pr-8 mb-8 xl:mb-0">
      {/* <TextAnimationLetter
        className="title-primary-md flex justify-center"
        text={t(texts.title)}
      /> */}
      <p>{t(texts.line_01)}</p>
      <p>{t(texts.line_02)}</p>
      <p>{t(texts.line_03)}</p>
      <div className="contact-social-links flex flex-col text-5xl justify-between lg:justify-start ml-[10%] xl:ml-0">
        {social_media.map((item, i) => {
          return (
            <span className="flex my-1" key={i}>
              {item.icon}
              <Link className="z-10 underline underline-offset-2 font-normal whitespace-nowrap" href={item.link} target="_blank" >
                {item.text}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}
