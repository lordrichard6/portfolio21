import styled from "styled-components";

export default function AboutTitleComponent({ title }) {
  return (
    <TitleContainer>
      <h1>{title}</h1>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  h1 {
    animation: text-shadow 1.5s ease-in-out infinite;
    font-size: 5em;
    font-weight: 900;
    line-height: 1;

    @media screen and (min-width: 1440px) {
      font-size: 5rem;
    }
    @media screen and (max-width: 1024px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 390px) {
      text-align: center;
    }
  }

  h1:hover {
    animation-play-state: paused;
  }

  @keyframes text-shadow {
    0% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }

    20% {
      transform: translateY(-1em);
      text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
        0 -0.25em 0 #fefc4b;
    }

    40% {
      transform: translateY(0.5em);
      text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
        0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
    }

    60% {
      transform: translateY(-0.25em);
      text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
        0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
    }

    80% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;
