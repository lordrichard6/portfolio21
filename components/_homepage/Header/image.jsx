import { EntryAnimation, ImagesComponent } from "../../_shared";
import { bringFromRight } from "../../../utilities/framer-animations";
import SignatureComponent from "./signature";

export default function MyImage() {
  return (
    <div className="logo-container flex-centered">
      <EntryAnimation className="w-full" animation={bringFromRight}>
        <ImagesComponent
          style="image"
          alt="paulo reizinho crossed arms"
          src="/logo_crossed.png"
        />
      </EntryAnimation>
      <SignatureComponent />
    </div>
  );
}