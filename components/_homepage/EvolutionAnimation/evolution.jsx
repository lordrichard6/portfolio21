import styled from "styled-components";
import Image from "next/image";

import Man_01 from "../../../assets/images/homepage/evo_01.png";
import Man_02 from "../../../assets/images/homepage/evo_02.png";
import Man_03 from "../../../assets/images/homepage/evo_03.png";
import Man_04 from "../../../assets/images/homepage/evo_04.png";
import Man_05 from "../../../assets/images/homepage/evo_05.png";
import Man_06 from "../../../assets/images/homepage/evo_06.png";
import Man_07 from "../../../assets/images/homepage/evo_07.png";
import Man_08 from "../../../assets/images/homepage/evo_08.png";
import Man_09 from "../../../assets/images/homepage/evo_09.png";

const mankind = [
  {
    classEvo: "evo_01",
    img: Man_01,
  },
  {
    classEvo: "evo_02",
    img: Man_02,
  },
  {
    classEvo: "evo_03",
    img: Man_03,
  },
  {
    classEvo: "evo_04",
    img: Man_04,
  },
  {
    classEvo: "evo_05",
    img: Man_05,
  },
  {
    classEvo: "evo_06",
    img: Man_06,
  },
  {
    classEvo: "evo_07",
    img: Man_07,
  },
  {
    classEvo: "evo_08",
    img: Man_08,
  },
  {
    classEvo: "evo_09",
    img: Man_09,
  },
];

function ManEvo({ classEvo, img }) {
  return (
    <figure className={`evolution ${classEvo}`}>
      <Image src={img} alt="mankind evolution" />
    </figure>
  );
}

export default function EvolutionComponent() {
  return (
    <Container>
      {mankind.map((man, i) => {
        return <ManEvo key={i} classEvo={man.classEvo} img={man.img} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  

  .evolution {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    position: absolute;

    @media screen and (max-width: 576px) {
      width: 400px;
    }

    &.evo_01 {
      animation: fade01 12s ease-in-out infinite;
    }
    &.evo_02 {
      animation: fade02 12s ease-in-out infinite;
    }
    &.evo_03 {
      animation: fade03 12s ease-in-out infinite;
    }
    &.evo_04 {
      animation: fade04 12s ease-in-out infinite;
    }
    &.evo_05 {
      animation: fade05 12s ease-in-out infinite;
    }
    &.evo_06 {
      animation: fade06 12s ease-in-out infinite;
    }
    &.evo_07 {
      animation: fade07 12s ease-in-out infinite;
    }
    &.evo_08 {
      animation: fade08 12s ease-in-out infinite;
    }
    &.evo_09 {
      animation: fade09 12s ease-in-out infinite;
    }
  }


  @keyframes fade01 {
    0% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    5% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    15% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    20% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
  }
  @keyframes fade02 {
    0% {
      opacity: 0;
    }
    15% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    20% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    25% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    30% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade03 {
    0% {
      opacity: 0;
    }
    25% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    30% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    35% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    40% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade04 {
    0% {
      opacity: 0;
    }
    35% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    40% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    45% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    50% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade05 {
    0% {
      opacity: 0;
    }
    45% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    50% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    55% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    60% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade06 {
    0% {
      opacity: 0;
    }
    55% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    60% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    65% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    70% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade07 {
    0% {
      opacity: 0;
    }
    65% {
      filter: blur(30px) invert(1);
      0opacity: 0;
    }
    70% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    75% {
      filter: blur(0) invert(0);
0      opacity: 1;
    }
    80% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade08 {
    0% {
      opacity: 0;
    }
    75% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    80% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    85% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    90% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade09 {
    0% {
      opacity: 0;
    }
    85% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
    90% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    95% {
      filter: blur(0) invert(0);
      opacity: 1;
    }
    100% {
      filter: blur(30px) invert(1);
      opacity: 0;
    }
  }
`;
