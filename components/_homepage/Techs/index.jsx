import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
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
    threshold: 0.2,
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
    <section ref={ref} className="mt-10 mb-20 lg:mb-40 md:mx-10">
      <HobbiesTitleComponent title="Techs" text={t("home:techs_description")} />
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
