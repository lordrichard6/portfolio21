/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
// import Image from "next/image";

export default function BtnSecondaryCTA({ onClick, text }) {
  return (
    <ButtonContainer
      className="button-74 w-fit mt-1 lg:mt-4 mx-4 lg:mx-0"
      role="button"
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(0%, 10%);
  }

  @media (min-width: 1024px) {
    /* width: 120px; */
    padding: 0 25px;
    line-height: 50px;
  }
`;
