import LogoComponent from "./logo";

import { StarsComponent, CometsComponent } from "../../_shared";
import HomepageTitleComponent from "./title";

export default function HomeHeader() {
  return (
    <header className="home-header-section" id="top">
      <StarsComponent />
      <CometsComponent />
      <div className="elements-wrapper flex-centered">
        <HomepageTitleComponent />
        <LogoComponent />
      </div>
    </header>
  );
}
