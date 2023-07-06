import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";

import { TextAnimationLetter, BtnBlue, ImagesComponent } from "../../_shared";
import SingleService from "./service";

const IntroText01 = "Since 2019 I've been focused on my own self-development and I've found my passion in web/software development, but I also discovered that there are other skills worth learning and mastering."
const IntroText02 = "You need to create and grow your online presence, well, I can help you create your brand, build the architecture and design your website, implement that design with the most modern technologies, develop a digital marketing strategy and can even help you get in shape, learn more in the cards below."
const ListIntro = "Here's a basic list of the microservices I provide within this skill:"

const serviceCardsInfo = [
  {
    imgSrc: "/about/design.jpg",
    alt: "design image with drawn wireframes of an app",
    serviceName: "Design",
    textShort:
      "I create a modern design with most modern and intuitive UI and UX.",
    serviceList:["service","service","service"],
    card: "small-card",
  },
  {
    imgSrc: "/about/branding.jpg",
    alt: "branding image represented as a hand holding lightbulb as an idea",
    serviceName: "Branding",
    textShort:
      "A strong brand is half the battle. You need to define your brand? Contact me.",
    serviceList:["service","service","service"],
    card: "small-card",
  },
  {
    imgSrc: "/about/marketing.jpg",
    alt: "marketing image represented as an iphone showning the social media apps",
    serviceName: "Digital Marketing",
    textShort:
      "With SEO & SEM optimization, email and social media management.",
    serviceList:["service","service","service"],
    card: "small-card",
  },
  {
    imgSrc: "/about/development.jpg",
    alt: "development as two monitors shown code in visual studio code",
    serviceName: "Development",
    textShort:
      "Looking to build a robust online presence? Look no further! I specialize in developing top-notch websites and applications with a focus on SEO optimization. \n\nWith expertise in React, Next.js, and Angular, I can create dynamic and engaging online experiences that not only captivate your audience but also rank high in search engine results.",
    serviceList:[
      "Proficient in HTML: I understand and use HTML (Hypertext Markup Language) to structure the content of web pages.",
      "CSS Styling: I have a strong grasp of CSS (Cascading Style Sheets) to apply visual styles and layouts to web pages.",
      "JavaScript: I'm proeficient in JavaScript, a programming language that allows you to add interactivity, perform client-side validation, and manipulate web page elements dynamically.",
      "Responsive Web Design: I'm able to create websites that adapt and display properly on various devices and screen sizes using techniques like media queries and flexible grid systems.",
      "Version Control: I understand and use version control systems like Git to track changes to your code and collaborate effectively with other developers.",
      // "Backend Development: Familiarize yourself with a server-side programming language such as Python, PHP, Ruby, or Node.js, along with frameworks and libraries commonly used in web development like Django, Laravel, Ruby on Rails, or Express.js.",
      "Databases: I learned how to work with databases, both relational (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB), to store and retrieve data for web applications.",
      "API Integration: I gained knowledge of integrating and consuming APIs (Application Programming Interfaces) to interact with external services or retrieve data from third-party sources.",
      // "Security Awareness: I understand web security best practices, including data validation, protection against cross-site scripting (XSS) and SQL injection attacks, and implementation of secure authentication and authorization mechanisms.",
      "Performance Optimization: I learned techniques to optimize website performance, such as asset minification and compression, caching, lazy loading, and reducing server response times.",
      "Testing and Debugging: I have familiarize myself with testing methodologies and tools (e.g., unit testing, integration testing) and debugging techniques to identify and fix issues in your code.",
      "CMS (Content Management Systems): I've gain experience working with popular CMS platforms like WordPress, Drupal, or Joomla, enabling you to build, customize, and maintain websites for clients efficiently.",
      "Web Accessibility: I understand accessibility standards and guidelines (e.g., WCAG) to create websites that are inclusive and accessible to users with disabilities.",
      "Cross-Browser Compatibility: I'll ensure that your websites function correctly and consistently across different web browsers (e.g., Chrome, Firefox, Safari, Edge) and versions.",
      "Continuous Learning: I make sure to stay updated with the latest web technologies, frameworks, and industry trends by regularly learning and exploring new tools and techniques.",
      ],
    card: "big-card",
  },
  {
    imgSrc: "/about/copywriting_01.jpg",
    alt: "copywriting fundamentals",
    serviceName: "Copywriting",
    textShort:
      "Wanna drive client/user to your product or service? You need clever maketing campaings for that effect. Creativity has no limit or bounds.",
    serviceList:["service","service","service"],
    card: "medium-card",
  },
  {
    imgSrc: "/about/fitness_01.jpg",
    alt: "strong man lifting a bar in the dark",
    serviceName: "Fitness Instructor",
    textShort:
      "With over 15 years experience in the field, countless training plans applied. I can use my knowledge to help you achieve your best shape.",
    serviceList:["service","service","service"],
    card: "medium-card",
  },
];

export default function AboutSevices() {
  let { t } = useTranslation();
  const [activeService, setActiveService] = useState(null);

  const openPopup = (index) => {
    setActiveService(index);
  };

  const closePopup = () => {
    setActiveService(null);
  };

  return (
    <section className="about-section-services section-y-default">
      <TextAnimationLetter className="title-primary-md flex justify-center" text="What can I do for you?" />
      <div className="section-width-default mx-auto mb-8">
        <p className="text-primary">{IntroText01}</p>
        <p className="text-primary">{IntroText02}</p>
      </div>
      <div className="card-wrapper section-width-default flex flex-col sm:grid sm:grid-cols-6 gap-4">
        {serviceCardsInfo.map((item, i) => {
          return (
            <>
              <SingleService
                key={i}
                cardType={item.card}
                imgSrc={item.imgSrc}
                alt={item.alt}
                serviceName={item.serviceName}
                textShort={item.textShort}
                onClick={() => openPopup(i)}
              // textShort={t(item.text)}
              />
              {activeService === i && (
                <div className="popup transition ease-in-out delay-150 w-screen h-screen flex-centered">
                  <div className="flex-centered relative w-full h-full">
                    <div onClick={closePopup} className="absolute w-full h-full hue-rotate-180 backdrop-blur-sm" />
                    <div className="popup-content glass-container relative w-full max-w-[340px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] max-h-full rounded-lg p-4 m-2">
                      <ImagesComponent src={item.imgSrc} alt={item.alt} style="picture rounded-2xl border-none overflow-hidden max-h-[400px]" />
                      <h1 className="text-6xl my-4">{item.serviceName}</h1>
                      <p className="text-primary mb-2">{ListIntro}</p>
                      <ul className="mb-4 py-2 border-t-2 border-b-2 border-slate-100 max-h-[260px] sm:max-h-[300px] lg:max-h-[400px] xl:max-h-[600px] overflow-y-auto">
                        {item.serviceList.map((service, index) => <li className="text-lg sm:text-xl font-light my-1" key={index}>{service}</li>)}
                      </ul>
                      <div className="w-full flex justify-end">
                        <BtnBlue onClick={closePopup} text="Contact me" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}
