import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { bringUp} from '../../../utilities/framer-animations'

import AboutTitleComponent from "./title";

export default function AboutTextComponent() {
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
    <motion.div
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
      className="text-slate-100 mt-12 mr-0 lg:mr-2 z-10"
    >
      <AboutTitleComponent title={t("home:about_title")} />
      <p className="text-xl 2xl:text-2xl font-normal antialiased my-6">
        {t("home:about_text01")}
        <br />
        <br />
        {t("home:about_text02")}
        <br />
        <br />
        {t("home:about_text03")}
        <br />
        <br />
        {t("home:about_text04")}
        <br />
        <br />
        {t("home:about_text05")}
      </p>
    </motion.div>
  );
}
