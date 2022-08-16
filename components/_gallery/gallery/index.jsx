import styled from "styled-components";
import Image from "next/image";

import { gallery01, gallery02, gallery03} from "../../../assets/data";
import someImage from "../../../assets/images/homepage/about-me_02.png";
import coolGuy from "../../../assets/images/homepage/gallery_cool.png";

export default function GalleryItems() {

  return (
    <GalleyWrapper>
      <div className="wrapper">
        <div className="cool">
          <Image src={coolGuy} alt="" objectFit="cover" />
        </div>
        {gallery01.map((item, i) => {
          return (
            <div key={i} className={item.className}>
              <Image src={item.imgSrc} alt={item.alt} objectFit="cover" layout="fill" />
            </div>
          );
        })}
        <div className="group_01">
        {gallery02.map((item, i) => {
          return (
            <div key={i} className={item.className}>
              <Image src={item.imgSrc} alt={item.alt} objectFit="cover" layout="fill" />
            </div>
          );
        })}
        </div>
        <div className="group_02">
        {gallery03.map((item, i) => {
          return (
            <div key={i} className={item.className}>
              <Image src={item.imgSrc} alt={item.alt} objectFit="cover" layout="fill" />
            </div>
          );
        })}
        </div>
      </div>
      <Ocean>
        <div clasNames="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </Ocean>
    </GalleyWrapper>
  );
}

const GalleyWrapper = styled.div`
  position: relative;
  height: 1400px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    height: 1530px;
  }
  @media screen and (max-width: 992px) {
    height: 1970px;
  }

  .wrapper {
    position: relative;
    margin-top: 200px;
    margin-bottom: 200px;
    width: 1450px;
    height: fit-content;
    @media screen and (max-width: 1600px) {
      width: 1050px;
    }
    @media screen and (max-width: 1200px) {
      width: 855px;
    }
    @media screen and (max-width: 992px) {
      width: 650px;
    }
    @media screen and (max-width: 576px) {
      width: 470px;
    }
  }

  .cool {
    position: absolute;
    top: -208px;
    left: 680px;
    @media screen and (max-width: 1600px) {
      left: 480px;
    }
    @media screen and (max-width: 1200px) {
      left: 340px;
      top: -272px;
    }
    @media screen and (max-width: 992px) {
      left: 286px;
      top: -235px;
    }
    @media screen and (max-width: 576px) {
      left: 40px;
      top: -178px;
    }
  }

  .group_01 {
    position: absolute;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1200px) {
      left: -600px;
      top: 120px;
    }
    @media screen and (max-width: 576px) {
      left: 0;
      top: 0;
    }
  }

  .group_02 {
    position: absolute;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1600px) {
      left: -396px;
    }
    @media screen and (max-width: 1200px) {
      left: -600px;
      top: 120px;
    }
    @media screen and (max-width: 576px) {
      left: 0;
      top: 0;
    }
  }
  .shape {
    position: absolute;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background: #20303c;
    display: block;
    height: 220px;
    width: 248px;
    box-shadow: inset 0px 0px 190px rgb(0 0 0 / 90%);

    @media screen and (max-width: 576px) {
      height: 160px;
      width: 188px;
    }
    img {
      object-position: center;
      object-fit: cover;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transform: scale(1.5);
      opacity: 0.2;
      transition: all 0.5s ease-in-out;
      &:hover {
        box-shadow: inset 0px 0px 0px rgb(0 0 0 / 90%);
        background-size: cover;
        transform: scale(1);
        opacity: 1;
      }
    }
    &__01 {
      left: 0;
      top: 120px;
      @media screen and (max-width: 576px) {
        left: -50px;
      }
    }
    &__02 {
      left: 205px;
      top: 0;
      @media screen and (max-width: 576px) {
        left: 90px;
        top: 40px;
      }
    }
    &__03 {
      left: 205px;
      top: 240px;
      @media screen and (max-width: 576px) {
        left: 230px;
        top: 120px;
      }
    }
    &__04 {
      left: 406px;
      top: 120px;
      @media screen and (max-width: 576px) {
        left: 90px;
        top: 200px;
      }
    }
    &__05 {
      left: 406px;
      top: 360px;
      @media screen and (max-width: 576px) {
        left: -50px;
        top: 280px;
      }
    }
    &__06 {
      left: 606px;
      top: 240px;
      @media screen and (max-width: 992px) {
        left: 0;
        top: 1320px;
      }
      @media screen and (max-width: 576px) {
        top: 280px;
        left: 230px;
      }
    }
    &__07 {
      left: 606px;
      top: 480px;
      @media screen and (max-width: 1200px) {
        top: 240px;
      }
      @media screen and (max-width: 576px) {
        top: 440px;
        left: 230px;
      }
    }
    &__08 {
      left: 804px;
      top: 360px;
      @media screen and (max-width: 576px) {
        left: -50px;
        top: 440px;
      }
    }
    &__09 {
      left: 804px;
      top: 600px;
      @media screen and (max-width: 576px) {
        left: 90px;
        top: 520px;
      }
    }
    &__10 {
      left: 606px;
      top: 720px;
      @media screen and (max-width: 576px) {
        top: 600px;
        left: 230px;
      }
    }
    &__11 {
      left: 804px;
      top: 840px;
      @media screen and (max-width: 576px) {
        left: 90px;
        top: 680px;
      }
    }
    &__12 {
      left: 606px;
      top: 960px;
      @media screen and (max-width: 576px) {
        left: -50px;
        top: 760px;
      }
    }
    &__13 {
      left: 1000px;
      top: 960px;
      @media screen and (max-width: 576px) {
        left: -50px;
        top: 1080px;
      }
    }
    &__14 {
      left: 1000px;
      top: 720px;
      @media screen and (max-width: 576px) {
        left: 230px;
        top: 760px;
      }
    }
    &__15 {
      left: 1198px;
      top: 840px;
      @media screen and (max-width: 992px) {
        left: 804px;
        top: 1320px;
      }
      @media screen and (max-width: 576px) {
        left: -50px;
        top: 920px;
      }
    }
    &__16 {
      left: 1198px;
      top: 600px;
      @media screen and (max-width: 992px) {
        left: 1000px;
        top: 1200px;
      }
      @media screen and (max-width: 576px) {
        left: 90px;
        top: 1000px;
      }
    }
  }
`;

const Ocean = styled.div`
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #0f2027;

.wave {
  /* background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;  */
  background-image: url('/wave.svg');
  background-repeat: repeat-x;
  position: absolute;
  bottom: 0;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -170px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

.wave:nth-of-type(3) {
  top: -150px;
  animation: wave 7s cubic-bezier( 0.46, 0.45, 0.73, 0.53) -.125s infinite, swell 6s ease -1.15s infinite;
  opacity: 1;
}

.wave:nth-of-type(3) {
  top: -150px;
  animation: wave 7s cubic-bezier( 0.26, 0.55, 0.63, 0.53) -.125s infinite, swell 6s ease -1.15s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
`;