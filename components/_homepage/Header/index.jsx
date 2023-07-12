import MyImage from "./image";

import { StarsComponent, CometsComponent } from "../../_shared";
import HomepageTitleComponent from "./title";

export default function HomeHeader() {
  const background = "/home/home_header.jpg"

  return (
    <header className="home-header-section w-screen min-h-screen max-h-screen relative flex justify-center items-center py-24" style={{background: `url(${background})`}} id="top">
      <div className="elements-wrapper flex-centered section-width-default w-full flex-col-reverse xl:flex-row z-20 relative">
        <HomepageTitleComponent />
        <MyImage />
      </div>
      <StarsComponent />
      <CometsComponent />
    </header>
  );
}
