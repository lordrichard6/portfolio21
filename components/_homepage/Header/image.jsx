import { EntryAnimation, ImagesComponent } from "../../_shared";
import { bringFromRight } from "../../../utilities/framer-animations";
import SignatureComponent from "./signature";

export default function MyImage() {
  return (
    <div className="logo-container flex-centered w-full xl:w-1/2 relative z-10">
      <EntryAnimation style="w-full" animation={bringFromRight}>
        <ImagesComponent
          style="image w-full p-0 xl:p-6 max-w-[700px] lg:mx-auto"
          alt="paulo reizinho crossed arms"
          src="/logo_crossed.png"
          priority
        />
        
      </EntryAnimation>
      <SignatureComponent />
    </div>
  );
}