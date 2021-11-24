import styled from "styled-components";

import { Colors } from "../../assets/variables";

export default function Button({ text }) {
  return (
    <AniButton className="font-color">
      <button>{text}</button>
    </AniButton>
  );
}

const AniButton = styled.div`
  button,
  button::after {
    margin: 1rem;
    padding: 1.5rem 2rem;
    font-size: 2.5rem;
    font-family: inherit;
    background: linear-gradient(45deg, transparent 5%, ${Colors.primary} 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 1;
    box-shadow: 6px 0px 0px #022124;
    outline: transparent;
    position: relative;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 764px) {
      font-size: 2rem;
    }
  }

  button::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "REIZINHO";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #f66200 3%,
      #a800f6 5%,
      #01ff23 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
    animation: 1s glitch infinite;
    animation-timing-function: steps(2, end);
  }

  button:hover {
    transform: scale(1.1) translateY(-0.5rem);
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    /* animation: 1s glitch infinite;
    animation-timing-function: steps(2, end); */
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }

    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }

    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }

    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }

    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }

    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }

    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }

    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }

    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }

    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }

    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;
