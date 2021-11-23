import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import { hobbies } from "../../../assets/data";
import HobbyComponent from "./hobby";

export default function MyPassions() {
  return (
    <SectionContainer>
      <h1>My Passions</h1>
      <HobbiesContainer>
        {hobbies.map((item, i) => {
          return (
            <HobbyComponent
              key={i}
              className={item.className}
              imgSrc={item.imgSrc}
              alt={item.alt}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </HobbiesContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  background: url("/pattern.png"), ${Colors.primary};

  h1 {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 1px 2px 3px #00000081;

    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
  }
`;

const HobbiesContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  @media screen and (min-width: 2560px) {
    width: 50%;
  }

  .hobby {
    display: flex;
    flex-direction: row;
    padding: 1rem 0;

    @media screen and (max-width: 400px) {
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }
  .hobby-reverse {
    display: flex;
    flex-direction: row-reverse;
    padding: 1rem 0;

    @media screen and (max-width: 400px) {
      flex-direction: column;
    }
  }
`;
