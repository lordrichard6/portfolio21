import styled from "styled-components";
import Image from "next/image";

import Polygons from "../../../assets/images/homepage/poligons.svg";
import Polygon from "../../../assets/images/homepage/hexagon_small.svg";

export default function PoligonsAnimationComponent() {
  return (
    <Container>
      <div className="polygons polygon_01">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_02">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_03">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_04">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_05">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_06">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_07">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_08">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_09">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
      <div className="polygons polygon_10">
        <Image src={Polygon} layout="responsive" alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .polygons {
    bottom: -50%;
    right: 0;
    width: 385px;
    position: absolute;

    @media screen and (max-width: 576px) {
      bottom: -100%;
    }

    &.polygon_01 {
      animation: fadePol01 7s ease-in-out infinite;
    } 
    &.polygon_02 {
      animation: fadePol02 8s ease-in-out infinite;
    } 
    &.polygon_03 {
      animation: fadePol03 6.4s ease-in-out infinite;
    }
    &.polygon_04 {
      animation: fadePol04 5.6s ease-in-out infinite;
    } 
    &.polygon_05 {
      animation: fadePol05 7.4s ease-in-out infinite;
    } 
    &.polygon_06 {
      animation: fadePol06 8.4s ease-in-out infinite;
    }
    &.polygon_07 {
      animation: fadePol07 4.8s ease-in-out infinite;
    }    
    &.polygon_08 {
      animation: fadePol03 3.8s ease-in-out infinite;
      bottom: -80%;
      right: 12%;
    }  
    &.polygon_09 {
      animation: fadePol04 4.2s ease-in-out infinite;
      bottom: -44%;
      right: 8%;
    }  
    &.polygon_10 {
      animation: fadePol06 3.2s ease-in-out infinite;
      bottom: -66%;
      right: 4%;
    }  

    @keyframes fadePol01 {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translate(0, 0) scale(1) rotate(0deg);
      }
      60% {
        opacity: 1;
      }
      90% {
        opacity: 0;
        transform: translate(0, -270%) scale(0.2) rotate(80deg);
      }
      100% {
        opacity: 0;
        filter: blur(2px);
        transform: translate(0, -300%) scale(0.2) rotate(90deg);
      }
    }
    @keyframes fadePol02 {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translate(40%, 40%) scale(0.8) rotate(45deg);
      }
      80% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        filter: blur(2px);
        transform: translate(40%, -280%) scale(0.1) rotate(-90deg);
      }
    }
    @keyframes fadePol03 {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translate(-40%, 50%) scale(1.4) rotate(-45deg);
      }
      80% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        filter: blur(2px);
        transform: translate(-40%, -340%) scale(0.05) rotate(180deg);
      }
    }
    @keyframes fadePol04 {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translate(-20%, 30%) scale(1.2) rotate(35deg);
      }
      80% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        filter: blur(2px);
        transform: translate(-40%, -270%) scale(0.07) rotate(120deg);
      }
    }
    @keyframes fadePol05 {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translate(20%, 80%) scale(1.4) rotate(-60deg);
      }
      80% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        filter: blur(2px);
        transform: translate(20%, -320%) scale(0.2) rotate(200deg);
      }
    }
    @keyframes fadePol06 {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translate(-60%, 40%) scale(1) rotate(65deg);
      }
      80% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        filter: blur(2px);
        transform: translate(-50%, -220%) scale(0.09) rotate(-250deg);
      }
    }
    @keyframes fadePol07 {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translate(-10%, 70%) scale(1.6) rotate(4deg);
      }
      80% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        filter: blur(2px);
        transform: translate(-20%, -280%) scale(0.07) rotate(55deg);
      }
    }
  }
`;
