import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import NoGlasses from "../../../assets/images/homepage/about-me.png";
import WithGlasses from "../../../assets/images/homepage/about-me_g.png";

export default function AboutPictureComponent() {
  let { t } = useTranslation();

  return (
    <div className="about-right-side">
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
    </div>
  );
}