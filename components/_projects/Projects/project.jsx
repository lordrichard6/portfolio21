import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { useDisclosure } from "@chakra-ui/react";

import ModalComponent from "./modalComponent";
import { BtnSecondaryCTA, ImagesComponent } from "../../_shared";

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
        <ImagesComponent
          style="img relative h-full w-1/2"
          alt={alt}
          src={projectImage}
        />
        <div className="gradient-side absolute top-0 h-full w-full py-4 px-8 lg:px-12 2xl:px-36">
          <h1 className="tracking-tight truncate text-2xl lg:text-4xl xl:text-5xl">
            {title}
          </h1>
          <div className="w-full flex flex-row lg:flex-col">
            <h3 className="italic mt-2">{date}</h3>
            <BtnSecondaryCTA text={t("projects:dev_button")} onClick={onOpen} />
          </div>
        </div>
      </div>
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
  .img {
    width: 50%;
  }
`;
