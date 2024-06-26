import { delay } from "framer-motion";

export const bringUp = {
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

export const bringUp2 = (delay) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.1, delay: (delay - 0.8), type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  }
};

export const bringDown = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 2.0, type: "spring", bounce: 0.4 },
  },
  hidden: {
    opacity: 0,
    y: -100,
  },
};

export const bringFromLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 2.0, type: "spring", bounce: 0.4 },
  },
  hidden: {
    opacity: 0,
    x: -200,
  },
};

export const bringFromLeft02 = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, duration: 2.0, type: "spring", bounce: 0.4 },
  },
  hidden: {
    opacity: 0,
    x: -200,
  },
};

export const bringFromLeft03 = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.8, duration: 2.0, type: "spring", bounce: 0.4 },
  },
  hidden: {
    opacity: 0,
    x: -200,
  },
};

export const bringFromRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 2.0, type: "spring", bounce: 0.4 },
  },
  hidden: {
    opacity: 0,
    x: 200,
  },
};

export const blured = {
  visible: {
    opacity: 1,
    filter: 'blur(0)',
    transition: { delay: 0.4, duration: 1, type: "spring", bounce: 0.4 },
  },
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
};

export const scaled = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 1.4, duration: 1.8, type: "spring", bounce: 0.8 },
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
};

export const textFromLeft = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 2, type: "spring", bounce: 0.2 },
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
};

export const textFromRight = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, type: "spring", bounce: 0.2, delay: 0.4 },
  },
  hidden: {
    x: 100,
    opacity: 0,
  },
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};