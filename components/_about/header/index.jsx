import React, { useRef } from "react";
import { ImagesComponent } from "../../_shared";
import { motion, useScroll, useTransform } from 'framer-motion'


export default function AboutHeader() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const title = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
  const leaf = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const plant = useTransform(scrollYProgress, [0, 1], ["0%", "2%"])
  const tree = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])
  const hill5 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const hill4 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const hill3 = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"])
  const hill2 = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"])
  const hill1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <header ref={ref} id="top" className="about-section-header relative w-screen h-screen flex-centered">
      <motion.div style={{ y: hill1 }} id="hill1" className="jungle">
      <ImagesComponent src="/about/hill1.png" alt="" />
      </motion.div>
      <motion.div style={{ x: hill2 }} id="hill2" className="jungle">
      <ImagesComponent src="/about/hill2.png" alt="" />
      </motion.div>
      <motion.div style={{ y: hill3 }} id="hill3" className="jungle">
        <ImagesComponent src="/about/hill3.png" alt="" />
      </motion.div>
      <motion.h1 style={{ y: title }} id="about-title" className="about-title text-7xl md:text-[10rem] uppercase font-black text-slate-900 tracking-wider" >About me</motion.h1>
      <motion.div style={{ x: hill4 }} id="hill4" className="jungle">
        <ImagesComponent src="/about/hill4.png" alt="" />
      </motion.div>
      <motion.div style={{ x: hill5 }} id="hill5" className="jungle">
        <ImagesComponent src="/about/hill5.png" alt="" />
      </motion.div>
      <motion.div style={{ x: tree }} id="tree" className="jungle">
        <ImagesComponent src="/about/tree.png" alt="" />
      </motion.div>
      <motion.div style={{ x: leaf }} id="leaf" className="jungle">
        <ImagesComponent src="/about/leaf.png" alt="" />
      </motion.div>
      <motion.div style={{ y: plant }} id="plant" className="jungle">
        <ImagesComponent src="/about/plant.png" alt="" />
      </motion.div>
    </header>
  );
}
