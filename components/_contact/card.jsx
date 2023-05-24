import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import { SiMinutemailer } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

import MeFormalG from "../../assets/images/homepage/about-me_g.png";
import logo from "../../public/logo_signature.png";
import SocialLinksComponent from "../Layout/Footer/social_links";

export default function ContactCard() {
  let { t } = useTranslation();

  return (
    <>
    <h1 className="text-4xl font-semibold mb-6">My contact card</h1>
      <Card className="h-96 w-80 sm:w-[40rem] sm:h-[25rem] rounded-md relative">
        <h2 className="hidden sm:block blur-[1px] text-slate-100 text-xl text-center">
          Hover with your mouse
        </h2>
        <h2 className="sm:hidden blur-[1px] text-slate-100 text-xl text-center">
          Press on the card
        </h2>
        <div className="card__side card__side--front shadow-xl flex justify-center items-center max-h-full rounded-md overflow-hidden ">
          <div className="z-0 w-full sm:w-3/4 opacity-20 blur-[4px] absolute right-[-40px] top-[-25px] sm:top-[-45px]">
            <Image src={MeFormalG} alt="paulo reizinho" />
          </div>
          <div className="w-3/4 sm:w-1/2">
            <Image src={logo} alt="paulo lopes reizinho" responsive />
          </div>
        </div>

        <div className="card__side card__side--back card__side--back shadow-xl flex flex-column justify-center items-center max-h-full overflow-hidden">
          <div className="z-0 w-full sm:w-3/4 opacity-60 blur-[1px] absolute right-[-40px] top-[-15px] sm:top-[-45px]">
            <Image src={MeFormalG} alt="paulo reizinho" />
          </div>
          <SocialLinksComponent />
          <div className="flex text-slate-100 justify-center items-end z-10">
            <SiMinutemailer
              className="text-xl mr-2"
              alt="github paulo reizinho profile"
            />
            <p>
              <a href="mailto: paulolopesreizinho@gmail.com">
                paulolopesreizinho@gmail.com
              </a>
            </p>
          </div>
          <div className="flex text-slate-100 justify-center items-end z-10">
            <MdLocationOn
              className="text-xl mr-2"
              alt="github paulo reizinho profile"
            />
            <p>
              <a href="https://goo.gl/maps/9v4ozkK13GCxri2C9">
                Zurich - Schweiz
              </a>
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}

const Card = styled.div`
  -webkit-perspective: 250rem;
  perspective: 250rem;
  -moz-perspective: 250rem;

  h2 {
    animation: showText 6s linear infinite both;
  }

  .card__side {
    height: 100%;
    flex-direction: column;
    -webkit-transition: all 0.8s ease;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  }

  .card__side--front {
    background-color: #fff;
  }

  .card__side--front {
    background: url("/pattern.png"), linear-gradient(to right, #42275a, #734b6d);
  }

  .card__side--back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .card__side--back {
    background: url("/pattern.png"), linear-gradient(to right, #42275a, #734b6d);
  }

  &:hover .card__side--front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }

  &:hover .card__side--back {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }

  @keyframes showText {
    0% {
      transform: translate(0);
      opacity: 0;
    }

    60% {
      transform: translate(0, -2rem);
      opacity: 1;
    }

    100% {
      transform: translate(0);
      opacity: 0;
    }
  }
`;
