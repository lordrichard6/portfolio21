import MyImage from "./image";

import HomepageTitleComponent from "./title";
import { StarsComponent, CometsComponent } from "../../_shared";
import { home_heroBackground } from "../../../assets/data";
import Image from "next/image";

export default function HomeHeader() {

  return (
    <header className="home-header-section w-screen min-h-screen max-h-screen relative flex justify-center items-center py-24" 
            // style={{ background: `url(${home_heroBackground.img})` }} 
            id="top"
    >
      <div className="absolute w-full h-screen">
        <Image className="shared-image object-cover object-center" 
                src={home_heroBackground.img} 
                alt={home_heroBackground.alt} 
                fill
                priority="true" 
                quality={100}
                // placeholder="blur"
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
        />
      </div>
      <div className="elements-wrapper flex-centered section-width-default w-full flex-col-reverse xl:flex-row z-20 relative">
        <HomepageTitleComponent />
        <MyImage />
      </div>
      <StarsComponent />
      <CometsComponent />
    </header>
  );
}
