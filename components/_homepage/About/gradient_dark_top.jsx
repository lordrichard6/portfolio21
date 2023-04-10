import styled from "styled-components";

export default function GradientTopDark() {

  return (  
      <BackgroundGradient className="absolute w-full h-full" />
  );
}

const BackgroundGradient = styled.div`
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.2) 38.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;
