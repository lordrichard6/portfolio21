import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ContactCard from './card'
import MapComponent from './map'
import CVButton from '../Footer/cvButton'
import ContactForm from "./contactForm"

export default function ContactsPage() {
  let { t } = useTranslation();

  const bringUp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.1, type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

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
    <Container
      as={motion.div}
      ref={ref}
      variants={bringUp}
      initial="hidden"
      animate={controls}
      className="overflow-hidden h-screen flex flex-col justify-center items-center pt-36 pb-10"
    >
      <ContactCard />
      <MapComponent />
      <CVButton />
      <ContactForm />
    </Container>
  );
}

const Container = styled.section`
  
`;
