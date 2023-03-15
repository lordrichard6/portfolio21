import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { bringUp } from "../utilities/framer-animations";

import Layout from "../components/Layout";
import {
  ContactCard,
  CVButton,
  MapComponent,
  ContactForm,
} from "../components/_contact";

export default function ContactPage() {

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
    <Layout>
      <motion.div
        ref={ref}
        variants={bringUp}
        initial="hidden"
        animate={controls}
        className="overflow-hidden flex flex-col justify-center items-center pt-36 pb-10"
      >
        <ContactCard />
        <CVButton />
        <MapComponent />
        <ContactForm />
      </motion.div>
    </Layout>
  );
}
