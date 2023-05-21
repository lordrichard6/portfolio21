import Image from "next/image";

import { bringFromRight } from "../../../utilities/framer-animations";
import { EntryAnimation } from "../../_shared";
import NoGlasses from "../../../assets/images/homepage/about-me.png";
import WithGlasses from "../../../assets/images/homepage/about-me_g.png";

export default function AboutPictureComponent() {
  return (
    <EntryAnimation style="about-right-side" animation={bringFromRight}>
      <div className="about-picture-wrapper">
        <div className="outer outer-layer">
          <div className="stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
          <figure className="picture">
            <Image className="me" src={NoGlasses} alt="paulo reizinho" />
          </figure>
          <figure className="picture glasses">
            <Image className="me" src={WithGlasses} alt="paulo reizinho" />
          </figure>
        </div>
      </div>
    </EntryAnimation>
  );
}
