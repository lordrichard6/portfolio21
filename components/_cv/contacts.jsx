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
    contact: "Riemenstrasse 1a, 8803 Rüschlikon",
    icon: <FaSearchLocation />,
    link: "https://maps.app.goo.gl/NVEk8MDW1zjt3xLP7"
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
          <div key={i} className="contact text-2xl font-normal flex items-center my-4">
            {item.icon}
            <a className="ml-2 underline lg:no-underline hover:underline" target="_blank" rel="noopener noreferrer" href={item.link}>{item.contact}</a>
          </div>
        )
      })}
    </>
  );
}
