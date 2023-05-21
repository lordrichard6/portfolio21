import useTranslation from "next-translate/useTranslation";

import SingleService from "./service";

const serviceCardsInfo = [
  {
    imgSrc: "../../../public/projects/bastards.png",
    alt: "something",
    serviceName: "Design",
    textShort: "I create a modern design with most modern and intuitive UI and UX."
  },
  {
    imgSrc: "../../../public/projects/bastards.png",
    alt: "something",
    serviceName: "Branding",
    textShort: "You need to define your brand? Based on your business I help you with the name  and logo."
  }
]

export default function SectionComponent({ side, title }) {
  let { t } = useTranslation();

  return (
    <div>
      <h2 className="my-6 text-center text-4xl 2xl:text-5xl antialiased font-semibold uppercase underline decoration-wavy decoration-2 underline-offset-6 drop-shadow-lg -skew-y-6">
        {title}
      </h2>
      <div className="flex justify-center">
        {serviceCardsInfo.map((item, i) => {
          return (
            <SingleService
              key={i}
              imgSrc={item.imgSrc}
              alt={item.alt}
              serviceName={item.serviceName}
              textShort={item.textShort}
              // textShort={t(item.text)}
            />
          );
        })}
      </div>
    </div>
  );
}
