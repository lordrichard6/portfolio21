import styled from "styled-components";
import Image from "next/image";

import { Variables } from "../../../assets/variables";
import hobby01 from "../../../assets/images/homepage/sky_01.jpg";

export default function MyPassions() {
  return (
    <SectionContainer>
      <h1>My Passions</h1>
      <HobbiesContainer>
        <Hobby>
          <Picture>
            <Image
              src={hobby01}
              objectFit="cover"
              objectPosition="center"
              width={400}
              height={300}
              alt="picture"
            />
          </Picture>
          <Text>
            <h2>Hobby #1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              amet dis lacus, sit pellentesque cras mus faucibus. Morbi tempus
              malesuada quisque pulvinar mattis arcu.{" "}
            </p>
          </Text>
        </Hobby>
        <HobbyReverse>
          <Text>
            <h2>Hobby #2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              amet dis lacus, sit pellentesque cras mus faucibus. Morbi tempus
              malesuada quisque pulvinar mattis arcu.{" "}
            </p>
          </Text>
          <Picture>
            <Image
              src={hobby01}
              objectFit="cover"
              objectPosition="center"
              width={400}
              height={300}
              alt="picture"
            />
          </Picture>
        </HobbyReverse>
        <Hobby>
          <Picture>
            <Image
              src={hobby01}
              objectFit="cover"
              objectPosition="center"
              width={400}
              height={300}
              alt="picture"
            />
          </Picture>
          <Text>
            <h2>Hobby #3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              amet dis lacus, sit pellentesque cras mus faucibus. Morbi tempus
              malesuada quisque pulvinar mattis arcu.{" "}
            </p>
          </Text>
        </Hobby>
        <HobbyReverse>
          <Text>
            <h2>Hobby #4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              amet dis lacus, sit pellentesque cras mus faucibus. Morbi tempus
              malesuada quisque pulvinar mattis arcu.{" "}
            </p>
          </Text>
          <Picture>
            <Image
              src={hobby01}
              objectFit="cover"
              objectPosition="center"
              width={400}
              height={300}
              alt="picture"
            />
          </Picture>
        </HobbyReverse>
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
  color: ${Variables.primary};

  h1 {
    font-size: 4rem;
    font-weight: 800;

    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
  }
`;

const HobbiesContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 80%;
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

const Hobby = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const HobbyReverse = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;

const Picture = styled.div`
  width: 50%;
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
