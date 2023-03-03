import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  bringUp,
  bringFromLeft,
  bringFromRight,
} from "../../../utilities/framer-animations";

import HobbiesTitleComponent from "../Hobbies/title";
import SectionComponent from "./section";

import { frontTechs, backTechs } from "../../../assets/data/techs";

export default function Techs() {
  let { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <section className="mt-10 mb-20 lg:mb-40 md:mx-10">
      <HobbiesTitleComponent title="Techs" />
      <motion.div
        variants={bringUp}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="mx-auto w-3/4 md:w-1/2 2xl:w-1/3 mt-8 mb-12"
      >
        <p className="normal-text">{t("home:techs_description")}</p>
      </motion.div>
      <div className="text-slate-100 grid grid-cols-1 md:grid-cols-2 w-full 2xl:w-4/5 md:divide-x-4 mt-10 mx-auto">
        <motion.div
          variants={bringFromLeft}
          initial="hidden"
          animate={controls}
          className="left"
        >
          <SectionComponent title="Front-End" side={frontTechs} />
        </motion.div>
        <motion.div
          variants={bringFromRight}
          initial="hidden"
          animate={controls}
          className="right"
        >
          <SectionComponent title="Back-End" side={backTechs} />
        </motion.div>
      </div>
    </section>
  );
}
