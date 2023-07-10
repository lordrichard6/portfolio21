import { ImCross } from "react-icons/im";
import { BtnBlue, ImagesComponent } from "../../_shared";

export default function SevicesModal({href, onClick,imgSrc,alt,serviceName,text,serviceList}) {

  return (
    <div className="popup transition ease-in-out delay-150 w-screen h-screen flex-centered">
      <div className="flex-centered relative w-full h-full">
        <div onClick={onClick} className="absolute w-full h-full hue-rotate-180 backdrop-blur-sm" />
        <div className="popup-content glass-container relative w-full max-w-[340px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] max-h-full rounded-lg p-4 m-2">
          <ImCross onClick={onClick} className="text-4xl absolute top-0 right-0 text-sky-700 z-20 m-8 cursor-pointer" />
          <ImagesComponent src={imgSrc} alt={alt} style="picture rounded-2xl border-none overflow-hidden max-h-[400px]" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl my-4">{serviceName}</h1>
          <p className="text-primary mb-2">{text}</p>
          <ul className="mb-4 py-2 border-t-2 border-b-2 border-slate-100 max-h-[180px] sm:max-h-[300px] lg:max-h-[400px] xl:max-h-[600px] overflow-y-auto">
            {serviceList.map((item, index) => <li className="text-lg sm:text-xl font-light my-1" key={index}>{item}</li>)}
          </ul>
          <div className="w-full flex justify-end">
            <BtnBlue href={href} text="Contact me" />
          </div>
        </div>
      </div>
    </div>
  );
}
