import MyImage from "./image";

import HomepageTitleComponent from "./title";
import { StarsComponent, CometsComponent } from "../../_shared";
import { home_heroBackground } from "../../../assets/data";

export default function HomeHeader() {

  return (
    <header className="home-header-section w-screen min-h-screen max-h-screen relative flex justify-center items-center py-24" style={{ background: `url(${home_heroBackground.img})` }} id="top">
      <div className="elements-wrapper flex-centered section-width-default w-full flex-col-reverse xl:flex-row z-20 relative">
        <HomepageTitleComponent />
        <MyImage />
      </div>
      <StarsComponent />
      <CometsComponent />
    </header>
  );
}
