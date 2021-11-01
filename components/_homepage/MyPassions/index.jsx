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
        <Hobby>
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
            />
          </Picture>
        </Hobby>
        <Hobby>
          <Picture>
            <Image
              src={hobby01}
              objectFit="cover"
              objectPosition="center"
              width={400}
              height={300}
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
        <Hobby>
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
            />
          </Picture>
        </Hobby>
      </HobbiesContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* padding-left: 8rem;
  padding-right: 8rem; */
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Variables.primary};
  h1 {
    font-size: 4rem;
    font-weight: 800;
  }
`;

const HobbiesContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
      font-weight: 600;
      font-size: 2rem;
  }
  p {
    font-weight: normal;
    font-size: 1.4rem;
  }
`;

const Hobby = styled.div`
  display: flex;
  flex-direction: row;
`;


const Picture = styled.div`
  width: 50%;
  padding: 1rem;
`;

const Text = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
