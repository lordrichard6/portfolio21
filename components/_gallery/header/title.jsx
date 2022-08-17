import styled from "styled-components";
import React from "react";

export default function TitleComponent() {
  return (
    <Container>
      <div className="patterns">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="polka-dots"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#4C436B" cx="25" cy="25" r="3"></circle>
            </pattern>
            <style></style>
          </defs>

          <text x="50%" y="60%" textAnchor="middle">
            Gallery
          </text>
        </svg>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: auto;
  animation: showText 6s linear;


  .patterns {
    height: 100vh;
  }

  svg text {
    letter-spacing: 10px;
    stroke: #4c436b;
    font-size: 150px;
    font-weight: 800;
    stroke-width: 3;
    text-transform: uppercase;

    animation: textAnimate 5s infinite alternate;

	@media screen and (max-width: 576px) {
		font-size: 80px;
		letter-spacing: 4px;
	}
  }

  @keyframes showText {
    0% {
      opacity: 0;
    }
	60% {
      opacity: 0;
    }
    100% {
		opacity: 1;
    }
  }

  @keyframes textAnimate {
    0% {
      stroke-dasharray: 0 50%;
      stroke-dashoffset: 20%;
      fill: #b2d6bc;
    }

    100% {
      stroke-dasharray: 50% 0;
      stroke-dashoffstet: -20%;
      fill: hsla(189, 68%, 75%, 0%);
    }
  }
`;
