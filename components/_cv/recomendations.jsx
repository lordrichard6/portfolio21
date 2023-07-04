import {
  FaCertificate,
  FaStar
} from "react-icons/fa";

const title = "Recomendations"

const recomendations = [
  {
    company: "Pickwings",
    link: "https://drive.google.com/file/d/1jchf2W1kNPwqgja7_O8FvrL2a5dR8wfJ/view?usp=drive_link",
    language: "(de)"
  },
  {
    company: "Feinheit",
    link: "https://drive.google.com/file/d/1nnekEjPDoVEyVdZSn_P-4Fu598DrRRhf/view?usp=drive_link",
    language: "(de)"
  },
]

export default function RecommendationsSection() {
  return (
    <div className="recomendations-container">
      <h2 className="ml-6 text-3xl font-bold mx-6">
        {title}
      </h2>
      <hr className="h-1" />
      {recomendations.map((item, i) => {
        return (
          <div key={i} className="item-container flex items-center m-4">
            <FaStar className="icon text-4xl" />
            <button className='btn'>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Check it out</a>
            </button>
            <h2 className="font-semibold text-2xl lg:text-3xl">{item.company}</h2>
            <p className="uppercase mb-3">{item.language}</p>
          </div>
        )
      })}
    </div>
  );
}
