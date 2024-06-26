import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EntryAnimation({ children, animation, style, threshold }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold:  threshold,
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
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={controls}
      className={`${style}`}
    >
      {children}
    </motion.div>
  );
}
