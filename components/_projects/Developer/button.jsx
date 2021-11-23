import styled from "styled-components";

export default function Button() {
  return (
    <ButtonContainer class="cssbuttons-io-button">
      <span>Visit</span>
      <div class="liquid"></div>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  position: relative;
  padding: 15px 20px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 150px;
  overflow: hidden;
  border-radius: 40px;
  border: none;
  cursor: pointer;

  span {
    position: relative;
    color: #fff;
    font-size: 20px;
    letter-spacing: 4px;
    z-index: 1;
  }

  .liquid {
    position: absolute;
    top: -60px;
    left: 0;
    width: 200px;
    height: 200px;
    background: #4973ff;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .liquid::after,
  .liquid::before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #fff;
  }

  .liquid::before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }

  .liquid::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  &:hover .liquid {
    top: -120px;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;
