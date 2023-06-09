import LogoComponent from "./logo";

import { StarsComponent, CometsComponent } from "../../_shared";
import HomepageTitleComponent from "./title";

export default function HomeHeader() {
  const background = "/home/home_header.jpg"

  return (
    <header className="home-header-section" style={{background: `url(${background})`}} id="top">
      <div className="elements-wrapper flex-centered">
        <HomepageTitleComponent />
        <LogoComponent />
      </div>
      <StarsComponent />
      <CometsComponent />
    </header>
  );
}
