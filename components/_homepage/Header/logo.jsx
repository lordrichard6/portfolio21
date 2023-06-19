import { EntryAnimation, ImagesComponent } from "../../_shared";
import { bringFromRight } from "../../../utilities/framer-animations";
import SignatureComponent from "./signature";

export default function LogoComponent() {
  return (
    <div className="logo-container">
      <EntryAnimation animation={bringFromRight}>
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