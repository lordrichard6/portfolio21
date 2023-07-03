import {
  FaSearchLocation,
  FaWhatsapp
} from "react-icons/fa";
import {
  SiMinutemailer,
  SiHomebridge
} from "react-icons/si";


const contact = [
  {
    contact: "Girhaldenstrasse 17, 8040 Zurich",
    icon: <FaSearchLocation />,
    link: "https://goo.gl/maps/BzbuLBfM3uxnJ4XC7"
  },
  {
    contact: "+41 078 798 95 33",
    icon: <FaWhatsapp />,
    link: "https://wa.link/sru6m7"
  },
  {
    contact: "paulolopesreizinho@gmail.com",
    icon: <SiMinutemailer />,
    link: "mailto: paulolopesreizinho@gmail.com"
  },
  {
    contact: "www.pauloreizinho.com",
    icon: <SiHomebridge />,
    link: "https://www.pauloreizinho.com/"
  },
]

export default function ContactsSection() {
  return (
    <>
      {contact.map((item, i) => {
        return (
          <div key={i} className="contact">
            {item.icon}
            <a target="_blank" rel="noopener noreferrer" href={item.link}>{item.contact}</a>
          </div>
        )
      })}
    </>
  );
}
