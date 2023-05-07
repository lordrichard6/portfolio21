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