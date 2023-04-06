/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
// import Image from "next/image";

import { useDisclosure } from "@chakra-ui/react";

import ModalComponent from "./modalComponent";

export default function ProjectComponent({
  type,
  title,
  creator,
  contribution,
  projectImage,
  alt,
  link,
  text,
  techs,
  date,
  // icon,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let { t } = useTranslation();

  return (
    <Container>
      <div
        className={`${type} relative w-4/5 h-[100px] lg:h-[200px] my-4 overflow-hidden`}
      >
        <img
          className="h-full w-1/2 object-cover object-center"
          src={projectImage}
          alt={alt}
        />
        <div className="gradient-side absolute top-0 h-full w-full py-4 px-8 lg:px-12 2xl:px-36">
          <h1 className="tracking-tight truncate text-2xl lg:text-4xl xl:text-5xl">
            {title}
          </h1>
          <div className="w-full flex flex-row lg:flex-col">
            <h3 className="italic mt-2">{date}</h3>
            <button className="button-74 w-fit mt-1 lg:mt-4 mx-4 lg:mx-0" role="button" onClick={onOpen}>
              {t("projects:dev_button")}
            </button>
          </div>
        </div>
      </div>
      {/* <div className={`${type} relative w-1/2 border-slate-100 py-2`}>
        <div className="slide flex justify-center sm:items-center h-20 sm:h-14 lg:h-20 bg-orange-400 md:w-fit">
          <h1 className="tracking-tight truncate mx-1 sm:mx-4 text-2xl lg:text-4xl xl:text-5xl">
            {title}
          </h1>
          <div className="icon flex md:opacity-0 mt-3 sm:mt-0 text-2xl md:text-4xl absolute top-1/2 -translate-y-1/2">
            {icon}
          </div>
          <button
            className="button-74 md:opacity-0 mt-3 sm:mt-0 absolute top-1/2 -translate-y-1/2"
            role="button"
            onClick={onOpen}
          >
            {t("projects:dev_button")} */}
      {/* <a href={link} target="_blank" rel="noopener noreferrer">
              {t("projects:dev_button")}
            </a> */}
      {/* </button>
          <h3 className="absolute text-gray-900 bg-slate-100 rounded-md px-1 top-1/2 -translate-y-1/2">
            {date}
          </h3>
        </div>
      </div> */}
      <ModalComponent
        techs={techs}
        text={text}
        link={link}
        alt={alt}
        projectImage={projectImage}
        contribution={contribution}
        creator={creator}
        title={title}
        openIt={isOpen}
        closeIt={onClose}
      />
    </Container>
  );
}

const Container = styled.div`
  .slide {
    &:hover {
      width: auto;
      .icon {
        opacity: 1;
      }
      button {
        opacity: 1;
      }
    }
  }
  .icon {
    svg {
      filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
      margin: 0 2px;
    }
  }
  h1 {
    font-weight: 400;
    text-shadow: 1px 2px 4px #00000081;
  }
  .button-74 {
    background-color: #fbeee0;
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 18px;
    padding: 0 18px;
    line-height: 32px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-74:hover {
    background-color: #fff;
  }

  .button-74:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(0%, 10%);
  }

  @media (min-width: 1024px) {
    .button-74 {
      /* width: 120px; */
      padding: 0 25px;
      line-height: 50px;
    }
  }
`;
