import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { textFromLeft } from "../../utilities/framer-animations";
import { EntryAnimation, ImagesComponent } from "./";

// tilt effect
// const image = document.querySelector("h1");

// image.addEventListener("mousemove", event => {
//   const { top, bottom, left, right } = event.target.getBoundingClientRect();

//   const middleX = (right - left) / 2;
//   const middleY = (bottom - top) / 2;

//   const clientX = event.clientX;
//   const clientY = event.clientY;

//   const offsetX = (clientX - middleX) / middleX;
//   const offsetY = (middleY - clientY) / middleY;

//   event.target.style.transform = `perspective(1000px) rotateY(${offsetX *
//     5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
// });

export default function SharedQuotes({img, alt, quote, author, style}) {

  return (
    <div className={`shared-quotes section-width-default flex-centered h-full ${style}`}>
      <div className="image-quote absolute top-1/2 left-1/2 w-[600px] lg:w-[800px]">
        <ImagesComponent
          style="w-full opacity-30"
          alt={alt}
          src={img}
        />
      </div>
      <EntryAnimation animation={textFromLeft} style="text-quote text-primary flex flex-wrap">
        <div className="quote-wrapper relative">
          <div className="front-square w-[60%] lg:w-[80%] xl:w-[90%] top-0 right-0 absolute border-slate-100 border-4 rounded-md" />
          <div className="front-square h-[40%] top-0 right-0 absolute border-slate-100 border-4 rounded-md" />
          <FaQuoteLeft className="text-7xl lg:text-8xl float-left mr-4" />
          <h1 className="text-justify mt-14 mb-4 mx-8 lg:mx-14 xl:mx-24">{quote}</h1>
          <FaQuoteRight className="text-7xl lg:text-8xl float-right ml-4 -mt-10" />
          <div className="front-square h-[40%] bottom-0 left-0 absolute border-slate-100 border-4 rounded-md" />
          <div className="front-square w-[60%] lg:w-[80%] xl:w-[90%] bottom-0 left-0 absolute border-slate-100 border-4 rounded-md" />
        </div>
        <h2 className="font-bold mt-6">{author}</h2>
      </EntryAnimation>
    </div>
  );
}
