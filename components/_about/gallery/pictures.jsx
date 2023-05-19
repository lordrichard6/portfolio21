import { EntryAnimation } from "../../_shared";
import { bringUp } from "../../../utilities/framer-animations";
import { ImagesComponent } from "../../_shared";

export default function PicturesComponent({ className, imgSrc, alt, onClick }) {
  return (
    <>
      <EntryAnimation style={className} animation={bringUp}>
        <div className="inner-shape" onClick={onClick}>
          <ImagesComponent src={imgSrc} alt={alt} style="" />
        </div>
      </EntryAnimation>
    </>
  );
}
