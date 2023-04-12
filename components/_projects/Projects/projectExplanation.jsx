import React from "react";
import styled from "styled-components";

import useTranslation from "next-translate/useTranslation";

import { RxDot } from "react-icons/rx";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

export default function ProjectsExplanation() {
  let { t } = useTranslation();

  return (
    <SectionContainer className="mx-8 lg:w-[800px] h-[360px] sm:h-[400px] rounded-lg border-4 border-slate-100 relative overflow-hidden">
      <div className="mx-2 lg:mx-10 mt-2 sm:mt-8 text-lg lg:text-xl flex">
        <RxDot className="text-4xl" />
        <p>
          From the right are my personal projects, which I&apos;ve done
          completly on my own, either to learn a new tech or just felling
          creative.
        </p>
      </div>
      <div className="tutorial-personal w-4/5 h-[60px] sm:h-[100px] rounded-lg border-4 border-slate-100 absolute top-24 -right-5 flex items-center">
        <TiArrowLeftThick className="text-6xl ml-4" />
      </div>
      <div className="mx-2 lg:mx-10 mt-16 sm:mt-32 text-lg lg:text-xl flex">
        <RxDot className="text-4xl" />
        <p>
          From the left are my profissional projects, which either I done for
          profissional use or I&apos;ve contributed in it&apos;s development.
        </p>
      </div>
      <div className="tutorial-profissional w-4/5 h-[60px] sm:h-[100px] rounded-lg border-4 border-slate-100 absolute bottom-3 -left-5 translate-x-[-100%] flex items-center">
        <TiArrowRightThick className="text-6xl ml-auto mr-4" />
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  .tutorial-personal {
    animation: tutoPersonal 4s infinite ease-in-out;
  }
  .tutorial-profissional {
    animation: tutoProfissional 4s 1.4s infinite ease-in-out;
  }
`;
