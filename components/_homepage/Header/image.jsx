import SignatureComponent from "./signature";
import { EntryAnimation, ImagesComponent } from "../../_shared";
import { bringFromRight } from "../../../utilities/framer-animations";
import { home_heroImage } from "../../../assets/data";

export default function MyImage() {
  return (
    <div className="logo-container flex-centered w-full xl:w-1/2 z-10">
      <EntryAnimation style="w-full md:w-[75vw] lg:w-full max-h-[80vh] max-w-[700px]" animation={bringFromRight}>
        <ImagesComponent
          style="image w-full p-0 xl:p-6 lg:mx-auto"
          alt={home_heroImage.alt}
          src={home_heroImage.img}
          priority="true"
        />
        
      </EntryAnimation>
      <SignatureComponent />
    </div>
  );
}