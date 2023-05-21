import useTranslation from "next-translate/useTranslation";
import React from "react";

import {
  bringUp,
  bringFromLeft,
  bringFromRight,
} from "../../../utilities/framer-animations";

import { TitleSecondary, EntryAnimation } from "../../_shared";
import SingleService from "./service";

const serviceCardsInfo = [
  {
    imgSrc: "/about/design.jpg",
    alt: "design image with drawn wireframes of an app",
    serviceName: "Design",
    textShort: "I create a modern design with most modern and intuitive UI and UX.",
    featured: false
  },
  {
    imgSrc: "/about/branding.jpg",
    alt: "branding image represented as a hand holding lightbulb as an idea",
    serviceName: "Branding",
    textShort: "You need to define your brand? Look no further I'm here for you.",
    featured: false
  },
  {
    imgSrc: "/about/marketing.jpg",
    alt: "marketing image represented as an iphone showning the social media apps",
    serviceName: "Digital Marketing",
    textShort: "With SEO & SEM optimization, email and social media management.",
    featured: false
  },
  {
    imgSrc: "/about/development.jpg",
    alt: "development as two monitors shown code in visual studio code",
    serviceName: "Development",
    textShort: "Looking to build a robust online presence? Look no further! I specialize in developing top-notch websites and applications with a focus on SEO optimization. \n\nWith expertise in React, Next.js, and Angular, I can create dynamic and engaging online experiences that not only captivate your audience but also rank high in search engine results.",
    featured: true
  },
]

export default function ServicesSection() {
  let { t } = useTranslation();

  return (
    <section className="section-width">
      <EntryAnimation style="w-full flex justify-center" animation={bringUp}>
        <TitleSecondary title="What can I do for you?" />
      </EntryAnimation>
      <div className="card-wrapper">
      {serviceCardsInfo.map((item, i) => {
          return (
            <SingleService
              cardType={`service-card ${item.featured === true ? 'big-card' : 'small-card'}`}
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
    </section>
  );
}
