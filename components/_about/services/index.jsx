import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";

import { TextAnimationLetter } from "../../_shared";
import SingleService from "./service";
import SevicesModal from "./modal"

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
    serviceList: [
      "Graphic Design: I've developed a strong foundation in graphic design principles, including color theory, typography, layout, composition, and visual hierarchy.",
      "Adobe Photoshop: I've become proficient in industry-standard design software. This tool is commonly used for creating and manipulating graphics, illustrations, and layouts.",
      "User Experience (UX) Design: I understand the principles of UX design, which involves creating intuitive and user-centered experiences. I've learn techniques such as user research, wireframing, prototyping, and usability testing to design effective and engaging interfaces.",
      "User Interface (UI) Design: I acquired skills in UI design, focusing on crafting visually appealing and functional interfaces. Learn how to create pixel-perfect designs, develop design systems, collaborate with developers and as a developer myself, I make sure not to make the development process a living hell in design implementation.",
      "Web Design: I've gained knowledge of web design concepts and best practices, including responsive design, grid systems, web typography, and designing for different devices and screen sizes.",
      "Mobile App Design: I've familiarize yourself with the principles of mobile app design, including designing for iOS and Android platforms, creating app workflows, and understanding mobile design patterns and guidelines.",
      "Design Thinking: I embraced a design thinking mindset, which involves empathy, problem-solving, iteration, and collaboration. My way to approach design challenges is by understanding users' needs and iterating through multiple design solutions.",
      "Prototyping Tools: I've familiarize myself with the prototyping tool, Figma, which allow you to create interactive prototypes to showcase your design concepts and interactions.",
      "Collaboration and Teamwork: I learned to collaborate effectively with other designers, developers, and stakeholders. I know how to give and receive constructive feedback, work in cross-functional teams, and contribute to a positive and collaborative design environment.",
    ],
    card: "small-card",
  },
  {
    imgSrc: "/about/branding.jpg",
    alt: "branding image represented as a hand holding lightbulb as an idea",
    serviceName: "Branding",
    textShort:
      "A strong brand is half the battle. You need to define your brand? Contact me.",
    serviceList: [
      "Brand Strategy: I understand the principles of brand strategy and be able to develop comprehensive brand strategies that align with the client's goals and target audience. This includes conducting market research, defining brand positioning, and developing brand attributes and values.",
      "Brand Identity Design: I strive to create visually cohesive and impactful brand identities that represent the client's brand essence. This involves designing logos, color palettes, typography systems, and visual elements that reflect the brand's personality and values.",
      "Visual Branding: I will help you develop a consistent visual language for the brand across various touchpoints, including marketing collateral, packaging, signage, digital assets, and social media graphics. Ensuring visual consistency while adapting the brand to different mediums and platforms.",
      "Logo Design: Designing unique and memorable logos that encapsulate the essence of the brand. Considering scalability, versatility, and the ability to communicate the brand's identity effectively in different sizes and formats.",
      "Software Proficiency: I'm proficient in industry-standard design software such as Photoshop, and Figma. I've familiarize yourself with tools for creating mockups, presentations, and design prototypes.",
    ],
    card: "small-card",
  },
  {
    imgSrc: "/about/marketing.jpg",
    alt: "marketing image represented as an iphone showning the social media apps",
    serviceName: "Digital Marketing",
    textShort:
      "With SEO & SEM optimization, email and social media management.",
    serviceList: [
      "Digital Marketing Strategy: I've developed a strong understanding of digital marketing principles, channels, and tactics. Be able to create comprehensive digital marketing strategies that align with business goals, target audience, and market trends.",
      "Market Research and Analysis: I'll conduct thorough market research to identify target audience demographics, behavior, needs, and preferences. I'll analyze market trends, competitors, and industry insights to inform digital marketing strategies and campaigns.",
      "Content Marketing: Understand the importance of content in digital marketing and develop strategies for creating and distributing valuable, relevant, and engaging content across various channels. I've familiarize myself with content marketing tools, SEO techniques, and content promotion strategies.",
      "Search Engine Optimization (SEO): I've gained expertise in SEO practices, including keyword research, on-page optimization, technical SEO, and link building. I understand how to optimize website content to improve search engine rankings and organic visibility.",
      "Paid Advertising: I've familiarize yourself with different paid advertising channels such as Google Ads, social media advertising platforms (e.g., Facebook Ads, Instagram Ads, LinkedIn Ads), and display advertising networks. I've learn to plan, execute, and optimize paid ad campaigns to drive traffic, conversions, and brand visibility.",
      "Social Media Marketing: I've develop a deep understanding of major social media platforms and their advertising features.",
      "Email Marketing: I understand the fundamentals of email marketing and automation. Learned how to create effective email campaigns, segment the target audience, personalize content, and measure email campaign performance.",
      "Data Analytics and Reporting: I've Familiarize myself with web analytics tools like Google Analytics to track and analyze digital marketing performance. I'm able to interpret data, generate actionable insights, and create comprehensive reports to measure the success of digital marketing campaigns.",
      "Conversion Rate Optimization (CRO): I'll apply techniques to optimize website and landing page elements to improve conversion rates. I understand A/B testing, user experience (UX) design principles, and persuasive copywriting to maximize conversions and ROI."
    ],
    card: "small-card",
  },
  {
    imgSrc: "/about/development.jpg",
    alt: "development as two monitors shown code in visual studio code",
    serviceName: "Development",
    textShort:
      "Looking to build a robust online presence? Look no further! I specialize in developing top-notch websites and applications with a focus on SEO optimization. \n\nWith expertise in React, Next.js, and Angular, I can create dynamic and engaging online experiences that not only captivate your audience but also rank high in search engine results.",
    serviceList: [
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
    serviceList: [
      "Writing Skills: I believe I have strong writing skills with a command of grammar, spelling, and punctuation. I'm able to write clear, concise, and compelling copy that engages and resonates with the target audience.",
      "Copywriting Techniques: I'm familiarized with various copywriting techniques such as storytelling, persuasion, emotional appeal, and call-to-action (CTA) writing. I understand how to craft headlines, taglines, body copy, and other copy elements effectively.",
      "Audience Understanding: I've develop the ability to understand and empathize with the target audience. Through conducting audience research to identify their needs, motivations, pain points, and preferences, and tailor your copy accordingly.",
      "Brand Voice and Tone: I've learn how to adapt your writing style to match the brand's voice and tone. I understand brand guidelines and be able to consistently reflect the brand's personality and values in your copy.",
      "SEO Copywriting: I've gained knowledge of search engine optimization (SEO) principles and techniques to write copy that is optimized for search engines. I understand keyword research, on-page optimization, meta tags, and other SEO factors that impact search rankings.",
      "Digital Copywriting: I've learned to adapt my writing skills for various digital platforms, including websites, landing pages, email campaigns, social media, and online advertisements. I've learned to write concise and impactful copy that engages online readers and drives desired actions.",
      "Storytelling: I strive to master the art of storytelling in your copywriting. Creating narratives that captivate and connect with the audience, evoke emotions, and effectively convey the brand's message and value proposition.",
    ],
    card: "medium-card",
  },
  {
    imgSrc: "/about/fitness_01.jpg",
    alt: "strong man lifting a bar in the dark",
    serviceName: "Fitness Instructor",
    textShort:
      "With over 15 years experience in the field, countless training plans applied. I can use my knowledge to help you achieve your best shape.",
    serviceList: [
      "Fitness Knowledge: I possess a strong understanding of fitness principles, exercise techniques, anatomy, physiology, and nutrition.",
      "Exercise Instruction: I will demonstrate proficiency in teaching various exercise modalities, including cardiovascular exercises, strength training, flexibility, and functional movements.",
      "Program Design: I'll create well-rounded and effective exercise programs tailored to different fitness levels, goals, and special considerations (e.g., injury prevention, modifications for specific populations).",
      "Personal Training: I'm able to conduct fitness assessments, set realistic goals, design personalized exercise programs, and provide individualized coaching and feedback.",
      "Self-Care and Wellness: I practice self-care and prioritize your own physical and mental well-being. Strive to be a positive role model for my clients by maintaining my own fitness and healthy lifestyle habits.",
    ],
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
                <SevicesModal
                  onClick={closePopup}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                  serviceName={item.serviceName}
                  text={ListIntro}
                  serviceList={item.serviceList}
                  href={'/contact'}
                />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}
