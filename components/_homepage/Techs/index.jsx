import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HobbiesTitleComponent from "../Hobbies/title";
import SingleTech from "./tech";
import { frontTechs, backTechs } from "../../../assets/data/techs";

export default function Techs() {
  let { t } = useTranslation();

  const bringUp = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.5, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  const bringFromLeft = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.4, duration: 2.5, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  };

  const bringFromRight = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.6, duration: 2.5, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      x: 200,
    },
  };

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
        className="text-slate-100 mx-auto text-xl w-3/4 md:w-1/2 mt-8 mb-12"
      >
        <p>{t("home:techs_description")}</p>
      </motion.div>
      <div className="text-slate-100 grid grid-cols-1 md:grid-cols-2 w-full md:divide-x-4 mt-10">
        <motion.div 
        variants={bringFromLeft}
        initial="hidden"
        animate={controls}
        className="left">
          <h2 className="my-6 text-center text-4xl antialiased font-semibold uppercase underline decoration-wavy decoration-2 underline-offset-6 drop-shadow-lg -skew-y-6">
            Front-end
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 place-items-end">
            {frontTechs.map((tech, i) => {
              return (
                <SingleTech
                  key={i}
                  tech={tech.tech}
                  icon={tech.icon}
                  text={t(tech.text)}
                />
              );
            })}
          </div>
        </motion.div>
        <motion.div 
                variants={bringFromRight}
                initial="hidden"
                animate={controls}
                className="right">
          <h2 className="my-6 text-center text-4xl antialiased font-semibold uppercase underline decoration-wavy decoration-2 underline-offset-6 drop-shadow-lg -skew-y-6">
            Back-end
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 place-items-end">
            {backTechs.map((tech, i) => {
              return (
                <SingleTech
                  key={i}
                  tech={tech.tech}
                  icon={tech.icon}
                  text={t(tech.text)}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
