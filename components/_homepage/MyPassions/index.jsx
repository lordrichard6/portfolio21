import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { hobbies } from "../../../assets/data";

export default function MyPassions() {
  return (
    <SectionContainer>
      <h1>My Passions</h1>
      <HobbiesContainer>
        {hobbies.map((item, i) => {
          return (
            <div className={item.className} key={i}>
              <Picture>
                <Image
                  src={item.imgSrc}
                  objectFit="cover"
                  objectPosition="center"
                  alt={item.alt}
                />
              </Picture>
              <Text>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Text>
            </div>
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
  color: ${Colors.primary};

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
  h2 {
    font-weight: 600;
    font-size: 2rem;

    @media screen and (max-width: 400px) {
      margin: 0 1rem;
    }
  }
  p {
    font-weight: normal;
    font-size: 1.4rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }
  }
`;

const Picture = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  padding: 0 1rem;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 50%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
