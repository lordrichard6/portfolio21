import { TbCertificate } from "react-icons/tb";

const certifications = [
  {
    title: "Managment and Administration",
    link: "https://drive.google.com/file/d/1GUD5DhtC0MK9tD-ivo-ZVl3N4ub3oqoL/view?usp=drive_link",
    language: "(de)"
  },
  {
    title: "Complete Web Developer: Zero to Mastery",
    link: "https://drive.google.com/file/d/1dN3f5oHThMCSrBg3Gf9tpr3-GOjoNm9h/view?usp=drive_link",
    language: ""
  },
  {
    title: "Modern React with Redux",
    link: "https://drive.google.com/file/d/1h9tkGfllT_CmWCn12ERj8sQfSxc6RRXL/view?usp=drive_link",
    language: ""
  },
]

export default function CertificatesSection() {
  return (
    <div className="certifications">
      <h2 className="font-semibold mb-2 mt-4">
        Certificates
      </h2>
      <hr className="h-1" />

      {certifications.map((item, i) => {
        return (
          <div key={i} className="flex items-center mt-2">
            <TbCertificate className="text-4xl" />
            <button>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Check it out</a>
            </button>
            <h2>{item.title}</h2>
            <p className="uppercase">{item.language}</p>
          </div>
        )
      })}

    </div>
  );
}
