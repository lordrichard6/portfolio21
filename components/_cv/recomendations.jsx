import {
  FaCertificate
} from "react-icons/fa";


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
    <div className="recomendations">
      <h2>
        Recomendations
      </h2>
      <hr className="h-1" />
      {recomendations.map((item, i) => {
        return (
          <div key={i} className="flex items-center mt-2">
            <FaCertificate className="text-4xl" />
            <button>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Check it out</a>
            </button>
            <h2>{item.company}</h2>
            <p className="uppercase">{item.language}</p>
          </div>
        )
      })}
    </div>
  );
}
