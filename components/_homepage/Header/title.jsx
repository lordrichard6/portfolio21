import styled from "styled-components";
// import ReactTypingEffect from "react-typing-effect";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";

export default function HomepageTitleComponent() {
  let { t } = useTranslation();

  return (
    <div className="text-slate-100 w-full lg:w-1/2 flex flex-col z-10">
      <Title className="mb-4 text-5xl md:text-7xl xl:text-8xl  uppercase font-black lg:leading-tight text-center">
        <h1>{t("home:header_01")}</h1>
        <h1>{t("home:header_02")}</h1>
        <h1>{t("home:header_03")}</h1>
      </Title>
      <SubTitle className="mx-auto text-slate-100 lg:text-slate-900 text-2xl xl:text-4xl text-center font-medium h-[50px]">
        {/* {t("home:header_slogan")} */}
        <div className="font-black">
          Solutions
        </div>
        <div className="">
          <span>dont fall from the sky</span>
        </div>
      </SubTitle>
    </div>
  );
}

const Title = styled.div`
  font-family: "Work Sans", sans-serif;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};

  /* animation: showTitle 3.8s linear; */
  animation: glow 1s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0 0 40px #2d9da9;
    }
    to {
      text-shadow: 0 0 80px #34b3c1, 0 0 30px #4dbbc7;
    }
  }
`;

const SubTitle = styled.div`
font-family: "Work Sans", sans-serif;
text-transform: uppercase;
height: 60px;
@media (min-width: 768px) {
  display: flex;
}

  div {
  overflow-y: visible;
  white-space:nowrap;
}

div:first-of-type {  
  text-shadow: 0 0 80px #7634c1, 0 0 30px #8a4dc7;  
  @media (min-width: 768px) {
    animation: showup 7s infinite;
  }
}

div:last-of-type {
  overflow-x:hidden;
  letter-spacing: -3px;
  /* padding-top: 28px; */
  @media (min-width: 768px) {
    border-left: 4px solid #fff;
    width:0px;
    padding-top: 18px;
    animation: reveal-small 7s infinite;
  }
  @media (min-width: 1024px) {
    animation: reveal 7s infinite;
  }
}

div:last-of-type span {
  text-shadow: 0 0 80px #7634c1, 0 0 30px #8a4dc7;  
  @media (min-width: 768px) {
    margin-left:-355px;
    animation: slidein 7s infinite;
  }
}
  @keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:420px;}
    80% {opacity:1;}
    100% {opacity:0;width:420px;}
}
@keyframes reveal-small {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:260px;}
    80% {opacity:1;}
    100% {opacity:0;width:260px;}
}
`;
